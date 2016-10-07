import assert from 'assert'
import { shallow } from 'enzyme'
import React from 'react'
import ReactComponentErrors from 'components/react-component-errors'

describe('<ReactComponentErrors />', () => {
  it('renders a div', () => {
    const wrapper = shallow(<ReactComponentErrors />)

    assert(wrapper.equals(<div />))
  })

  it('throws an error', () => {
    const wrapper = shallow(<ReactComponentErrors />)

    assert.throws(
      () => wrapper.instance().throwError({ componentsShouldThrow: true }),
      /Component error/
    )
  })
})
