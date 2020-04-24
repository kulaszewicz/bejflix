import React from 'react';
import mockMovies from '../../__mocks__/data/movies';
import Logo from '../atoms/Logo';
import Slider from '../molecules/Slider/Slider';

const Page = () => (
  <div>
    <Logo />
    <Slider variant={'lg'} movies={mockMovies.slice(0, 6)} />
    <Slider variant={'sm'} movies={mockMovies.slice(6, 15)} />
  </div>
);

export default Page;
