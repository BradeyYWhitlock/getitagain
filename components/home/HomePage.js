import * as React from 'react';
import { useDispatch, connect } from 'react-redux';
import { setListItems } from '../../state/actions/grocerylist';
import { Platform, StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import MealItem from './MealItem';
import _ from 'lodash'
import { meals } from '../common/constants';

function mapDispatchToProps(dispatch) {
  return {
    setListItems: (list) => dispatch(setListItems(list)),
  };
}

const mapStateToProps = ({ grocerylist }) => {
  return {
    list: grocerylist.list,
  };
};

const HomePage = (props) => {

  const addToList = (meal) => {
    var list = _.cloneDeep(props.list)

    console.log(list);

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
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView stickyHeaderIndices={[0]}>
        <View style={styles.header}>
          <Text style={{ fontSize: 20, paddingTop: 10 }}>Pick Meals To Add To Cart</Text>
        </View>
        {
          meals.map(meal => {
            return (
              <TouchableOpacity key={meal.key} onPress={() => addToList(meal)}>
                <MealItem meal={meal} addToList={() => addToList} />
              </TouchableOpacity>
            )
          })
        }
      </ScrollView>
    </SafeAreaView>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    width: '100%'
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    color: '#28262C',
    height: 50,
    fontSize: 100
  }
});
