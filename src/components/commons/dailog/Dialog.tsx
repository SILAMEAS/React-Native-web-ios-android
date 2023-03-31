import {Button, Modal, ScrollView} from 'native-base';
import React from 'react';
import {DialogProps} from '.';

export const Dialog = ({
  buttons,
  body,
  header,
  size,
  isOpen,
  onClose,
  headerBackgroundColor,
  bodyBackgroundColor,
  footerBackgroundColor,
  ...props
}: DialogProps) => {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} size={size}>
        <Modal.Content {...props} maxH={'100%'} maxW={'100%'}>
          <Modal.CloseButton />
          <Modal.Header backgroundColor={headerBackgroundColor}>
            {header}
          </Modal.Header>
          <Modal.Body backgroundColor={bodyBackgroundColor}>
            <ScrollView nestedScrollEnabled={true}>{body}</ScrollView>
          </Modal.Body>
          <Modal.Footer backgroundColor={footerBackgroundColor}>
            <Button.Group space={2}>{buttons}</Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </>
  );
};
