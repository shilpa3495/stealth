import { useEffect } from "react";
import Modal from "react-modal";

const CustomModal = ({ isOpen, closeModal, children }) => {
  
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      className={"w-fit flex justify-center"}
      shouldCloseOnEsc={true}
      overlayClassName={'fixed w-full h-screen top-0 left-0 z-[1000] bg-modalBackgroundColor flex justify-center items-center'}
      shouldCloseOnOverlayClick={true}
      ariaHideApp={false}
    >
      {children}
    </Modal>
  );
};

export default CustomModal;
