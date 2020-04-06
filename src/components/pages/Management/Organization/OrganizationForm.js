import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Field, Form, Formik } from 'formik';
import { updatedDiff } from 'deep-object-diff';

import Dropzone from '../../../reusable/Dropzone'
import { updateOrganization } from '../../../../actionCreators/organization'
import { uploadImage } from "../../../../api/images";
import Input from "../../../reusable/Input";
import spin from "../../../../assets/icons/spin.svg";

const OrganizationForm = ({ initialValues }) => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = values => async e => {
    e.preventDefault()
    setIsLoading(true)

    let variables = { ...values };

    if (values.logo instanceof File) {
      const photoUrl = await uploadImage(values.logo)

      variables = { ...variables, logo: photoUrl };
    }

    await dispatch(updateOrganization(updatedDiff(initialValues, variables)))
    setIsLoading(false)
  }

  return (
      <Formik
        initialValues={initialValues}
      >
        {({ values, dirty, setFieldValue }) => (
          <Form onSubmit={handleSubmit(values)} className="form__group --limited">
            <Field
                name="name"
            >
              {({ field }) =>  <Input {...field} label="Name" />}
            </Field>
            <label className="form__label" htmlFor={"theme"}>
              Theme
            </label>
            <Field as="select" name="theme">
              <option value="dark">Dark</option>
              <option value="light">Light</option>
            </Field>
            <Field
              name="logo"
            >
              {({ field }) => (
                <Dropzone
                  label="Logo"
                  photoUrl={values.logo}
                  {...field}
                  onChange={image => setFieldValue(field.name, image)}
                />
              )}
            </Field>
            <button
              type="submit"
              className={`management__toolbar-button --stacked ${!!isLoading &&
                "--loading"}`}
              disabled={!dirty}
            >
              {isLoading ? (
                <img
                  src={spin}
                  className="management__toolbar-button-loader"
                  alt="Loading spinner"
                />
              ) : "Save"}
            </button>
          </Form>
        )}
      </Formik>
  )
}

export default OrganizationForm