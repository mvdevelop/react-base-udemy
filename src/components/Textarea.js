import React from 'react';
import PropTypes from 'prop-types';
import { StyledTextarea, InputWrapper, Label, ErrorMessage, HelperText } from '../styles/InputStyles';

const Textarea = ({
  label,
  error,
  helperText,
  fullWidth = true,
  id,
  ...props
}) => {
  const textareaId = id || label?.toLowerCase().replace(/\s+/g, '-');

  return (
    <InputWrapper fullWidth={fullWidth}>
      {label && <Label htmlFor={textareaId}>{label}</Label>}
      <StyledTextarea
        id={textareaId}
        aria-invalid={!!error}
        aria-describedby={error ? `${textareaId}-error` : helperText ? `${textareaId}-helper` : undefined}
        {...props}
      />
      {error && <ErrorMessage id={`${textareaId}-error`} role='alert'>{error}</ErrorMessage>}
      {helperText && !error && <HelperText id={`${textareaId}-helper`}>{helperText}</HelperText>}
    </InputWrapper>
  );
};

Textarea.propTypes = {
  label: PropTypes.string,
  error: PropTypes.string,
  helperText: PropTypes.string,
  fullWidth: PropTypes.bool,
  id: PropTypes.string,
};

export default Textarea;