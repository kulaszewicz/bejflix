import React from 'react';
import PropTypes from 'prop-types';
import Skeleton from '@material-ui/lab/Skeleton';
import Tile from '~/atoms/Tile/Tile';
import NoResults from '~/molecules/NoResults';
import useSearchResultsStyles from './styles';

const propTypes = {
  style: PropTypes.object,
  results: PropTypes.array,
  storedRatings: PropTypes.array,
  setStoredRatings: PropTypes.func,
  userId: PropTypes.string,
  isSearchFetching: PropTypes.bool,
};

const defaultProps = {};

const SearchResults = ({
  style,
  results,
  storedRatings,
  setStoredRatings,
  userId,
  isSearchFetching,
}) => {
  const classes = useSearchResultsStyles();

  return isSearchFetching ? (
    <div className={classes.root} style={style}>
      {[...Array(20).keys()].map(() => (
        <Skeleton classes={{ root: classes.skeleton }} />
      ))}
    </div>
  ) : results && results.length ? (
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
