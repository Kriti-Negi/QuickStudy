import { Pressable, Text } from "react-native";

export default function GenericButton(props){
    return (
        <Pressable 
            onPress={() => props.onClick()}
            style = {{
                backgroundColor: "#67B045",
                width: 380,
                alignItems: "center",
                borderRadius: 8,
                paddingTop: 10,
                paddingBottom: 10
            }}
        >
            <Text
                style = {{
                    color: "#ffffff",
                    fontSize: 20
                }}
            >{props.title}</Text>
        </Pressable>
    )
}