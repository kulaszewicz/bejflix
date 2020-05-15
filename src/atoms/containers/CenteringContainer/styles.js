import { createStyles, makeStyles } from '@material-ui/core';

const useCenteringContainerStyles = makeStyles(
  createStyles({
    root: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    },
  })
);

export default useCenteringContainerStyles;
