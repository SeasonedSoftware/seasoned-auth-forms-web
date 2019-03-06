import { required, length, confirmation } from 'redux-form-validators'
import generateValidate from '../generateValidate'

const errorMessages = {
  required: 'is required',
  invalidEmail: 'is not a valid email',
  doesntMatch: "doesn't match password",
}

const createValidations = () => ({
  password: [required(), length({ min: 8 })],
  passwordConfirmation: [
    required(),
    confirmation({ field: 'password', msg: errorMessages.doesntMatch }),
  ],
})

const createTranslations = ({ language }) =>
  language === 'pt-BR'
    ? {
        [errorMessages.required]: 'Campo obrigatório',
        [errorMessages.invalidEmail]: 'Email inválido',
        [errorMessages.doesntMatch]: 'Está diferente do campo senha',
      }
    : {}

export default generateValidate(createValidations, createTranslations)
