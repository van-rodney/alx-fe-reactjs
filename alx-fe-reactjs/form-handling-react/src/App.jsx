import React, { useState } from 'react'
import RegistrationForm from './components/RegistrationForm'
import FormikForm from './components/formikForm'

export default function App(){
  const [showFormik, setShowFormik] = useState(false)
  return (
    <div style={{padding:20}}>
      <h1>Form handling demo</h1>
      <button onClick={()=>setShowFormik(s=>!s)}>{showFormik? 'Show Controlled' : 'Show Formik'}</button>
      {showFormik ? <FormikForm/> : <RegistrationForm/>}
    </div>
  )
}
