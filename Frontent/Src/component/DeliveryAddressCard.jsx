import { View, Text } from 'react-native'
import React from 'react'
import { Avatar } from 'react-native-paper'
import MaterialIcons from "react-native-vector-icons/MaterialIcons"


const DeliveryAddressCard = () => {
  return (
    <View style={{
        backgroundColor:"rgba(155, 222, 255, 0.7)",
        flexDirection:'row',
        padding:10,
        justifyContent:'flex-start',
        
        
    }}>
        <Avatar.Icon icon={'google-maps'} style={{
            backgroundColor:'transparent'
        }}
        size={25} />
      <Text>Deliver to ProgramerSalar - India</Text>
      <MaterialIcons 
      name="keyboard-arrow-down" size={20}
      />
      
    </View>
  )
}

export default DeliveryAddressCard