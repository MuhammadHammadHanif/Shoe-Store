import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

const shoeBlack = '#282528';
const shoeWhite = '#fff';

export default createMuiTheme({
  palette: {
    common: {
      black: `${shoeBlack}`,
      white: `${shoeWhite}`,
    },
    primary: {
      main: `${shoeWhite}`,
    },
    secondary: {
      main: `${shoeBlack}`,
    },
  },
  typography: {
    secondaryTab: {
      fontFamily: 'Montserrat',
      color: '#000',
      textTransform: 'none',
      fontWeight: 400,
      fontSize: '0.75rem',
      minWidth: 10,
      padding: '0px 8px',
    },
  },
  overrides: {
    // Style sheet name ⚛️
    MuiTab: {
      root: {
        minHeight: 20,
      },
    },
  },
});
