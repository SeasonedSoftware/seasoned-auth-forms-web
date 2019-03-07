import * as index from '../'

it('exports SignIn', () => {
  expect(index.SignIn).not.toBeUndefined()
})

it('exports SignUp', () => {
  expect(index.SignUp).not.toBeUndefined()
})

it('exports ForgotPassword', () => {
  expect(index.ForgotPassword).not.toBeUndefined()
})

it('exports NewPassword', () => {
  expect(index.NewPassword).not.toBeUndefined()
})
