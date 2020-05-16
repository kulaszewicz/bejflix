import { createStyles, makeStyles } from '@material-ui/core';

const useRegisterFormStyles = makeStyles(({ palette }) =>
  createStyles({
    root: {
      width: '450px',
      padding: '0 68px',
      margin: 'auto',
    },
    title: {
      color: palette.common.white,
      textAlign: 'center',
      textShadow: '0px 5px 6px #0000006E',
      fontWeight: 600,
      fontSize: '1.8rem',
    },
    input: {
      width: '100%',
    },
    buttonContainer: {
      display: 'inline-flex',
      marginTop: '0.75rem',
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

export default useRegisterFormStyles;
