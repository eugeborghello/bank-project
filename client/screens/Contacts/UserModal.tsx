import React, {FC, useState} from 'react';
import { Text, View, Image, TouchableOpacity, Modal } from 'react-native';
import { styles } from './ContactListStyles';
import { MaterialIcons, Ionicons, EvilIcons, FontAwesome, AntDesign } from '@expo/vector-icons';
import EditModal from './EditModal';
import DeleteModal from './DeleteModal';

const UserModal = ({modalVisible, setModalVisible, name, image}) => {

    const [editModalVisible, setEditModalVisible] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false);

    return (
       
        <Modal          
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                    setModalVisible(!modalVisible);
                             }}
                    > 
                 <EditModal 
                    editModalVisible={editModalVisible}
                    setEditModalVisible={setEditModalVisible}
                    name={name}
                    image={image}/>
                <DeleteModal
                    deleteModal={deleteModal}
                    setDeleteModal={setDeleteModal}
                    name={name}
                />
                <View style={styles.myModal}>
                
                <View style={styles.modalView}>
                    <TouchableOpacity style={styles.close}  onPress={() => setModalVisible(false)}>
                        <EvilIcons name="close" size={24} color="black" />  
                    </TouchableOpacity>
                    <View style={styles.photoandname}>
                        <Image source={{uri: image}}
                                style={styles.modalImg}/>
                        <Text style={styles.name}> {name}</Text>
                    </View>

                    <View style={styles.buttons}>

                        <TouchableOpacity style={styles.button}>
                            <FontAwesome name="send-o" size={18} color="white"/>
                            <Text style={styles.text}> Transfer</Text>
                        </TouchableOpacity>

                        
                        <TouchableOpacity style={styles.button} 
                            onPress={() => setEditModalVisible(true)}>
                            <AntDesign name="edit" size={20} color="white" />
                            <Text style={styles.text}> Edit contact</Text>
                        </TouchableOpacity>

                        
                        <TouchableOpacity style={styles.button}
                            onPress={() => setDeleteModal(true)}>
                            <AntDesign name="delete" size={20} color="white" />
                            <Text style={styles.text}> Delete contact</Text>
                        </TouchableOpacity>
                    </View>

                </View>
                </View>
                </Modal>
    )
}

export default UserModal;
