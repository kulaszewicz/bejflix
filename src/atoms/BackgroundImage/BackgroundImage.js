import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import useBackgroundImageStyles from './styles';

const propTypes = {
  blur: PropTypes.number,
  className: PropTypes.string,
  /** rgba color as string */
  overlayColor: PropTypes.string,
  /** float between 0 and 1 */
  src: PropTypes.string.isRequired,
  zIndex: PropTypes.number,
};

const defaultProps = {
  blur: 10,
  overlayColor: 'rgba(0, 0, 0, 0)',
  zIndex: -1,
};

// TODO: create Overlay as a separate component which we could later use with Image for example.

const BackgroundImage = ({ blur, className, overlayColor, src, zIndex }) => {
  const classes = useBackgroundImageStyles({
    blur,
    overlayColor,
    src,
    zIndex,
  });
  return <div className={clsx(classes.backgroundImage, className)} />;
};

BackgroundImage.displayName = 'BackgroundImage';
BackgroundImage.propTypes = propTypes;
BackgroundImage.defaultProps = defaultProps;

export default BackgroundImage;
