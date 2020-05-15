import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Fade from '@material-ui/core/Fade';
import BackgroundImage from '~/atoms/BackgroundImage';
import CenteringContainer from '~/atoms/containers/CenteringContainer';
import VerticalContainer from '~/atoms/containers/VerticalContainer';
import Logo from '~/atoms/Logo';
import Typography from '~/atoms/Typography';
import LoginForm from '~/molecules/LoginForm';
import useLoginStyles from './styles';

const propTypes = {
  style: PropTypes.object,
};

const defaultProps = {};

const Login = ({ style }) => {
  const classes = useLoginStyles();
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <div className={classes.root} style={style}>
      <BackgroundImage src={'./login_background.jpg'} />
      <CenteringContainer>
        <Fade in={fadeIn} timeout={2000}>
          <div>
            <VerticalContainer gutter={4}>
              <Logo className={classes.logo} src={'./logo_big.svg'} />
              <Typography
                className={classes.title}
                component={'h4'}
                variant={'h5'}
              >
                {'Netflix like-app for collecting analytic data'}
              </Typography>{' '}
            </VerticalContainer>
          </div>
        </Fade>
        <LoginForm title={'Welcome Back!'} />
      </CenteringContainer>
    </div>
  );
};

Login.displayName = 'LoginTemplate';
Login.propTypes = propTypes;
Login.defaultProps = defaultProps;

export default Login;
