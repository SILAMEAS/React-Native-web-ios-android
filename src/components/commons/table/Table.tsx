import React from 'react';
import {StyleSheet} from 'react-native';
import {TableProps} from './';
import {View} from 'native-base';

const Table = ({children, style, ...rest}: TableProps) => {
  return (
    <View {...rest} style={[styles.container, style]}>
      {children}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
});

export default Table;
