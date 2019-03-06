import React from 'react'
import Field from './Field'

export default props => {
  return (
    <Field
      {...props}
      key={'email'}
      name={'email'}
      label={'Email'}
      type={'email'}
      value={props.values.email}
      fullWidth
    />
  )
}
