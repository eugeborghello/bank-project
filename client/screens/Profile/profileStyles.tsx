import { StyleSheet } from 'react-native'

 const styles = StyleSheet.create({
  profile: {
    flex: 1,
    alignSelf: 'center',
    width:'100%',
    flexDirection: "column",
    backgroundColor: '#ffffff'
},
fotocontainer: {
  justifyContent: "center",
  alignItems: "center",
  margin: 50,
  backgroundColor: '#ffffff'
},
 foto:{
   width: 200,
   height:200,
   borderRadius: 100

 },
 name:{
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize:  30
 },
 options: {
  backgroundColor: 'rgb(167, 197, 235)',
  width: "75%",
  borderRadius: 25,
  //marginLeft: '11%',
  padding: 5,
  marginTop: '5%'
},
optionsText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize:  20,
},
buttons: {
    backgroundColor: 'white'
},
optionsX: {
    color: 'black',
    width: "75%",
    marginLeft: '70%',
    marginTop: 10,
  },
  optionsXText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 22,
  },
centeredView:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    backgroundColor: 'rgba(0,0,0,0.5)'
},
modalView: {
  //margin: 20,
  height: 200,
  width: 300,
  backgroundColor: "white",
  borderColor: 'black',
  borderWidth: 1,
  borderRadius: 5,
  //padding: 5,
  alignItems: "center",
  shadowColor: "#000",
  flexDirection: 'column',
  top: 10
},

  });
  export default styles;