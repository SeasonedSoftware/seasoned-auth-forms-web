import React from 'react'
import { Formik } from 'formik'
import PropTypes from 'prop-types'

import ForgetPassword from './Form'
import validate from './validate'

const Container = ({ onSubmit, ...props }) => (
  <Formik
    initialValues={{
      email: '',
    }}
    validate={validate(props)}
    onSubmit={onSubmit}
    render={form => <ForgetPassword {...props} form={form} />}
  />
)

Container.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
}
export default Container
