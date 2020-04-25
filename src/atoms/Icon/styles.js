import { createStyles, makeStyles } from '@material-ui/core';

const useIconStyles = makeStyles(({ palette, spacing }) =>
  createStyles({
    root: ({ colorVariant, size }) => ({
      color: {
        // NOTE: if you want a color which is not included below, please add it.
        bright: palette.common.white,
        dark: palette.common.black,
        error: palette.error.main,
        success: palette.success.main,
      }[colorVariant],
      fontSize: `${spacing(size)}px`,
    }),
  })
);

export default useIconStyles;
