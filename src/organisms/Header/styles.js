import { makeStyles } from '@material-ui/styles';

const useHeaderStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    width: '100%',
    paddingRight: '52px',
    alignItems: 'center',
    justifyItems: 'center',
    height: '120px',
  },
  search: {
    paddingLeft: '55px',
  },
  logout: {
    marginLeft: 'auto',
  },
}));
export default useHeaderStyles;
