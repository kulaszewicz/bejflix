import React, { useEffect, useState } from 'react';
import firebase from 'firebase';
import Rating from '@material-ui/lab/Rating';
import { userRating } from '~/services/bejflix/userRating';
import Typography from '../Typography';
import useTileStyles from './styles';

const TileCover = ({
  title,
  rating,
  description,
  variant,
  id,
  setStoredRatings,
  storedRatings,
  userId,
}) => {
  const classes = useTileStyles({ variant });

  const [value, setValue] = useState((rating.length && rating[0].value) || 0);

  useEffect(() => {
    const analytics = firebase.analytics();
    if (value !== 0) {
      let isThere = null;
      const currentStored = [...storedRatings];
      currentStored.forEach((el, index) => {
        if (el.id === id) {
          isThere = index;
        }
      });
      if (isThere !== null && isThere !== -1) {
        currentStored[isThere] = { id: id, value: value };
        userRating
          .sendRatingToBigQuery({
            movieId: id,
            rating: value,
            userId: userId || 1,
            timestamp: Date.now(),
          })
          .then((data) => console.log(data));
        setStoredRatings(currentStored);
      } else if (isThere === null) {
        setStoredRatings([...currentStored, { id: id, value: value }]);
        //Send only rating that was done first
        //TODO add real user id
        // Cloud Function API
        userRating
          .sendRatingToBigQuery({
            movieId: id,
            rating: value,
            userId: userId || 1,
            timestamp: Date.now(),
          })
          .then((data) => console.log(data));
        // Analytics
        analytics.logEvent('userRating', {
          movieId: id,
          rating: value,
          userId: userId || 1,
          timestamp: Date.now(),
        });
      } else if (currentStored.length === 0) {
        setStoredRatings([...currentStored, { id: id, value: value }]);
      }
    }
  }, [value]);

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
