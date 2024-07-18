/* eslint-disable react/prop-types */
// src/components/ToastProvider.js

import { Toaster } from 'react-hot-toast';

const ToastProvider = ({ children }) => (
  <>
    {children}
    <Toaster
      position="top-center"
      reverseOrder={false}
    />
  </>
);

export default ToastProvider;
