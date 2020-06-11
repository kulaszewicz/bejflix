import { createStyles, makeStyles } from '@material-ui/core';

const useNoResultsStyles = makeStyles(({ palette, spacing }) =>
  createStyles({
    root: {
      display: 'flex',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      justifyItems: 'center',
      alignItems: 'center',
      '& *': {
        transition: 'all .2s ease-in',
      },
    },
    infoBox: {
      marginLeft: `${spacing(4)}px`,
    },
    title: {
      color: palette.common.white,
      textAlign: 'center',
      paddingBottom: `${spacing(3)}px`,
    },
    subtitle: {
      color: palette.common.white,
      opacity: 0.7,
      textAlign: 'center',
    },
  })
);

export default useNoResultsStyles;
