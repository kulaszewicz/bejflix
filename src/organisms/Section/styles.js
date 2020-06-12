import { makeStyles } from '@material-ui/styles';

const useSectionStyles = makeStyles((theme) => ({
  container: {
    position: 'relative',
    marginBottom: '45px',
  },
  sectionTitle: ({ variant }) => ({
    marginBottom: variant === 'sm' ? '23px' : '32px',
    color: theme.palette.secondary.main,
    fontWeight: '600',
  }),
}));
export default useSectionStyles;
