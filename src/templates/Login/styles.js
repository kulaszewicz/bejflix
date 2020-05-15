import { createStyles, makeStyles } from '@material-ui/core';

const useLoginStyles = makeStyles(() =>
  createStyles({
    root: {
      width: '100vw',
      height: '100vh',
    },
    logo: {
      width: '800px',
      height: '215px',
    },
    title: {
      color: '#E3E0E0',
      textTransform: 'uppercase',
      textShadow: '0px 5px 6px #000000B0',
      fontSize: '1.3rem',
      letterSpacing: '0.88px',
    },
    innerContainer: {
      marginTop: '2rem',
    },
  })
);

export default useLoginStyles;
