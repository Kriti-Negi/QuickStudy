import {Text, View} from 'react-native';

export default function Spacer(props){
    return (
        <View style = {{height: props.height, width: props.width}}></View>
    )
}