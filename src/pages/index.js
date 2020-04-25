import React, { useEffect } from 'react';
import Logo from '~/atoms/Logo';
import Section from '~/organisms/Section';
import { useLocalStorage } from '~/utils/useLocalStorage';
import mockMovies from '../../__mocks__/data/movies';
import firebase from '../services/firebase/clientApp';

const Home = () => {
  const [storedRatings, setStoredRatings] = useLocalStorage('ratings', []);
  useEffect(() => {
    firebase.analytics().logEvent('notification_received');
  }, []);
  return (
    <div>
      <Logo />
      <Section
        sectionTitle={'Recommended for you'}
        storedRatings={storedRatings}
        setStoredRatings={setStoredRatings}
        variant={'lg'}
        movies={mockMovies.slice(0, 6)}
      />
      <Section
        sectionTitle={'Top 10 this week'}
        storedRatings={storedRatings}
        setStoredRatings={setStoredRatings}
        variant={'sm'}
        movies={mockMovies.slice(6, 15)}
      />
    </div>
  );
};

export default Home;
