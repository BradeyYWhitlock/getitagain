import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CheckBox from '@react-native-community/checkbox';

const ListItem = (props) => {

    return (
        <View style={styles.listItem}>
            <Text style={styles.listItemText}>{props.item.ingredient}</Text>
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

const styles = StyleSheet.create({
    listItem: {
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#F5FCFF',
    },
    listItemText: {
        fontSize: 40,
        width: 250
    },
    checkbox: {
        alignSelf: "center",
    },
});