import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {connect} from "react-redux";
import {fetchMoviesForPage} from "../actions/movie";
import styles from './Pages.style';

const wrapWithPage = (onClick, i) => () => onClick(i);

const Page = ({i, onClick}) => (
  <TouchableOpacity style={styles.page}  key={i}  onPress={wrapWithPage(onClick, i)}>
    <Text>{i.toString()}</Text>
  </TouchableOpacity>
);

export default connect(null, {onClick: fetchMoviesForPage})(Page);