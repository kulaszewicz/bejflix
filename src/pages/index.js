import React, { useEffect, useState } from 'react';
import { getBejflixSdk } from '~/services/bejflix/bejflix.sdk';
import Landing from '~/templates/Landing';
import { useLocalStorage } from '~/utils/useLocalStorage';
import mockMovies from '../../__mocks__/data/movies';
import firebase from '../services/firebase/clientApp';

const Home = () => {
  const [storedRatings, setStoredRatings] = useLocalStorage('ratings', []);
  const [user, setUser] = useLocalStorage('user', {});
  const [movies, setMovies] = useState({
    drama: [],
  });
  const Api = getBejflixSdk();
  useEffect(() => {
    Api.movie
      .getByGenre('drama')
      .then((dramaMovies) => setMovies({ ...movies, drama: dramaMovies }))
      .catch((err) => err);
    if (!user.id) {
      setUser({
        id: Math.floor(Math.random() * 1000000),
      });
    }
  }, [Api]);
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
  ];
  return (
    <div>
      <Landing userId={user.id} sections={tempSections} />
    </div>
  );
};

export default Home;
