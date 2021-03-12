import React from 'react';
import { Text, View, Image, Button, Alert, TouchableOpacity } from 'react-native';
import styles from './MenuStyles';
import { Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

/* 
Saldo actual en pesos de mi cuenta Henry Bank
● Sumatoria General de Ingresos y Gastos de mi cuenta Henry
Bank
● Selector de periodo de sumatoria de ingresos y gastos de mi
cuenta
● Botón de Transacciones
● Boton de Estadisticas
● Boton de Mis Datos
● Botón de Mis Productos
● Botón de Recargar Dinero
● Boton de Mandar Dinero
*/

const Menu = () => {
    return(
        <View style={styles.view}>
            <View style={styles.viewMenu} >
            <Ionicons
                 name="notifications-circle"
                 size={35}
                 color="white" 
                 style={{top: 15}} />    
            <Text style={styles.text}> Mi Perfil </Text>
            <Image 
            style={styles.image}
            source={{
                uri: 
                'https://image.flaticon.com/icons/png/512/2936/2936469.png'
}}/>
            </View>
            <View style={styles.viewBalance} >
                <Text style={styles.balanceText} > Total balance:</Text>
                <Text style={styles.balanceText} > $5210.50 </Text> 
            </View>

            <View style={styles.viewGeneral} >
                <Text 
                style={styles.titulo} > General </Text>
               <View style={styles.row} >
                <Text> Saldo actual </Text>
                <Text> Gastos </Text>
               </View>
               <View style={styles.row} >
                <Text style={styles.number} > $3200 </Text>
                <Text style={styles.number} > $2010.50 </Text>
               </View>
               <Text style={styles.titulo2} > Chequear balance según períodos: </Text>
               <View style={styles.row}>
                   <TouchableOpacity style={styles.periodoButton} onPress={() => Alert.alert('24 horas')} > 
                       <Text>24horas </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.periodoButton} onPress={() => Alert.alert('Una semana')}> 
                       <Text> 1semana </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.periodoButton} onPress={() => Alert.alert('Un mes')}> 
                       <Text> 1mes </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.periodoButton} onPress={() => Alert.alert('Seis meses')}> 
                       <Text> 6meses </Text>
                    </TouchableOpacity>
               </View>
            </View>

            <View style={styles.viewButton} >
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => Alert.alert('Transacciones')}>
                    <Text style={styles.buttonText}> 
                        Transacciones
                    </Text>
                </TouchableOpacity>
            
                <TouchableOpacity 
                    style={styles.button}
                    onPress={() => Alert.alert('Estadísticas')}
                    >
                     <Text style={styles.buttonText}> 
                        Estadísticas
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={styles.button}
                    onPress={() => Alert.alert('Mis datos')}
                    >
                     <Text style={styles.buttonText}> 
                        Mis datos
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={styles.button}
                    onPress={() => Alert.alert('Mis productos')}
                    >
                     <Text style={styles.buttonText}> 
                        Mis productos
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.viewButton2} >
            <TouchableOpacity 
                    style={styles.button2}
                    onPress={() => Alert.alert('Recargar dinero')}
                    >
                <MaterialCommunityIcons 
                    name="wallet-plus-outline" size={20} color="rgb(167, 197, 235)" />
                <Text style={styles.buttonText2}> 
                       Recargar dinero
                </Text>
                </TouchableOpacity>
            <TouchableOpacity 
                    style={styles.button2}
                    onPress={() => Alert.alert('Realizar pago')}
                    >
                <MaterialIcons name="payment" size={20} color="rgb(167, 197, 235)" />
                <Text style={styles.buttonText2}> 
                        Realizar pago
                </Text>
                </TouchableOpacity>
                
               
            </View>
        </View>
    )
}

export default Menu;