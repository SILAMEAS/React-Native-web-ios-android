import React from 'react';
import {Dimensions} from 'react-native';
function WindowResize({windowDimensions, screenDimensions}: any) {
  const [dimensions, setDimensions] = React.useState({
    window: windowDimensions,
    screen: screenDimensions,
  });
  React.useEffect(() => {
    const subscription = Dimensions.addEventListener(
      'change',
      ({window, screen}) => {
        setDimensions({window, screen});
      },
    );
    return () => subscription?.remove();
  });
  return dimensions;
}
export default WindowResize;
