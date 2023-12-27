import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {Avatar, Searchbar, TextInput} from 'react-native-paper';

const Heading = () => {
  return (
    <View
      style={{
        backgroundColor: 'rgba(5, 250, 242, 0.4)',
        flexDirection: 'row',
        width: '100%',
      }}>
      <View
        style={{
          flexDirection: 'row',
          width: '75%',
          alignItems: 'center',
          borderWidth: 1,
          borderColor: '#b8baba',
          margin: 15,
          paddingLeft: 15,
          backgroundColor: 'white',
          borderRadius: 5,
          overflow: 'hidden',
          height: 40,
          left:-12
        }}>
        <Searchbar
          placeholder="Search Amazon.in"
          style={{
            backgroundColor: 'white',
            width: '80%',
            left:-15
          }}
        />
        <Avatar.Icon
          icon={'microphone'}
          style={{
            backgroundColor: 'transparent',
          }}
          color="black"
        />
      </View>
      <View style={{
        flexDirection:'row',
        left:-30
      }}>
        <TouchableOpacity>
          <Avatar.Icon icon={'cart'} style={{
            backgroundColor:'transparent',

          }} />
        </TouchableOpacity>
        <TouchableOpacity >
          <Avatar.Icon icon={'account'} style={{
            backgroundColor:'transparent',
            left:-20
          }} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Heading;
