type ButtonProps = {
  className?: string;
  title?: string;
  handleClick: () => void;
};

const Button = ({ handleClick, title, className }: ButtonProps) => {
  return (
    <button className={className} onClick={handleClick}>
      {title ? title : 'click me'}
    </button>
  );
};

export default Button;
