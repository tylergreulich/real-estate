import { createMuiTheme } from '@material-ui/core'

export const theme = {
  main: {
    primary: '#247ba0',
    secondary: '#f0f3bd',
    white: '#fff',
    grey: '#faf7f5',
    darkGrey: '#68717e',
    lightGrey: '#aeb1b5',
    black: '#000'
  }
}

export const muiTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#247ba0'
    },
    secondary: {
      main: '#f0f3bd'
    }
  }
})
