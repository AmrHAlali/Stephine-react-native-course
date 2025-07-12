import React, { useReducer } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const VALUE = 5;
const reducer = (state: { count: number }, action: { type: string, payload: number }): { count: number } => {
    // state === {count: number}
    // action === {type: 'increment' || 'decrement'}

    switch (action.type) {
        case 'increment':
            return { count: state.count + VALUE };
        case 'decrement':
            return { count: state.count - VALUE };
        default:
            return state;
    }
};

const CounterScreen = () => {
    const [state, dispatch] = useReducer(reducer, { count: 0 });
    const { count: counter } = state;

    return (
        <View>
            {/*don't increase value without method (setColor)*/}
            <Button title='Increase' onPress={() => dispatch({ type: 'increment', payload: VALUE })} />
            <Button title='Decrease' onPress={() => dispatch({ type: 'decrement', payload: VALUE })} />
            <Text>Current Counter {counter}</Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default CounterScreen;