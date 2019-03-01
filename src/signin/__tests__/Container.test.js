import React from 'react'
import renderer from 'react-test-renderer'

import Container from '../Container'

jest.mock('formik', () => ({
  Formik: props => (
    <div {...props}>Formik - {props.render({ foo: 'bar' })}</div>
  ),
}))

jest.mock('../Form', () => props => <div {...props}>Form</div>)

it('renders correctly', () => {
  const props = { onSubmit: jest.fn() }
  const tree = renderer.create(<Container {...props} />).toJSON()
  expect(tree).toMatchSnapshot()
})
