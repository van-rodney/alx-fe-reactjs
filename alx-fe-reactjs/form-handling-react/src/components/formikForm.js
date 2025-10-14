import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

const SignupSchema = Yup.object().shape({
  username: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(6, 'Too short').required('Required')
})

export default function FormikForm(){
  return (
    <div style={{maxWidth:400}}>
      <h2>Formik Registration</h2>
      <Formik
        initialValues={{ username:'', email:'', password:'' }}
        validationSchema={SignupSchema}
        onSubmit={async (values, { setSubmitting, resetForm, setStatus }) => {
          setSubmitting(true)
          try{
            // mock API
            await new Promise(res=>setTimeout(res,500))
            setStatus({ success: 'Registered (mock)'} )
            resetForm()
          }catch(err){
            setStatus({ error: 'Registration failed' })
          }finally{ setSubmitting(false) }
        }}
      >
        {({ isSubmitting, status }) => (
          <Form>
            <label>Username</label>
            <Field name="username" />
            <ErrorMessage name="username" component="div" className="error" />

            <label>Email</label>
            <Field name="email" />
            <ErrorMessage name="email" component="div" className="error" />

            <label>Password</label>
            <Field name="password" type="password" />
            <ErrorMessage name="password" component="div" className="error" />

            <button type="submit" disabled={isSubmitting}>Submit</button>
            {status && status.success && <div style={{marginTop:8,color:'green'}}>{status.success}</div>}
            {status && status.error && <div style={{marginTop:8,color:'red'}}>{status.error}</div>}
          </Form>
        )}
      </Formik>
    </div>
  )
}
