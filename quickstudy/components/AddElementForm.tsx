import { useState } from "react";
import { Alert, TextInput, StyleSheet, Text, Button, View, Pressable } from "react-native";

export default function AddElementForm(props){

    const [text, setText] = useState("");

    return (
        <View
            style = {{
                padding: 10,
                width: 360,
                borderColor: "#39B200",
                borderWidth: 2,
                marginTop: 20,
                borderRadius: 8
            }}
        >
            <Text 
                style = {{
                    backgroundColor: "#5B74F6",
                    padding: 10,
                    margin: -10,
                    fontSize: 20,
                    textAlign: "center",
                    borderTopEndRadius: 8,
                    borderTopStartRadius: 8
                }}
            >
                Add {props.label}
            </Text>
            <TextInput
                style = {{
                    fontSize: 20,
                    color: "#ffffff",
                    padding: 15,
                    paddingTop: 15,
                    paddingBottom: 15,
                    marginTop: 20,
                    marginBottom: 10,
                    borderColor: "#39B200",
                    borderWidth: 2,
                    borderRadius: 8
                }}
                placeholder= {props.label + " Name"}
                onChangeText={setText}
            />
            <Pressable onFocus = {(() => {props.add(text)})} style = {styles.button}>
                <Text style = {styles.text}>ADD</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        borderColor: "#D36147",
        borderWidth: 2,
        backgroundColor: "#D36147",
        borderRadius: 8,
        padding: 10
    },
    text: {
        color: "#ffffff",
        textAlign: "center",
        fontSize: 20
    }
})