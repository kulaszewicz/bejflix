import { createStyles, makeStyles } from '@material-ui/core';

const useSliderStyles = makeStyles(
  createStyles({
    container: {
      '& .carousel-item-bejflix': {
        marginLeft: '20px',
      },
    },
  })
);

export default useSliderStyles;
