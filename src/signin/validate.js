import { required, email } from 'redux-form-validators'
import generateValidate from '../generateValidate'

const errorMessages = {
  required: 'is required',
  invalidEmail: 'is not a valid email',
}

const createValidations = () => ({
  email: [required(), email()],
  password: [required()],
})

const createTranslations = ({ language }) =>
  language === 'pt-BR'
    ? {
        [errorMessages.required]: 'Campo obrigatório',
        [errorMessages.invalidEmail]: 'Email inválido',
      }
    : {}

export default generateValidate(createValidations, createTranslations)
