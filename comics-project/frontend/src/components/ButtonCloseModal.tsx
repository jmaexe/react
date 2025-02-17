import React from 'react';

type ButtonCloseModalProps = {
  className: string;
  content: any;
  handleClick?: () => void;
};

const ButtonCloseModal = ({
  className,
  content,
  handleClick,
}: ButtonCloseModalProps) => {
  return (
    <form method="dialog">
      <button className={className} onClick={handleClick}>
        {content}
      </button>
    </form>
  );
};

export default ButtonCloseModal;
