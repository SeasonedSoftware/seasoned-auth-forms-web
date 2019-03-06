import React from 'react'

import AuthForm from '../components/Form'
import Field from '../components/Field'
import buildLabels from '../components/labels'

const SignInForm = props => {
  const labels = buildLabels(props.language)
  return (
    <AuthForm {...props}>
      <Field
        {...props.form}
        key={'email'}
        name={'email'}
        label={labels.email}
        type={'email'}
        value={props.form.values.email}
        fullWidth
      />
      <Field
        {...props.form}
        key={'password'}
        name={'password'}
        label={labels.password}
        type={'password'}
        value={props.form.values.password}
        fullWidth
      />
    </AuthForm>
  )
}

SignInForm.defaultProps = {
  buttonText: 'Login',
  language: 'en-US',
}
export default SignInForm
