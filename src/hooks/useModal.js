import { useState, useCallback } from "react";

const useModal = (defaultState = false) => {
  const [isOpen, setIsOpen] = useState(defaultState);

  const toggleModal = useCallback(() => {
    setIsOpen((v) => !v);
  }, []);
  const openModal = useCallback(() => {
    setIsOpen(true);
  }, []);
  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  return {
    isOpen,
    setIsOpen,
    toggleModal,
    openModal,
    closeModal,
  };
};

export default useModal;
