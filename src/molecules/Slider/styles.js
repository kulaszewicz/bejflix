import { createStyles, makeStyles } from '@material-ui/core';

const useSliderStyles = makeStyles(
  createStyles({
    container: {
      '& .carousel-item-bejflix': {
        width: '100%',
        '& img': {
          objectFit: 'cover',
        },
      },
    },
  })
);

export default useSliderStyles;
