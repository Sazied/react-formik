import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormikControl from './FormikControl'
import { Effect } from 'formik-effect'
import { Link } from 'react-router-dom'

const FormikContainer = () => 
{
    const dropdownOptions = [
        { key: 'Select an Option', value:'' },
        { key: 'Option 1', value: 'option1' },
        { key: 'Option 2', value: 'option2' },
        { key: 'Option 3', value: 'option3' },
    ]

    const radioOptions = [
        { key: 'Option 1', value: 'rOption1' },
        { key: 'Option 2', value: 'rOption2' },
        { key: 'Option 3', value: 'rOption3' },
    ]

    const checkboxOptions = [
        { key: 'Option 1', value: 'cOption1' },
        { key: 'Option 2', value: 'cOption2' },
        { key: 'Option 3', value: 'cOption3' },
    ]

    const initialValues = {
        email: '',
        description: '',
        selectOption: '',
        radioOption: '',
        checkboxOption: [],
        date: null,
    }

    const validationSchema = Yup.object({
        email: Yup.string().required('Required'),
        description: Yup.string().required('Required'),
        selectOption: Yup.string().required('Required'),
        radioOption: Yup.string().required('Required'),
        checkboxOption: Yup.array().min(1, 'Required'),
        date: Yup.date().required('Required').nullable(),
    })

    const onSubmit = values => console.log('Form Data', values)

    return (
        <>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                {
                    formik => (
                        <Form>
                            <Effect 
                                onValidationChange={(a, b) =>
                                {
                                    console.log(a, b);
                                }}
                            />
                            <FormikControl 
                                control='input'
                                type='email'
                                label='Email'
                                name='email'
                                value={initialValues.email}
                            />
                            <FormikControl 
                                control='textarea'
                                label='Description'
                                name='description'
                            />
                            <FormikControl 
                                control='select'
                                label='Select an Option'
                                name='selectOption'
                                options={dropdownOptions}
                            />
                            <FormikControl 
                                control='radio'
                                label='Select an Option'
                                name='radioOption'
                                options={radioOptions}
                            />
                            <FormikControl 
                                control='checkbox'
                                label='Pick Options'
                                name='checkboxOption'
                                options={checkboxOptions}
                            />
                            <FormikControl 
                                control='date'
                                label='Pick a Date'
                                name='date'
                            />
                            <button type='submit'>Submit</button>
                        </Form>
                    )
                }
            </Formik>
        </>
    )
}

export default FormikContainer