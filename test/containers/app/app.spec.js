import assert from 'assert'
import sinon from 'sinon'
import { shallow } from 'enzyme'
import React from 'react'
import { App } from 'containers/app'
import ReactPoop from 'components/react-poop'

describe('<App />', () => {
  let props

  beforeEach(() => {
    props = {
      componentsShouldThrow: true,
      throwErrorActions: {
        inComponents: sinon.spy(),
        inReducers: sinon.spy(),
        inSagas: sinon.spy(),
        inActions: sinon.spy(),
        inSelectors: sinon.spy(),
      },
      apiActions: {
        getStatus: sinon.spy(),
      },
    }
  })

  it('passes the componentsShouldThrow prop to ReactComponentErrors', () => {
    const wrapper = shallow(<App {...props} />)
    const element = wrapper.find('ReactComponentErrors')

    assert.equal(element.prop('componentsShouldThrow'), props.componentsShouldThrow)
  })

  it('passes the componentsShouldThrow prop to ReactPoop', () => {
    const wrapper = shallow(<App {...props} />)
    const element = wrapper.find(ReactPoop)

    assert.equal(element.prop('componentsShouldThrow'), props.componentsShouldThrow)
  })

  it('fires the inComponents action', () => {
    const wrapper = shallow(<App {...props} />)
    const element = wrapper.find('button').at(0)
    element.simulate('click')

    assert(props.throwErrorActions.inComponents.called)
  })

  it('fires the inActions action', () => {
    const wrapper = shallow(<App {...props} />)
    const element = wrapper.find('button').at(1)
    element.simulate('click')

    assert(props.throwErrorActions.inActions.called)
  })

  it('fires the inReducers action', () => {
    const wrapper = shallow(<App {...props} />)
    const element = wrapper.find('button').at(2)
    element.simulate('click')

    assert(props.throwErrorActions.inReducers.called)
  })

  it('fires the inSagas action', () => {
    const wrapper = shallow(<App {...props} />)
    const element = wrapper.find('button').at(3)
    element.simulate('click')

    assert(props.throwErrorActions.inSagas.called)
  })

  it('fires the inSelectors action', () => {
    const wrapper = shallow(<App {...props} />)
    const element = wrapper.find('button').at(4)
    element.simulate('click')

    assert(props.throwErrorActions.inSelectors.called)
  })

  it('fires the getStatus 404 action', () => {
    const wrapper = shallow(<App {...props} />)
    const element = wrapper.find('button').at(5)
    element.simulate('click')

    assert(props.apiActions.getStatus.called)
    assert.equal(props.apiActions.getStatus.args[0][0], 404)
  })

  it('fires the getStatus 500 action', () => {
    const wrapper = shallow(<App {...props} />)
    const element = wrapper.find('button').at(6)
    element.simulate('click')

    assert(props.apiActions.getStatus.called)
    assert.equal(props.apiActions.getStatus.args[0][0], 500)
  })
})
