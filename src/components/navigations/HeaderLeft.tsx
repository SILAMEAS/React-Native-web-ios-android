import {Box, Pressable} from 'native-base';
import ChevronLeft from '@src/assets/logo/chevronLeft.png';
import React from 'react';
import {Image} from 'react-native';
import {useNavigation} from '@src/navigation';

const HeaderLeft = () => {
  const navigation = useNavigation();
  return (
    <Box
      _text={{
        color: 'amber.50',
      }}
      pl={1}
    >
      <Pressable
        onPress={() => {
          if (navigation.canGoBack()) {
            navigation.goBack();
          }
        }}
      >
        <Image
          source={ChevronLeft}
          style={{width: 35, height: 35, tintColor: 'white'}}
        />
      </Pressable>
    </Box>
  );
};

export default HeaderLeft;
