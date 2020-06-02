import * as React from 'react';
import { connect } from 'react-redux';
import * as AddMealActions from '../../state/actions/addMeal';
import { Text, View, TextInput } from 'react-native';
import style from './styles/addMeal';
import { TouchableOpacity } from 'react-native-gesture-handler';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const AddMealBackNavigation = (props) => {
    return (
        <View style={{ position: 'absolute', top: 50, left: 10 }}>
            <TouchableOpacity
                style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}
                onPress={() => props.backNavigation()}
            >
                <FontAwesome5 style={{ paddingRight: 10, fontSize: 18, color: 'white' }} name='chevron-left' />
                <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold' }}>{props.title}</Text>
            </TouchableOpacity>
        </View>
    );
}


export default AddMealBackNavigation;