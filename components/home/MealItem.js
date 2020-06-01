import * as React from 'react';
import { Platform, StyleSheet, Text, View, ImageBackground, Dimensions } from 'react-native';
import styles from './styles/mealItem';

export default function HomePage(props) {

  return (
    <ImageBackground
      source={props.meal.pic}
      imageStyle={{ borderRadius: 5 }}
      style={styles.container}>
      <Text style={styles.text}>{props.meal.name}</Text>
    </ImageBackground>
  );
}
