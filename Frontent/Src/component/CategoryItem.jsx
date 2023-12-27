import { View, Text, ScrollView, Dimensions, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Button } from 'react-native-paper'
import {scale, moderateScale, verticalScale} from "react-native-size-matters"
import { Image } from 'react-native'


const Categories = [
  {
    _id:"doirere",
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1uenD_Xlrb9YWq5JHjQsUNt_2ZMFmWgKiW2SBAcJjhYfgW3cqcOb1f27RuyfxplBJR_w&usqp=CAU",
    text:"Prime"  
  },
  {
    _id:"doireredf",
    img:"https://w7.pngwing.com/pngs/599/150/png-transparent-iphone-x-front-view-apple%E6%89%8B%E6%9C%BA-iphone-intelligent-mobile-phone-thumbnail.png",
    text:"Mobile"  
  },
  {
    _id:"doirerdree",
    img:"https://w7.pngwing.com/pngs/601/908/png-transparent-computer-icons-clothing-accessories-tracksuit-others-miscellaneous-white-text.png",
    text:"Fashion"  
  },
  {
    _id:"doirerree",
    img:"https://toppng.com/uploads/preview/stationery-items-11563032393ndpkgtgfyc.png",
    text:"Stationary"  
  },
  {
    _id:"doiresre",
    img:"https://w7.pngwing.com/pngs/203/682/png-transparent-black-and-gray-wireless-headphones-illustration-microphone-headphones-headset-headphone-icon-gadget-electronic-device-audio-equipment.png",
    text:"Electronics"  
  },
  {
    _id:"doidaerere",
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0F3CmVrCoZ-Rl_14qAHSgIEa8HZLpo80eOQ&usqp=CAU",
    text:"Travel"  
  },
  {
    _id:"doiredaere",
    img:"https://w7.pngwing.com/pngs/54/626/png-transparent-home-appliance-home-appliance-washing-machine-rice-cooker-refrigerator-home-appliances-kitchen-furniture-service.png",
    text:"Home"  
  },
  {
    _id:"doirdaere",
    img:"https://w7.pngwing.com/pngs/102/117/png-transparent-assorted-fruits-display-fruit-fruit-natural-foods-frutti-di-bosco-image-file-formats-thumbnail.png",
    text:"Fresh"  
  },
]
  

const CategoryHeight = Dimensions.get("window").width
const CategoryItem = () => {

    const [category, setCategory] = useState("")
    const categoryButtonHandler = (id) => {
        setCategory(id)
    }

  return (
    
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {
          Categories.map((item) => (
            <View style={{
              flexDirection:'column',
              padding:10,
              alignItems:'center'
             
            }}>
              <Image 
              source={{ uri: item.img}}
              style={{
                height:50,
                width:50,
                backgroundColor:'grey',
                resizeMode:"cover",
                
                
              }}
              />
              <Text>{item.text}</Text>
            </View>
          ))
        }
        
      </ScrollView>
    
  )
}

export default CategoryItem