import {Center, Heading, HStack, Spinner, VStack} from 'native-base';
import React from 'react';
import {LoadingProps} from '.';

export const Loading = ({
  containerStyle,
  spinnerStyle,
  heading,
}: LoadingProps) => {
  return (
    <HStack
      space={8}
      justifyContent="center"
      alignItems="center"
      {...containerStyle}
    >
      {heading?.left && (
        <Heading color="primary.500" fontSize="md">
          {heading.text}
        </Heading>
      )}
      {heading?.center ? (
        <Center>
          <VStack justifyContent={'center'} alignItems={'center'} space={5}>
            <Spinner size="sm" {...spinnerStyle} />
            <Heading color="primary.500" fontSize="md">
              {heading.text}
            </Heading>
          </VStack>
        </Center>
      ) : (
        <Spinner size="sm" {...spinnerStyle} />
      )}

      {heading?.right && (
        <Heading color="primary.500" fontSize="md">
          {heading.text}
        </Heading>
      )}
    </HStack>
  );
};
