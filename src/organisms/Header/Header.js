import React from 'react';
import Logo from '~/atoms/Logo';
import Logout from '~/molecules/Logout';
import Search from '~/molecules/Search';
import useSearchStyles from './styles';

const Header = () => {
  const classes = useSearchStyles();

  return (
    <div className={classes.container}>
      <Logo />
      <Search customClass={classes.search} />
      <Logout customClass={classes.logout} />
    </div>
  );
};

Header.displayName = 'Search';

export default Header;
