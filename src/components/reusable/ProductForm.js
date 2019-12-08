import React, { useState } from "react";

import { withRouter } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import Dropzone from "./Dropzone";
import { toBase64 } from "./helpers";
import spin from "../../assets/icons/spin.svg";

const Input = props => (
  <>
    {!!props.label && (
      <label className="form__label" htmlFor={props.name}>
        {props.label}
      </label>
    )}

    <input
      className="form__input --margin-top"
      type="text"
      {...props}
      id={props.name}
    />
  </>
);

const ProductForm = ({ initialValues = {}, isEditing, history }) => {
  const addProduct = () => {};
  const updateProduct = () => {};
  const uploadImage = () => {};
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = values => async e => {
    e.preventDefault();

    setIsLoading(true);

    let file = null;
    let variables = { ...values };

    if (values.image) {
      file = await toBase64(values.image);
      const {
        data: {
          createUpload: { imageUrl: photoUrl }
        }
      } = await uploadImage({ variables: { file } });
      variables = { ...variables, photoUrl, thumbnailUrl: photoUrl };
    }

    if (isEditing) {
      try {
        await updateProduct({ variables });
        setIsLoading(false);
        return history.push("/management");
      } catch (err) {
        setIsLoading(false);
      }
    }

    try {
      await addProduct({ variables });
      setIsLoading(false);
      history.push("/management");
    } catch (err) {
      setIsLoading(false);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      render={({ values, setFieldValue }) => (
        <Form onSubmit={handleSubmit(values)} className="form__group --limited">
          <Field
            name="name"
            render={({ field }) => <Input {...field} label="Name" />}
          />

          <Field
            name="image"
            render={({ field, form }) => (
              <Dropzone
                label="Image"
                photoUrl={values.photoUrl}
                {...field}
                onChange={image => form.setFieldValue(field.name, image)}
              />
            )}
          />

          <Field
            name="description"
            render={({ field, form }) => (
              <Input {...field} label="Description" />
            )}
          />

          <Field
            name="price"
            render={({ field }) => (
              <Input {...field} type="number" label="Price" />
            )}
          />

          <button
            type="submit"
            className={`management__toolbar-button --stacked ${!!isLoading &&
              "--loading"}`}
          >
            {isLoading ? (
              <img src={spin} className="management__toolbar-button-loader" />
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
