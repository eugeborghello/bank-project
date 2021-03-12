import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    root: {
      flexDirection: 'column',
    },
    title: {
     fontSize: 30,
     color: '#413C69',
     fontWeight: '500',
     marginTop: 15,
     marginBottom: 10
    },
    inputContainer: {
      flexDirection: 'column', 
      justifyContent: 'space-between', 
      alignItems: 'center'
    },
    emailInput: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center'
    },
    input: {
      width: '80%', 
      borderBottomColor: 'grey',
      borderBottomWidth: 1,
      padding: 5,
      marginTop: 10
    },
    button: {
        width: '80%',
        marginTop: 30,
        borderRadius: 20
    },
    container: {
        width: '80%',
        marginTop: 30
      },
      buttonGStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#E6E6E6',
        borderWidth: 0.5,
        borderColor: '#fff',
        height: 40,
        borderRadius: 3
      },
      buttonImageIconStyle: {
        padding: 10,
        margin: 8,
        height: 25,
        width: 25,
        resizeMode: 'stretch',
      },
      buttonTextStyle: {
        color: '#000000',
        fontWeight: '500',
        margin: 8,
        textAlign: "center"
      },
      buttonIconSeparatorStyle: {
        backgroundColor: '#fff',
        width: 1,
        height: 40,
      },
      lowText: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 15,
      }
  }); 
  

  export default styles