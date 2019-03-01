import React from 'react'
import PropTypes from 'prop-types'
import { Form } from 'formik'
import { Grid } from '@material-ui/core'

import Field from '../components/Field'
import Button from '../components/Button'
import Loading from '../components/Loading'
import Error from '../components/Error'

const SignUpForm = ({ form, submitting, submitError, ...props }) => (
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
    <Grid container justify="center">
      <Button
        text={props.buttonText}
        disabled={submitting || Object.entries(form.errors).length > 0}
      />
    </Grid>
  </Form>
)

SignUpForm.defaultProps = {
  buttonText: 'SignUp',
}

export default SignUpForm
