import React from 'react'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { Provider } from 'react-redux'
import { New, Provider as CroodsProvider } from 'croods'
import { Grid, Button } from '@material-ui/core'

import {
  SignIn,
  SignUp,
  ForgetPassword,
  NewPassword,
} from 'seasoned-auth-forms-web'

import store from './store/store'

const theme = createMuiTheme({})

export default props => {
  return (
    <Provider store={store}>
      <CroodsProvider
        baseUrl={
          'https://cors-redirect.herokuapp.com/https://postb.in/lAZ7NVjh'
        }
      >
        <MuiThemeProvider theme={theme}>
          <Grid container justify="space-around">
            <New
              name="signin"
              path="/"
              render={({ create, creating, error }) => (
                <SignIn
                  onSubmit={create}
                  submitting={creating}
                  submitError={error}
                />
              )}
            />
            <New
              name="signup"
              path="/"
              render={({ create, creating, error }) => (
                <SignUp
                  language={'pt-BR'}
                  onSubmit={create}
                  submitting={creating}
                  submitError={error}
                  renderButton={buttonProps => (
                    <Button type="submit" variant="outlined" {...buttonProps}>
                      My customized button
                    </Button>
                  )}
                />
              )}
            />
            <New
              name="forgetPassword"
              path="/"
              render={({ create, creating, error }) => (
                <ForgetPassword
                  language={'pt-BR'}
                  onSubmit={create}
                  submitting={creating}
                  submitError={error}
                />
              )}
            />
            <New
              name="newPassword"
              path="/"
              render={({ create, creating, error }) => (
                <NewPassword
                  onSubmit={create}
                  submitting={creating}
                  submitError={error}
                />
              )}
            />
          </Grid>
        </MuiThemeProvider>
      </CroodsProvider>
    </Provider>
  )
}
