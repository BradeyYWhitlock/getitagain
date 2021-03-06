import { StyleSheet, Dimensions } from 'react-native'

export default StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        resizeMode: 'stretch',
        height: 150,
        width: Dimensions.get('window').width - 30,
        borderRadius: 5,
        margin: 10,
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,

        elevation: 9,
    },
    text: {
        fontSize: 25,
        color: 'white',
        backgroundColor: 'rgba(40, 38, 44, 0.6)',
        padding: 10,
        borderRadius: 5
    }
});