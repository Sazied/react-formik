import React from 'react'

const TextError = (props) => {
    return (
        <p className='error'>
            {props.children}
        </p>
    )
}

export default TextError
