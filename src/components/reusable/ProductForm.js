import React from 'react'

import { Formik, Form, Field } from 'formik'
import gql from 'graphql-tag'
import { useMutation } from 'react-apollo-hooks'

const ADD_PRODUCT = gql`
  mutation CreateProduct(
    $name: String!,
    $thumbnailUrl: String!,
    $photoUrl: String!,
    $price: Int!,
    $description: String!
  ){
    createProduct(
      name: $name,
      thumbnailUrl: $thumbnailUrl,
      photoUrl: $photoUrl,
      price: $price,
      quantityLimit: 99,
      description: $description
    ) {
      id
      name
      price
      photoUrl
      thumbnailUrl
      description
    }
  }
`

const ProductForm = () => {
  const [addProduct, { data }] = useMutation(ADD_PRODUCT)

  const variables = {
    name: "Product name",
    thumbnailUrl: "https://placehold.it/300x300",
    photoUrl: "https://placehold.it/1000x1000",
    price: 19.99,
    description: "This is product's description. Not the very long type."
  }

  return (
    <Formik
      initialValues={variables}
      render={({ values, setFieldValue }) => (
        <Form
          onSubmit={() => addProduct({ variables: values })}
        >
          <Field
            name="name"
            render={({ field }) => <input type="text" {...field} />}
          />

          <Field
            name="description"
            render={({ field }) => <input type="text" {...field} />}
          />

          <Field
            name="price"
            render={({ field }) => <input type="number" {...field} />}
          />

          <button type="submit">Add Product</button>
        </Form>
      )}
    />
  )
}

export default ProductForm
