import React from 'react';
import {Platform} from 'react-native';
import {Constant_Navigator} from '@src/navigation/Constant_Navigator';
import Statusbar from '@components/compoents(ms)/statusbar/Statusbar';
import {useAppSelector} from '@src/redux/config/hooks';

function CheckPlatform() {
  const {BlurScreen} = useAppSelector(state => state.counter);
  return (
    <>
      {Platform.OS !== 'web' &&
        (Constant_Navigator.IsDRAWER ? (
          <Statusbar
            prop={{
              p: 4,
              bg: BlurScreen ? 'black' : 'white',
              opacity: BlurScreen ? 0.8 : 1,
            }}
            colorT={'black'}
            battery={'50%'}
          />
        ) : (
          <Statusbar
            prop={{p: 4, bg: 'black'}}
            battery={'50%'}
            colorIcon={'orange'}
            colorT={'yellow.600'}
          />
        ))}
    </>
  );
}

export default CheckPlatform;
