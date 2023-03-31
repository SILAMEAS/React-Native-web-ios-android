import {$isObject} from '@src/utils/commons';
import {CheckIcon, Select, View} from 'native-base';
import React, {useState} from 'react';
import {MySelectProps} from '.';

export const MySelect = ({
  data,
  valueProp,
  labelProp,
  select,
  selectItem,
  defaultSelect,
  onValueChange,
  _webContainer,
}: MySelectProps) => {
  const [selectedValue, setSelectedValue] = useState(defaultSelect ?? '');
  return (
    <View
      _web={{
        width: '100%',
        ..._webContainer,
      }}
    >
      <Select
        selectedValue={selectedValue}
        color="black"
        minWidth="100%"
        accessibilityLabel="Choose Service"
        placeholder="Choose Service"
        _selectedItem={{
          bgColor: 'muted.200',
          endIcon: <CheckIcon size="1" />,
          borderRadius: 'md',
        }}
        mt={1}
        {...select}
        onValueChange={itemValue => {
          setSelectedValue(itemValue);
          onValueChange && onValueChange(itemValue);
        }}
      >
        {data.length > 0 &&
          data.map(i => {
            return $isObject(i) ? (
              <Select.Item
                label={i[labelProp ?? 'label']}
                value={i[valueProp ?? 'value']}
                key={i[valueProp ?? 'value']}
                {...selectItem}
                bg={'black'}
              />
            ) : (
              <Select.Item label={i} value={i} key={i} {...selectItem} />
            );
          })}
      </Select>
    </View>
  );
};
