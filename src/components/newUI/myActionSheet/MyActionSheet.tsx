import React, {ReactNode} from 'react';
import {
  Actionsheet,
  AddIcon,
  Box,
  Center,
  HStack,
  IBoxProps,
  Pressable,
  Text,
  VStack,
  WarningIcon,
} from 'native-base';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faImage} from '@fortawesome/free-solid-svg-icons';
import {IVStackProps} from 'native-base/lib/typescript/components/primitives/Stack/VStack';
interface Type {
  isOpen: boolean;
  onClose: () => void;
  TitleAndIcon?: ReactNode;
  IconList?: ReactNode;

  PressActionIcon?: ReactNode;
  FilePickerT?: ReactNode;
  hActionSheet?: number | string;
  mtActionSheetContain?: number;
  prop?: IBoxProps;
  propV?: IVStackProps;
}
function MyActionSheet({
  isOpen,
  onClose,
  hActionSheet = 300,
  mtActionSheetContain = 0,
  propV = {justifyContent: 'space-around'},
  TitleAndIcon = (
    <HStack justifyContent={'center'} space={2} alignItems={'center'}>
      <Text fontSize="xl" color="white" fontWeight={'bold'} letterSpacing={1}>
        Add Documents
      </Text>
      <WarningIcon size={'lg'} color={'white'} />
    </HStack>
  ),
  FilePickerT = <></>,
  IconList = (
    <>
      <VStack space={5} alignItems={'center'}>
        <FontAwesomeIcon icon={faImage} size={46} color={'white'} />
        <Text>Photos</Text>
      </VStack>
      {FilePickerT}

      <VStack space={5} alignItems={'center'}>
        <AddIcon size={'5xl'} color={'white'} />
        <Text>More</Text>
      </VStack>
    </>
  ),
  PressActionIcon = (
    <Pressable
      onPress={() => {
        onClose();
      }}
    />
  ),
  prop,
}: Type) {
  return (
    <Actionsheet isOpen={isOpen} onClose={onClose}>
      <Actionsheet.Content bg={'blue.900'} {...prop}>
        <Box w="100%" h={hActionSheet} px={4} justifyContent="center">
          <VStack h={'100%'} {...propV}>
            <VStack
              space={10}
              justifyContent={'center'}
              mt={mtActionSheetContain}
            >
              {TitleAndIcon}
              <HStack justifyContent={'space-evenly'} alignItems={'center'}>
                {IconList}
              </HStack>
            </VStack>
            <Center>{PressActionIcon}</Center>
          </VStack>
        </Box>
      </Actionsheet.Content>
    </Actionsheet>
  );
}

export default MyActionSheet;
