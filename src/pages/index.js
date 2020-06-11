import React, { useEffect, useState } from 'react';
import withAuthorization from '~/services/auth/session/withAuthorization';
import { getBejflixSdk } from '~/services/bejflix/bejflix.sdk';
import withRedux from '~/services/redux/withRedux';
import Landing from '~/templates/Landing';
import { useLocalStorage } from '~/utils/useLocalStorage';
import mockMovies from '../../__mocks__/data/movies';

const Home = withRedux(
  withAuthorization(() => {
    const [storedRatings, setStoredRatings] = useLocalStorage('ratings', []);
    const [user, setUser] = useLocalStorage('user', {});
    const [searchValue, setSearchValue] = useState('');
    const [isSearchFetching, setIsSearchFetching] = useState(false);
    const [searchResults, setSearchResults] = useState([]);
    const [movies, setMovies] = useState({
      drama: [],
      adventure: [],
      action: [],
      comedy: [],
      horror: [],
      western: [],
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
    useEffect(() => {
      const genres = [
        'drama',
        'adventure',
        'action',
        'comedy',
        'horror',
        'western',
      ];
      genres.forEach((genre) => {
        Api.movie
          .getByGenre(genre)
          .then((dramaMovies) =>
            setMovies((prevMovies) => ({ ...prevMovies, [genre]: dramaMovies }))
          )
          .catch((err) => err);
      });
      if (!user.id) {
        setUser({
          id: Math.floor(Math.random() * 1000000),
        });
      }
    }, []);
    const tempSections = [
      {
        sectionTitle: 'Recommended for you',
        storedRatings,
        setStoredRatings,
        variant: 'lg',
        movies: mockMovies.slice(0, 6),
      },
      {
        sectionTitle: 'Top 10 this week',
        storedRatings,
        setStoredRatings,
        variant: 'sm',
        movies: mockMovies.slice(6, 15),
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
    return (
      <div>
        <Landing
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          userId={user.id}
          sections={tempSections}
          searchResults={searchResults}
          handleSearch={handleSearch}
          isSearchFetching={isSearchFetching}
        />
      </div>
    );
  })
);

export default Home;
