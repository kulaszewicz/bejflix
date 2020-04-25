import { createStyles, makeStyles } from '@material-ui/core';

const useBackgroundImageStyles = makeStyles((theme) =>
  createStyles({
    backgroundImage: ({ blur, overlayColor, src, zIndex }) => ({
      height: '100%',
      overflow: 'hidden',
      position: 'absolute',
      width: '100%',
      zIndex: zIndex,
      color: theme.palette.common.white,
      '&:after': {
        background: `linear-gradient(
            ${overlayColor},
            ${overlayColor}
          ),
          url(${src}) no-repeat center center`,
        backgroundSize: 'cover',
        content: "''",
        display: 'inline-block',
        filter: `blur(${blur}px)`,
        height: '100%',
        transform: 'scale(1.05)',
        width: '100%',
      },
    }),
  })
);

export default useBackgroundImageStyles;
