import React, { useState } from 'react';
import Rating from '@material-ui/lab/Rating';
import Typography from '../Typography';
import useTileStyles from './styles';

const TileCover = ({ title, rating, description, variant }) => {
  const classes = useTileStyles({ variant });

  const [value, setValue] = useState(rating || 0);

  return (
    <div className={classes.hoverContainer}>
      <div className={classes.relativeWrapper}>
        <div className={classes.hoverHead}>
          <Typography
            className={classes.hoverTitle}
            component={variant === 'sm' ? 'h5' : 'h4'}
            variant={variant === 'sm' ? 'h5' : 'h4'}
          >
            {title}
          </Typography>
          <Rating
            name="simple-controlled"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            className={classes.hoverRating}
            classes={{ iconEmpty: classes.hoverEmptyIcon }}
          />
        </div>
        <img className={classes.hoverPlay} src={'/play.svg'} alt="Play movie" />
        <div className={classes.hoverDescription}>
          <Typography
            component={'p'}
            variant={variant === 'sm' ? 'body2' : 'body1'}
          >
            {description}
          </Typography>
        </div>
      </div>
    </div>
  );
};

TileCover.displayName = 'TileCover';

export default TileCover;
