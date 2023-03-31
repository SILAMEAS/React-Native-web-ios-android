import {View} from 'native-base';
import {StyleSheet} from 'react-native';
import React from 'react';
import {TableHeaderProps} from '.';

const TableHeader = ({children, style, ...rest}: TableHeaderProps) => {
  return (
    <View
      borderBottomWidth={StyleSheet.hairlineWidth * 2}
      style={[styles.header, style]}
      {...rest}
    >
      {children}
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    height: 48,
    paddingHorizontal: 16,
    borderBottomWidth: StyleSheet.hairlineWidth * 2,
  },
});

export default TableHeader;
