import React from 'react';
import {  Navigate } from 'react-router-dom';
import { getToken } from '../../AllGrowXStorage/AllGrowXStorage';

const PrivateRoute = ({ children }) => {
    const token =  getToken()
    if (!token) {
      return <Navigate to="/adveriserauthLogin" />;
    }
    return children;
  };
export default PrivateRoute;