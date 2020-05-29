import * as React from 'react';
import { connect } from 'react-redux';
import { setListItems } from '../../state/actions/grocerylist';
import ListItem from './ListItem';
import _ from 'lodash'
import { Platform, StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';

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

const ListPage = (props) => {

  const updateInCart = (item) => {
    var list = _.cloneDeep(props.list)
    var foundIndex = list.findIndex(listItem => listItem.ingredient === item.ingredient);
    list[foundIndex] = { ingredient: item.ingredient, inCart: !item.inCart, amount: item.amount }

    props.setListItems(list)
  }

  const clearSelected = () => {
    var list = _.cloneDeep(props.list)
    list = list.filter(listItem => listItem.inCart === false);
    props.setListItems(list)
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.listItems} stickyHeaderIndices={[0]}>
        <View style={styles.header}>
          <Text onPress={() => clearSelected()} style={{ fontSize: 20, paddingTop: 10 }}>Click To Clear Selected Items</Text>
        </View>
        {
          props.list.map((item, index) => {
            return <ListItem key={index} item={item} updateInCart={updateInCart} />
          })
        }
      </ScrollView>
    </SafeAreaView>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(ListPage);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    alignItems: 'center'
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
  listItems: {
    flex: 1,
    width: '100%',
  }
});
