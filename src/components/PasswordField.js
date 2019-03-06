import React from 'react'
import Field from './Field'

const labels = language =>
  language === 'pt-BR'
    ? {
        password: 'Senha',
        passwordConfirmation: 'Confirme sua senha',
      }
    : {
        password: 'Password',
        passwordConfirmation: 'Password Confirmation',
      }

export default props => {
  const { language, confirmation } = props
  const field = confirmation ? 'passwordConfirmation' : 'password'
  return (
    <Field
      {...props}
      name={field}
      label={labels(language)[field]}
      type={'password'}
      value={props.values[field]}
      fullWidth
    />
  )
}
