import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import Switch from "react-switch";
import { useDispatch } from "react-redux";
import { Formik, Form, Field } from "formik";
import { updatedDiff } from 'deep-object-diff';

import Dropzone from "./Dropzone";
import spin from "../../assets/icons/spin.svg";
import Input from "../reusable/Input"
import { createProduct, updateProduct } from '../../actionCreators/product'
import { uploadImage } from "../../api/images";

const ProductForm = ({ initialValues = { name: '', description: '', photoUrl: '', price: 15.15, active: true }, isEditing, history }) => {
  const dispatch = useDispatch()
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = values => async e => {
    e.preventDefault();

    setIsLoading(true);

    let variables = { ...values };

    if (values.photoUrl instanceof File) {
      const photoUrl = await uploadImage(values.photoUrl)

      variables = { ...variables, photoUrl, thumbnailUrl: photoUrl };
    }

    if (isEditing) {
      try {
        await dispatch(updateProduct(parseInt(initialValues.id), updatedDiff(initialValues, variables)));
        setIsLoading(false);
        return history.push("/management/products");
      } catch (err) {
        setIsLoading(false);
      }
    }

    try {
      await dispatch(createProduct(variables));
      setIsLoading(false);
      return history.push("/management/products");
    } catch (err) {
      setIsLoading(false);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      render={({ values, dirty, setFieldValue }) => (
        <Form onSubmit={handleSubmit(values)} className="form__group --limited">
          <Field
            name="name"
          >
            {({ field }) => <Input {...field} label="Name" />}
          </Field>

          <Field
            name="photoUrl"
          >
            {({ field }) => (
              <Dropzone
                label="Image"
                photoUrl={values.photoUrl}
                {...field}
                onChange={image => setFieldValue(field.name, image)}
              />
            )}
          </Field>

          <Field
            name="description"
          >
            {({ field }) => (
              <Input {...field} label="Description" />
            )}
          </Field>

          <Field
            name="price"
          >
            {({ field }) => (
              <Input {...field} type="number" label="Price" />
            )}
          </Field>

          <Field
            name="active"
          >
            {({ field }) => (
              <>
                <label className="form__label" htmlFor={field.name}>
                  Active
                </label>
                <Switch
                  checked={field.value}
                  onChange={active => setFieldValue(field.name, active)}
                  handleDiameter={12}
                  onColor="#E74C3C"
                  onHandleColor="#FFFFFF"
                  offColor="#DBDBDB"
                  offHandleColor="#ADADAD"
                  boxShadow={null}
                  activeBoxShadow={null}
                  height={24}
                  width={44}
                  uncheckedIcon={false}
                  checkedIcon={false}
                />
              </>
            )}
          </Field>

          <button
            type="submit"
            className={`management__toolbar-button --stacked ${!!isLoading &&
              "--loading"}`}
            disabled={(isEditing && !dirty)}
          >
            {isLoading ? (
              <img
                src={spin}
                className="management__toolbar-button-loader"
                alt="Loading spinner"
              />
            ) : isEditing ? (
              "Update Product"
            ) : (
                  "Add Product"
                )}
          </button>
        </Form>
      )}
    />
  );
};

export default withRouter(ProductForm);
