import React from 'react';
import {StyleSheet} from 'react-native';
import {TableCellProps} from '.';
import {MyText} from '../my_text';
import {Pressable} from 'native-base';

const TableCell = ({children, textStyle, numeric, ...rest}: TableCellProps) => {
  const isReactNode = typeof children === 'object';
  return (
    <Pressable {...rest} style={[styles.container, numeric && styles.right]}>
      {isReactNode ? (
        <>{children}</>
      ) : (
        <MyText numberOfLines={1} {...textStyle}>
          {children}
        </MyText>
      )}
    </Pressable>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },

  right: {
    justifyContent: 'flex-end',
  },
});
export default TableCell;
