import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import styles from './styles/listItem';

const ListItem = (props) => {

    return (
        <View style={styles.listItem}>
            <Text style={styles.listItemText} numberOfLines={1}>{props.item.ingredient}</Text>
            <Text>x{props.item.amount}</Text>
            <CheckBox
                value={props.item.inCart}
                onValueChange={() => props.updateInCart(props.item)}
                style={styles.checkbox}
            />
        </View>
    )
}

export default ListItem
