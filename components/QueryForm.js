import React from 'react';
import {reduxForm} from "redux-form";
import {compose} from "redux";
import {connect} from "react-redux";
import {fetchMovies} from "../actions/movie";
import FormField from "./FormField";
import {View, Button, Text, TouchableOpacity} from "react-native";
import styles from './QueryForm.style';

const QueryForm = ({handleSubmit}) => (
  <View style={styles.container}>
    <View className={styles.search}>
      <Text>Enter search query</Text>
      <FormField name='query'/>
    </View>

    <TouchableOpacity style={styles.searchBtn} onPress={handleSubmit}>
      <Text>Search</Text>
    </TouchableOpacity>
  </View>
);


export default compose(
  connect(null, {onSubmit: fetchMovies}),
  reduxForm({form: 'query'}),
)(QueryForm);