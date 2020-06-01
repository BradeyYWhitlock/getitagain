import { StyleSheet, Dimensions } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        width: Dimensions.get('window').width
    },
    header: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        color: '#28262C',
        height: 50,
        fontSize: 100
    },
    newMeal: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        resizeMode: 'stretch',
        height: 150,
        width: Dimensions.get('window').width - 30,
        backgroundColor: '#04C2B5',
        borderRadius: 5,
        margin: 10,
    },
    newMealText: {
        fontSize: 25,
        color: 'white',
        padding: 10,
        borderRadius: 5
    }
});