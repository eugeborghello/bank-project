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
import styles from './profileStyles';
import { Link } from "@react-navigation/native";
import { AntDesign, Feather, MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';
import HandleDrawer from '../../components/Nav/HandleDrawer';

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
           alert("Permission to access camera is required")
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
     <HandleDrawer/>
       <View style={styles.fotocontainer1}>
      <Image source={require("../../assets/images/Profile2.jpg")} 
            style={styles.foto1}/>
      </View>
      
       <Modal
        
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
                  style={styles.optionsX}
            >
              <AntDesign name="closecircleo" size={24} color="black" 
                    style={{ backgroundColor: 'white' }}/>
            </TouchableOpacity>

            <View style={styles.buttons} >
            <TouchableOpacity
                  onPress={() =>openImage()}
                  style={styles.options}
            >
              <Feather name="upload" size={20} color="black" />
              <Text style={styles.optionsText}> Upload image</Text>
            </TouchableOpacity>
            <TouchableOpacity
                  onPress={() =>openImage()}
                  style={styles.options}
            >
              <MaterialCommunityIcons name="delete-off-outline" size={22} color="black" />
              <Text style={styles.optionsText}>Delete Image</Text>
            </TouchableOpacity>
            </View>
          </View>
          </View>
    </Modal>
    

    <View style={styles.generalView} >
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
           :'https://www.seekpng.com/png/full/114-1149972_avatar-free-png-image-avatar-png.png'
          }}         
          />   
         {/* </TouchableHighlight> */}
         </Pressable>
         <View style={styles.greeting}>
           <Text style={styles.name}> Hi {datos.nombre} {datos.apellido}</Text>   
         </View>

          <View style={styles.infoButtonsView}>
            
          <TouchableOpacity style={styles.infoButton}>
          <Link to='/CBU' >
            <FontAwesome name="bank" size={20} color="black" />
            <Text style={styles.infoButtonText} >CBU</Text>
            </Link>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.infoButton}>
          <Link to='/PersonalInfo'>
            <AntDesign name="edit" size={20} color="black" />
            <Text style={styles.infoButtonText}> Personal information</Text>
         </Link>
         </TouchableOpacity>
         
          </View>
          {/* <View style={styles.containerButton}>
                    <TouchableOpacity style={styles.button} onPress={createNewUser}>

                        <Text style={styles.btntext}>Register</Text>
                    </TouchableOpacity>
                </View> */}

                </View>
          
     </View>


    )}
    
