import { StyleSheet, Dimensions } from 'react-native'

export default StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: Dimensions.get('window').height,
        backgroundColor: '#04C2B5'
    },
    addMealInput: {
        width: Dimensions.get('window').width - 50,
        textAlign: 'center',
        borderRadius: 5,
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'white',
        color: 'white',
        fontSize: 30,
        marginBottom: 50
    },
    nextButton: {
        width: 200,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        padding: 15,
        borderWidth: 1,
        borderColor: 'white'
    },
    nextButtonText: {
        color: 'white',
        fontSize: 30
    },
    nameYourMealHeaderText: {
        display: 'flex',
        fontSize: 40,
        color: 'white',
        paddingBottom: 10,
    },
    nymIcon: {
        fontSize: 60,
        color: 'white',
        paddingBottom: 30
    },
    listIcon: {
        fontSize: 60,
        marginTop: -80,
        color: 'white',
        paddingBottom: 30
    },
    ingredientInputContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom: 20
    },
    ingredientInput: {
        width: (Dimensions.get('window').width * .5),
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'white',
        color: 'white',
        fontSize: 20,
        marginRight: 20
    },
    ingredientInputAmount: {
        width: (Dimensions.get('window').width * .25),
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'white',
        color: 'white',
        fontSize: 20
    },
    addIngredient: {
        display: 'flex',
        fontSize: 25,
        color: 'white',
        marginLeft: 10
    },
    ingredientsList: {
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        alignItems: 'center',
        flexDirection: 'row',
        width: Dimensions.get('window').width - 100,
        height: 300,
    },
    ingredient: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        width: Dimensions.get('window').width - 100,
    },
    ingredientsText: {
        fontSize: 20,
        color: 'white',
        marginBottom: 20
    },
    instructionArea: {
        display: 'flex',
        alignItems: 'center',
        height: 300,
        marginBottom: 30
    },
    stepName: {
        fontSize: 25,
        color: 'white',
        paddingBottom: 20
    },
    stepInput: {
        width: 280,
        padding: 10,
        color: '#28262C',
        fontSize: 20,
        height: 200
    },
    stepCard: {
        backgroundColor: 'white',
        width: 300,
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 5,
        height: 300,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'relative'
    }
});