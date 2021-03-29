import React, {FC, useState} from 'react';
import { Text, View, Image, TouchableOpacity, Modal, TextInput } from 'react-native';
import { styles } from './ContactListStyles';
import { MaterialIcons, Ionicons, EvilIcons, FontAwesome, AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';

const EditModal = ({editModalVisible, setEditModalVisible, name, image}) => {
    
    
    return (
        <Modal          
                    transparent={true}
                    visible={editModalVisible}
                    onRequestClose={() => {
                    setEditModalVisible(!editModalVisible);
                             }}
                    > 
                <View style={styles.myModal}>
                <View style={styles.modalView}>
                    <Text style={{color: 'grey'}}> Edit</Text>
                    <TouchableOpacity style={styles.close}  onPress={() => setEditModalVisible(false)}>
                        <EvilIcons name="close" size={24} color="black" />  
                    </TouchableOpacity>
                    <View style={styles.photoandname}>
                        <Image source={{uri: image}}
                                style={styles.modalImg}/>
                        <Text style={styles.name}> {name}</Text>
                    </View>

                    <View style={styles.inputsContainer}>
                        <View style={styles.inputContainer}>
                             <Text style={styles.inputTitle}> Account number: </Text>
                             <View style={styles.inputStuff}>
                             <MaterialCommunityIcons name="account-outline" size={24} color="grey" />
                             <TextInput style={styles.input}/>
                             </View>
                        </View>

                        <View style={styles.inputContainer}>
                        <Text style={styles.inputTitle}> Email: </Text>
                             <View style={styles.inputStuff}>
                             <MaterialIcons name="alternate-email" size={20} color="grey" />
                             <TextInput  style={styles.input}/>
                             </View>
                        </View>
                       
                        <View style={styles.inputContainer}>
                        <Text style={styles.inputTitle}> Mobile number: </Text>
                             <View style={styles.inputStuff}>
                             <FontAwesome name="mobile-phone" size={24} color="grey" />
                             <TextInput  style={styles.input}/>
                             </View>
                        </View>
                    </View>

                    <View style={styles.editButtons}>
                       <TouchableOpacity style={styles.backButton} onPress={() => setEditModalVisible(false)}>
                           <Text style={styles.text}> Back </Text>
                       </TouchableOpacity>

                       <TouchableOpacity style={styles.saveButton}>
                           <Text style={styles.text}> Save changes </Text>
                       </TouchableOpacity>
                    </View>

                </View>
                </View>
                </Modal>
    )
}

export default EditModal;
