import {Card} from '@src/components/commons/card';
import {MyForm, MyFormProps} from '@src/components/commons/my_form';
import {Layout} from '@src/components/layout';
import {$ok} from '@src/utils/commons';
import {
  Divider,
  ScrollView,
  View,
  HamburgerIcon,
  Button,
  Center,
  HStack,
  useToast,
} from 'native-base';
import React, {useState} from 'react';
import {ViewButton} from './ViewButton';
import {ViewSearch} from './ViewSearch';
import {ViewText} from './ViewText';
import {Size, MyIconButton} from '@src/components/commons/my_icon_button';
import {IToastData, MyToast} from '@src/components/commons/my_toast';
import {useNavigation} from '@src/navigation';

const TestComponent = () => {
  const navigation = useNavigation();

  const [data, setData] = useState<any | undefined>();
  const [imageBuffer, setImageBuffer] = useState<ArrayBuffer | undefined>();
  const [selectedValue, setSelectedValue] = useState('');
  const [radioValue, setRadioValue] = useState('');
  const obj: MyFormProps = {
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
          setImageBuffer(buffer);
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
          // {id: 2, value: '2', text: 'hello'},
          // {id: 3, value: '3', text: 'Hello World'},
          // {id: 4, value: '4', text: 'Print Me Out'},
          'hello',
          'Hello World',
          'Print Me Out',
        ],
        defaultValue: 'hello',
        onSelectChange: itemValue => {
          setSelectedValue(itemValue);
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
          setRadioValue(itemValue);
          console.log(data);
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
            setData({...dataobj, file: imageBuffer, selectedValue, radioValue});
            console.log(data);
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
  const ToastDetails: IToastData[] = [
    {
      title: 'Account verified',
      variant: 'solid',
      description: 'Thanks for signing up with us.',
      isClosable: true,
    },
    {
      title: 'Something went wrong',
      variant: 'subtle',
      description:
        'Please create xmlAnnotations support ticket from the support page',
    },
    {
      title: 'Network connection restored',
      variant: 'left-accent',
      description:
        'This is to inform you that your network connectivity is restored',
      isClosable: true,
    },
    {
      title: 'Invalid email address',
      variant: 'top-accent',
      description: 'Please enter xmlAnnotations valid email address',
    },
    {
      title: 'Invalid email address',
      variant: 'outline',
      description: 'Please enter xmlAnnotations valid email address',
    },
  ];
  const toast = useToast();

  return (
    <Layout navigation={navigation}>
      <ScrollView height="100%" _web={{height: '120vh'}}>
        <View
          width="95%"
          height="100%"
          pl="4"
          _web={{height: '100vh', marginBottom: '20px'}}
        >
          <View height={'35%'} _web={{height: 'auto'}}>
            <ViewText />
            <Divider
              width={'100%'}
              height="px"
              backgroundColor={'amber.600'}
              mb="3"
            />
            <ViewSearch />
            <Divider
              width={'100%'}
              height="px"
              backgroundColor={'amber.600'}
              my="3"
            />
            <ViewButton />
            <Divider
              width={'100%'}
              height="px"
              backgroundColor={'amber.600'}
              my="3"
            />
          </View>
          <View height={'40%'} _web={{height: 'auto'}}>
            <MyForm button={obj.button} form={obj.form} input={obj.input} />
          </View>
          <Divider
            width={'100%'}
            height="px"
            backgroundColor={'amber.600'}
            my="3"
          />
          <View height={'30%'}>
            <Card contentText="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam unde nostrum molestiae fuga porro laborum veniam repudiandae totam reprehenderit dolor adipisci necessitatibus, eveniet alias consequuntur consequatur praesentium dolorem id quos." />
          </View>
          <Divider
            width={'100%'}
            height="px"
            backgroundColor={'amber.600'}
            my="3"
          />
          <View
            display={'flex'}
            flexDir={'row'}
            justifyContent={'space-between'}
            alignItems={'center'}
          >
            {['xs', 'sm', 'md', 'lg'].map((val, index) => (
              <MyIconButton
                size={val as Size}
                key={index}
                icon={<HamburgerIcon color={'white'} />}
              />
            ))}
          </View>

          <Divider
            width={'100%'}
            height="px"
            backgroundColor={'amber.600'}
            my="3"
          />
          <View>
            <Center>
              <HStack space={2}>
                {ToastDetails.map((item, index) => (
                  <Button
                    key={index}
                    onPress={() =>
                      toast.show({
                        render: ({id}: {id: number}) => {
                          return <MyToast id={id} {...item} />;
                        },
                      })
                    }
                  >
                    {item.variant}
                  </Button>
                ))}
              </HStack>
            </Center>
          </View>
          <View height={'10%'} />
        </View>
      </ScrollView>
    </Layout>
  );
};

export default TestComponent;
