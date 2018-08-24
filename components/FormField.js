import React from 'react';
import {Field} from 'redux-form';
import {TextInput, View} from "react-native";

const WrappedInput = ({
                        input, ...props
                      }) => (
  <TextInput
    style={{borderWidth: 1, borderColor:'black', padding:5}}
    {...input}
    {...props}
  />
);

const FormField = props => (
  <Field
    component={WrappedInput}
    {...props}
  />
);

export default FormField;
