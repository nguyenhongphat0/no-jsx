import React from 'react'

const nojsx = tag => {
    let registeredProps = null

    function Tag(children) {
        return React.createElement(tag, registeredProps, children)
    }
    Tag.props = function (props) {
        registeredProps = props
        return this;
    }
    return Tag
}

const div = nojsx('div')
const button = nojsx('button')

export { nojsx, div, button }