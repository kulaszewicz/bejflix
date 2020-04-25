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
}) => {
  const classes = useSectionStyles({ variant });

  return (
    <div className={classes.container}>
      <Typography
        className={classes.sectionTitle}
        component={'h5'}
        variant={'h5'}
      >
        {sectionTitle}
      </Typography>
      <Slider
        variant={variant}
        movies={movies}
        storedRatings={storedRatings}
        setStoredRatings={setStoredRatings}
      />
    </div>
  );
};

Section.displayName = 'Section';

export default Section;
