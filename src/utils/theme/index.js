import { createMuiTheme } from '@material-ui/core/styles';
import { merge } from '~/utils/merge';

export const createThemeOptions = ({
  palette = {},
  boxShadow = {},
  fontFamily = 'Leelawadee',
  ...rest
}) => {
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
