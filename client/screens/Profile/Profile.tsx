import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  Modal,
  Pressable
  
} from "react-native";
import * as ImagePicker from 'expo-image-picker';
import styles from './styles';
import { Link } from "@react-navigation/native";


let datos={
  nombre : "Bill",
  apellido : "Gates "


}


export default function Profile ()  {
    
  const [modalVisible, setModalVisible] = useState<any>(false);

    const [selectedImage, setSelectedImage] = useState<any>("");


   

    const openImage= async () =>{
       let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync()
       if(permissionResult.granted === false){
           alert("Permission to access camera is require")
           return
       }
       const pickerResult = await ImagePicker.launchImageLibraryAsync()
       
       console.log(pickerResult)

       if (pickerResult.cancelled === true) {
        return;
      }
    
   
         setSelectedImage( {localUri: pickerResult.uri});
      
  
    }
    return (
     <View style={styles.profile}>
       <View>
       <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
         
          setModalVisible(!modalVisible);
        }}
      > 
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            
            <TouchableOpacity
              
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.options}>X</Text>
            </TouchableOpacity>
            <TouchableOpacity
             
              onPress={() =>openImage()}
            >
              <Text style={styles.options}>Subir img</Text>
            </TouchableOpacity>
            <TouchableOpacity
             
              onPress={() =>openImage()}
            >
              <Text style={styles.options}>Delete Image</Text>
            </TouchableOpacity>
          </View>
        </View>

    </Modal>

    <Pressable
        style={styles.fotocontainer}
        onPress={() => setModalVisible(true)}
      >
        {/* <TouchableHighlight onPress={() =>openImage()} style={styles.fotocontainer} > */}
         <Image       
         style={styles.foto}  
         source={{
           uri:
           selectedImage !== ""
           ? selectedImage.localUri
           :'https://cdn3.f-cdn.com/contestentries/1376995/30494909/5b566bc71d308_thumb900.jpg'
          }}         
          />   
         {/* </TouchableHighlight> */}
         </Pressable>
           <Text style={styles.name}> Hi {datos.nombre} {datos.apellido}</Text>   
          </View>
          <View>
          <TouchableOpacity  >
          <Link to='/CBU' style={styles.options}>
            <Text   >CBU</Text>
            </Link>
            
          <Link to='/PersonalInfo' style={styles.options}>
            <Text  > Personal information</Text>
         </Link>
          </TouchableOpacity>
          </View>
          {/* <View style={styles.containerButton}>
                    <TouchableOpacity style={styles.button} onPress={createNewUser}>

                        <Text style={styles.btntext}>Register</Text>
                    </TouchableOpacity>
                </View> */}


          
     </View>


    )}
    
