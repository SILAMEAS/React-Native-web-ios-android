import React from 'react';

import {useSelector, useDispatch} from 'react-redux';
import {decrement, increment} from './CounterSlice';
import {Box, Button, Center} from 'native-base';

export function Counter() {
  const count = useSelector((state: any) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <Center bg={'warmGray.100'} height="100%">
      <Box safeArea>
        <Button onPress={() => dispatch(increment())}>Increment</Button>
        <Button bg={'amber.400'}>{count}</Button>
        <Button onPress={() => dispatch(decrement())}>Decrement</Button>
      </Box>
    </Center>
  );
}
