import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import Typography from '~/atoms/Typography';
import useNoResultsStyles from './styles';

export const propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
};

const defaultProps = {};

/** Short description of NoResults. */

const NoResults = ({ className, style }) => {
  const classes = useNoResultsStyles();
  return (
    <div className={clsx(classes.root, className)} style={style}>
      <img className={classes.icon} src={'/noResults.svg'} alt="No Results" />
      <div className={classes.infoBox}>
        <Typography className={classes.title} variant={'h3'} component={'h2'}>
          {"It seems we don't have the movie you're looking for"}
        </Typography>
        <Typography
          className={classes.subtitle}
          variant={'h4'}
          component={'h3'}
        >
          {'Try typing other phrase?'}
        </Typography>
      </div>
    </div>
  );
};

NoResults.displayName = 'NoResults';
NoResults.propTypes = propTypes;
NoResults.defaultProps = defaultProps;

export default NoResults;
