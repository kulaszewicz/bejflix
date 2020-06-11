import React from 'react';
import Header from '~/organisms/Header';
import SearchResults from '~/organisms/SearchResults';
import Section from '~/organisms/Section';
import useLandingStyles from './styles';

const Landing = ({
  sections,
  userId,
  searchValue,
  setSearchValue,
  searchResults,
  handleSearch,
  isSearchFetching,
}) => {
  const classes = useLandingStyles();

  return (
    <div className={classes.container}>
      <Header
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        handleSearchValueChange={handleSearch}
      />

      <div className={classes.sections}>
        {searchValue && searchValue.length > 2 ? (
          <SearchResults
            storedRatings={sections[0].storedRatings}
            setStoredRatings={sections[0].setStoredRatings}
            results={searchResults}
            userId={userId}
            searchValue={searchValue}
            isSearchFetching={isSearchFetching}
          />
        ) : (
          <>
            {sections.map(
              (
                {
                  sectionTitle,
                  storedRatings,
                  setStoredRatings,
                  variant,
                  movies,
                },
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
        )}
      </div>
    </div>
  );
};

Landing.displayName = 'Landing';

export default Landing;
