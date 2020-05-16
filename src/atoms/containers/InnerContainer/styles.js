import { createStyles, makeStyles } from '@material-ui/core';

const useInnerContainerStyles = makeStyles(({ spacing }) =>
  createStyles({
    root: ({ height }) => ({
      alignItems: 'center',
      display: 'grid',
      gridTemplateColumns: '9999fr 1fr 9999fr',
      minHeight: `${spacing(height)}px`,
      padding: `${spacing(2)}px`,
    }),
    leftChild: {
      display: 'flex',
      height: '100%',
      justifyContent: 'flex-start',
    },
    middleChild: {
      display: 'flex',
      height: '100%',
      justifyContent: 'center',
    },
    rightChild: {
      height: '100%',
      display: 'flex',
      justifyContent: 'flex-end',
    },
  })
);

export default useInnerContainerStyles;
