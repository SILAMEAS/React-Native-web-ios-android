import {ViewPdf} from '@src/components/templates/pdf';
import {$ok} from '@src/utils/commons';
import {Box, Image, View} from 'native-base';
import React, {useState} from 'react';
import {Platform} from 'react-native';

import {LoadingButton} from '@src/components/commons/loading_btn';
import {useTranslation} from 'react-i18next';
import {Localization} from '@src/i18n/languages';
import {FilePickerMobileProps} from '.';
import {decode} from '@src/utils/base64_arraybuffer';

export const FilePickerMobile = ({
  onFileChange,
  buttonStyle,
  showPreview = true,
}: FilePickerMobileProps) => {
  const {t} = useTranslation();

  const [strBase64, setStrBase64] = useState<string | undefined>();
  const [typeFile, setTypeFile] = useState('');
  if (Platform.OS === 'web') {
    return <></>;
  }
  const RNFetchBlob = require('react-native-blob-util').default;
  const DocumentPicker = require('react-native-document-picker');

  const chooseFile = async () => {
    try {
      const pickerResult = await DocumentPicker.pickSingle({
        presentationStyle: 'fullScreen',
        copyTo: 'cachesDirectory',
        type: [DocumentPicker.types.allFiles],
      });
      const path = await normalizePath(pickerResult.fileCopyUri ?? '');
      const result = await RNFetchBlob.fs.readFile(path, 'base64');
      const arrayBuffer = decode(result);
      setStrBase64(result);
      setTypeFile(pickerResult.type ?? '');
      $ok(onFileChange) && onFileChange!(pickerResult, arrayBuffer, result);
    } catch (e) {
      handleError(e);
    }
  };

  const normalizePath = async (path: string) => {
    if (Platform.OS === 'android' || Platform.OS === 'ios') {
      const filePrefix = 'file://';
      if (path.startsWith(filePrefix)) {
        path = path.substring(filePrefix.length);
        try {
          path = decodeURI(path);
        } catch (error) {}
      }
    }
    return path;
  };

  const handleError = (err: unknown) => {
    if (DocumentPicker.isCancel(err)) {
      console.warn('cancelled');
      // User cancelled the picker, exit any dialogs or menus and move on
    } else if (DocumentPicker.isInProgress(err)) {
      console.warn(
        'multiple pickers were opened, only the last will be considered',
      );
    } else {
      throw err;
    }
  };

  if (!showPreview) {
    return (
      <LoadingButton
        lineHeight={8}
        fontSize={'sm'}
        p={2}
        height={9}
        text={t(Localization('browseFile')) ?? ''}
        isLoading={false}
        {...buttonStyle}
        onPress={chooseFile}
      />
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
          <View width={'90%'} height={'95%'}>
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
      <LoadingButton
        lineHeight={8}
        fontSize={'sm'}
        p={2}
        height={9}
        onPress={chooseFile}
        text={t(Localization('browseFile')) ?? ''}
        isLoading={false}
      />
      <Box height={4} />
    </View>
  );
};
