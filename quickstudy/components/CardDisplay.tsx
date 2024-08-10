import { View, Text, StyleSheet, Pressable, TextInput } from "react-native";
import GenericButton from "./GenericButton";
import { useState } from "react";
import { storage } from "@/constants/Storage";

export default function CardDisplay(props){

    const [canEdit, setCanEdit] = useState(false);
    const [front, setFront] = useState(props.front);
    const [back, setBack] = useState(props.back);

    const [prevFront, setPrevFront] = useState(props.front);
    const [prevBack, setPrevBack] = useState(props.back);

    function edit(){
        if(!canEdit){
            setPrevBack(back);
            setPrevFront(front);
        }

        if(canEdit && storage.getString(props.folderName)){
            let info = JSON.parse(storage.getString(props.folderName));
            let arr = info.values;
            let update;
            for (let i = 0; i < arr.length; i++) {
              if(arr[i] && arr[i][props.stackName]){
                update = (info.values[i][props.stackName]);
              }
            }

            for(let j = 0; j < update.length; j++){
                if(update[j].front == prevFront && update[j].back == prevBack){
                    console.log("here");
                    update[j].front = front;
                    update[j].back = back;
                    break;
                }
            }
            console.log("hsdfsd");
            console.log(update);

            setPrevBack(back);
            setPrevFront(front);

            storage.delete(props.folderName);
            storage.set(props.folderName, JSON.stringify(info));
        }
        console.log("sdfsdf");
        setCanEdit(!canEdit);
    }

    return (
        <View style = {styles.container}>
            <View style = {styles.cardInfoContainer}>
                <View style = {styles.view}>
                    <TextInput 
                        style = {styles.text}
                        editable = {canEdit}
                        value = {front}
                        onChangeText={(text) => setFront(text)}
                        multiline
                        numberOfLines={4}
                        
                    />
                </View>
                <View style = {styles.view}>
                    <TextInput 
                        style = {styles.text}
                        editable = {canEdit}
                        value = {back}
                        onChangeText={(text) => setBack(text)}
                        multiline
                        numberOfLines={4}
                    />
                </View>
            </View>
            <Pressable onPress={() => edit()} style={styles.btn}>
                <Text style={styles.btn_text}>
                    {!canEdit? "Edit": "Save"}
                </Text>
            </Pressable>
        </View>

    )
}

const styles = StyleSheet.create({
    text: {
        color: "#ffffff",
        fontSize: 16,
        padding: 5
    },
    view: {
        flex: 1,
        padding: 10
    },
    cardInfoContainer: {
        borderColor: "#000039",
        borderTopColor: "#0E34FF",
        borderWidth: 2,
        flexDirection: 'row',

    },
    container: {
        width: 360
    },
    btn: {
        borderColor: "#39B200",
        borderWidth: 2,
        padding: 8,
        borderRadius: 8,
        margin: 5,
        marginTop: 0,
        marginBottom: 10,

    },
    btn_text: {
        textAlign: "center",
        color: "#ffffff"
    }
})