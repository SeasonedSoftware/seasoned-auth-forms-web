import React from 'react'

import AuthForm from '../components/Form'
import Field from '../components/Field'

const SignUpForm = ({ form, ...props }) => (
  <AuthForm {...props} form={form}>
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
  </AuthForm>
)

SignUpForm.defaultProps = {
  buttonText: 'SignUp',
}

export default SignUpForm
