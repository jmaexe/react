import React from 'react';
import ButtonCloseModal from './ButtonCloseModal';

type ModalActionProps = {};

const ModalAction = ({}: ModalActionProps) => {
  return (
    <>
      <form className="modal-action">
        <ButtonCloseModal className="btn" content={'Close'} />
      </form>
    </>
  );
};

export default ModalAction;
