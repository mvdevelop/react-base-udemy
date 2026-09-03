import React from 'react';
import PropTypes from 'prop-types';
import { SkeletonWrapper, SkeletonLine } from '../styles/SkeletonStyles';

const Skeleton = ({ width = '100%', height = 20, borderRadius = 4, count = 1 }) => {
  return (
    <SkeletonWrapper>
      {Array.from({ length: count }).map((_, index) => (
        <SkeletonLine
          key={index}
          width={typeof width === 'number' ? `${width}px` : width}
          height={typeof height === 'number' ? `${height}px` : height}
          borderRadius={`${borderRadius}px`}
          style={{ animationDelay: `${index * 0.1}s` }}
        />
      ))}
    </SkeletonWrapper>
  );
};

Skeleton.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  borderRadius: PropTypes.number,
  count: PropTypes.number,
};

export default Skeleton;