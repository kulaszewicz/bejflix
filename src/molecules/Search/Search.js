import React from 'react';
import clsx from 'clsx';
import Typography from '~/atoms/Typography';
import useSearchStyles from './styles';

const Search = ({ customClass }) => {
  const classes = useSearchStyles();

  return (
    <div className={clsx(classes.container, customClass)}>
      <img className={classes.icon} src={'/searchIcon.svg'} alt="Search" />;
      <Typography className={classes.name} variant={'h5'} component={'h5'}>
        {'Search Catalog'}
      </Typography>
    </div>
  );
};

Search.displayName = 'Search';

export default Search;
