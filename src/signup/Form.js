import React from 'react'

import AuthForm from '../components/Form'
import Field from '../components/Field'
import buildLabels from '../components/labels'

const SignUpForm = ({ form, ...props }) => {
  const labels = buildLabels(props.language)
  return (
    <AuthForm {...props} form={form}>
      <Field
        {...form}
        key={'signUpEmail'}
        name={'email'}
        label={labels.email}
        type={'email'}
        value={form.values.email}
        fullWidth
      />
      <Field
        {...form}
        key={'signUpPassword'}
        name={'password'}
        label={labels.password}
        type={'password'}
        value={form.values.password}
        fullWidth
      />
      <Field
        {...form}
        key={'signUpPasswordConfirmation'}
        name={'passwordConfirmation'}
        label={labels.passwordConfirmation}
        type={'password'}
        value={form.values.passwordConfirmation}
        fullWidth
      />
    </AuthForm>
  )
}

SignUpForm.defaultProps = {
  buttonText: 'SignUp',
  language: 'en-US',
}

export default SignUpForm
