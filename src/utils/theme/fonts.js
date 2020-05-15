import { withStyles } from '@material-ui/styles';
export const Fonts = withStyles((theme) => ({
  '@import': theme.fonts || [],
  '@font-face': [
    {
      fontFamily: 'Leelawadee',
      fontWeight: 300,
      src:
        'local("Leelawadee 3-Light"), url("/fonts/leelawadee-ui-semilight-normal.ttf") format("truetype")',
    },
    {
      fontFamily: 'Leelawadee',
      fontWeight: 400,
      src:
        'local("Leelawadee 5-Regular"), url("/fonts/leelawadee-ui-2.ttf") format("truetype")',
    },
    {
      fontFamily: 'Leelawadee',
      fontWeight: 600,
      src:
        'local("Leelawadee 6-SemiBold"), url("/fonts/leelawadee-bold.ttf") format("truetype")',
    },
  ],
}))(() => null);
