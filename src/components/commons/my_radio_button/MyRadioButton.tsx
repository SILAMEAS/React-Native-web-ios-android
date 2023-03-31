import {Radio, View} from 'native-base';
import React from 'react';
import {MyRadioButtonProps} from '.';
import {MyText} from '../my_text';

export const MyRadioButton = ({
  radioProps,
  radioGroupProps,
  onChange,
  data,
  defaultValue,
  renderItem,
  radioContainerProps,
}: MyRadioButtonProps) => {
  const selected = data.filter(i => i.isSelected === true)[0];
  const selectedValue = selected ? selected.value : undefined;
  const [value, setValue] = React.useState(
    selectedValue ?? defaultValue ?? data[0]?.value,
  );
  return (
    <Radio.Group
      name="myRadioGroup"
      accessibilityLabel="favorite number"
      value={value}
      {...radioGroupProps}
      onChange={nextValue => {
        setValue(nextValue);
        data.forEach(i => {
          if (i.value === nextValue) {
            i.isSelected = true;
          } else {
            i.isSelected = false;
          }
        });
        onChange && onChange(nextValue, data);
      }}
    >
      <View
        display={'flex'}
        flexDir="row"
        alignItems={'center'}
        {...radioContainerProps}
      >
        {data.length > 0 &&
          data.map((item, index) => (
            <View key={index} px={2}>
              <Radio value={item.value} my="2" {...radioProps}>
                {renderItem ? (
                  renderItem(item)
                ) : (
                  <MyText type="dark">{item.text}</MyText>
                )}
              </Radio>
            </View>
          ))}
      </View>
    </Radio.Group>
  );
};
