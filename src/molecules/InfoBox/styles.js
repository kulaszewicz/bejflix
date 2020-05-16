import { createStyles, makeStyles } from '@material-ui/core';

const useInfoBoxStyles = makeStyles(({ palette }) =>
  createStyles({
    root: {
      display: 'inline',
    },
    imgWrapper: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
    },
    img: {
      margin: 'auto',
      marginBottom: '0.5rem',
      height: '80px',
    },
    description: {
      color: palette.bej.bejGrey,
      textAlign: 'center',
    },
  })
);

export default useInfoBoxStyles;
