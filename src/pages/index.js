import React, { useEffect } from 'react';
import withAuthorization from '~/services/auth/session/withAuthorization';
import withRedux from '~/services/redux/withRedux';
import Landing from '~/templates/Landing';
import { useLocalStorage } from '~/utils/useLocalStorage';
import mockMovies from '../../__mocks__/data/movies';

const Home = withRedux(
  withAuthorization(() => {
    const [storedRatings, setStoredRatings] = useLocalStorage('ratings', []);
    const [user, setUser] = useLocalStorage('user', {});
    useEffect(() => {
      if (!user.id) {
        setUser({
          id: Math.floor(Math.random() * 1000000),
        });
      }
    }, [setUser, user.id]);
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
  })
);

export default Home;
