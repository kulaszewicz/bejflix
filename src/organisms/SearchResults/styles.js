import { createStyles, makeStyles } from '@material-ui/core';

const useSearchResultsStyles = makeStyles(({ spacing }) =>
  createStyles({
    root: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr',
      gridRowGap: `${spacing(3)}px`,
      gridColumnGap: `${spacing(2)}px`,
      '& img':{
        objectFit: 'cover',
      },
    },
    tile: {
      width: '100%',
    },
  })
);

export default useSearchResultsStyles;
