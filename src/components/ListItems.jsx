import React from "react"
import { SafeAreaView,StyleSheet,Text,FlatList, View,StatusBar,ImageBackground } from "react-native"
import Feather from "react-native-vector-icons/Feather"
import { weatherType } from "../utilities/weatherType"
import moment from "moment"

const ListItem =({dt_txt,min,max,condition})=>{
    const {item,date,temp,dateTextWrapper} = styles
    return (
        <View style={item}>
            <Feather
            name={weatherType[condition]?.icon}
            size={40}
            color={"white"}
            />
            <View style={dateTextWrapper}>
                <Text style={date}>{moment(dt_txt).format('dddd')}</Text>
                <Text style={date}>{moment(dt_txt).format('h:mm:ss a')}</Text>
            </View>
            <Text style={temp}>{`${Math.round(min)}°/ ${Math.round(max)}° `}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
 
    item:{
        padding:20,
        marginHorizontal:16,
        marginVertical:8,
        flexDirection:"row",
        justifyContent:"space-around",
        alignItems:"center",
        borderWidth:5,
        // change the background color here
        backgroundColor:'indianred'
    },
    temp:{
        color:"white",
        fontSize:20
    },
    date:{
        color:"white",
        fontSize:15,
    },
    dateTextWrapper:{
        flexDirection:"column"
    }
})

export default ListItem