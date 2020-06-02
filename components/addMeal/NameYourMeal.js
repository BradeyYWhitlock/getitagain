import * as React from 'react';
import { connect } from 'react-redux';
import * as AddMealActions from '../../state/actions/addMeal';
import { Text, View, TextInput } from 'react-native';
import style from './styles/addMeal';
import { TouchableOpacity } from 'react-native-gesture-handler';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AddMealBackNavigation from './AddMealBackNavigation';

const mapDispatchToProps = (dispatch) => {
  return {
    setName: (name) => dispatch(AddMealActions.setName(name)),
  };
}
const mapStateToProps = ({ addMeal }) => {
  return {
    name: addMeal.name,
  };
};

const NameYourMeal = (props) => {
  return (
    <View style={style.container}>
      <AddMealBackNavigation title='Meals' backNavigation={() => props.navigation.navigate('Meals')} />
      <FontAwesome5 style={style.nymIcon} name='utensils' />
      <Text style={style.nameYourMealHeaderText}>Name Your Meal</Text>
      <TextInput
        placeholder='Meal Name'
        style={style.addMealInput}
        onChangeText={name => props.setName(name)}
        value={props.name}
      />
      <TouchableOpacity disabled={props.name === ''} style={style.nextButton} onPress={() => props.navigation.navigate('Ingredients')}>
        <Text style={style.nextButtonText}>Next</Text>
      </TouchableOpacity>
    </View >
  );
}


export default connect(mapStateToProps, mapDispatchToProps)(NameYourMeal);