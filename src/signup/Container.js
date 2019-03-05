import React from 'react'
import { Formik } from 'formik'
import PropTypes from 'prop-types'

import Form from './Form'
import validate from './validate'

const SignUp = ({ onSubmit, ...props }) => (
  <Formik
    initialValues={{
      email: '',
      password: '',
      passwordConfirmation: '',
    }}
    validate={validate(props)}
    onSubmit={onSubmit}
    render={form => <Form {...props} form={form} />}
  />
)

SignUp.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
}

export default SignUp
