import React, { useEffect } from 'react';
import mockMovies from '../../__mocks__/data/movies';
import Logo from '../atoms/Logo';
import Slider from '../molecules/Slider/Slider';
import { useLocalStorage } from '../utils/useLocalStorage';
import firebase from '../../firebase/clientApp';

const Page = () => {
  const [storedRatings, setStoredRatings] = useLocalStorage('ratings', []);
  useEffect(() => {
    firebase.analytics().logEvent('notification_received');
  }, [])
  return (
    <div>
      <Logo />
      <Slider
        storedRatings={storedRatings}
        setStoredRatings={setStoredRatings}
        variant={'lg'}
        movies={mockMovies.slice(0, 6)}
      />
      <Slider
        storedRatings={storedRatings}
        setStoredRatings={setStoredRatings}
        variant={'sm'}
        movies={mockMovies.slice(6, 15)}
      />
    </div>
  );
};

export default Page;
