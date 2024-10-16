import { experimental_extendTheme as extendTheme } from '@mui/material/styles'

const APP_BAR_HEIGHT = '58px'
const BOARD_BAR_HEIGHT = '60px'
const BOARD_CONTENT_HEIGHT = `calc(100vh - ${APP_BAR_HEIGHT} - ${BOARD_BAR_HEIGHT} )`
const COLUMN_HEADER_HEIGHT = '50px'
const COLUMN_FOOTER_HEIGHT = '56px'

const theme = extendTheme({
  trello: {
    appBarHeight: APP_BAR_HEIGHT,
    boardBarHeight: BOARD_BAR_HEIGHT,
    BoardContentHeight: BOARD_CONTENT_HEIGHT,
    ColumnHeaderHeight: COLUMN_HEADER_HEIGHT,
    ColumnFooterHeight: COLUMN_HEADER_HEIGHT
  },
  colorSchemes: {
    light: {
      palette: {
        // primary: {
        //   main: '#ff5252'
        // }
      }
    },
    dark: {
      palette: {
        // primary: {
        //   main: '#000'
        // }
      }
    }
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          '*::-webkit-scrollbar': {
            width: '8px',
            height: '8px'
          },
          '*::-webkit-scrollbar-thumb': {
            backgroundColor: '#ced0da'
          },
          '*::-webkit-scrollbar-thumb:hover': {
            backgroundColor: '#bfc2cf'
          }
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none'
        }
      }
    },
    MuiInputLabel: {
      styleOverrides: {
        root: () => {
          return {}
        }
      }
    },
    MuiTypography: {
      styleOverrides: {
        root: () => {
          return { '&.MuiTypography-body1': { fontSize: '0.875rem' } }
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: () => {
          return {
            fontSize: '0.875rem',
            '& fieldset': { borderWidth: '1px !important' }
          }
        }
      }
    }
  }
})

export default theme
