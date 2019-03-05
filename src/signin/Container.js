import React from 'react'
import { Formik } from 'formik'
import PropTypes from 'prop-types'

import Form from './Form'
import validate from './validate'

const SignIn = ({ onSubmit, ...props }) => (
  <Formik
    initialValues={{
      email: '',
      password: '',
    }}
    validate={validate(props)}
    onSubmit={onSubmit}
    render={form => <Form {...props} form={form} />}
  />
)

SignIn.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}

export default SignIn
