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
    list = list.concat(meal.ingredients)
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
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    color: '#28262C',
    height: 50,
    fontSize: 100
  }
});
