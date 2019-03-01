import React from 'react'
import { Form } from 'formik'
import { Grid } from '@material-ui/core'

import Field from '../components/Field'
import Button from '../components/Button'

const SignInForm = ({ form: { values, ...form }, submitting, ...props }) => (
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
        value={values.email}
        fullWidth
      />
      <Field
        {...form}
        key={'password'}
        name={'password'}
        label={'Password'}
        type={'password'}
        value={values.password}
        fullWidth
      />
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

export default SignInForm
