import { createStyles, makeStyles } from '@material-ui/core';

const useTileStyles = makeStyles((theme) =>
  createStyles({
    container: ({ variant }) => ({
      position: 'relative',
      height: variant === 'sm' ? '200px' : '430px',
      width: variant === 'sm' ? '365px' : '760px',
      userSelect: 'none',
      marginRight: '20px',
    }),
    img: ({ isTileHoverVisible }) => ({
      width: '100%',
      height: '100%',
      filter: isTileHoverVisible ? 'brightness(50%)' : 'brightness(100%)',
      transition: 'all 0.7s ease',
    }),
    hoverContainer: {
      position: 'absolute',
      top: '0',
      left: '0',
      width: '100%',
      height: '100%',
    },
    relativeWrapper: {
      position: 'relative',
      width: '100%',
      height: '100%',
    },
    hoverHead: {
      padding: '12px 26px',
    },
    hoverTitle: {
      color: theme.palette.common.white,
    },
    hoverPlay: ({ variant }) => ({
      left: '50%',
      top: '50%',
      transform: 'translate(-50%,-50%)',
      zIndex: '1',
      cursor: 'pointer',
      position: 'absolute',
      width: variant === 'sm' ? '70px' : '120px',
      height: variant === 'sm' ? '70px' : '120px',
    }),
    hoverDescription: ({ variant }) => ({
      position: 'absolute',
      color: theme.palette.common.white,
      bottom: '43px',
      left: '26px',
      height: '10%',
      fontSize: variant === 'sm' ? '0.75rem' : '0.875rem',
      '& p': {
        display: '-webkit-box',
        '-webkit-line-clamp': 3,
        '-webkit-box-orient': 'vertical',
        overflow: 'hidden',
      },
    }),
    hoverEmptyIcon: {
      color: theme.palette.grey['400'],
    },
  })
);

export default useTileStyles;
