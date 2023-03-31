import {TableTitleProps} from '@components/commons/table/type';
import {StyleSheet, I18nManager, Animated} from 'react-native';
import React from 'react';
import {MyText} from '@components/commons/my_text';
import {ArrowDownIcon, Pressable} from 'native-base';

const TableTitle = ({
  numeric,
  children,
  onPress,
  sortDirection,
  textStyle,
  numberOfLines = 1,
  iconColor,
  ...rest
}: TableTitleProps) => {
  const {current: spinAnim} = React.useRef<Animated.Value>(
    new Animated.Value(sortDirection === 'ascending' ? 0 : 1),
  );

  React.useEffect(() => {
    Animated.timing(spinAnim, {
      toValue: sortDirection === 'ascending' ? 0 : 1,
      duration: 150,
      useNativeDriver: true,
    }).start();
  }, [sortDirection, spinAnim]);

  const spin = spinAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
  });
  const icon = sortDirection ? (
    <Animated.View style={[styles.icon, {transform: [{rotate: spin}]}]}>
      <ArrowDownIcon color={iconColor} />
    </Animated.View>
  ) : null;

  return (
    <Pressable
      disabled={!onPress}
      onPress={onPress}
      style={[styles.container, numeric && styles.right]}
      {...rest}
    >
      {icon}
      <MyText
        style={[
          styles.cell,
          // height must scale with numberOfLines
          {maxHeight: 24 * numberOfLines},
          // if numberOfLines causes wrap, center is lost. Align directly, sensitive to numeric and RTL
          numberOfLines > 1
            ? numeric
              ? I18nManager.getConstants().isRTL
                ? styles.leftText
                : styles.rightText
              : styles.centerText
            : {},
          sortDirection ? styles.sorted : undefined,
        ]}
        numberOfLines={numberOfLines}
        {...textStyle}
      >
        {children}
      </MyText>
    </Pressable>
  );
};

TableTitle.displayName = 'Table.Title';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignContent: 'center',
    paddingVertical: 12,
  },

  rightText: {
    textAlign: 'right',
  },

  leftText: {
    textAlign: 'left',
  },

  centerText: {
    textAlign: 'center',
  },

  right: {
    justifyContent: 'flex-end',
  },

  cell: {
    lineHeight: 24,
    fontSize: 12,
    fontWeight: '500',
    alignItems: 'center',
  },

  sorted: {
    marginLeft: 2,
  },

  icon: {
    height: 24,
    justifyContent: 'center',
  },
});
export default TableTitle;
