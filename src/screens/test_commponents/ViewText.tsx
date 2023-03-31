import {MyText} from '@src/components/commons/my_text';
import React from 'react';

export const ViewText = () => {
  return (
    <>
      <MyText type="white" fontSize="4xl" mb={2} fontWeight="semibold">
        Text White 4xl semibold
      </MyText>
      <MyText type="warning" fontSize="3xl" mb={2} fontWeight="extraBlack">
        Text Warning 3xl extraBlack
      </MyText>
      <MyText type="primary" fontSize="2xl" mb={2} fontWeight="light">
        Text Primary 2xl light
      </MyText>
      <MyText type="danger" fontSize="xl" mb={2} fontWeight="bold">
        Text Danger xl bold
      </MyText>
      <MyText type="dark" fontSize="lg" mb={2}>
        Text Dark lg
      </MyText>
      <MyText type="info" fontSize="md" mb={2}>
        Text Info md
      </MyText>
      <MyText type="secondary" fontSize="sm" mb={2}>
        Text Secondary sm
      </MyText>
      <MyText type="secondary" fontSize="xs" mb={2}>
        Text Secondary xm
      </MyText>
      <MyText type="success" fontSize="2xs" mb={2}>
        Text Success 2xs
      </MyText>
    </>
  );
};
