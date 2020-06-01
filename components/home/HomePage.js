import React, { useEffect } from 'react';
import { useDispatch, connect } from 'react-redux';
import { setListItems, setMeals } from '../../state/actions/grocerylist';
import { Platform, Text, View, SafeAreaView, ScrollView, TouchableOpacity, Button, Dimensions, Alert } from 'react-native';
import MealItem from './MealItem';
import _ from 'lodash'
import styles from './styles/home';
import { db } from '../../services/firebaseConfig';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import Snackbar from 'react-native-snackbar';

function mapDispatchToProps(dispatch) {
  return {
    setListItems: (list) => dispatch(setListItems(list)),
    setMeals: (meals) => dispatch(setMeals(meals)),
  };
}

const mapStateToProps = ({ grocerylist }) => {
  return {
    list: grocerylist.list,
    meals: grocerylist.meals,
  };
};

const HomePage = (props) => {

  const { list, meals } = props;

  useEffect(() => {
    db.ref('/meals').on('value', querySnapShot => {
      console.log(querySnapShot.val());
      props.setMeals(querySnapShot.val())
    });
  }, [])


  const addToList = (meal) => {
    var list = _.cloneDeep(props.list)

    var mappedMealItems = meal.ingredients.map(it => {
      var foundIndex = list.findIndex(listItem => listItem.ingredient === it)

      if (foundIndex !== -1) {
        var amount = list[foundIndex].amount + 1
        list.splice(foundIndex, 1);
        return { ingredient: `${it}`, inCart: false, amount }
      } else {
        return { ingredient: it, inCart: false, amount: 1 }
      }
    })

    list = list.concat(mappedMealItems)
    props.setListItems(list)
    Snackbar.show({
      text: `Ingredients Added To list!`,
      duration: Snackbar.LENGTH_SHORT,
      action: {
        text: 'CLOSE',
        textColor: 'red',
        onPress: () => { /*lol*/ },
      },
    });
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView stickyHeaderIndices={[0]} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={{ fontSize: 20, paddingTop: 10 }}>Pick Meals To Add To Cart</Text>
        </View>
        {
          meals.map(meal => {
            return (
              <TouchableWithoutFeedback key={meal.key} onPress={() => addToList(meal)}>
                <MealItem meal={meal} addToList={() => addToList} />
              </TouchableWithoutFeedback>
            )
          })
        }
        <TouchableOpacity style={styles.newMeal} delayPressIn={50}>
          <Text style={styles.newMealText}>Create A Meal</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
