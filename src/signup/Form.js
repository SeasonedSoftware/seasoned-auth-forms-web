import React from 'react'

import AuthForm from '../components/Form'
import EmailField from '../components/EmailField'
import PasswordField from '../components/PasswordField'

const SignUpForm = ({ form, language, ...props }) => {
  return (
    <AuthForm {...props} form={form}>
      <EmailField {...form} language={language} />
      <PasswordField {...form} language={language} />
      <PasswordField {...form} language={language} confirmation />
    </AuthForm>
  )
}

SignUpForm.defaultProps = {
  buttonText: 'SignUp',
  language: 'en-US',
}

export default SignUpForm
