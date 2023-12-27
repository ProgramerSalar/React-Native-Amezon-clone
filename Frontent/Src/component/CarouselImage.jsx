import {View, Text, Dimensions, Image, StyleSheet} from 'react-native';
import React, {useRef} from 'react';
import Carousel from 'react-native-snap-carousel';
import {scale, moderateScale, verticalScale} from 'react-native-size-matters';
import {SliderBox} from 'react-native-image-slider-box';

const SLIDER_WIDTH = Dimensions.get('window').width;
const SLIDER_HEIGHT = Dimensions.get('window').height;
const ITEM_WIDTH = SLIDER_WIDTH;

const images = [
  {
    id: '1dsfsfwsdsd',
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYF4wiPgmVxxleYc8xjrO_kz8oePfSieVceQ&usqp=CAU',
  },
  {
    id: '1dsfsfwsddsfsfsd',
    url: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/201801/Amazon_great_indian_sale_final.jpeg?size=690:388',
  },
  {
    id: '1dsfsfwsddsfsffefdfsd',
    url: 'https://images-eu.ssl-images-amazon.com/images/G/31/img17/AmazonPay/Ankit/Jupiter19/wave1/primebenefit/Prime-benefits_cbcc_mob.jpg',
  },
  {
    id: '1dsfsfwsddsfsffdsewefdfsd',
    url: 'https://images.moneycontrol.com/static-mcnews/2022/01/Amazon-Great-Republic-Day-Sale.jpg',
  },
  {
    id: 'dsreaer',
    url: 'https://www.91-cdn.com/hub/wp-content/uploads/2022/05/best-smartwatch-fitness-band-deals-amazon-summer-sale.png',
  },
];

const CarouselImage = () => {
  const isCarousel = useRef(null);

  return (
    <View>
      <Carousel
        layout="tinder"
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        ref={isCarousel}
        data={images}
        renderItem={CarouselCardItem}
      />
    </View>
  );
};

const CarouselCardItem = ({item, index}) => (
  <View style={style.container} key={index}>
    <Image source={{uri: item.url}} style={style.image} />
  </View>
);

const style = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: ITEM_WIDTH,
  },
  image: {
    width: SLIDER_WIDTH,
    // resizeMode: "contain",
    height: verticalScale(250),
    // height:SLIDER_HEIGHT / 2
  },
});
export default CarouselImage;
