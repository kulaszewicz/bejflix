import { makeStyles } from '@material-ui/styles';

const useSearchStyles = makeStyles((theme) => ({
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
    paddingLeft: '4px',
  },
}));
export default useSearchStyles;
