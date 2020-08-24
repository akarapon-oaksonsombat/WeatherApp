import React, { useState, useEffect } from 'react';
import { View, Button } from 'react-native';
import Forecast from './Forecast';
import { useNavigation } from "@react-navigation/native";
export default function Weather(props) {
    const navigation = useNavigation()

    const [forecastInfo, setForecastInfo] = useState({
        main: '-',
        description: '-',
        temp: 0,
        name: '-',
        icon: '-',
        country: '-',
    })

    useEffect(() => {

        console.log(`fetching data with zipCode = ${props.zipCode}`)
        if (props.zipCode) {
            fetch(`http://api.openweathermap.org/data/2.5/weather?q=${props.zipCode},th&units=metric&APPID=6ab4244ed8c62da8e8564cbd1d1d597a`)
                .then((response) => response.json())
                .then((json) => {
                    console.log(`fetched from ${props.zipCode} icon receive .. ${json.weather[0].icon} .. ${json.weather[0].main}`)
                    setForecastInfo({
                        main: json.weather[0].main,
                        description: json.weather[0].description,
                        temp: json.main.temp,
                        name: json.name,
                        icon: json.weather[0].icon,
                        country: json.sys.country,
                    });

                })
                .catch((error) => {
                    console.warn(error);
                });
        }
    }, [props.zipCode])
    return (
        <View>
            <Forecast {...forecastInfo} />
            <Button
                onPress={() => navigation.push('Setting')}
                title="Change city"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
            />
        </View >
    );
}
