import React, { useState } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash'
import * as AddMealActions from '../../state/actions/addMeal';
import { Text, View, TextInput, Keyboard, Dimensions } from 'react-native';
import style from './styles/addMeal';
import { TouchableOpacity, ScrollView, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AddMealBackNavigation from './AddMealBackNavigation';
import Carousel from 'react-native-snap-carousel';

const mapDispatchToProps = (dispatch) => {
    return {
        setInstructions: (instructions) => dispatch(AddMealActions.setInstructions(instructions)),
    };
}
const mapStateToProps = ({ addMeal }) => {
    return {
        instructions: addMeal.instructions
    };
};

const Instructions = (props) => {

    const [step, setStep] = useState('')
    const [activeIndex, setActiveIndex] = useState(0)

    const addStep = (index) => {
        var instructions = _.cloneDeep(props.instructions)
        instructions.splice(index, 0, step)
        props.setInstructions(instructions)
        setStep('')
    }

    const renderItem = ({ item, index }) => {
        return (
            <View style={style.stepCard}>
                <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 30, color: '#28262C', padding: 10 }}>
                        {item === 'Add' ? `Add Step` : `Step ${index + 1}`}
                    </Text>
                    {item === 'Add' ? <TextInput
                        placeholder='How To Make Here'
                        style={style.stepInput}
                        multiline={true}
                        numberOfLines={5}
                        onChangeText={step => setStep(step)}
                        value={step}
                        blurOnSubmit={true}
                    /> : <Text>{item}</Text>}
                </View>
                {item === 'Add' && <TouchableOpacity onPress={() => addStep(index)} style={{ paddingBottom: 15 }}>
                    <Text>Add Step</Text>
                </TouchableOpacity>}
            </View>
        )
    }

    return (
        <View style={style.container} onPress={() => Keyboard.dismiss()}>
            <AddMealBackNavigation title='Ingredients' backNavigation={() => props.navigation.navigate('Ingredients')} />
            <FontAwesome5 style={style.listIcon} name='list-ol' />
            <Text style={style.nameYourMealHeaderText}>How Do You Make It?</Text>
            <View style={style.instructionArea}>
                <Carousel
                    layout={'default'}
                    layoutCardOffset={18}
                    data={props.instructions}
                    firstItem={0}
                    sliderWidth={Dimensions.get('window').width}
                    itemHeight={200}
                    itemWidth={300}
                    renderItem={renderItem}
                    onSnapToItem={index => setActiveIndex(index)} />
            </View>
            <TouchableOpacity style={style.nextButton}>
                <Text style={style.nextButtonText}>Finish</Text>
            </TouchableOpacity>
        </View>
    );
}


export default connect(mapStateToProps, mapDispatchToProps)(Instructions);