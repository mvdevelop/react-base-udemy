import React from 'react';
import PropTypes from 'prop-types';
import { StyledDivider } from '../styles/DividerStyles';

const Divider = ({ orientation = 'horizontal', thickness = '1px', color }) => {
  return (
    <StyledDivider
      orientation={orientation}
      thickness={thickness}
      color={color}
      role="separator"
    />
  );
};

Divider.propTypes = {
  orientation: PropTypes.oneOf(['horizontal', 'vertical']),
  thickness: PropTypes.string,
  color: PropTypes.string,
};

export default Divider;