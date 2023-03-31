import React, {ReactNode} from 'react';
import {Box, HStack, IBoxProps, Text} from 'native-base';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faBars, faSearch} from '@fortawesome/free-solid-svg-icons';
import {COLOR} from '@src/constant/color/Color';

interface type {
  iconLeft?: ReactNode;
  title?: ReactNode;
  iconRight?: ReactNode;
  prop?: IBoxProps;
}

function HeaderCustom({
  iconLeft = (
    <FontAwesomeIcon
      icon={faSearch}
      size={20}
      color={COLOR.ButtonColor.searchButton}
    />
  ),
  title = (
    <Text color={'black'} fontWeight={'bold'} fontSize={'md'}>
      All Documents
    </Text>
  ),
  iconRight = (
    <FontAwesomeIcon
      icon={faBars}
      size={20}
      color={COLOR.ButtonColor.searchButton}
    />
  ),
  prop,
}: type) {
  return (
    <Box h={'5%'} {...prop}>
      <HStack
        h={'full'}
        justifyContent={'space-between'}
        px={4}
        pb={2}
        alignItems={'center'}
        borderBottomColor={'gray.200'}
        borderBottomWidth={1}
      >
        {iconLeft}
        {title}
        {iconRight}
      </HStack>
    </Box>
  );
}

export default HeaderCustom;
