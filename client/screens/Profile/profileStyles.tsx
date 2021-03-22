import { StyleSheet } from 'react-native'

 const styles = StyleSheet.create({
  profile: {
    flex: 1,
    alignSelf: 'center',
    width:'100%',
    flexDirection: "column",
    backgroundColor: 'white',
    top: 20
},
fotocontainer1: {
  marginLeft: -10,
  justifyContent: 'center', 
  alignItems: 'center'
},
 foto1:{
  alignSelf: 'flex-start',
   position: 'relative'
   
 },
 generalView: {
   flexDirection: 'column',
   justifyContent: 'space-evenly',
   alignItems: 'center'
 },
fotocontainer: {
  justifyContent: "center",
  alignItems: "center",
  margin: 30,
},
 foto:{
   width: 150,
   height: 150,
   borderRadius: 100
 },
 greeting: {
    top: 20,
    alignSelf: 'center'
 },
 name:{
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize:  25
 },
 infoButton: {
  backgroundColor: 'white',
  width: '40%',
  height: '100%',
  borderRadius: 16,
  borderWidth: 1,
  borderColor: 'black',
  alignSelf: 'center',
  flexDirection: 'row',
  justifyContent: 'space-evenly',
  padding: 5,
  marginLeft: 7,
  marginRight: 4
 },
 infoButtonsView: {
    flexDirection: 'row',
    //justifyContent: 'space-around',
    alignContent: 'center',
    top: 40
 },
 infoButtonText: {
  textAlign: 'center',
  fontWeight: 'bold',
  fontSize: 14,
 },
 options: {
  backgroundColor: 'white',
  width: "75%",
  borderRadius: 20,
  borderWidth: 2,
  padding: 5,
  marginTop: '5%',
  flexDirection: 'row',

},
optionsText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
},
buttons: {
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    top: 15
},
optionsX: {
    marginTop: 10,
    alignSelf: 'flex-end',
    marginRight: 20,
    top: 10,
  },
centeredView:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    backgroundColor: 'rgba(0,0,0,0.5)'
},
modalView: {
  height: 180,
  width: 250,
  backgroundColor: "white",
  borderColor: 'black',
  borderWidth: 1,
  borderRadius: 5,
  alignItems: "center",
  shadowColor: "#000",
  flexDirection: 'column',
  shadowOffset: {
	width: 0,
	height: 9,
  },
  shadowOpacity: 0.50,
  shadowRadius: 12.35,

elevation: 19,
  //top: 10
},

  });
  export default styles;