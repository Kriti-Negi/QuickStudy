import { Image, View, Text, StyleSheet, Platform, Pressable } from 'react-native';
import Svg, { Circle } from 'react-native-svg';
import { useLinkProps } from '@react-navigation/native';

export default function FolderLink(props) {

    return (
        <Pressable onPress={() => {
            props.navigation.navigate(props.linkName, {
                folder: props.folderName? props.folderName: props.title,
                stack: props.stackName? props.stackName :""
              });
        }}>
            <View
                style = {[
                    {
                    width: 360,
                    marginTop: 15,
                    flexDirection: 'row',
                    flex: 1,
                    padding: 10,
                    paddingTop:15,
                    paddingBottom: 15,
                    borderColor: "#39B200",
                    borderWidth: 2,
                    borderRadius: 8,
                    maxHeight: 80,
                    },
                ]}
        >
                <View style = {{flex: 0.3}}>
                    <View style = {{
                        backgroundColor: "#0E34FF",
                        width: 50,
                        height: 50,
                        borderRadius: 30,
                        marginLeft: 10
                    }}></View>
                </View>
                <View>
                    <Text
                        style = {{
                            fontSize: 20,
                            color: "#DFDFDF",
                            paddingTop: 3
                        }}
                    >{props.title}</Text>
                    <Text
                        style = {{color: "#DFDFDF",}}
                    >Hey</Text>
                </View>
            </View>
        </Pressable>

    )
}