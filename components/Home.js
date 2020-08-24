import React from 'react';
import Weather from './Weather';
import { View } from 'react-native';
export default function Home() {

    return (
        <View>
            <Weather zipCode={90110} />
        </View>
    );

}
