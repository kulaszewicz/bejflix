import { createStyles, makeStyles } from '@material-ui/core';

const useSliderStyles = makeStyles(({ palette }) =>
  createStyles({
    container: {
      '& .carousel-item-bejflix': {
        width: '100%',
        '& img': {
          objectFit: 'cover',
        },
      },
    },
    skeleton: ({ variant }) => ({
      height: variant === 'sm' ? '200px' : '430px',
      width: variant === 'sm' ? '365px' : '760px',
      backgroundColor: palette.secondary.grey,
      transform: 'scale(1, 1)',
      marginRight: '20px',
    }),
  })
);

export default useSliderStyles;
