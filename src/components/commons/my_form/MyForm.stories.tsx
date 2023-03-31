import {$ok} from '@src/utils/commons';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {Box, View} from 'native-base';
import React from 'react';
import {MyForm} from './';

export default {
  title: 'Commons/Form',
  component: MyForm,
} as ComponentMeta<typeof MyForm>;
// const [data, setData] = useState<any | undefined>();
// const [imageBuffer, setImageBuffer] = useState<ArrayBuffer | undefined>();
// const [selectedValue, setSelectedValue] = useState('');
// const [radioValue, setRadioValue] = useState('');
const Template: ComponentStory<typeof MyForm> = args => (
  <View width={'50%'} height={'500px'}>
    <MyForm {...args} />
    <Box height={10} />
  </View>
);

export const FormDefualt = Template.bind({});

FormDefualt.args = {
  form: {
    width: '100%',
    height: '100%',
    space: 7,
  },
  input: [
    {
      isRequired: true,
      label: 'First Name',
      name: 'firstname',
      color: 'black',
      defaultValue: '',
      placeholder: 'Your first name here...',
      rules: {
        required: 'Field is required',
        validate: (value: string) => {
          return value.length < 3
            ? 'firstname must has more than 3 charactors'
            : undefined;
        },
      },
    },
    {
      isRequired: true,
      label: 'Last Name',
      name: 'lastname',
      color: 'black',
      defaultValue: '',
      placeholder: 'Your last name here...',
      rules: {
        required: 'Field is required',
        validate: (value: string) => {
          return value.length < 5
            ? 'lastname must has more than 5 charactors'
            : undefined;
        },
      },
    },
    {
      isRequired: true,
      label: 'Email',
      name: 'email',
      color: 'black',
      defaultValue: '',
      placeholder: 'Your email here...',
      rules: {
        required: 'Email is required!',
        validate: (val: string) => {
          const pattern =
            /^[xmlAnnotations-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[xmlAnnotations-zA-Z0-9-]+(?:\.[xmlAnnotations-zA-Z0-9-]+)*$/;
          const result = val.match(pattern);
          return $ok(result) ? undefined : 'Email is invalid!';
        },
      },
    },
    {
      label: 'Document',
      name: 'file',
      type: 'file',
      onFileChange: (_, buffer) => {
        console.log(buffer);
      },
    },
    {
      label: 'Phone Number',
      name: 'phonenumber',
      color: 'black',
      defaultValue: '',
      placeholder: 'Your phone number is here...',
    },
    {
      label: 'Select',
      name: 'select',
      color: 'black',
      type: 'select',
      selectData: [
        {id: 2, value: '2', text: 'hello'},
        {id: 3, value: '3', text: 'Hello World'},
        {id: 4, value: '4', text: 'Print Me Out'},
      ],
      onSelectChange: itemValue => {
        // setSelectedValue(itemValue);
        console.log(itemValue);
      },
    },
    {
      label: 'Gender',
      name: 'gender',
      color: 'black',
      type: 'radio',
      radioData: [
        {text: 'Male', value: 'male'},
        {text: 'Female', value: 'female', isSelected: true},
        {text: 'Other', value: 'other'},
      ],
      onRadioChange: (itemValue, data) => {
        // setRadioValue(itemValue);
        console.log(itemValue, data);
      },
    },
  ],
  button: {
    container: {},
    buttons: [
      {
        text: 'Save',
        type: 'submit',
        onPress: dataobj => {
          // setData({...dataobj, file: imageBuffer, selectedValue, radioValue});
          console.log(dataobj);
        },
      },
      {
        text: 'Reset',
        type: 'button',
        colorScheme: 'danger',
        // onPress: dataobj => {
        //   setData({...dataobj, file: imageBuffer, selectedValue, radioValue});
        //   console.log(data);
        // },
      },
    ],
  },
};
