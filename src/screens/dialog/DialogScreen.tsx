import {Dialog, SizeDialog, useDialog} from '@src/components/commons/dailog';
import {LoadingButton} from '@src/components/commons/loading_btn';
import {Layout} from '@src/components/layout';
import {useNavigation} from '@src/navigation';
import {Center, VStack} from 'native-base';
import React, {useState} from 'react';
import {ViewButton} from '../test_commponents/ViewButton';

export const DialogScreen = () => {
  const navigation = useNavigation();
  const dialog = useDialog();
  const [size, setSize] = useState('');
  return (
    <Layout navigation={navigation}>
      <Center height={'100%'} bgColor={'black'}>
        <Dialog
          size={size as SizeDialog}
          isOpen={dialog.isOpen}
          onClose={dialog.onClose}
          header={
            "This is not just a string or number or ReactNode or ReactNode[] but it's all."
          }
          buttons={
            <>
              <LoadingButton
                variant="ghost"
                colorScheme="blueGray"
                onPress={() => {
                  dialog.onClose();
                }}
                text={'Cancel'}
              />
              <LoadingButton
                onPress={() => {
                  dialog.onClose();
                }}
                text={'Save'}
              />
            </>
          }
          body={<ViewButton />}
        />
        {/* <Dialog
          size={size2 as SizeDialog}
          isOpen={dialog2.isOpen}
          onClose={dialog2.onClose}
        /> */}

        <VStack space={4}>
          {['xs', 'sm', 'md'].map(size => (
            <LoadingButton
              text={`Dailog ${size} Size`}
              key={size}
              type={'success'}
              onPress={() => {
                setSize(size);
                dialog.onOpen();
              }}
            />
          ))}
        </VStack>
        <VStack space={4} mt={2}>
          {['lg', 'xl', 'full'].map(size => (
            <LoadingButton
              text={`Dailog ${size} Size`}
              type={'info'}
              key={size}
              onPress={() => {
                setSize(size);
                dialog.onOpen();
              }}
            />
          ))}
        </VStack>
      </Center>
    </Layout>
  );
};
