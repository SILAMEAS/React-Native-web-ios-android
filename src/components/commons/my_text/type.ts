import {ITextProps} from 'native-base';
import {ColorType} from 'native-base/lib/typescript/components/types';
import React from "react";

export declare type Type =
  | 'primary'
  | 'secondary'
  | 'danger'
  | 'success'
  | 'warning'
  | 'info'
  | 'dark'
  | 'white';

// export declare type TextAlign =
//   | 'primary'
//   | 'secondary'
//   | 'danger'
//   | 'success'
//   | 'warning'
//   | 'info'
//   | 'dark'
//   | 'white';
export declare type FontWeight =
  | 'black'
  | 'light'
  | 'bold'
  | 'hairline'
  | 'thin'
  | 'normal'
  | 'medium'
  | 'semibold'
  | 'extrabold'
  | 'extraBlack';

export declare type FontSize =
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | '2xl'
  | '2xs'
  | 'xs'
  | '3xl'
  | '4xl'
  | '5xl'
  | '6xl'
  | '7xl'
  | '8xl'
  | '9xl';

export declare type PaddingMargin =
  | '0'
  | '0.5'
  | '1'
  | '1.5'
  | '1/2'
  | '1/3'
  | '1/4'
  | '1/5'
  | '1/6'
  | '10'
  | '12'
  | '16'
  | '2'
  | '2.5'
  | '2/3'
  | '2/4'
  | '2/5'
  | '2/6'
  | '20'
  | '24'
  | '3'
  | '3/4'
  | '3/5'
  | '3/6'
  | '32'
  | '4'
  | '4/5'
  | '4/6'
  | '40'
  | '48'
  | '5'
  | '5/6'
  | '56'
  | '6'
  | '64'
  | '7'
  | '72'
  | '8'
  | '80'
  | '9'
  | '96'
  | 'full'
  | 'px';

export interface TypeMap {
  primary: ColorType;
  secondary: ColorType;
  danger: ColorType;
  success: ColorType;
  warning: ColorType;
  info: ColorType;
  dark: ColorType;
  white: ColorType;
}

export interface MyTextProps extends ITextProps {
  type?: Type;
  fontWeight?: FontWeight;
  children?: string[] | string | number[] | number | null | React.ReactNode;
  fontSize?: FontSize;
  backgroundColor?: ColorType;

  padding?: PaddingMargin;
  paddingBottom?: PaddingMargin;
  paddingRight?: PaddingMargin;
  paddingTop?: PaddingMargin;
  paddingLeft?: PaddingMargin;
  paddingX?: PaddingMargin;
  paddingY?: PaddingMargin;

  margin?: PaddingMargin;
  marginBottom?: PaddingMargin;
  marginRight?: PaddingMargin;
  marginTop?: PaddingMargin;
  marginLeft?: PaddingMargin;
  marginX?: PaddingMargin;
  marginY?: PaddingMargin;
}

export const typeMap: TypeMap = {
  primary: 'primary.500',
  secondary: 'secondary.500',
  danger: 'danger.700',
  success: 'success.500',
  warning: 'warning.500',
  info: 'info.500',
  dark: 'black',
  white: 'white',
};
