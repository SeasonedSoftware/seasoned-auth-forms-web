import React from 'react'

import AuthForm from '../components/Form'
import PasswordField from '../components/PasswordField'

const ForgetPassword = ({ language, ...props }) => {
  return (
    <AuthForm {...props}>
      <PasswordField {...props.form} language={language} />
      <PasswordField {...props.form} language={language} confirmation />
    </AuthForm>
  )
}

ForgetPassword.defaultProps = {
  buttonText: 'Set',
  language: 'en-US',
}
export default ForgetPassword
