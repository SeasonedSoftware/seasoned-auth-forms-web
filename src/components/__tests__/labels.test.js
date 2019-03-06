import labels from '../labels'

it('matches the object with en-US labels', () => {
  const language = 'en-US'

  expect(labels(language)).toMatchObject({
    email: 'Email',
    password: 'Password',
    passwordConfirmation: 'Password Confirmation',
  })
})

it('matches the object with pt-BR labels', () => {
  const language = 'pt-BR'

  expect(labels(language)).toMatchObject({
    email: 'Email',
    password: 'Senha',
    passwordConfirmation: 'Confirme sua senha',
  })
})
