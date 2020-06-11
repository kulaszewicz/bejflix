import { createStyles, makeStyles } from '@material-ui/core';

const useSearchResultsStyles = makeStyles(({ spacing, palette }) =>
  createStyles({
    root: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr',
      gridRowGap: `${spacing(3)}px`,
      gridColumnGap: `${spacing(2)}px`,
      '& img': {
        objectFit: 'cover',
      },
    },
    tile: {
      width: '100%',
    },
    skeleton: {
      height: '200px',
      width: '100%',
      backgroundColor: palette.secondary.grey,
      transform: 'scale(1, 1)',
    },
  })
);

export default useSearchResultsStyles;
