import React from 'react'
import { Field, ErrorMessage } from 'formik'

import TextError from './TextError'


const Select = (props) =>
{
    const { name, label, options, ...rest } = props

    return (
        <div className='form-control'>
            <label htmlFor={name}>{label}</label>
            <Field
                name={name}
                {...rest}
            >
                {({field, meta, form}) => {
                    // console.log('FIELD', field)
                    return(
                        <select
                            id={name}
                            {...field}
                        >
                            {
                                options.map(option => {
                                    return(
                                        <option
                                            key={option.value}
                                            value={option.value}
                                        >
                                            {option.key}
                                        </option>
                                    )
                                })
                            }
                        </select>
                    )
                }}
            </Field>
            <ErrorMessage name={name} component={TextError} />
        </div>
    )
}

export default Select