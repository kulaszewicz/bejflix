import React from 'react';
import Header from '~/organisms/Header';
import Section from '~/organisms/Section';
import useLandingStyles from './styles';

const Landing = ({ sections, userId }) => {
  const classes = useLandingStyles();

  return (
    <div className={classes.container}>
      <Header />
      <>
        {sections.map(
          (
            { sectionTitle, storedRatings, setStoredRatings, variant, movies },
            index
          ) => (
            <Section
              key={index}
              sectionTitle={sectionTitle}
              storedRatings={storedRatings}
              setStoredRatings={setStoredRatings}
              variant={variant}
              movies={movies}
              userId={userId}
            />
          )
        )}
      </>
    </div>
  );
};

Landing.displayName = 'Landing';

export default Landing;
