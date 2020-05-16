import { createStyles, makeStyles } from '@material-ui/core';

const useInputWithLabelStyles = makeStyles(() =>
  createStyles({
    root: {},
    label: {
      color: '#B8B4B4',
      textTransform: 'capitalize',
      padding: '0.7rem 0',
    },
  })
);

export default useInputWithLabelStyles;
