import React from 'react'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as Yup from 'yup'

function Login () {
  return (
    <div className="d-flex justify-content-center">
      <div className="col-12 col-sm-10 col-md-8 col-lg-4">
        <h1 className="text-center">Connexion</h1>
        <Formik
          initialValues={{ login: '', password: '' }}
          validationSchema={Yup.object({
            login: Yup.string()
              .required('Un identifiant est nécessaire')
              .min(4, 'Votre identifiant doit comporter au moins 4 caractères'),
            password: Yup.string()
              .required('Un mot de passe est nécessaire')
              .min(8, 'Votre mot de passe doit comporter au moins 8 caractères'),
          })}
          onSubmit={() => {}}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="mb-3">
                <label htmlFor="login" className="form-label">Identifiant</label>
                <Field type="text" className="form-control" id="login" name="login"/>
                <ErrorMessage name="login" component="div" className="alert alert-warning"/>
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Mot de passe</label>
                <Field type="password" className="form-control" id="password" name="password"/>
                <ErrorMessage name="password" component="div" className="alert alert-warning"/>
              </div>
              <div className="d-grid gap">
                <button type="submit" className="btn btn-primary btn-expand" disabled={isSubmitting}>Valider</button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  )
}

export default Login
