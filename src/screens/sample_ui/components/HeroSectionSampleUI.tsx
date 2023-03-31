import {
  View,
  Button,
  ITextProps,
  IButtonProps,
  useBreakpointValue,
} from 'native-base';
import React, {PropsWithChildren} from 'react';

import {
  ColorSchemeType,
  ColorType,
  ResponsiveValue,
} from 'native-base/lib/typescript/components/types';
import {
  InterfaceViewProps,
  IViewProps,
} from 'native-base/lib/typescript/components/basic/View/types';
import {useTranslation} from 'react-i18next';
import {Localization} from '@src/i18n/languages';
import {MyText} from '@src/components/commons/my_text';

interface Props extends PropsWithChildren {
  width?: string | number;
  height?: string | number;
  backgroundColor?: ColorType;
  containerBorderRadius?: ResponsiveValue<
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | '2xl'
    | string
    | number
    | 'xs'
    | 'full'
    | 'none'
    | '3xl'
  >;
  _web?: Partial<IViewProps>;
  button?: {
    top?: string | number;
    left?: string | number;
    bottom?: string | number;
    right?: string | number;
    width?: string | number;
    height?: string | number;
    backgroundColor?: ColorType;
    onPress?: void;
    _web?: Partial<IButtonProps>;
  };
  text?: {
    _web?: Partial<ITextProps>;
  };
  imageContainer?: InterfaceViewProps & {
    variant?: unknown;
    size?: unknown;
    colorScheme?: ColorSchemeType;
  } & React.RefAttributes<unknown>;
  innerContainer?: InterfaceViewProps & {
    variant?: unknown;
    size?: unknown;
    colorScheme?: ColorSchemeType;
  } & React.RefAttributes<unknown>;
}

const HeroSectionSampleUI = (props: Props) => {
  const {t} = useTranslation();
  const containerBreakPoint = useBreakpointValue({
    base: {width: '100%', px: '20', height: '100%'},
    sm: {width: '100%', px: '20', height: '100%'},
    md: {width: '70%', px: '20', height: '100%'},
    lg: {width: '50%', px: '20', height: '100%'},
    xl: {width: '40%', px: '20', height: '100%'},
    ...props.innerContainer?._web,
  });
  const buttonBreakPoint = useBreakpointValue({
    base: {px: '10', left: 2},
    sm: {px: '10', left: 20},
    md: {px: '10', left: 20},
    ...props.button?._web,
  });
  const textBreakPoint = useBreakpointValue({
    base: {top: 10, left: '10%'},
    sm: {top: 10, left: '10%'},
    md: {top: 10, left: '25%'},
    ...props.text?._web,
  });
  return (
    <View
      borderRadius={props.containerBorderRadius ?? 15}
      height={props.height ?? '250'}
      width={props.width ?? '100%'}
      backgroundColor={props.backgroundColor ?? 'blue.200'}
      position={'relative'}
      _web={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        ...props._web,
      }}
    >
      <View {...props.innerContainer} _web={containerBreakPoint}>
        <Button
          position={'absolute'}
          zIndex={2}
          top={props.button?.top ?? 150}
          bottom={props.button?.bottom ?? 0}
          left={props.button?.left ?? 5}
          right={props.button?.right ?? 0}
          width={100}
          height="10"
          backgroundColor={'warning.500'}
          onPress={() => {}}
          _web={buttonBreakPoint}
        >
          {t(Localization('getStarted'))}
        </Button>
        <MyText
          position={'absolute'}
          top={1}
          left={5}
          width={200}
          color={'muted.900'}
          fontSize={'xl'}
          fontWeight={'semibold'}
          _web={textBreakPoint}
        >
          {t(Localization('whatDoYouWantToLearnToday'))}
        </MyText>
        <View
          {...props.imageContainer}
          ml={'20'}
          _web={{
            position: 'absolute',
            right: '0%',
          }}
        >
          <>{props.children}</>
        </View>
      </View>
    </View>
  );
};

export default HeroSectionSampleUI;
