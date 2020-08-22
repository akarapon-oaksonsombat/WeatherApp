import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
export default function Weather(props) {
    return (
        <Text>{props.zipCode}</Text>
    );
}