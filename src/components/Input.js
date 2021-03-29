import React from 'react'
import { Field, ErrorMessage } from 'formik'

import TextError from './TextError'


const Input = (props) =>
{
    const { name, value, label, ...rest } = props

    return (
        <div className="form-control">
            <label htmlFor={name}>{label}</label>
            <Field name={name}>
                {
                    ({field, meta}) => {
                        console.log(field)
                        return (
                            <input
                                id={name}
                                value={value}
                                {...field}
                                {...rest}
                            />
                        )
                    }
                }
            </Field>
            <ErrorMessage name={name} component={TextError} />
        </div>
    )
}

export default Input