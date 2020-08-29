import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions, StatusBar } from 'react-native';
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
    var img_url = `https://raw.githubusercontent.com/akarapon-oaksonsombat/ImageResource/master/${props.icon}.png`

    // display content
    return (

        <View>

            <StatusBar barStyle="auto" />
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


        </View >

    );
}
const styles = StyleSheet.create({
    box: {
        paddingTop: 50,
        flexDirection: 'column',
        alignItems: "center",

        height: height,
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
        color: "#ffffff",
    },
    description: {
        fontSize: 20,
        color: "#ffffff",
    },
    weatherIcon: {
        width: 100,
        height: 100,
    },

});