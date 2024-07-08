import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";

export default function Cabecario() {
    return (
        <View style={styles.container}>
            <Image
                source={require("../assets/imagem home studio Aldenor Neto.jpg")}
                alt="Imagem do stúdio  Aldenor Neto"
                resizeMode="center"
                style={styles.img}
            >
            </Image>
            <Text>Adivinhe o Número</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        backgroundColor: '#ff5',
        color: '#ddd',
        fontSize: 25,
    },
    img: {
        width: 50,
        height: 50,
    }
})