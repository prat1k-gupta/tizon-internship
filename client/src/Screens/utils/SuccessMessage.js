import React from 'react'
import { Alert } from 'react-bootstrap';

export const SuccessMessage = ({message}) => {
  return <Alert variant={"success"}>{message}</Alert>;
}
