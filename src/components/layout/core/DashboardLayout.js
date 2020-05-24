import React from "react";

import { ToastContainer } from "react-toastify";
import Navbar from "../Navbar";

export const DashboardLayout = ({ children }) => {
  return (
    <>
      <Navbar />

      {children}

      <ToastContainer />
    </>
  );
};
