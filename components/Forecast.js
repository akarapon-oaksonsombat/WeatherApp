import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions, StatusBar } from 'react-native';
import Tile from './Tile';
import WeatherIcon from './WeatherIcon';
var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;
export default function Forecast(props) {
    // set box color
    const setBoxColor = (main, time) => {
        if (main == 'Thunderstorm') {
            return "#0288d1"
        } else if (main == 'Drizzle') {
            return "#0288d1"
        } else if (main == 'Rain') {
            //return "#5AC8FA"
            return "#8E8E93"
        } else if (main == 'Snow') {
            return "#0288d1"
        } else if (main == 'Atmosphere') {
            return "#0288d1"
        } else if (main == 'Clouds') {
            return "#0288d1"
        } else {
            if (time[2] == 'd') {
                return "#0288d1"
            } else {
                return "#0288d1"
            }
        }
    }

    // set url-link to image

    // var img_url = `http://openweathermap.org/img/wn/${props.icon}@4x.png`
    var img_url = `https://raw.githubusercontent.com/akarapon-oaksonsombat/ImageResource/master/${props.icon}.png`

    // display content
    return (

        <View>


            <StatusBar barStyle="dark-content" />
            {/* Box */}
            <View style={styles.box} backgroundColor={setBoxColor(props.main, props.icon)}>
                {/* <Text style={styles.topic} >Weather</Text> */}
                <Image style={styles.weatherIcon} source={{ uri: img_url, }} />

                <Text style={styles.city} >{props.name}</Text>
                <Text>
                    <Text style={styles.temperature} >
                        {props.temp}°
                    </Text>
                    <Text style={styles.description} >  | {props.description}</Text>
                </Text>
            </View>

            {/* Tile */}
            {/* <View>
                <Tile zipCode="90110" />
                <Tile zipCode="91130" />
                <Tile zipCode="91120" />
                <Tile zipCode="10210" />
            </View> */}

        </View >

    );
}
const styles = StyleSheet.create({
    box: {
        paddingTop: 50,
        flexDirection: 'column',
        alignItems: "center",
        height: width,
    },
    topic: {
        paddingTop: 50,
        paddingBottom: 20,
        fontSize: 17,
        fontWeight: "bold",
        color: "#ffffff",
    },
    city: {
        paddingTop: 16,
        fontSize: 34,
        fontWeight: "bold",
        color: "#ffffff",
    },
    temperature: {
        fontSize: 22,
        // fontWeight: "bold",
        color: "#ffffff",
    },
    description: {
        fontSize: 20,
        // fontWeight: "bold",
        color: "#ffffff",
    },
    weatherIcon: {
        width: 100,
        height: 100,
    },

});