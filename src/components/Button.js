import React from 'react'
import PropTypes from 'prop-types'

import { Button } from '@material-ui/core'

const CustomButtom = ({ disabled, text, ...props }) => (
  <Button
    variant="contained"
    color="primary"
    type="submit"
    disabled={disabled}
    {...props}
  >
    {text}
  </Button>
)

CustomButtom.defaultProps = {
  text: "Let's go!",
}

CustomButtom.propTypes = {
  disabled: PropTypes.bool.isRequired,
}

export default CustomButtom
