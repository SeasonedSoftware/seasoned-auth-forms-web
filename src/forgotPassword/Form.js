import React from 'react'

import AuthForm from '../components/Form'
import EmailField from '../components/EmailField'

const ForgotPassword = ({ language, ...props }) => {
  return (
    <AuthForm {...props}>
      <EmailField {...props.form} language={language} />
    </AuthForm>
  )
}

ForgotPassword.defaultProps = {
  buttonText: 'Send email with instructions to reset my password',
  language: 'en-US',
}
export default ForgotPassword
