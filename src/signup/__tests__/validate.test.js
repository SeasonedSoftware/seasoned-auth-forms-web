import validate from '../validate'

it('requires email and password', () => {
  const props = {}
  const values = {
    email: '',
    password: '',
    passwordConfirmation: '',
  }

  expect(validate(props)(values)).toMatchObject({
    email: 'is required',
    password: 'is required',
    passwordConfirmation: 'is required',
  })
})

it('requires a valid email', () => {
  const props = {}
  const values = {
    email: 'foobar',
    password: '',
    passwordConfirmation: '',
  }

  expect(validate(props)(values).email).toEqual('is not a valid email')
})

it('requires a valid email', () => {
  const props = {}
  const values = {
    email: 'foobar',
    password: 'foo',
    passwordConfirmation: 'bar',
  }

  expect(validate(props)(values).passwordConfirmation).toEqual(
    "doesn't match password",
  )
})

describe('With language pt-BR', () => {
  const props = { language: 'pt-BR' }
  it('returns the is required error in portuguese', () => {
    const values = {
      email: '',
      password: '',
    }

    expect(validate(props)(values)).toMatchObject({
      email: 'Campo obrigatório',
      password: 'Campo obrigatório',
    })
  })

  it('requires a valid email in portuguese', () => {
    const values = {
      email: 'foobar',
      password: '',
    }

    expect(validate(props)(values).email).toEqual('Email inválido')
  })
})
