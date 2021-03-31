import React from "react";
import { Formik, Form, Field, ErrorMessage, FieldArray, FastField } from "formik";
import * as Yup from 'yup';
import TextError from "./TextError";
import { Link } from 'react-router-dom';



const initialValues = {
  name: '',
  email: '',
  channel: '',
  comments: '',
  socials: {
    facebook: '',
    twitter: '',
  },
  phoneNumbers: ['', ''],
  phNumbers: [''],
}

const onSubmit = (values, onSubmitProps) => {
  console.log('Form data', values)
  console.log('On Submit Props', onSubmitProps)
  onSubmitProps.setSubmitting(false)
  onSubmitProps.resetForm()
}

const validationSchema = Yup.object({
  name: Yup.string().required('Required'),
  email: Yup.string()
    .email('Invalid email format')
    .required('Required'),
  channel: Yup.string().required('Required')
})

const validateComments = value => {
  let error
  console.log(error)
  if (!value) {
    error = 'Required'
  }
  return error
}


const YoutubeForm = () => 
{
  console.log({Field})

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
        // validateOnMount
        // validateOnChange={false}
        // validateOnBlur={false}
      >
        {
          formik => {
            console.log('Formik Props', formik)
            return (
              <Form>
              <div className='form-control'>
                <label htmlFor="name">Name</label>
                <Field
                  type="text"
                  id="name"
                  name="name"
                  />
                <ErrorMessage name='name' component={TextError} />
              </div>
      
              <div className='form-control'>    
                <label htmlFor="email">Email</label>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  />
                <ErrorMessage name='email'>
                  {
                    (errorMsg) => 
                      <p className='error' >{errorMsg}</p>
                  }
                </ErrorMessage>
              </div>
      
              <div className="form-control">
                <label htmlFor="channel">Channel</label>
                <Field
                  type="text"
                  id="channel"
                  name="channel"
                />
                <ErrorMessage name='channel'>
                  {
                    (errorMsg) =>
                      <p className="error">{errorMsg}</p>
                  }
                </ErrorMessage>
              </div>
      
              <div className="form-control">
                <label htmlFor="comments">Comments</label>
                <Field 
                  as="textarea"
                  id="comments"
                  name="comments"
                  validate={validateComments}
                />
                <ErrorMessage name="comments" component={TextError} />
              </div>
      
              <div className="form-control">
                <label htmlFor="address">Address</label>
                <FastField name="address">
                  {
                    (props) => {
                      const { field, form, meta } = props
                      // console.log('Render props', props)
                      // console.log('Fast Field')
                      return (
                        <div>
                          <input type='text' id="address" {...field} />
                          {
                            meta.touched && 
                            meta.error &&
                            <p>{meta.error}</p>
                          }
                        </div>
                      )
                    }
                  }
                </FastField>
              </div>
      
              <div className="form-control" >
                <label htmlFor="facebook">Facebook Profile</label>
                <Field 
                  type="text"
                  id="facebook"
                  name="socials.facebook"      
                />
              </div>
      
              <div className="form-control" >
                  <label htmlFor="twitter" >Twitter Profile</label>
                  <Field name="socials.twitter">
                    {
                      (props) => {
                        const { field, form, meta } = props;
      
                        return(
                          <div>
                            <input type="text" id="twitter" {...field} />
                            {
                              meta.touched && meta.error &&
                            <p>{meta.error}</p>
                            }
                          </div>
                        )
                      }
                    }
                  </Field>
              </div>
      
              <div className="form-control">
                <label htmlFor="primaryPh">Primary phone number</label>
                <Field
                  type="text"
                  id="primaryPh"
                  name="phoneNumbers[0]"
                />
              </div>
      
              <div className="form-control">
                <label htmlFor="secondaryPh">Secondary phone number</label>
                <Field name="phoneNumbers[1]">
                    {
                      (props) => {
                        const { field, form, meta } = props;
      
                        return(
                          <input type="text" id="secondaryPh" {...field} />
                        )
                      }
                    }
                </Field>
              </div>
      
              <div className="form-control">
                <label htmlFor="phNumbers">List of phone numbers</label>
                <FieldArray name="phNumbers">
                    {
                      (fieldArrayProps) => {
                        // console.log(fieldArrayProps)
                        const { push, remove, form } = fieldArrayProps;
                        const { values } = form;
                        const { phNumbers } = values
                        // console.log('Form Validation', form.errors)
                        return (
                          <div>
                            {
                              phNumbers.map((phNumber, index) => (
                                <div key={index}>
                                  <Field type="text" name={`phNumbers[${index}]`} />
                                  {
                                    (index > 0) && 
                                    <button type="button" onClick={() => remove(index)}> - </button>
                                  }
                                  <button type="button" onClick={() => push('')}> + </button>
                                </div>
                              ))
                            }
                          </div>
                        )
                      }
                    }
                </FieldArray>   
              </div>
      
              <button 
                type="submit"
                disabled={!formik.isValid || formik.isSubmitting}
              >
                Submit
              </button>
            </Form>
            )
          }
        }
      </Formik>
    </>
  );
};

export default YoutubeForm;