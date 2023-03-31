import {Localization} from '@src/i18n/languages';
import {Box, ChevronDownIcon, Input, SearchIcon, View} from 'native-base';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {SearchProps} from './';

export const Search = ({
  placeHolder,
  backgroundColor,
  textColor,
  iconLeftColor,
  iconRightColor,
  placeHolderTextColor = 'muted.400',
}: SearchProps) => {
  const {t} = useTranslation();
  return (
    <View
      display={'flex'}
      flexDir={'row'}
      alignItems={'center'}
      justifyContent={'center'}
    >
      <View
        height={'10'}
        display={'flex'}
        flexDir={'row'}
        bg={backgroundColor ?? 'muted.200'}
        width={'100%'}
        alignItems={'center'}
        justifyContent={'space-between'}
        borderRadius={10}
        px={5}
      >
        <View
          display={'flex'}
          flexDir={'row'}
          alignItems={'center'}
          _web={{
            width: '95%',
          }}
        >
          <SearchIcon color={iconRightColor ?? 'warning.500'} />
          <Box width={2} />
          <Input
            // outlineStyle="none"
            focusOutlineColor={backgroundColor ?? 'muted.200'}
            width={'80%'}
            backgroundColor={backgroundColor ?? 'muted.200'}
            borderWidth={'0'}
            placeholder={placeHolder ?? t(Localization('search'))!}
            placeholderTextColor={placeHolderTextColor}
            color={textColor ?? 'muted.800'}
            _web={{
              width: '90%',
              height: '98%',
            }}
          />
        </View>
        <Box
          height={'80%'}
          width={'0.1'}
          backgroundColor={iconLeftColor ?? 'muted.400'}
        />
        <View
          display={'flex'}
          flexDir={'row'}
          alignItems={'center'}
          justifyContent={'center'}
          pl={2}
        >
          <ChevronDownIcon color={iconLeftColor ?? 'muted.400'} />
        </View>
      </View>
    </View>
  );
};
