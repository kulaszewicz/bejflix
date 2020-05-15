import { createStyles, makeStyles } from '@material-ui/core';

const useInputWithLabelStyles = makeStyles(({ palette }) =>
  createStyles({
    root: {},
    label: {
      color: palette.bej.bejGrey,
      textTransform: 'capitalize',
      padding: '0.7rem 0',
    },
  })
);

export default useInputWithLabelStyles;
