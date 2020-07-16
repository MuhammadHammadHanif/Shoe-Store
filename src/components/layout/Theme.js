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
    searchFieldContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginLeft: 'auto',
      borderBottom: '1px solid #e5e5e5',
      borderTop: '1px solid #e5e5e5',
    },
    searchFieldInput: {
      padding: '5px 0px',
      fontFamily: 'Montserrat',
      fontSize: '0.8rem',
    },
    logo: {
      '&:hover': {
        background: 'transparent',
      },
    },
    logoText: {
      fontFamily: 'Montserrat',
      fontWeight: '300',
      fontSize: '2rem',
    },
    secondaryLogoText: {
      fontWeight: '500',
    },
  },
  overrides: {
    MuiTab: {
      root: {
        minHeight: 20,
      },
    },
  },
});
