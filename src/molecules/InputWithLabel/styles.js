import { createStyles, makeStyles } from '@material-ui/core';

const useInputWithLabelStyles = makeStyles(({ palette }) =>
  createStyles({
    root: {},
    label: {
      color: '#B8B4B4',
      textTransform: 'capitalize',
      padding: '0.7rem 0',
    },
    errorHelperText: {
      padding: `5px 0`,
      color: palette.bej.bejflix,
      height: '14px',
      zIndex: 2,
      display: 'block',
      pointerEvents: 'none',
    },
  })
);

export default useInputWithLabelStyles;
