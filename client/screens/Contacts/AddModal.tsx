import React, {FC, useState} from 'react';
import { Text, View, Image, TouchableOpacity, Modal, TextInput } from 'react-native';
import { styles } from './ContactListStyles';
import { MaterialIcons, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';

const AddModal = ({addModalVisible, setAddModalVisible}) => {
    
   
    return (
        <Modal          
                    transparent={true}
                    visible={addModalVisible}
                    onRequestClose={() => {
                    setAddModalVisible(!addModalVisible);
                             }}
                    > 
                <View style={styles.myModal}>
                <View style={styles.modalView}>
                    <Text style={{color: 'grey'}}> Add contact</Text>

                    <View style={styles.inputsContainer}>
                        <View style={styles.inputContainer}>
                             <Text style={styles.inputTitle}> Name and Lastname: </Text>
                             <View style={styles.inputStuff}>
                             <MaterialCommunityIcons name="account-outline" size={24} color="grey" />
                             <TextInput style={styles.input}/>
                             </View>
                        </View>

                        <View style={styles.inputContainer}>
                        <Text style={styles.inputTitle}> Account number: </Text>
                             <View style={styles.inputStuff}>
                             <MaterialCommunityIcons name="account-outline" size={24} color="grey" />
                             <TextInput  style={styles.input}/>
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
                       <TouchableOpacity style={styles.backButton} onPress={() => setAddModalVisible(false)}>
                           <Text style={styles.text}> Back </Text>
                       </TouchableOpacity>

                       <TouchableOpacity style={styles.saveButton}>
                           <Text style={styles.text}> Save contact</Text>
                       </TouchableOpacity>
                    </View>

                </View>
                </View>
                </Modal>
    )
}

export default AddModal;