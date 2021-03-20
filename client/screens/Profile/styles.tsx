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
  backgroundColor: '#413C69',
  color: '#FFFFFF',
  width: "75%",
  borderRadius: 25,
  textAlign: 'center',
  fontWeight: 'bold',
  marginLeft: '11%',
  padding: "2%",
  fontSize:  27,
  marginTop: '5%'
},
centeredView:{
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  marginTop: 22
},
modalView: {
  margin: 20,
  backgroundColor: "white",
  borderRadius: 20,
  padding: 35,
  alignItems: "center",
  shadowColor: "#000",

},
container: {
  flex: 1,
  paddingTop: 22
 },
 title:{
   margin: 50,
   fontSize:  27,
 },
 item: {
   padding: 10,
   fontSize: 18,
   height: 44,
 },
 principal:{
   padding: 10,
   fontSize: 18,
   textAlign: 'left',
   color: "#9B9B9B"
   
 },
 second:{
   padding: 5,
   fontSize: 15,
   textAlign: 'right',
  
 }

  });
  export default styles;

