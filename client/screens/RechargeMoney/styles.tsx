import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  root: {
    flexDirection: "column",
    padding: 10,
    marginTop: 30
  },
  title: {
    fontSize: 30,
    color: "#413C69",
    fontWeight: "500",
    marginBottom: 10,
    alignSelf: "center",
  },
  container: {
    flexDirection: 'row', 
    width: '90%', 
    justifyContent: 'space-evenly',
    alignSelf: 'center',
    marginVertical: 20
  },
  input: {
    borderBottomColor: "grey",
    borderBottomWidth: 1,
  },
  containerA: {
    width: '70%', 
    alignSelf: 'center'
  },
  loginButton: {
    width: "80%",
    marginTop: 10,
    borderRadius: 7,
    alignSelf: 'center',
    backgroundColor: "#413C69",
  },
  loginStyle: {
    color: "#FFFFFF",
    margin: 8,
    textAlign: "center",
  },
  mercado: {
    alignSelf: 'center', 
    marginVertical: 15
  },
  mercadoLogo: {
    width: 320, 
    height: 100
  }
});

export default styles;
