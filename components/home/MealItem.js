import * as React from 'react';
import { Platform, StyleSheet, Text, View, ImageBackground } from 'react-native';

export default function HomePage(props) {

  return (
      <ImageBackground
        source={props.meal.pic}
        imageStyle={{ borderRadius: 5, borderWidth: 1, borderColor: 'black' }}
        style={styles.container}>
          <Text style={styles.text}>{props.meal.name}</Text>
      </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'stretch',
    height: 150,
    width: 370,
    borderRadius: 5,
    margin: 10,
    borderColor: '#28262C'
  },
  text: {
      fontSize: 25,
      color: 'white',
      backgroundColor: 'rgba(40, 38, 44, 0.6)',
      padding: 10,
      borderRadius: 5
  }
});
