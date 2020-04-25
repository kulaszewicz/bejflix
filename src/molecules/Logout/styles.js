import { makeStyles } from '@material-ui/styles';

const useLogoutStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyItems: 'center',
    height: '37px',
    userSelect: 'none',
    cursor: 'pointer',
  },
  icon: {
    width: '20px',
    height: '20px',
  },
  name: {
    color: theme.palette.common.white,
    fontSize: '19px',
    paddingRight: '8px',
  },
}));
export default useLogoutStyles;
