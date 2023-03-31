import {ViewPdf} from '@src/components/templates/pdf';
import {Localization} from '@src/i18n/languages';
import {encode} from '@src/utils/base64_arraybuffer';
import {$ok} from '@src/utils/commons';
import {Box, Image, View} from 'native-base';
import React, {ChangeEvent, useRef, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {FilePickerWebProps} from '.';
import {LoadingButton} from '../loading_btn';

export const FilePickerWeb = ({
  onFileChange,
  buttonStyle,
  showPreview = true,
}: FilePickerWebProps) => {
  const {t} = useTranslation();
  const fileRef = useRef<HTMLInputElement>(null);
  const [strBase64, setStrBase64] = useState<string | undefined>();
  const [typeFile, setTypeFile] = useState('');
  const chooseFile = async (e: ChangeEvent<HTMLInputElement>) => {
    try {
      const file =
        $ok(e.target.files) && (e.target.files?.length ?? 0) > 0
          ? e.target.files![0]
          : null;
      let buffer = await file?.arrayBuffer();
      buffer = $ok(buffer) ? new Uint8Array(buffer!) : undefined;

      const strBase64 = $ok(buffer) ? encode(buffer!) : undefined;
      setStrBase64(strBase64);

      setTypeFile(file?.type ?? '');
      onFileChange!(file, buffer, strBase64);
    } catch (err) {
      console.log(err);
    }
  };

  if (!showPreview) {
    return (
      <>
        <input
          ref={fileRef}
          type="file"
          hidden
          accept="*"
          onChange={e => {
            const length = e.target.files?.length ?? 0;
            if (length <= 0) {
              return;
            }
            chooseFile(e);
          }}
        />
        <LoadingButton
          text={t(Localization('browseFile')) ?? ''}
          isLoading={false}
          {...buttonStyle}
          onPress={() => fileRef.current?.click()}
        />
      </>
    );
  }

  return (
    <View
      display={'flex'}
      flexDir={'column'}
      justifyContent={'space-between'}
      alignItems={'center'}
      width={'100%'}
      height={'100%'}
    >
      {$ok(strBase64) ? (
        typeFile.startsWith('image') ? (
          <Image
            width={'90%'}
            height={'95%'}
            borderRadius={10}
            source={{
              uri: `data:${typeFile};base64,${strBase64}`,
            }}
            alt="Hello"
          />
        ) : (
          <View width={'90%'} height={'95%'} overflowY={'scroll'}>
            <ViewPdf uri={`data:${typeFile};base64,${strBase64}`} />
          </View>
        )
      ) : (
        <Image
          borderRadius={10}
          bgColor={'white'}
          width={'90%'}
          height={'95%'}
          source={require('@src/assets/images/empty_doc.jpg')}
          alt="Hello"
        />
      )}
      <Box height={4} />
      <input
        ref={fileRef}
        type="file"
        hidden
        accept="*"
        onChange={e => {
          const length = e.target.files?.length ?? 0;
          if (length <= 0) {
            return;
          }
          chooseFile(e);
        }}
      />
      <LoadingButton
        onPress={() => fileRef.current?.click()}
        text={t(Localization('browseFile')) ?? ''}
        isLoading={false}
      />
      <Box height={2} />
      {/* <MyText>{JSON.stringify(buffer, undefined, 2)}</MyText> */}
    </View>
  );
};
