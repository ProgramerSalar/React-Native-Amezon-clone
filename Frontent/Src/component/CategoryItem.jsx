import { View, Text, ScrollView, Dimensions, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Button } from 'react-native-paper'
import {scale, moderateScale, verticalScale} from "react-native-size-matters"



const categories = [
    { category: "footbal", _id: "1" },
    { category: "ball", _id: "2" },
    { category: "baT", _id: "3" },
    { category: "copy", _id: "4" },
    { category: "book", _id: "5" },
    { category: "bag", _id: "6" },
    { category: "mobile", _id: "7" },
  ]
  

const CategoryHeight = Dimensions.get("window").width
const CategoryItem = () => {

    const [category, setCategory] = useState("")
    const categoryButtonHandler = (id) => {
        setCategory(id)
    }

  return (
    
       <View style={{
          flexDirection: 'row',
          bottom:verticalScale(400),
         
          height:scale(50),
          justifyContent:'center'
        }}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ alignItems: 'center' }}>
            {
              categories.map((item, index) => (
                
                 
                <TouchableOpacity
                onPress={() => categoryButtonHandler(item._id)}
                style={{
                    margin:10,
                    backgroundColor: category === item._id ? "green" : 'white',
                    height:moderateScale(30),
                    width:moderateScale(80),
                    alignSelf:'center',
                    alignContent:'center',
                    justifyContent:'center',
                    flexDirection:'row',
                    marginLeft:10,
                    borderRadius:10
                }}>
                    <Text style={{
                        color: category === item._id ? "white" : 'black',
                        fontWeight:'bold',
                        fontSize:moderateScale(15),
                        textAlign:'center',
                        alignSelf:'center'
                        
                        
                    }}>
                        {item.category}
                    </Text>
                </TouchableOpacity>
              ))
            }
          </ScrollView>

        </View>
    
  )
}

export default CategoryItem