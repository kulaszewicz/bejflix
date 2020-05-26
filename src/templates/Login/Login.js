import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Fade from '@material-ui/core/Fade';
import BackgroundImage from '~/atoms/BackgroundImage';
import CircularProgress from '~/atoms/CircularProgress';
import CenteringContainer from '~/atoms/containers/CenteringContainer';
import InnerContainer from '~/atoms/containers/InnerContainer';
import VerticalContainer from '~/atoms/containers/VerticalContainer';
import Logo from '~/atoms/Logo';
import Typography from '~/atoms/Typography';
import VerticalLine from '~/atoms/VerticalLine';
import InfoBox from '~/molecules/InfoBox';
import LoginForm from '~/molecules/LoginForm';
import RegisterForm from '~/molecules/RegisterForm';
import useLoginStyles from './styles';

const propTypes = {
  style: PropTypes.object,
  validationProps: PropTypes.object,
  loginEmail: PropTypes.string,
  loginPassword: PropTypes.string,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
  onWithGithubClick: PropTypes.func,
  isLoading: PropTypes.bool,
};

const defaultProps = {};

const Login = ({
  style,
  loginEmail,
  loginPassword,
  onChange,
  onSubmit,
  validationProps,
  isLoading,
  onWithGithubClick,
}) => {
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
        {isLoading ? (
          <CircularProgress />
        ) : (
          <InnerContainer
            height={50}
            className={classes.innerContainer}
            leftChild={<RegisterForm title={'Newcomer?'} />}
            middleChild={<VerticalLine />}
            rightChild={
              <LoginForm
                passwordValue={loginPassword}
                loginValue={loginEmail}
                onSignInClick={onSubmit}
                validationProps={validationProps}
                onChange={onChange}
                onWithGithubClick={onWithGithubClick}
                title={'Welcome Back!'}
              />
            }
          />
        )}
        <InnerContainer
          className={classes.innerContainerInfo}
          leftChild={
            <InfoBox
              imgSrc={'/responsive.svg'}
              description={'Responsive web app avaliable on all devicies'}
            />
          }
          middleChild={
            <InfoBox
              imgSrc={'/star.svg'}
              description={'Movie recommendation system based on user ratings'}
            />
          }
          rightChild={
            <InfoBox
              imgSrc={'/movie.svg'}
              description={
                'Over 100 titles from different categories to choose from!'
              }
            />
          }
        />
      </CenteringContainer>
    </div>
  );
};

Login.displayName = 'LoginTemplate';
Login.propTypes = propTypes;
Login.defaultProps = defaultProps;

export default Login;
