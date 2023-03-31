import React from 'react';
import {TableRowProps} from '.';
import {StyleSheet} from 'react-native';
import {Pressable} from 'native-base';

const TableRow = ({
  onPress,
  children,
  pointerEvents,
  ...rest
}: TableRowProps) => {
  return (
    <Pressable
      pointerEvents={pointerEvents}
      {...rest}
      onPress={onPress}
      style={[styles.container]}
    >
      {children}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    borderStyle: 'solid',
    borderBottomWidth: StyleSheet.hairlineWidth,
    minHeight: 48,
    paddingHorizontal: 16,
    flex: 1,
    flexDirection: 'row',
  },
});
export default TableRow;
