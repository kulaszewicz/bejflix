import React from 'react';
import Typography from '../../atoms/Typography';
import Slider from '../../molecules/Slider';
import useSectionStyles from './styles';

const Section = ({
  variant,
  movies,
  storedRatings,
  setStoredRatings,
  sectionTitle,
  userId,
  isSectionFetching,
}) => {
  const classes = useSectionStyles({ variant });

  return (movies && movies.length) || isSectionFetching ? (
    <div className={classes.container}>
      <Typography
        className={classes.sectionTitle}
        component={'h5'}
        variant={'h5'}
      >
        {sectionTitle}
      </Typography>
      <Slider
        userId={userId}
        variant={variant}
        movies={movies}
        storedRatings={storedRatings}
        setStoredRatings={setStoredRatings}
        isSectionFetching={isSectionFetching}
      />
    </div>
  ) : null;
};

Section.displayName = 'Section';

export default Section;
