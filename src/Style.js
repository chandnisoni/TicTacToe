import { StyleSheet } from 'react-native';

var Style = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    flex: 2,
    backgroundColor: 'powderblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    flex: 6,
    backgroundColor: 'pink'
  },
  inputButton: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 0.5,
      borderColor: '#91AA9D'
  },
  inputButtonText: {
      fontSize: 22,
      fontWeight: 'bold',
      color: 'white'
  },
  onPressButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.5,
    backgroundColor: 'purple'
  },
  inputRow: {
      flex: 1,
      flexDirection: 'row'
  },
  footer:{
    flex: 2,
    backgroundColor: 'grey'
  }
});

export default Style;
