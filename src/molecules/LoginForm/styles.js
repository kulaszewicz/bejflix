import { createStyles, makeStyles } from '@material-ui/core';

const useLoginFormStyles = makeStyles(({ palette }) =>
  createStyles({
    root: {
      width: '450px',
      padding: '0 68px',
      margin: '0 auto',
    },
    title: {
      color: palette.common.white,
      textAlign: 'center',
      textShadow: '0px 5px 6px #0000006E',
      fontWeight: 600,
      fontSize: '1.8rem',
      marginBottom: '1.5rem',
    },
    input: {
      width: '100%',
      margin: '0.25rem 0',
    },
    buttonContainer: {
      display: 'inline-flex',
      marginTop: '2rem',
    },
    button: {
      width: '140px',
      fontSize: '0.75rem',
      fontWeight: '600',
      padding: '0.5rem',
      borderRadius: '0.75rem',
      margin: '0 5px',
    },
  })
);

export default useLoginFormStyles;
