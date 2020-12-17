import React from "react";
import { useFormik } from "formik";
import * as Yup from 'yup';



const initialValues = {
  name: '',
  email: '',
  channel: '',
}

const onSubmit = values => {
  console.log('Form data', values)
}

// const validate = values => {
//   let errors = {}

//   if(!values.name)
//   {
//       errors.name = 'Required'
//   }

//   if(!values.email)
//   {
//       errors.email = 'Required'
//   } 
//   else if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i.test(values.email))
//   {
//       errors.email = 'Ivalid email format'
//   }

//   if(!values.channel)
//   {
//       errors.channel = 'Required'
//   }

//   return errors
// }

const validationSchema = Yup.object({
  name: Yup.string().required('Required'),
  email: Yup.string()
    .email('Invalid email format')
    .required('Required'),
  channel: Yup.string().required('Required')
})


const OldYoutubeForm = () => 
{
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validate
  });

  console.log('Visited Fields', formik.touched)
  console.log('Form errors', formik.errors)
  // console.log("Form values", formik);

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className='form-control'>
          <label htmlFor="name">Name</label>
          <Field
            type="text"
            id="name"
            name="name"
            onChange={formik.handleChange}
            value={formik.values.name}
            onBlur={formik.handleBlur}
            />
          <div>
            {
              formik.touched.name && 
              formik.errors.name && 
              <p className="error">{formik.errors.name}</p>
            }
          </div>
        </div>

        <div className='form-control'>    
          <label htmlFor="email">Email</label>
          <Field
            type="email"
            id="email"
            name="email"
            onChange={formik.handleChange}
            values={formik.values.email}
            onBlur={formik.handleBlur}
            />
          <div>
            {
              formik.touched.email && 
              formik.errors.email && 
              <p className='error'>{formik.errors.email}</p>
            }
          </div>
        </div>

        <div className="form-control">
          <label htmlFor="channel">Channel</label>
          <Field
            type="text"
            id="channel"
            name="channel"
            onChange={formik.handleChange}
            values={formik.values.channel}
            onBlur={formik.handleBlur}
          />
          <div>
            {
              formik.touched.channel && 
              formik.errors.channel && 
              <p className='error'>{formik.errors.channel}</p>
            }
          </div>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default OldYoutubeForm;