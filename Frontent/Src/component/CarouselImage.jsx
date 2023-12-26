import { View, Text, Dimensions, Image, StyleSheet } from 'react-native'
import React, { useRef } from 'react'
import Carousel from 'react-native-snap-carousel'
import {scale, moderateScale, verticalScale} from "react-native-size-matters"


const SLIDER_WIDTH = Dimensions.get("window").width;
const SLIDER_HEIGHT = (Dimensions.get("window").height)
const ITEM_WIDTH = SLIDER_WIDTH
const Height = Dimensions.get("window").height

const images = [
    {
      id: '1dsfsfwsdsd',
      url: "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?cs=srgb&dl=pexels-math-90946.jpg&fm=jpg",
    },
    {
      id: '1dsfsfwsddsfsfsd',
      url: "https://plus.unsplash.com/premium_photo-1679913792906-13ccc5c84d44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: '1dsfsfwsddsfsffefdfsd',
      url: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: '1dsfsfwsddsfsffdsewefdfsd',
      url: "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71r07rY2wcL._SX679_.jpg",
    },
  ]

const CarouselImage = () => {

    const isCarousel = useRef(null)




  return (
    <View>
       <Carousel
        layout='tinder'
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        ref={isCarousel}
        data={images}
        renderItem={CarouselCardItem}
      />


    </View>
  )
}


const CarouselCardItem = ({ item, index }) => (
    <View style={style.container} key={index}>
      <Image source={{ uri: item.url }} style={style.image} />
    </View>
  );
  
  const style = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      width: ITEM_WIDTH,
      paddingVertical: 10,
      height:Height
    },
    image: {
      width: SLIDER_WIDTH,
      resizeMode: "contain",
      height: verticalScale(250),
      // height:SLIDER_HEIGHT / 2
    },
    
  })
export default CarouselImage