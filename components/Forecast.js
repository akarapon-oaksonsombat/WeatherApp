import React from 'react';
import { View, Text } from 'react-native';
export default function Forecast(props) {
    return (
        <View >
            <Text>{props.main}</Text>
            <Text>{props.description}</Text>
            <Text style={styles.temp}>{props.temp}°C</Text>
            {/* <Text>°C</Text> */}

        </View >
    );
}
const styles = StyleSheet.create({
    backdrop: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%'
    },
    // temp: {
    //     fontSize: 24,
    // }
});