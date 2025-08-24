import React from 'react';

const Button = React.forwardRef<HTMLButtonElement, { label: string }>(
  ({ label }, ref) => {
    return <button ref={ref}>{label}</button>;
  },
);

Button.displayName = 'Button';

export { Button };
