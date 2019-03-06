const labels = language =>
  language === 'pt-BR'
    ? {
        email: 'Email',
        password: 'Senha',
        passwordConfirmation: 'Confirme sua senha',
      }
    : {
        email: 'Email',
        password: 'Password',
        passwordConfirmation: 'Password Confirmation',
      }

export default labels
