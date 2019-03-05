import React from 'react'
import PropTypes from 'prop-types'
import { Form } from 'formik'
import { Grid } from '@material-ui/core'

import Field from '../components/Field'
import Button from '../components/Button'
import Loading from '../components/Loading'
import Error from '../components/Error'

const SignInForm = ({ form, submitting, submitError, ...props }) => (
  <Grid
    container
    alignContent={'center'}
    justify={'center'}
    style={{ margin: '30px 0' }}
  >
    <Form>
      <Field
        {...form}
        key={'email'}
        name={'email'}
        label={'Email'}
        type={'email'}
        value={form.values.email}
        fullWidth
      />
      <Field
        {...form}
        key={'password'}
        name={'password'}
        label={'Password'}
        type={'password'}
        value={form.values.password}
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
  </Grid>
)

SignInForm.defaultProps = {
  buttonText: 'Login',
}

SignInForm.propTypes = {
  submitting: PropTypes.bool.isRequired,
  submitError: PropTypes.string.isRequired,
}

export default SignInForm
