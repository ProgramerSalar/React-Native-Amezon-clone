import {View, Text, ScrollView, Image, Dimensions} from 'react-native';
import React from 'react';
import {scale, moderateScale, verticalScale} from 'react-native-size-matters';

let Dimension = Dimensions.get('window').width;

const ProductList = ({
  image,
  id,
  originalPrice,
  percentageOff,
  price,
  name,
  index
}) => {

  return (
    <View
      style={{
        bottom: verticalScale(380),
        width: Dimension / 2 - 45,
        margin: moderateScale(10),
        borderRadius: 20,
        borderColor: 'grey',
        backgroundColor: 'white',
      }}>
      <Image
        source={{
          uri: image,
        }}
        style={{
          width: scale(120),
          height: scale(80),
          backgroundColor: 'white',
        }}
      />
      <View
        style={{
          flexDirection: 'column',
          margin: 10,
        }}>
        <Text style={{
          fontSize:moderateScale(15),
          fontWeight:'bold', 
        }} numberOfLines={1}>{name}</Text>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <Text style={{
            fontWeight:'bold',
          fontSize:moderateScale(12),

          }}>${price}</Text>

          <Text
            style={{
              textDecorationLine: 'line-through',
              textDecorationStyle: 'solid',
              left: moderateScale(10),
              fontWeight:'bold',
              
              fontSize:moderateScale(12),
            }}>
            ${originalPrice}
          </Text>
          <Text
            style={{
              left: moderateScale(20),
              fontWeight:'bold',
              fontSize:moderateScale(12),
            }}>
            -{percentageOff}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ProductList;
