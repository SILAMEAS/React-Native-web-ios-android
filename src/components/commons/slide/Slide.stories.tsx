import {ComponentMeta, ComponentStory} from '@storybook/react';
import {View} from 'native-base';
import React from 'react';
import {MyForm} from '../my_form';
import {MyRadioButton} from '../my_radio_button';
import {MyText} from '../my_text';
import {Slide, SlideProvider} from './';

export default {
  title: 'Commons/Slide',
  component: Slide,
} as ComponentMeta<typeof Slide>;
// const [data, setData] = useState<any | undefined>();
// const [imageBuffer, setImageBuffer] = useState<ArrayBuffer | undefined>();
// const [selectedValue, setSelectedValue] = useState('');
// const [radioValue, setRadioValue] = useState('');
const Template: ComponentStory<typeof Slide> = args => (
  <View width={'100%'} height={'100vh'}>
    <SlideProvider
      initialSlide={{index: 0, isFirst: false, isLast: false, totalSteps: 5}}
    >
      <Slide {...args} />
    </SlideProvider>
  </View>
);
const Child = ({text}: {text: string}) => (
  <View
    width={'100%'}
    height={'100%'}
    display={'flex'}
    justifyContent="center"
    alignItems="center"
  >
    <MyText fontSize="3xl" type="primary">
      Hello From {text}
    </MyText>
  </View>
);

export const SlideDefault = Template.bind({});
SlideDefault.args = {
  width: '100%',
  height: '100%',
  slideContent: [
    {
      stepName: 'My Radio Test',
      child: (
        <MyRadioButton
          data={[
            {text: 'Hello', value: '1', isSelected: true},
            {text: 'Hi', value: '2'},
            {text: 'How Are You?', value: '3'},
            {text: 'I am good.', value: '4'},
          ]}
        />
      ),
    },
    {
      stepName: 'My Form Test',
      child: (
        <MyForm
          form={{height: '100%', width: '90%', space: 3}}
          input={[
            {
              name: 'name',
              color: 'black',
              isRequired: true,
              label: 'Name',
              placeholder: 'Your name here...',
            },
            {
              name: 'email',
              color: 'black',
              isRequired: true,
              label: 'Email',
              placeholder: 'Your email here...',
            },
            {
              name: 'gender',
              color: 'black',
              isRequired: true,
              label: 'Gener',
              type: 'radio',
              radioData: [
                {text: 'Male', value: '1', isSelected: true},
                {text: 'Female', value: '2'},
                {text: 'Other', value: '3'},
              ],
            },
            {
              name: 'job',
              color: 'black',
              isRequired: true,
              label: 'Job',
              type: 'select',
              selectData: [
                {id: 1, value: 'IT', text: 'IT'},
                {id: 2, value: 'Tester', text: 'Tester'},
              ],
            },
            {
              name: 'password',
              color: 'black',
              isRequired: true,
              label: 'Password',
              type: 'password',
              placeholder: 'Your password here...',
            },
            {
              name: 'confirmPassword',
              color: 'black',
              isRequired: true,
              label: 'Confirm Password',
              placeholder: 'Type your password again...',
            },
          ]}
          button={{
            buttons: [{text: 'Submit', type: 'submit', colorScheme: 'success'}],
          }}
        />
      ),
    },
    {
      stepName: 'My Child Test',
      child: <Child text="Child Three" />,
    },
    {
      stepName: 'My Child another Test',
      child: <Child text="Child Three dfgsdg" />,
    },
    {
      stepName: 'My Child ashfl;kak;jsd Test',
      child: <Child text="Child Three sdgsdfg" />,
    },
  ],
};
