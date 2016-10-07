import assert from 'assert'
import { shallow } from 'enzyme'
import React from 'react'
import ReactPoop from 'components/react-poop'

describe('<ReactPoop />', () => {
  it('renders a div', () => {
    const wrapper = shallow(<ReactPoop />)

    assert(wrapper.equals(<div />))
  })

  it('renders a 💩', () => {
    const wrapper = shallow(<ReactPoop componentsShouldThrow />)

    assert(wrapper.contains('💩'))
  })
})
