import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

const Home = () => {
    return (
        <View>
            <Text style={Styles.fontStyle}>
                Acompanhe a LearningLab de Forma Fácil
            </Text>
            <Image style={Styles.imageStyle} source={require("../resources/learning_sketching.png")}/>
            <Text style={Styles.fontStyle}>
                Não esqueça de acompanhar nossas redes sociais. Nós cuidamos de lembrar você sempre que precisar
            </Text>
        </View>
    )
}

const Styles = StyleSheet.create({
    fontStyle: {
        color: '#04BFBF',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 20
    }, 
    imageStyle: {
        resizeMode: 'contain',
        width: '100%',
        height: undefined,
        aspectRatio: 1
    }
})

export default Home