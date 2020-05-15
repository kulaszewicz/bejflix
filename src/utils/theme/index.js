import { createMuiTheme } from '@material-ui/core/styles';
import { merge } from '~/utils/merge';
import defaultPalette from './palette';

export const createThemeOptions = ({
  palette = {},
  boxShadow = {},
  fontFamily = 'Leelawadee',
  ...rest
}) => {
  palette = merge(defaultPalette, palette);
  return merge(
    {
      palette,
      boxShadow,
      typography: {
        fontFamily: `${fontFamily}, Roboto, Helvetica, Arial, sans-serif`,
      },
    },
    rest
  );
};

export default createMuiTheme(createThemeOptions({}));
