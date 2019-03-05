import React from 'react'
import renderer from 'react-test-renderer'

import Form from '../Form'

jest.mock('formik', () => ({
  Form: ({ children, ...props }) => <div {...props}>Form - {children}</div>,
}))

jest.mock('../../components/Field', () => props => <div {...props}>Field</div>)
jest.mock('../../components/Button', () => props => (
  <div {...props}>Button</div>
))
jest.mock('../../components/Loading', () => props => (
  <div {...props}>Loading</div>
))
jest.mock('../../components/Error', () => props => <div {...props}>Error</div>)

it('renders correctly', () => {
  const props = {
    form: {
      values: {},
      errors: {},
    },
    submitError: '',
    submitting: false,
  }
  const tree = renderer.create(<Form {...props} />).toJSON()
  expect(tree).toMatchSnapshot()
})

describe('with validation errors', () => {
  it('renders correctly', () => {
    const props = {
      form: {
        values: {},
        errors: { email: 'is not a valid email' },
      },
      submitError: '',
      submitting: false,
    }
    const tree = renderer.create(<Form {...props} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})

describe('while submitting', () => {
  it('renders correctly', () => {
    const props = {
      form: {
        values: {},
        errors: {},
      },
      submitError: '',
      submitting: true,
    }
    const tree = renderer.create(<Form {...props} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})

describe('with submit errors', () => {
  it('renders correctly', () => {
    const props = {
      form: {
        values: {},
        errors: {},
      },
      submitError: 'Fail',
      submitting: false,
    }
    const tree = renderer.create(<Form {...props} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
