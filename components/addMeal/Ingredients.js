import React, { useState } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash'
import * as AddMealActions from '../../state/actions/addMeal';
import { Text, View, TextInput } from 'react-native';
import style from './styles/addMeal';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AddMealBackNavigation from './AddMealBackNavigation';

const mapDispatchToProps = (dispatch) => {
    return {
        setIngredients: (ingredients) => dispatch(AddMealActions.setIngredients(ingredients)),
    };
}
const mapStateToProps = ({ addMeal }) => {
    return {
        ingredients: addMeal.ingredients
    };
};

const Ingredients = (props) => {
    const [ingredientName, setIngredientName] = useState('')
    const [ingredientAmount, setIngredientAmount] = useState('')

    const addIngredient = () => {
        var ingredients = _.cloneDeep(props.ingredients)
        ingredients.push({ name: ingredientName.toLowerCase(), amount: ingredientAmount.toLowerCase() })
        props.setIngredients(ingredients)
        setIngredientName('')
        setIngredientAmount('')
    }

    const removeIngredient = (name) => {
        var ingredients = _.cloneDeep(props.ingredients)
        var ingredientToRemove = ingredients.findIndex(it => it.name === name)
        ingredients.splice(ingredientToRemove, 1)
        props.setIngredients(ingredients)
    }

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    return (
        <View style={style.container}>
            <AddMealBackNavigation title='Name' backNavigation={() => props.navigation.navigate('Name')} />
            <FontAwesome5 style={style.listIcon} name='shopping-basket' />
            <Text style={style.nameYourMealHeaderText}>Add Ingredients</Text>
            <View style={style.ingredientInputContainer}>
                <TextInput
                    placeholder='Ingredient'
                    style={style.ingredientInput}
                    onChangeText={name => setIngredientName(name)}
                    value={ingredientName}
                />
                <TextInput
                    placeholder='Amount'
                    style={style.ingredientInputAmount}
                    onChangeText={amount => setIngredientAmount(amount)}
                    value={ingredientAmount}
                />
                <TouchableOpacity onPress={() => addIngredient()}>
                    <FontAwesome5 style={style.addIngredient} name='plus-circle' />
                </TouchableOpacity>
            </View>
            <View style={style.ingredientsList}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    {props.ingredients.map((it, index) => {
                        return <View key={index} style={style.ingredient}>
                            <Text style={style.ingredientsText}>{capitalizeFirstLetter(it.name)}</Text>
                            <View style={{ display: 'flex', flexDirection: 'row' }}>
                                <Text style={style.ingredientsText}>{it.amount}</Text>
                                <TouchableOpacity onPress={() => removeIngredient(it.name)}>
                                    <FontAwesome5 style={style.addIngredient} name='minus-circle' />
                                </TouchableOpacity>
                            </View>
                        </View>
                    })}
                </ScrollView>
            </View>
            <TouchableOpacity style={style.nextButton} onPress={() => props.navigation.navigate('Instructions')}>
                <Text style={style.nextButtonText}>Next</Text>
            </TouchableOpacity>
        </View>
    );
}


export default connect(mapStateToProps, mapDispatchToProps)(Ingredients);