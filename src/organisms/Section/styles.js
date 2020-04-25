import { makeStyles } from '@material-ui/styles';

const useSectionStyles = makeStyles((theme) => ({
  container: {
    position: 'relative',
    marginBottom: '45px',
  },
  sectionTitle: ({ variant }) => ({
    marginBottom: variant === 'sm' ? '23px' : '32px',
    color: theme.palette.common.white,
  }),
}));
export default useSectionStyles;
