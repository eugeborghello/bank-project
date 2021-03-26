import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  root: {
    flexDirection: "column",
    padding: 30,
  },
    background: {
        flex: 1,
    flexDirection: "column"
      },
      container:{
        maxHeight:'100%'
      },
      logo:{
        width: 280,
        height: 280,
        marginLeft: '15%',
        marginTop:'-5%'
      },
      text: {
        color: '#413C69',
        textAlign: 'center',
        fontWeight: 'bold',
        marginTop:'-15%',
        fontSize:  18,
      },
      text2: {
        color: '#413C69',
        textAlign: 'center',
        fontWeight: 'bold',
        marginTop:'10%',
        fontSize:  30,
      },
      containerButtons:{
          marginBottom:'25%',
          marginTop:'30%',
          position:'relative'
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
      login: {
        backgroundColor: '#413C69',
        color: '#FFFFFF',
        width: "75%",
        borderRadius: 25,
        textAlign: 'center',
        fontWeight: 'bold',
        marginLeft: '11%',
        padding: "2%",
        fontSize:  27,
        marginTop: '10%'
      }
});

export default styles;
