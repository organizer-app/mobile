import { StyleSheet,Platform } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  spacing: {
    padding: Platform.OS === 'ios' ? 10 : 20
  },
  cell: {
    borderTopWidth: 0.5,
    borderTopColor: '#595959',
    borderBottomWidth: 0.5,
    borderBottomColor: '#595959',
    color: 'blue',
  }
});