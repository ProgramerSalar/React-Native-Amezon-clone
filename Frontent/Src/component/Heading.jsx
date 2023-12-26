import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {AppImage, AppImage2} from '../Image/Image';
import {Avatar, TextInput} from 'react-native-paper';
import {
  scale,
  moderateScale,
  moderateVerticalScale,
} from 'react-native-size-matters';

const Heading = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'black',
      }}>
      <View>
        <Image
          source={{uri: AppImage2}}
          style={{
            height: scale(50),
            width: scale(100),
            backgroundColor: 'transparent',
            margin: 10,
          }}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          margin: scale(10),
        }}>
        <TextInput
          placeholder="Search.."
          style={{
            borderRadius: moderateScale(10),
            width: moderateScale(130),
          }}
          left={
            <TextInput.Icon
              icon="magnify"
              size={moderateScale(50)}
              style={{
                top: moderateVerticalScale(5),
              }}
            />
          }
        />

        <TouchableOpacity>
          <Avatar.Icon
            icon={'cart'}
            style={HeadingStyle.AvatarStyle}
            size={moderateScale(50)}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Avatar.Icon
            icon={'account'}
            style={HeadingStyle.AvatarStyle}
            size={moderateScale(50)}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const HeadingStyle = StyleSheet.create({
  AvatarStyle: {
    padding: 10,
    margin: scale(2),
  },
});

export default Heading;
