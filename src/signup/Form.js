import React from 'react'
import PropTypes from 'prop-types'
import { Form } from 'formik'
import { Grid } from '@material-ui/core'

import Field from '../components/Field'
import Button from '../components/Button'
import Loading from '../components/Loading'
import Error from '../components/Error'

const SignUpForm = props => {
  const { form, submitting, submitError, renderButton, buttonText } = props
  const disabled = submitting || Object.entries(form.errors).length > 0
  return (
    <Form>
      <Field
        {...form}
        key={'signUpEmail'}
        name={'email'}
        label={'Email'}
        type={'email'}
        value={form.values.email}
        fullWidth
      />
      <Field
        {...form}
        key={'signUpPassword'}
        name={'password'}
        label={'Password'}
        type={'password'}
        value={form.values.password}
        fullWidth
      />
      <Field
        {...form}
        key={'signUpPasswordConfirmation'}
        name={'passwordConfirmation'}
        label={'Password Confirmation'}
        type={'password'}
        value={form.values.passwordConfirmation}
        fullWidth
      />
      {submitError && <Error>{submitError}</Error>}
      {submitting && <Loading style={{ alignSelf: 'center' }} />}
      {renderButton({ text: buttonText, type: 'submit', disabled })}
    </Form>
  )
}

SignUpForm.defaultProps = {
  buttonText: 'SignUp',
  renderButton: buttonProps => (
    <Grid container justify="center">
      <Button {...buttonProps} />
    </Grid>
  ),
}

SignUpForm.propTypes = {
  buttonText: PropTypes.string,
  form: PropTypes.object,
  submitError: PropTypes.string,
  submitting: PropTypes.bool,
  renderButton: PropTypes.func,
}

export default SignUpForm
