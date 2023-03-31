import {HStack, Text} from 'native-base';
import React from 'react';
import {IHStackProps} from 'native-base/lib/typescript/components/primitives/Stack/HStack';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faSignal, faWifi} from '@fortawesome/free-solid-svg-icons';
interface type {
  colorT?: string;
  fw?: string;
  fs?: string;

  time?: string;
  battery?: string;
  prop?: IHStackProps;
  colorIcon?: string;
}
const Statusbar = ({
  colorT,
  fw,
  fs,
  time = '10:58 AM',
  battery = '100%',
  prop,
  colorIcon = '#323334',
}: type) => {
  return (
    <HStack justifyContent={'space-between'} {...prop}>
      <Text color={colorT} fontWeight={fw} fontSize={fs}>
        {time}
      </Text>
      <HStack space={2}>
        <FontAwesomeIcon icon={faSignal} size={20} color={colorIcon} />
        <FontAwesomeIcon icon={faWifi} size={20} color={colorIcon} />
        <Text color={colorT} fontWeight={fw} fontSize={fs}>
          {battery}
        </Text>
      </HStack>
    </HStack>
  );
};

export default Statusbar;
