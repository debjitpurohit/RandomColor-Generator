import React, { useState } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Alert, FlatList } from 'react-native'

const RandomColor = () => {
    const [color, setColor] = useState([]);
    const RandomColor = () => {
        const red = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);
        return `rgb(${red},${green},${blue})`;
    };
    console.log(color);


    return (
        <View>

            <TouchableOpacity
                style={styles.Button}
                onPress={() => {
                    // Alert.alert(RandomColor());
                    setColor([...color, RandomColor()]);
                }}>
                <Text style={styles.buttonText}>Generate Random Color</Text>
            </TouchableOpacity>

            <FlatList
                keyExtractor={(item) => item}
                data={color}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.imageContainer}>
                            <View
                                style={{
                                    backgroundColor: item,
                                    width: "80%",
                                    height: 80,
                                    borderRadius: 50,
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',

                                }}>
                                <Text style={styles.buttonText}>{item}</Text>
                            </View>

                        </View>
                    );

                }}
            />

        </View>
    )

};

const styles = StyleSheet.create({
    buttonText: {
        color: 'white',
        fontSize: 20,
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'center',
        fontFamily: 'monospace',
        // justifyContent:"flex-end"
    },
    Button: {
        backgroundColor: 'magenta',
        padding: 20,
        width: "90%",
        margin: 20,
        borderRadius: 10,
        overflow: 'hidden',
        display: 'flex',
        position: "relative",
    },
    imageContainer: {
        marginVertical: 30,
        paddingHorizontal: 30,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }


})

export default RandomColor;