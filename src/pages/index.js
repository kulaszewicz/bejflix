import React, { useEffect } from 'react';
import Landing from '~/templates/Landing';
import { useLocalStorage } from '~/utils/useLocalStorage';
import mockMovies from '../../__mocks__/data/movies';
import firebase from '../services/firebase/clientApp';

const Home = () => {
  const [storedRatings, setStoredRatings] = useLocalStorage('ratings', []);
  useEffect(() => {
    firebase.analytics().logEvent('notification_received');
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
  ];
  return (
    <div>
      <Landing sections={tempSections} />
    </div>
  );
};

export default Home;
