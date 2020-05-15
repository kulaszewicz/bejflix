import { createStyles, makeStyles } from '@material-ui/core';

const useInputStyles = makeStyles(({ palette }) =>
  createStyles({
    root: {
      backgroundColor: palette.bej.bejGrey,
      width: '100%',
      minHeight: '40px',
      '-webkit-appearance': 'none',
      outline: 'none',
      border: 'none',
      borderRadius: '11px',
      fontFamily: 'Leelawadee',
      fontWeight: 600,
      paddingLeft: '1rem',
      '& -webkit-autofill': {
        fontFamily: 'Leelawadee',
        fontWeight: 600,
        backgroundColor: palette.bej.bejGrey,
      },
    },
  })
);

export default useInputStyles;
