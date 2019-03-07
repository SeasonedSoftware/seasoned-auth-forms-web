import validate from '../validate'

it('requires email and password', () => {
  const props = { newPassword: true }
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

it('requires equal values to password and passwordConfirmation', () => {
  const props = { newPassword: true }
  const values = {
    email: 'foobar',
    password: 'foo',
    passwordConfirmation: 'bar',
  }

  expect(validate(props)(values).passwordConfirmation).toEqual(
    "doesn't match password",
  )
})

it('requires at least 8 characters to password', () => {
  const props = { newPassword: true }
  const values = {
    email: 'foobar',
    password: 'foo',
    passwordConfirmation: 'bar',
  }

  expect(validate(props)(values).password).toEqual(
    'is too short (minimum is 8 characters)',
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

  it('requires equal values to password and passwordConfirmation', () => {
    const values = {
      email: 'foobar',
      password: 'foo',
      passwordConfirmation: 'bar',
    }

    expect(
      validate({ newPassword: true, ...props })(values).passwordConfirmation,
    ).toEqual('Está diferente do campo senha')
  })

  it('requires at least 8 characters to password', () => {
    const values = {
      email: 'foobar',
      password: 'foo',
      passwordConfirmation: 'bar',
    }

    expect(validate({ newPassword: true, ...props })(values).password).toEqual(
      'Senha inválida (mínimo 8 caracteres)',
    )
  })
})

describe('test options', () => {
  it('validates just email and password with no options', () => {
    const props = {}
    const values = {
      email: '',
      password: '',
      passwordConfirmation: '',
    }

    expect(validate(props)(values)).toMatchObject({
      email: 'is required',
      password: 'is required',
    })
  })

  it('validates just password with email false', () => {
    const props = { email: false }
    const values = {
      email: '',
      password: '',
      passwordConfirmation: '',
    }

    expect(validate(props)(values)).toMatchObject({
      password: 'is required',
    })
  })

  it('DOES NOT validate password length when newPassword is false', () => {
    const props = { email: false }
    const values = {
      email: '',
      password: '123123',
      passwordConfirmation: '',
    }

    expect(validate(props)(values)).toMatchObject({})
  })

  it('validates password length when newPassword is true', () => {
    const props = { email: false, newPassword: true }
    const values = {
      email: '',
      password: '123123',
      passwordConfirmation: '123123',
    }

    expect(validate(props)(values)).toMatchObject({
      password: 'is too short (minimum is 8 characters)',
    })
  })

  it('validates passwordConfirmation presence when newPassword is true', () => {
    const props = { email: false, newPassword: true }
    const values = {
      email: '',
      password: '12312312',
      passwordConfirmation: '',
    }

    expect(validate(props)(values)).toMatchObject({
      passwordConfirmation: 'is required',
    })
  })

  it('validates passwordConfirmation when newPassword is true', () => {
    const props = { email: false, newPassword: true }
    const values = {
      email: '',
      password: '12312312',
      passwordConfirmation: '123',
    }

    expect(validate(props)(values)).toMatchObject({
      passwordConfirmation: "doesn't match password",
    })
  })
})
