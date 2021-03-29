import React, {FC, useState} from 'react';
import { Text, View, TouchableOpacity, Modal } from 'react-native';
import { styles } from './ContactListStyles';
import { MaterialIcons, Ionicons, EvilIcons, FontAwesome, AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';

const DeleteModal = ({deleteModal, setDeleteModal, name}) => {
    
    
    return (
        <Modal          
                    transparent={true}
                    visible={deleteModal}
                    onRequestClose={() => {
                    setDeleteModal(!setDeleteModal);
                             }}
                    > 
                <View style={styles.myModal}>
                <View style={styles.modalView}>
                    <View style={styles.subandclose}>
                    <Text style={{color: 'grey'}}> Delete contact</Text>
                    
                    </View>
                    <View>
                       <Text style={styles.deleteText}>
                           Are you want to delete your contact {name}?
                           You can not undo this action.
                        </Text> 
                    </View>
                    <View style={styles.editButtons}>
                       <TouchableOpacity style={styles.backButton} onPress={() => setDeleteModal(false)}>
                           <Text style={styles.text}> Back </Text>
                       </TouchableOpacity>

                       <TouchableOpacity style={styles.deleteButton}>
                           <Text style={styles.text}> Delete </Text>
                       </TouchableOpacity>
                    </View>

                </View>
                </View>
                </Modal>
    )
}

export default DeleteModal;
