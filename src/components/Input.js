import React from 'react';
import PropTypes from 'prop-types';
import { StyledInput, InputWrapper, Label, ErrorMessage, HelperText } from '../styles/InputStyles';

const Input = ({
  label,
  error,
  helperText,
  fullWidth = true,
  id,
  ...props
}) => {
  const inputId = id || label?.toLowerCase().replace(/\s+/g, '-');

  return (
    <InputWrapper fullWidth={fullWidth}>
      {label && <Label htmlFor={inputId}>{label}</Label>}
      <StyledInput
        id={inputId}
        aria-invalid={!!error}
        aria-describedby={error ? `${inputId}-error` : helperText ? `${inputId}-helper` : undefined}
        {...props}
      />
      {error && <ErrorMessage id={`${inputId}-error`} role='alert'>{error}</ErrorMessage>}
      {helperText && !error && <HelperText id={`${inputId}-helper`}>{helperText}</HelperText>}
    </InputWrapper>
  );
};

Input.propTypes = {
  label: PropTypes.string,
  error: PropTypes.string,
  helperText: PropTypes.string,
  fullWidth: PropTypes.bool,
  id: PropTypes.string,
};

export default Input;