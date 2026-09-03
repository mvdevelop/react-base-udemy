import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton, LoadingSpinner } from '../styles/ButtonStyles';

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  fullWidth = false,
  as: Component = 'button',
  onClick,
  ...props
}) => {
  if (loading) {
    return (
      <StyledButton
        variant={variant}
        size={size}
        fullWidth={fullWidth}
        disabled
        as={Component}
        {...props}
      >
        <LoadingSpinner />
        <span>Carregando...</span>
      </StyledButton>
    );
  }

  return (
    <StyledButton
      variant={variant}
      size={size}
      disabled={disabled}
      fullWidth={fullWidth}
      as={Component}
      onClick={onClick}
      {...props}
    >
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary', 'outline', 'ghost']),
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  fullWidth: PropTypes.bool,
  as: PropTypes.elementType,
  onClick: PropTypes.func,
};

export default Button;