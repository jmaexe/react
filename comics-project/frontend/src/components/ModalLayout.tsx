import React, { useEffect } from 'react';

type ModalLayoutProps = {
  id: string | undefined;
  children?: React.ReactNode;
};

const ModalLayout = ({ id, children }: ModalLayoutProps) => {
  return (
    <dialog id={id} className="modal">
      {children}
    </dialog>
  );
};

export default ModalLayout;
