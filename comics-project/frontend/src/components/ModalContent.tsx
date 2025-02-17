import React from 'react';
import ButtonCloseModal from './ButtonCloseModal';
import ModalAction from './ModalAction';
type ModalContentProps = {
  className?: string;
  children?: React.ReactNode;
};

const ModalContent = ({ children, className }: ModalContentProps) => {
  return (
    <div className={`modal-box ${className ? className : ''}`}>
      <ButtonCloseModal
        className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
        content={'✕'}
        handleClick={() => {
          (document.getElementById('modal') as HTMLDialogElement).showModal();
        }}
      />
      {children}
      <ModalAction />
    </div>
  );
};

export default ModalContent;
