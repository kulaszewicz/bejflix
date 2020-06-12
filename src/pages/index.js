import React, { useEffect, useState } from 'react';
import withAuthorization from '~/services/auth/session/withAuthorization';
import { getBejflixSdk } from '~/services/bejflix/bejflix.sdk';
import withRedux from '~/services/redux/withRedux';
import Landing from '~/templates/Landing';
import { useLocalStorage } from '~/utils/useLocalStorage';

const Home = withRedux(
  withAuthorization(({ sections, authUser }) => {
    const [storedRatings, setStoredRatings] = useLocalStorage('ratings', []);
    const [user] = useState(authUser);
    const [searchValue, setSearchValue] = useState('');
    const [isSearchFetching, setIsSearchFetching] = useState(false);
    const [
      areRecommendationsFetching,
      setAreRecommendationsFetching,
    ] = useState(false);
    const [searchResults, setSearchResults] = useState([]);
    const [movies, setMovies] = useState({
      recommended: [],
      ...sections,
    });

    const Api = getBejflixSdk();

    const handleSearch = ({ target }) => {
      setSearchValue(target.value);
      if (target.value.length > 2) {
        setIsSearchFetching(true);
        Api.movie
          .search(target.value)
          .then((results) => {
            setSearchResults(results);
            setIsSearchFetching(false);
          })
          .catch((err) => err);
      } else {
        setSearchResults([]);
      }
    };
    const tempSections = [
      {
        sectionTitle: 'Recommended for you',
        storedRatings,
        setStoredRatings,
        variant: 'lg',
        movies: movies.recommended,
        isSectionFetching: areRecommendationsFetching,
      },
      {
        sectionTitle: 'Top 10 this month',
        storedRatings,
        setStoredRatings,
        variant: movies.recommended.length ? 'sm' : 'lg',
        movies: movies.top10,
      },
      {
        sectionTitle: 'Drama',
        storedRatings,
        setStoredRatings,
        variant: 'sm',
        movies: movies.drama,
      },
      {
        sectionTitle: 'Adventure',
        storedRatings,
        setStoredRatings,
        variant: 'sm',
        movies: movies.adventure,
      },
      {
        sectionTitle: 'Action',
        storedRatings,
        setStoredRatings,
        variant: 'sm',
        movies: movies.action,
      },
      {
        sectionTitle: 'Comedy',
        storedRatings,
        setStoredRatings,
        variant: 'sm',
        movies: movies.comedy,
      },
      {
        sectionTitle: 'Horror',
        storedRatings,
        setStoredRatings,
        variant: 'sm',
        movies: movies.horror,
      },
      {
        sectionTitle: 'Western',
        storedRatings,
        setStoredRatings,
        variant: 'sm',
        movies: movies.western,
      },
    ];

    useEffect(() => {
      const mappedRatings = storedRatings.map((ratingEntry) =>
        Object.values(ratingEntry)
      );
      if (mappedRatings && mappedRatings.length) {
        setAreRecommendationsFetching(true);
        Api.movie.getRecommended(mappedRatings).then((results) => {
          setAreRecommendationsFetching(false);
          setMovies({ ...movies, recommended: results });
        });
      }
    }, []);

    return (
      <div>
        <Landing
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          userId={user.uid}
          sections={tempSections}
          searchResults={searchResults}
          handleSearch={handleSearch}
          isSearchFetching={isSearchFetching}
        />
      </div>
    );
  })
);

Home.getInitialProps = async () => {
  const Api = getBejflixSdk();
  const sections = {};
  const genres = [
    'drama',
    'adventure',
    'action',
    'comedy',
    'horror',
    'western',
  ];
  await Api.movie.getTop10().then((movies) => (sections.top10 = movies));
  for (const genre of genres) {
    await Api.movie
      .getByGenre(genre)
      .then((dramaMovies) => (sections[genre] = dramaMovies))
      .catch((err) => err);
  }
  return {
    sections,
  };
};

export default Home;
