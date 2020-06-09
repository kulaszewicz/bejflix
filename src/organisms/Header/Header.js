import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Logo from '~/atoms/Logo';
import Logout from '~/molecules/Logout';
import Search from '~/molecules/Search';
import useSearchStyles from './styles';

const Header = ({ searchValue, setSearchValue, handleSearchValueChange }) => {
  const classes = useSearchStyles();

  return (
    <AppBar classes={{ root: classes.appBar }} position="sticky">
      <Toolbar disableGutters={true}>
        <div className={classes.container}>
          <Logo />
          <Search
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            onChange={handleSearchValueChange}
            customClass={classes.search}
          />
          <Logout customClass={classes.logout} />
        </div>
      </Toolbar>
    </AppBar>
  );
};

Header.displayName = 'Search';

export default Header;
