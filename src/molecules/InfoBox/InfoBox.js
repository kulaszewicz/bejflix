import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import Typography from '~/atoms/Typography';
import useInfoBoxStyles from './styles';

export const propTypes = {
  className: PropTypes.string,
  imgSrc: PropTypes.string,
  description: PropTypes.string,
  style: PropTypes.object,
};

const defaultProps = {};

/** Short description of InfoBox. */

const InfoBox = ({ className, style, imgSrc, description }) => {
  const classes = useInfoBoxStyles();

  return (
    <div className={clsx(classes.root, className)} style={style}>
      <div className={classes.imgWrapper}>
        <img className={classes.img} src={imgSrc} alt="infoImg" />
      </div>
      <Typography
        className={classes.description}
        variant={'body2'}
        component={'p'}
      >
        {description}
      </Typography>
    </div>
  );
};

InfoBox.displayName = 'InfoBox';
InfoBox.propTypes = propTypes;
InfoBox.defaultProps = defaultProps;

export default InfoBox;
