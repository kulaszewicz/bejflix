import React from 'react';
import PropTypes from 'prop-types';
import Tile from '~/atoms/Tile/Tile';
import NoResults from '~/molecules/NoResults';
import useSearchResultsStyles from './styles';

const propTypes = {
  style: PropTypes.object,
};

const defaultProps = {};

// @ts-ignore
const SearchResults = ({
  style,
  results,
  storedRatings,
  setStoredRatings,
  sectionTitle,
  userId,
}) => {
  const classes = useSearchResultsStyles();

  return results && results.length ? (
    <div className={classes.root} style={style}>
      {results.map(({ poster, title, description, imdbId }, index) => (
        <Tile
          key={index}
          variant={'sm'}
          id={imdbId}
          image={poster}
          rating={storedRatings.filter((rate) => rate.id === imdbId)}
          title={title}
          description={description}
          setStoredRatings={setStoredRatings}
          storedRatings={storedRatings}
          userId={userId}
          className={classes.tile}
        />
      ))}
    </div>
  ) : (
    <NoResults />
  );
};

SearchResults.displayName = 'SearchResultsTemplate';
SearchResults.propTypes = propTypes;
SearchResults.defaultProps = defaultProps;

export default SearchResults;
