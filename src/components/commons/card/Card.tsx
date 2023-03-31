import {ViewPdf} from '@src/components/templates/pdf';
import {$ok} from '@src/utils/commons';
import {Box, Image, View} from 'native-base';
import React from 'react';
import {CardProps} from '.';
import {LoadingButton} from '../loading_btn';
import {MyText} from '../my_text';

export const Card = ({
  header,
  headerText,
  headerStyle,
  uri,
  content,
  contentStyle,
  contentText,
  button,
  leftButtonStyle,
  leftButtonText,
  rightButtonStyle,
  rightButtonText,
  space = 3,
  ...props
}: CardProps) => {
  return (
    <View
      width={'100%'}
      height={'100%'}
      {...props}
      display="flex"
      flexDir={'column'}
      alignItems="center"
      backgroundColor={'white'}
      borderRadius={'sm'}
    >
      <View>
        {header ? header : <MyText {...headerStyle}>{headerText}</MyText>}
      </View>
      <View width={'90%'} height={'50%'} borderRadius={'10'}>
        {$ok(uri) && uri?.startsWith('image') ? (
          <Image
            width={'100%'}
            height="100%"
            // borderRadius={10}
            source={
              !$ok(uri)
                ? require('@src/assets/images/empty_doc.jpg')
                : {
                    uri,
                  }
            }
            alt="Hello"
          />
        ) : (
          <View width={'100%'} height="100%" overflowY={'scroll'}>
            <ViewPdf uri={uri} width={'100%'} height="100%" />
          </View>
        )}
      </View>
      <Box height={space} />
      {content ? (
        content
      ) : (
        <View height={'30%'} width={'90%'}>
          <MyText {...contentStyle}>{contentText}</MyText>
        </View>
      )}
      <Box height={space} />
      {button ? (
        button
      ) : (
        <View
          display={'flex'}
          flexDir={'row'}
          justifyContent="space-between"
          alignItems={'center'}
          width={'90%'}
        >
          <LoadingButton
            text={leftButtonText ?? 'Close'}
            {...leftButtonStyle}
          />
          <LoadingButton
            text={rightButtonText ?? 'Preview'}
            {...rightButtonStyle}
          />
        </View>
      )}
    </View>
  );
};
