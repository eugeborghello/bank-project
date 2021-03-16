import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    background: {
        flex: 1,
    flexDirection: "column"
      },
      logo:{
        width: 280,
        height: 280,
        marginLeft: '15%',
        marginTop: '10%'
      },
      text: {
        color: '#413C69',
        textAlign: 'center',
        fontWeight: 'bold',
        marginTop: 'auto',
        fontSize:  18,
      },
      text2: {
        color: '#413C69',
        textAlign: 'center',
        fontWeight: 'bold',
        marginTop: '20%',
        fontSize:  30,
      },
      containerButtons:{
          marginTop:'-30%',
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
        marginTop: '70%'
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
