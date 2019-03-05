import React from 'react'
import PropTypes from 'prop-types'
import { Form } from 'formik'
import { Grid } from '@material-ui/core'

import Field from '../components/Field'
import Button from '../components/Button'
import Loading from '../components/Loading'
import Error from '../components/Error'

const SignInForm = props => {
  const { form, submitting, submitError, renderButton } = props
  const disabled = submitting || Object.entries(form.errors).length > 0

  return (
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
      {!renderButton && (
        <Grid container justify="center">
          <Button text={props.buttonText} disabled={disabled} />
        </Grid>
      )}
      {renderButton && renderButton({ type: 'submit', disabled })}
    </Form>
  )
}

SignInForm.defaultProps = {
  buttonText: 'Login',
}

SignInForm.propTypes = {
  buttonText: PropTypes.string,
  form: PropTypes.object,
  submitError: PropTypes.string,
  submitting: PropTypes.bool,
  renderButton: PropTypes.func,
}

export default SignInForm
