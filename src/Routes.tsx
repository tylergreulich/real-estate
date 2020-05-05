import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { theme } from './theme'
import { HomeComponent } from './views/Home'

export const Routes = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Route path="/" exact component={HomeComponent} />
      </Router>
    </ThemeProvider>
  )
}
