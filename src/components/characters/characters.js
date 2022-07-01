import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
  Alert,
} from 'react-native';
import React from 'react';
import styles from './characters.styles';

const characters = ({item, index}) => {
  const isFirst = index < 1;
  const isSecond = index < 2;
  const isThird = index < 3;
  return (
    <View style={{flex: 1}}>
      <TouchableOpacity
        onPress={() =>
          Alert.alert(
            item.name.first + ' ' + item.name.last,
            'Age :' +
              item.dob.age.toString() +
              '       ' +
              'Mail :' +
              item.email +
              '            ' +
              'Phone :' +
              item.phone,
          )
        }>
        <ImageBackground
          style={[
            styles.card,
            {
              backgroundColor:
                (isFirst && '#FEEBC3') ||
                (isSecond && '#FFFFFF') ||
                (isThird && '#F8F5F5') ||
                '#FFFFFF',
            },
          ]}
          source={
            (isFirst && require('../../assets/MaskGroup26_c.png')) ||
            (isSecond && require('../../assets/MaskGroup26_c.png')) ||
            (isThird && require('../../assets/MaskGroup26_c.png'))
          }
          resizeMode={'contain'}>
          <View style={styles.container}>
            <View
              style={[
                styles.index,
                {backgroundColor: isThird ? '#F6BB4A' : '#F8F5F5'},
              ]}>
              <Text style={styles.text}>{index + 1}</Text>
            </View>
            <View
              style={[
                styles.image_container,
                {borderColor: isThird ? '#F6BB4A' : '#F8F5F5'},
              ]}>
              <Image
                style={styles.image}
                source={{uri: item.picture.thumbnail}}
              />
            </View>
            <View style={styles.name}>
              <Text style={styles.nameText}>
                {item.name.first}
                {item.name.last}
              </Text>
              <Text style={styles.secondText}>{item.login.username}</Text>
            </View>
            <View style={{justifyContent: 'center'}}>
              {index === 0 && (
                <ImageBackground
                  style={{width: 30, height: 30}}
                  source={require('../../assets/Component5–1.png')}
                />
              )}
              {index === 1 && (
                <ImageBackground
                  style={{width: 30, height: 30}}
                  source={require('../../assets/Component6–1.png')}
                />
              )}
              {index === 2 && (
                <ImageBackground
                  style={{width: 30, height: 30}}
                  source={require('../../assets/Component7–1.png')}
                />
              )}
            </View>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
};

export default characters;
