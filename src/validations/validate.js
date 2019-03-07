import {
  required,
  email as validateEmail,
  length,
  confirmation,
} from 'redux-form-validators'
import generateValidate from '../validations/generateValidate'

const errorMessages = {
  required: 'is required',
  invalidEmail: 'is not a valid email',
  doesntMatch: "doesn't match password",
  tooShort: 'is too short (minimum is 8 characters)',
}

const createValidations = ({
  email = true,
  password = true,
  newPassword = false,
  ...props
}) => ({
  ...(email && { email: [required(), validateEmail()] }),
  ...(password && {
    password: newPassword ? [required(), length({ min: 8 })] : [required()],
  }),
  ...(newPassword && {
    passwordConfirmation: [
      required(),
      confirmation({ field: 'password', msg: errorMessages.doesntMatch }),
    ],
  }),
})

const createTranslations = ({ language }) =>
  language === 'pt-BR'
    ? {
        [errorMessages.required]: 'Campo obrigatório',
        [errorMessages.invalidEmail]: 'Email inválido',
        [errorMessages.doesntMatch]: 'Está diferente do campo senha',
        [errorMessages.tooShort]: 'Senha inválida (mínimo 8 caracteres)',
      }
    : {}

export default generateValidate(createValidations, createTranslations)
