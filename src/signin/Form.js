import React from 'react'

import AuthForm from '../components/Form'
import EmailField from '../components/EmailField'
import PasswordField from '../components/PasswordField'

const SignInForm = ({ language, ...props }) => {
  return (
    <AuthForm {...props}>
      <EmailField {...props.form} language={language} />
      <PasswordField {...props.form} language={language} />
    </AuthForm>
  )
}

SignInForm.defaultProps = {
  buttonText: 'Login',
  language: 'en-US',
}
export default SignInForm
