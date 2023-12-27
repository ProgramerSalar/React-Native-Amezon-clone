import { View, Text, Image, ScrollView, FlatList, Dimensions, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import Heading from '../component/Heading'
import CarouselImage from '../component/CarouselImage'
import CategoryItem from '../component/CategoryItem'
import {scale, moderateScale, verticalScale} from "react-native-size-matters"
import ProductList from '../component/ProductList'
import { useNavigation } from '@react-navigation/native'
import DeliveryAddressCard from '../component/DeliveryAddressCard'
import RecentSerchData from '../component/RecentSerchData'



export const products = [
  
  {
  price: 435,
  originalPrice:500,
  percentageOff:'20%',
  name: "Optimum Nutrition (ON) Gold Standard 100% Whey Protein Powder - 5 lbs, 2.27 kg (Vanilla Ice Cream), Primary Source Isolate (Packaging May Vary)",
  stock: 34,
  _id: "1",
  category:"rohan",
  images: [
    {
      url: "https://images-na.ssl-images-amazon.com/images/I/41dKKAp5kPL._SX160_QL100_AC_SCLZZZZZZZ_.jpg",

    }
  ]

},
  {
  price: 435,
  originalPrice:500,
  percentageOff:'20%',
  name: "Optimum Nutrition (ON) Gold Standard 100% Whey Protein Powder - 5 lbs, 2.27 kg (Vanilla Ice Cream), Primary Source Isolate (Packaging May Vary)",
  stock: 34,
  _id: "2",
  category:"rohanr",
  images: [
    {
      url: "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71YxSx7ufRL._AC_SY200_.jpg",

    }
  ]

},
  {
  price: 435,
  originalPrice:500,
  percentageOff:'20%',
  name: "Optimum Nutrition (ON) Gold Standard 100% Whey Protein Powder - 5 lbs, 2.27 kg (Vanilla Ice Cream), Primary Source Isolate (Packaging May Vary)",
  stock: 34,
  _id: "21",
  category:"rohan",
  images: [
    {
      url: "https://images-eu.ssl-images-amazon.com/images/W/MEDIAX_792452-T1/images/G/31/img22/Monitors/GW/DBCC/Desktop_CC_Monitors_1x._SY304_CB625514285_.jpg",

    }
  ]

},
  {
  price: 435,
  originalPrice:500,
  percentageOff:'20%',
  name: "Optimum Nutrition (ON) Gold Standard 100% Whey Protein Powder - 5 lbs, 2.27 kg (Vanilla Ice Cream), Primary Source Isolate (Packaging May Vary)",
  stock: 34,
  _id: "22",
  category:"rohanr",
  images: [
    {
      url: "https://images-eu.ssl-images-amazon.com/images/I/71zoRjGMFHS._AC_UL160_SR160,160_.jpg",

    }
  ]

},
  {
  price: 435,
  originalPrice:500,
  percentageOff:'20%',
  name: "Optimum Nutrition (ON) Gold Standard 100% Whey Protein Powder - 5 lbs, 2.27 kg (Vanilla Ice Cream), Primary Source Isolate (Packaging May Vary)",
  stock: 324,
  _id: "1",
  category:"rohan",
  images: [
    {
      url: "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81QxcdPQkpL._AC_SY145_.jpg",

    }
  ]

},
  {
  price: 435,
  originalPrice:500,
  percentageOff:'20%',
  name: "Optimum Nutrition (ON) Gold Standard 100% Whey Protein Powder - 5 lbs, 2.27 kg (Vanilla Ice Cream), Primary Source Isolate (Packaging May Vary)",
  stock: 324,
  _id: "2",
  category:"rohanr",
  images: [
    {
      url: "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51zXd5vi0uL._AC_SY200_.jpg",

    }
  ]

},
  {
  price: 435,
  originalPrice:500,
  percentageOff:'20%',
  name: "Optimum Nutrition (ON) Gold Standard 100% Whey Protein Powder - 5 lbs, 2.27 kg (Vanilla Ice Cream), Primary Source Isolate (Packaging May Vary)",
  stock: 34,
  _id: "1",
  category:"rohan",
  images: [
    {
      url: "https://images-na.ssl-images-amazon.com/images/I/41dKKAp5kPL._SX160_QL100_AC_SCLZZZZZZZ_.jpg",

    }
  ]

},
  {
  price: 435,
  originalPrice:500,
  percentageOff:'20%',
  name: "Optimum Nutrition (ON) Gold Standard 100% Whey Protein Powder - 5 lbs, 2.27 kg (Vanilla Ice Cream), Primary Source Isolate (Packaging May Vary)",
  stock: 34,
  _id: "2",
  category:"rohanr",
  images: [
    {
      url: "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71YxSx7ufRL._AC_SY200_.jpg",

    }
  ]

},



]
let Dimension = (Dimensions.get("window").width)

const Home = () => {

  
  return (
   <>
   <View style={{
    flex:1,
    backgroundColor:'white'
   }}>
    <Heading />
    <DeliveryAddressCard />

    <ScrollView showsVerticalScrollIndicator={false}>
  
    <CategoryItem />
    <CarouselImage />
    


<View style={{
  // top:verticalScale(-90),
  flex:1

}}>
<View style={{
}}>
<Text style={{
  fontSize:16,
  fontWeight:'bold',
  marginBottom:20,
  marginLeft:10,
  marginTop:10,
  fontSize:moderateScale(20),
}}>Electronics devices for home office</Text>
<View style={{
      flexDirection:'row',
      justifyContent:"space-between",
      flexWrap:"wrap",
      
      
    }}>
      {
        products.map((item, index) => (
          <ProductList 
          image={item.images[0]?.url}
          originalPrice={item.originalPrice}
          percentageOff={item.percentageOff}
          price={item.price}
          name={item.name}
          index={index}

          />
        ))
      }
    </View>
</View>
<View style={{
}}>
<Text style={{
  fontSize:16,
  fontWeight:'bold',
  marginBottom:20,
  marginLeft:10,
  marginTop:10,
  fontSize:moderateScale(20),

}}>Up to 60% off | Tools & home improvement</Text>
<View style={{
      flexDirection:'row',
      justifyContent:"space-between",
      flexWrap:"wrap",
      
      
    }}>
      {
        products.map((item, index) => (
          <ProductList 
          image={item.images[0]?.url}
          originalPrice={item.originalPrice}
          percentageOff={item.percentageOff}
          price={item.price}
          name={item.name}
          index={index}
          />
        ))
      }
    </View>
</View>

</View>
<Text>Hello world</Text>


   
    </ScrollView>
    
    



   </View>
   </>
 
  )
}

const styles = StyleSheet.create({
  dealText:{
    fontSize:16,
    fontWeight:'bold',
    marginBottom:20,
    marginLeft:10,
    marginTop:20
  }
})



export default Home