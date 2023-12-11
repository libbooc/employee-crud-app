import React, { ReactNode, MouseEventHandler } from 'react';

interface ButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
  className?: string;
  children: ReactNode;
  dataTestId?: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, className, children, dataTestId }) => {
  return (
    <button onClick={onClick} className={className} data-testid={dataTestId}>
      {children}
    </button>
  );
};

export default Button;