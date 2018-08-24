import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  pages: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    marginBottom: 15,
    flexWrap: 'wrap',
    marginTop: 5
  },
  page: {
    borderWidth: 1,
    borderColor:'black',
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center'
  }
});