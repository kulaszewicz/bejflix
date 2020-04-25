import React, { useEffect } from 'react';
import Landing from '~/templates/Landing';
import { useLocalStorage } from '~/utils/useLocalStorage';
import mockMovies from '../../__mocks__/data/movies';
import firebase from '../services/firebase/clientApp';

const Home = () => {
  const [storedRatings, setStoredRatings] = useLocalStorage('ratings', []);
  const [user, setUser] = useLocalStorage('user', {});
  useEffect(() => {
    firebase.analytics().logEvent('notification_received');
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
  ];
  return (
    <div>
      <Landing userId={user.id} sections={tempSections} />
    </div>
  );
};

export default Home;
