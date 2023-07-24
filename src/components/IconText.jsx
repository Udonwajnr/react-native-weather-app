import React from "react"
import { SafeAreaView,Text,StyleSheet,ImageBackground,View } from "react-native";
import Feather from "react-native-vector-icons/Feather"

const IconText =({bodyText,iconColor,iconName,bodyTextStyles})=>{
    const {container,textTheme} = styles 
    return (
        <View style={styles.container}>
          <Feather
                name={iconName} size={50} color={iconColor}/>
                <Text style={[textTheme,bodyTextStyles]}>{bodyText}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        alignItems:'center'
    },

    textTheme:{
        fontWeight:"bold"
    }
})
export default IconText