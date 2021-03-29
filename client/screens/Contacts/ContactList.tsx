import React, {FC, useState} from 'react';
import { Text, View, Image, TouchableOpacity, Modal } from 'react-native';
import { styles } from './ContactListStyles';
import { MaterialIcons, Ionicons, EvilIcons, FontAwesome, AntDesign } from '@expo/vector-icons';
import UserModal from './UserModal';

const ContactList: FC = () => {
    const [recent, setRecent] = useState([
        {name: 'Pedro' , key:'1', image: 'https://ep01.epimg.net/elpais/imagenes/2018/12/13/buenavida/1544715127_368245_1544786854_noticia_normal.jpg'},
        {name: 'Cristina' , key:'2', image: 'https://xavierferras.com/wp-content/uploads/2019/02/266-Persona.jpg'},
        {name: 'Clemente' , key:'3', image: 'https://s03.s3c.es/imag/_v0/770x420/7/6/f/GettyImages-522796439.jpg'},
        {name: 'Elisa' , key:'4', image: 'https://www.sabervivirtv.com/medio/2019/02/01/altamente-sensible_4713542c_990x586.jpg'}
    ]);

    const [contacts, setContacts] = useState([
        {name: 'Pedro Suarez' , key:'1', account: '0044472890', email: 'messirve@gmail.com', phone: '099',image: 'https://ep01.epimg.net/elpais/imagenes/2018/12/13/buenavida/1544715127_368245_1544786854_noticia_normal.jpg'},
        {name: 'Cristina Fernandez' , key:'2', account: '0045698893', email: 'cristina@gmail.com', phone: '098', image: 'https://xavierferras.com/wp-content/uploads/2019/02/266-Persona.jpg'},
        {name: 'Clemente Perez' , key:'3', account: '0156470038', email: 'hola@gmail.com', phone: '097', image: 'https://s03.s3c.es/imag/_v0/770x420/7/6/f/GettyImages-522796439.jpg'},
        {name: 'Elisa Gimenez' , key:'4', account: '096723890', email: 'bob@gmail.com', phone: '097',image: 'https://www.sabervivirtv.com/medio/2019/02/01/altamente-sensible_4713542c_990x586.jpg'},
        {name: 'Sandra Gomez', key:'5', account: '234406877', email: 'sandra@gmail.com', phone: '097',image: 'https://iteragrow.com/wp-content/uploads/2018/04/buyer-persona-e1545248524290.jpg'},
        {name: 'Jose Fernando', key:'6', account: '234406877', email: 'fer@gmail.com', phone: '097',image: 'https://i1.wp.com/www.sopitas.com/wp-content/uploads/2019/06/keanu-reeves-por-que-deberia-ser-persona-ano-2019.jpg'},
        {name: 'Woody Allen', key:'7', account: '234406877', email: 'woody@gmail.com', phone: '097',image: 'https://iteragrow.com/wp-content/uploads/2018/04/buyer-persona-e1545248524290.jpg'},
        {name: 'Sandra Gomez', key:'8', account: '234406877', email: 'sandraa@gmail.com', phone: '097', image: 'https://iteragrow.com/wp-content/uploads/2018/04/buyer-persona-e1545248524290.jpg'}
    ]);

    const [modalVisible, setModalVisible] = useState(false);
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
   
    return(
        <View style={styles.general}>
           <UserModal
                 modalVisible={modalVisible} 
                 setModalVisible={setModalVisible} 
                 name={name}
                 image={image}
                 />

            <TouchableOpacity style={styles.back}>
            <MaterialIcons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
            
              <Text style={styles.title}>
                MY CONTACTS
            </Text>
            

            <View style={styles.recentGeneral}>
                
                <Text style={styles.recentTitle}> Recent: </Text>

                <View style={styles.content}>
                    {recent.map((el) => {
                        return (
                    <TouchableOpacity style={styles.contentEl} key={el.key}
                             onPress={() => {
                                setName(el.name)
                                setModalVisible(true)
                                setImage(el.image)}}>
                        <Image source={{uri: el.image}}
                            style={styles.contentElImg}/>
                        <Text style={styles.contentElName}> {el.name}</Text>
                    </TouchableOpacity>
                        )
                    })}                   
                </View>

            </View>

            <View style={styles.allContacts}>

                <View style={styles.subtitles}>
                    <Text style={styles.sub1}> All contacts: </Text>
                    
                    <TouchableOpacity style={styles.sub2}>
                        <Ionicons name="add" size={16} color="grey" />
                        <Text style={styles.sub2Text}> Add</Text>
                        </TouchableOpacity>
                   
                </View>                

                <View style={styles.container}>
                    
                {contacts.map((el) => {
                    return (
                        <TouchableOpacity style={styles.card} key={el.key} 
                        onPress={() => {
                                     setName(el.name)
                                     setModalVisible(true)
                                     setImage(el.image)
                                     }}>  
                        <View style={styles.cardCont}>
                        <Image source={{uri: el.image}}
                                style={styles.cardImg}/>
                        <View style={styles.info}>
                            <Text style={styles.name}> {el.name}</Text>
                            <Text style={styles.account}> {el.account}</Text>
                        </View>
                        </View>
                    </TouchableOpacity>
                    )
                })}
                    </View>
              

            </View>

        </View>
    )
}

export default ContactList;