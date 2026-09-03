import React from 'react';
import PropTypes from 'prop-types';
import { StyledSpinner, SpinnerDot } from '../styles/SpinnerStyles';

const Spinner = ({ size = 40, color = '#4a6cf7', speed = '0.8s' }) => {
  return (
    <StyledSpinner size={size} speed={speed}>
      <SpinnerDot color={color} />
      <SpinnerDot color={color} delay="0.15s" />
      <SpinnerDot color={color} delay="0.3s" />
    </StyledSpinner>
  );
};

Spinner.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  color: PropTypes.string,
  speed: PropTypes.string,
};

export default Spinner;