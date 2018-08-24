import React from 'react';
import {Text, View} from "react-native";

const Movie = ({id, title}) => (
  <View key={id}>
    <Text>{title}</Text>
  </View>
);

export default Movie;