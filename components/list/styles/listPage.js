import { StyleSheet, Dimensions } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    header: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        color: '#28262C',
        height: 120
    },
    listItems: {
        flex: 1,
        width: '100%',
        overflow: 'hidden'
    },
    addItem: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '80%',
        height: 30
    },
    clearAllButton: {
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 5,
        margin: 10
    },
    clearSelectedButton: {
        backgroundColor: '#04C2B5',
        padding: 10,
        borderRadius: 5,
        margin: 10
    }
});