import React from "react";

import { Router, Route } from "react-router";

import ProductForm from "./components/reusable/ProductForm";
import store from "./store";

import "./assets/styles/main.sass";

export default {
  title: "Product Form"
};

export const createProductForm = () => <ProductForm />;

const initialValues = {
  name: "Product name",
  description: "Product's description",
  photoUrl: "https://i.pravatar.cc/300",
  price: 15.49
};

export const editProductForm = () => (
  <ProductForm initialValues={initialValues} isEditing />
);
