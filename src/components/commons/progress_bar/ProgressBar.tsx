import {View} from 'native-base';
import React, {useEffect, useRef, useState} from 'react';
import {Animated, LayoutChangeEvent} from 'react-native';
import {ProgressBarProps} from '.';
import {MyText} from '../my_text';

export const ProgressBar = ({
  step,
  steps,
  duration,
  height = 5,
  color,
  backgroundColor,
  textStyle,
  width = '100%',
}: ProgressBarProps) => {
  const [widthBar, setWidthBar] = useState<number>(0);
  const animatedValue = useRef(new Animated.Value(-1000)).current;
  const reactive = useRef(new Animated.Value(-1000)).current;
  console.log(step, steps);
  const onLayout = (e: LayoutChangeEvent) => {
    const newWidth = e.nativeEvent.layout.width;
    setWidthBar(newWidth);
  };
  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: reactive,
      duration: duration || 300,
      useNativeDriver: true,
    }).start();
  }, []);

  useEffect(() => {
    reactive.setValue(-widthBar + (widthBar * step) / steps);
  }, [step, widthBar]);
  return (
    <>
      <MyText
        fontFamily={'Menlo'}
        fontSize={'sm'}
        fontWeight="semibold"
        // mb={1}
        type={'info'}
        {...textStyle}
      >{`${step}/${steps}`}</MyText>
      <View
        style={{
          height,
        }}
        onLayout={onLayout}
        width={width}
        backgroundColor={backgroundColor ?? 'gray.300'}
        borderRadius={height}
        overflow={'hidden'}
      >
        <Animated.View
          // height={height}
          // width={'100%'}
          // borderRadius={height}
          // backgroundColor={'gray.200'}
          // position={'absolute'}
          // left={0}
          // top={0}
          style={{
            height,
            width: '100%',
            borderRadius: height,
            backgroundColor: color ?? 'rgba(0,0,0,0.5)',
            position: 'absolute',
            left: 0,
            top: 0,
            transform: [
              {
                translateX: animatedValue,
              },
            ],
          }}
        />
      </View>
    </>
  );
};
