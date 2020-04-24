import React from 'react';
import mockMovies from '../../__mocks__/data/movies';
import Logo from '../atoms/Logo';
import Slider from '../molecules/Slider/Slider';
import { useLocalStorage } from '../utils/useLocalStorage';

const Page = () => {
  const [storedRatings, setStoredRatings] = useLocalStorage('ratings', []);
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
