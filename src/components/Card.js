import React from 'react';
import PropTypes from 'prop-types';
import { StyledCard, CardHeader, CardBody, CardFooter, CardImage } from '../styles/CardStyles';

const Card = ({
  children,
  header,
  body,
  footer,
  image,
  hover = false,
  padding = 'md',
  ...props
}) => {
  return (
    <StyledCard hover={hover} padding={padding} {...props}>
      {image && <CardImage src={image} alt={header} />}
      {header && <CardHeader>{header}</CardHeader>}
      {body && <CardBody>{body}</CardBody>}
      {footer && <CardFooter>{footer}</CardFooter>}
      {children}
    </StyledCard>
  );
};

Card.propTypes = {
  children: PropTypes.node,
  header: PropTypes.node,
  body: PropTypes.node,
  footer: PropTypes.node,
  image: PropTypes.string,
  hover: PropTypes.bool,
  padding: PropTypes.oneOf(['none', 'sm', 'md', 'lg']),
};

export default Card;