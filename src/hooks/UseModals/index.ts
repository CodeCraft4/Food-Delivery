import {useState} from 'react';

export function useModal() {
  const [open, setOpen] = useState(false);
  const openModal = () => {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
    console.log(open);
  };

  return {
    open,
    openModal,
    closeModal,
  };
}
