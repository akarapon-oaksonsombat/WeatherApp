import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, Dimensions, Image } from 'react-native';
var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;
export default function Tile(props) {

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
                    console.log(`fetched from ${props.zipCode} icon receive .. ${json.weather[0].icon} .. ${json.sys.country}`)
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
    var temp = forecastInfo.temp.toFixed(0)
    // set url-link to image
    var img_url = `https://raw.githubusercontent.com/akarapon-oaksonsombat/ImageResource/master/${forecastInfo.icon}.png`
    return (

        // Tile
        < View style={styles.box} >
            <View style={styles.icon}>
                <Image style={styles.weatherIcon} source={{ uri: img_url, }} />
                <Text style={styles.temperature} >{temp}°</Text>
            </View>

            <Text style={styles.city} >{forecastInfo.name}</Text>
            <Text>


                {/* <Text style={styles.description} >  | {forecastInfo.description}</Text> */}
            </Text>
        </View >
    );
}

const styles = StyleSheet.create({
    box: {
        paddingTop: 16,
        paddingLeft: 16,
        //justifyContent: "space-between",
        flexDirection: 'row',
        alignItems: "center",
        height: 50,
        width: width,

    },
    city: {

        paddingLeft: 16,
        textAlign: 'right',
        fontSize: 22,
        fontWeight: "bold",
        color: "#000000",
    },
    temperature: {
        paddingLeft: 16,
        fontSize: 22,
        color: "#000000",
    },
    description: {
        fontSize: 20,
        color: "#000000",
    },
    weatherIcon: {
        width: 30,
        height: 30,
    },
    icon: {
        flexDirection: 'row',
        alignItems: "center",
    }

});
