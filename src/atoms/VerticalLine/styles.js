import { createStyles, makeStyles } from '@material-ui/core';

const useVerticalLineStyles = makeStyles(({ palette }) =>
  createStyles({
    root: {
      width: '1px',
      height: '100%',
      borderRight: `1px solid ${palette.bej.bejGrey}`,
    },
  })
);

export default useVerticalLineStyles;
