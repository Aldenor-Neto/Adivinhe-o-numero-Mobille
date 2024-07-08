import React from "react";
import { Text, View, StyleSheet, Button, TextInput } from "react-native";
import { useState } from "react";

export default function Jogo() {

    const [palpite, setPalpite] = useState(0);
    const [secreto, setSecreto] = useState(Math.floor(Math.random() * 100 + 1));

    const [tentativas, setTentativas] = useState(5);
    const [mensagem, setMensagem] = useState('Inicie o jogo');

    const onChangeNum = (num) => {
        setPalpite(num);
    }

    function verifica() {
        if (tentativas > 1) {
            if (palpite == secreto) {
                setMensagem("PARABÉNS! Você acertou o número secreto!");
                setTentativas(0);
            } else if (palpite > secreto) {
                setMensagem("O número secreto é MENOR que seu palpite.");
                setTentativas(tentativas - 1);
            } else {
                setMensagem("O número secreto é MAIOR que seu palpite.");
                setTentativas(tentativas - 1);
            }
        } else {
            setMensagem("Desculpe você não tem mais tentativas. O número secreto era " + secreto);
        }
    }

    function reiniciar() {
        setTentativas(5);
        setSecreto(Math.floor(Math.random() * 50 + 1));
        setMensagem("Faça seu 1º palpite para iniciar.");
    }

    function printMensagens() {
        for (let i = 0; i < mensagens.length; i++) {
        }
    }
    return (
        <View style={styles.container}>
            <Text style={styles.textoPrimario}>Infórme seu palpite:</Text>
            <Text style={styles.textoSecundario}>Você tem {tentativas} tentativas</Text>
            <TextInput
                keyboardType="number-pad"
                value={palpite}
                onChangeText={onChangeNum}
                style={styles.input}
            />
            <View style={styles.containerBotao}>
                <Button
                    title="Enviar palpite"
                    onPress={verifica}
                    style={styles.botao}
                />
                <Button
                    title="Reiniciar Jogo"
                    onPress={reiniciar}
                    style={styles.botao}
                />
            </View>
            <Text style={styles.textoSecundario}> Numero: {palpite}</Text>
            <Text style={styles.textoTerceario}> {mensagem}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center"
    },
    botao: {
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: '#005',
        color: '#aaa',
        padding: 10,
        borderRadius: 10,
    },
    textoPrimario: {
        alignItems: "center",
        justifyContent: "space-between",
        color: '#fff',
        fontSize: 25,
    },
    textoSecundario: {
        alignItems: "center",
        justifyContent: "space-between",
        color: '#ff0',
        fontSize: 18
    },
    textoTerceario: {
        alignItems: "center",
        justifyContent: "space-between",
        color: '#fff',
        fontSize: 25
    },
    input: {
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: '#aaa',
        borderRadius: 5,
        padding: 10,
    },
    containerBotao: {
        alignItems: "center",
        justifyContent: "space-between",
        padding: 10,
        borderRadius: 10,
    }
})