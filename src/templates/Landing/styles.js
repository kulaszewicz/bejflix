import { makeStyles } from '@material-ui/styles';

const useLandingStyles = makeStyles(({ spacing }) => ({
  container: {
    paddingLeft: '26px',
    paddingTop: '16px',
    paddingRight: '26px',
    position: 'relative',
    minHeight: '100vh',
  },
  sections: {
    marginTop: `${spacing(3)}px`,
  },
}));
export default useLandingStyles;
