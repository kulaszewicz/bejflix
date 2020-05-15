import { createStyles, makeStyles } from '@material-ui/core';

const useVerticalContainerStyles = makeStyles(
  createStyles({
    container: ({ gutter }) => ({
      display: 'grid',
      justifyItems: 'center',
      gridRowGap: `${gutter}px`,
    }),
  })
);

export default useVerticalContainerStyles;
