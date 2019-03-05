import React from 'react'
import PropTypes from 'prop-types'
import { Grid } from '@material-ui/core'
import { Form as FormikForm } from 'formik'

import Button from './Button'
import Loading from './Loading'
import Error from './Error'

const AuthForm = props => {
  const { form, children } = props
  const { submitting, submitError, renderButton, buttonText } = props
  const disabled = submitting || Object.entries(form.errors).length > 0

  return (
    <FormikForm>
      {children}
      {submitError && <Error>{submitError}</Error>}
      {submitting && <Loading style={{ alignSelf: 'center' }} />}
      {renderButton({ text: buttonText, type: 'submit', disabled })}
    </FormikForm>
  )
}

AuthForm.defaultProps = {
  renderButton: buttonProps => (
    <Grid container justify="center">
      <Button {...buttonProps} />
    </Grid>
  ),
}

AuthForm.propTypes = {
  buttonText: PropTypes.string,
  form: PropTypes.object,
  submitError: PropTypes.string,
  submitting: PropTypes.bool,
  renderButton: PropTypes.func,
}

export default AuthForm
