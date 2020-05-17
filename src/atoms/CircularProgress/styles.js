import { createStyles, makeStyles } from '@material-ui/core';

const useCircularProgressStyles = makeStyles(({ palette }) =>
  createStyles({
    root: {
      marginBottom: '20px',
      overflow: 'hidden',
      color: palette.primary.main,
      display: 'block !important',
      margin: '3rem auto',
      width: '120px !important',
      height: '120px !important',
    },
  })
);

export default useCircularProgressStyles;
