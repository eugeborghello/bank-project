import { StyleSheet } from 'react-native'

 const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: '20%',
    paddingLeft: '10%',
    alignItems:'flex-start'
   },
   title: {
    fontSize: 30,
    color: "#413C69",
    fontWeight: "500",
    marginBottom: 10,
    alignSelf: "center",
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
   row:{
    flexDirection:'row'
   },
   signup: {
    backgroundColor: '#413C69',
    color: '#FFFFFF',
    width: "75%",
    borderRadius: 25,
    textAlign: 'center',
    fontWeight: 'bold',
    marginLeft: '11%',
    padding: "2%",
    fontSize:  27,
  },
   second:{
     padding: 5,
     fontSize: 15,
     textAlign: 'right',
   }
  
  });
  export default styles;

