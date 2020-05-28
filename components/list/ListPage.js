import * as React from 'react';
import { connect } from 'react-redux';
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
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.listItems}>
        {
          props.list.map((item, index) => {
            return <Text key={index}>{item}</Text>
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
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    color: '#28262C',
    height: 50,
    fontSize: 100
  },
  listItems: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center'
  }
});
