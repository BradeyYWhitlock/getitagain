import React, { useState } from 'react';
import { connect } from 'react-redux';
import { setListItems } from '../../state/actions/grocerylist';
import ListItem from './ListItem';
import _ from 'lodash'
import { TextInput, StyleSheet, Text, View, SafeAreaView, ScrollView, Button, TouchableOpacity } from 'react-native';
import styles from './styles/listPage';

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

  const [oneOffItem, setOneOffItem] = useState('')

  const updateInCart = (item) => {
    var list = _.cloneDeep(props.list)
    var foundIndex = list.findIndex(listItem => listItem.ingredient === item.ingredient);
    list[foundIndex] = { ingredient: item.ingredient, inCart: !item.inCart, amount: item.amount }
    props.setListItems(list)
  }

  const addToList = (itemName) => {
    var list = _.cloneDeep(props.list)
    list.push({ ingredient: itemName, inCart: false, amount: 1 })
    props.setListItems(list)
    setOneOffItem('')
  }

  const clearSelected = () => {
    var list = _.cloneDeep(props.list)
    list = list.filter(listItem => listItem.inCart === false);
    props.setListItems(list)
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.listItems} stickyHeaderIndices={[0]} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View style={styles.addItem}>
            <TouchableOpacity style={styles.clearSelectedButton} onPress={() => clearSelected()} underlayColor='#fff'>
              <Text style={{ color: 'white', fontSize: 14 }}>Clear Selected Items</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.clearAllButton} onPress={() => props.setListItems([])} underlayColor='#fff'>
              <Text style={{ color: 'white', fontSize: 14 }}>Clear All Items</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.addItem}>
            <TextInput
              style={{ height: 30, borderColor: 'gray', borderWidth: 1, width: '60%' }}
              onChangeText={text => setOneOffItem(text)}
              onSubmitEditing={() => addToList(oneOffItem)}
              value={oneOffItem}
            />
            <Button title="Add Item" onPress={() => addToList(oneOffItem)} disabled={oneOffItem === ''} />
          </View>
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
