import React from 'react';
import {View} from 'react-native';
import {range} from "lodash";
import {connect} from "react-redux";
import Page from "./Page";
import styles from './Pages.style';

const renderPage = (i) => <Page key={i} i={i}/>;

const Pages = ({page, total_pages}) => {
  if (total_pages > 1) {
    return <View style={styles.pages}>{range(1, total_pages > 30 ? 30 : total_pages).map(renderPage)}</View>
  } else {
    return null
  }
};

export default connect(({movie: {movies: {total_pages, page}}}) => ({total_pages, page}))(Pages);