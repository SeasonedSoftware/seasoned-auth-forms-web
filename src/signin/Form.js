import React from 'react'

import AuthForm from '../components/Form'
import Field from '../components/Field'

const SignInForm = props => {
  return (
    <AuthForm {...props}>
      <Field
        {...props.form}
        key={'email'}
        name={'email'}
        label={'Email'}
        type={'email'}
        value={props.form.values.email}
        fullWidth
      />
      <Field
        {...props.form}
        key={'password'}
        name={'password'}
        label={'Password'}
        type={'password'}
        value={props.form.values.password}
        fullWidth
      />
    </AuthForm>
  )
}

SignInForm.defaultProps = {
  buttonText: 'Login',
}
export default SignInForm
