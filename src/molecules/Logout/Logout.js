import React from 'react';
import clsx from 'clsx';
import Typography from '~/atoms/Typography';
import useLogoutStyles from './styles';

const Logout = ({ customClass }) => {
  const classes = useLogoutStyles();

  return (
    <div className={clsx(classes.container, customClass)}>
      <Typography className={classes.name} variant={'h5'} component={'h5'}>
        {'Logout'}
      </Typography>
      <img className={classes.icon} src={'/logoutIcon.svg'} alt="Search" />;
    </div>
  );
};

Logout.displayName = 'Logout';

export default Logout;
