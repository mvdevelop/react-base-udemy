import React from 'react';
import PropTypes from 'prop-types';
import { StyledBadge } from '../styles/BadgeStyles';

const Badge = ({ children, variant = 'default', size = 'md' }) => {
  return (
    <StyledBadge variant={variant} size={size}>
      {children}
    </StyledBadge>
  );
};

Badge.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['default', 'primary', 'success', 'warning', 'error', 'info']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
};

export default Badge;