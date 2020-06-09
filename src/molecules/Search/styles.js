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
  searchPlaceholder: {
    display: 'flex',
    alignItems: 'center',
  },
  searchRoot: {
    '& label': {
      color: theme.palette.bej.bejflix,
      fontSize: '1.2rem',
    },
    '& svg': {
      color: theme.palette.bej.bejflix,
    },
  },
  inputUnderline: {
    color: theme.palette.common.white,
    '&::after': {
      transform: 'scaleX(1)',
      minWidth: '234px',
    },
  },
  searchLabel: {
    color: theme.palette.bej.bejflix,
  },
  searchInput: {
    color: 'white',
    '& .MuiInputBase-input::after': {
      borderBottom: '2px solid white',
    },
  },
}));
export default useSearchStyles;
