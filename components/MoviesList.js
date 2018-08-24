import React from 'react';
import {connect} from "react-redux";
import Movie from "./Movie";
import Pages from "./Pages";
import {View} from "react-native";

const MoviesList = ({movies}) => (
  <View>
    <Pages />
    {movies.map(Movie)}
  </View>
);

export default connect(({movie: {movies: {results}}}) => ({movies: results}))(MoviesList);