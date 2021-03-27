import React, { FC, useState } from "react";
import styles from "./TransferStyles";
import { Text, View, Image, Alert, TouchableOpacity, ScrollView } from "react-native";
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { TextInput, Appbar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';



const Transfer: FC = (props) => {
    const navigation = useNavigation()
    console.log(props)

    const [transferCbu, setTransferCbu] = useState({
        name: '',
        key: '',
        amount: '',
        description: ''
    });
    const [contacts, setContacts] = useState([
        { name: 'Sandra Gomez', key: '5', account: '234406877', image: 'https://iteragrow.com/wp-content/uploads/2018/04/buyer-persona-e1545248524290.jpg' },
        { name: 'Jose Fernando', key: '6', account: '234406877', image: 'https://iteragrow.com/wp-content/uploads/2018/04/buyer-persona-e1545248524290.jpg' },
        { name: 'Woody Allen', key: '7', account: '234406877', image: 'https://iteragrow.com/wp-content/uploads/2018/04/buyer-persona-e1545248524290.jpg' },
        { name: 'Sandra Gomez', key: '8', account: '234406877', image: 'https://iteragrow.com/wp-content/uploads/2018/04/buyer-persona-e1545248524290.jpg' }
    ])

    const [account, setAccount] = useState('')

    const handleChange = (value: string, name: string): void => {
        setTransferCbu({ ...transferCbu, [name]: value });
    }


    return (
        <>

            <Appbar.Header style={{ backgroundColor: "#4a47a3" }}>
                <Appbar.BackAction onPress={() => navigation.navigate("Home")} />
            </Appbar.Header>

            <ScrollView>
                <View style={styles.general}>


                    <Text style={styles.title}>
                        Transfer
                    </Text>

                    <View style={styles.recentGeneral}>
                    </View>
                    <Text style={styles.recentTitle}> Select a contac: </Text>

                    <TouchableOpacity style={styles.sub2}>
                        <Ionicons name="add" size={16} color="grey" />
                        <Text style={styles.sub2Text}> Add</Text>
                    </TouchableOpacity>

                    <View style={styles.content}>
                        {contacts.map((el) => {
                            return (
                                <TouchableOpacity style={styles.contentEl} onPress={() => handleChange(el.name, 'name')}
                                    key={el.key}>
                                    <Image source={{ uri: el.image }}
                                        style={styles.contentElImg} />
                                    <Text style={styles.contentElName}> {el.name}</Text>

                                </TouchableOpacity>
                            )
                        })}
                        <View style={styles.container}>
                            <Text style={styles.titleTransfer}>Transfer to:</Text>
                            <TextInput
                                label="name"
                                placeholder="name"
                                onChangeText={(value) => handleChange(value, "name")}
                                value={transferCbu.name}

                            />

                            <Text style={styles.titleTransfer}>Enter amount:</Text>
                            <TextInput
                                label="$"
                                placeholder="-------"
                                onChangeText={(value) => handleChange(value, "amount")}
                                value={transferCbu.amount}
                            />

                            <TouchableOpacity style={styles.contentEl} onPress={() => Alert.alert('cuenta en pesos')}>
                                <FontAwesome name="dollar" size={16} color="blue" />
                                <Text style={styles.sub2Text}>ARG PESO</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.contentEl} onPress={() => Alert.alert('cuenta en dollar')}>
                                <FontAwesome name="dollar" size={16} color="blue" />
                                <Text style={styles.sub2Text}>US DOLLAR</Text>
                            </TouchableOpacity>
                            <Text style={styles.titleTransfer}>Description:</Text>

                            <TextInput
                                label="Description"
                                placeholder="Description"
                                onChangeText={(value) => handleChange(value, "description")}
                                value={transferCbu.description}
                            />
                            <View style={styles.containerButton}>
                                <TouchableOpacity style={styles.button}
                                    onPress={() => console.log('me hiciste un click')}
                                >
                                    <Text style={styles.btntext}>Confirm</Text>
                                </TouchableOpacity>
                            </View>

                        </View>
                    </View>

                </View>

            </ScrollView>
        </>
    )
}

export default Transfer;

