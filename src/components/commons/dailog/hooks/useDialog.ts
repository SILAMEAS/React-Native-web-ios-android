import {useState} from 'react';
import {DialogHook} from '..';

export const useDialog = (): DialogHook => {
  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => setIsOpen(false);
  const onOpen = () => setIsOpen(true);
  const onToggle = () => setIsOpen(prev => !prev);
  return {isOpen, onClose, onOpen, onToggle};
};
