import { ThemeProvider as MuiThemeProvider } from '@material-ui/core'
import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { muiTheme, theme } from './theme'
import { HomeComponent } from './views/Home'

export const Routes = () => {
  return (
    <MuiThemeProvider theme={muiTheme}>
      <ThemeProvider theme={theme}>
        <Router>
          <Route path="/" exact component={HomeComponent} />
        </Router>
      </ThemeProvider>
    </MuiThemeProvider>
  )
}
