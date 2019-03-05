import React, { Component } from 'react'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'

import { SignIn } from 'seasoned-auth-forms-web'

const theme = createMuiTheme({})

export default class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <SignIn onSubmit={values => console.log(values)} />
      </MuiThemeProvider>
    )
  }
}
