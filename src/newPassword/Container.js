import React from 'react'
import { Formik } from 'formik'
import PropTypes from 'prop-types'

import NewPassword from './Form'
import validate from './validate'

const Container = ({ onSubmit, ...props }) => (
  <Formik
    initialValues={{
      password: '',
      passwordConfirmation: '',
    }}
    validate={validate(props)}
    onSubmit={onSubmit}
    render={form => <NewPassword {...props} form={form} />}
  />
)

Container.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
}
export default Container
