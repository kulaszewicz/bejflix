import { makeStyles } from '@material-ui/styles';

const useHeaderStyles = makeStyles(({ palette }) => ({
  container: {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    justifyItems: 'center',
    height: '100px',
  },
  search: {
    paddingLeft: '55px',
  },
  logout: {
    marginLeft: 'auto',
  },
  appBar: {
    backgroundColor: palette.secondary.contrastText,
  },
}));
export default useHeaderStyles;
