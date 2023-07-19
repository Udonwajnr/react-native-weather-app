import React from "react"
import { SafeAreaView,StyleSheet,Text,FlatList, View,StatusBar,ImageBackground } from "react-native"
import Feather from "react-native-vector-icons/Feather"

const DATA = [
    {
        dt_txt:"2023-02-18 12:00-00",
        main:{
            temp_min: 8.55,
            temp_max: 7.55,
        },
        weather: [
            {
              main: "Clear",
            }
          ],
    },
    {
        dt_txt:"2023-02-18 15:00-00",
        main:{
            temp_min: 8.55,
            temp_max: 7.55,
        },
        weather: [
            {
              main: "Cloud",
            }
          ],
    },
    {
        dt_txt:"2023-02-18 18:00-00",
        main:{
            temp_min: 8.55,
            temp_max: 8.55,
        },
        weather: [
            {
              main: "Rain",
            }
          ],
    },
]

const Item =(props)=>{
    const {dt_txt,min,max,condition} = props
    return (
        <View style={styles.item}>
            <Feather
            name={"sun"}
            size={50}
            color={"white"}
            />
            <Text  style={styles.date}>{dt_txt}</Text>
            <Text  style={styles.temp}>{min}</Text>
            <Text  style={styles.temp}>{max}</Text>
        </View>
    )
}

const UpcomingWeather= ()=>{
    const renderItem =({item})=>{
        return(
            <Item condition={item.weather[0].main}
                  dt_txt={item.dt_txt}
                  min={item.main.temp_min}
                  max={item.main.temp_max}
             />
        )
    }
    return(
    <SafeAreaView style={styles.container}>
        <ImageBackground
         source={require("../../assets/upcoming.jpg")}
         style={styles.image}
         >
        <Text>Upcoming Weather</Text>     
        <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item)=>item.dt_txt}
        />
        </ImageBackground>
    </SafeAreaView>
)
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:StatusBar.currentHeight || 0,
        backgroundColor:"royalblue"     
    },
    item:{
        padding:20,
        marginHorizontal:16,
        marginVertical:8,
        flexDirection:"row",
        justifyContent:"space-around",
        alignItems:"center",
        borderWidth:5,
        // change the background color here
        backgroundColor:'pink'
    },
    temp:{
        color:"white",
        fontSize:20
    },
    date:{
        color:"white",
        fontSize:15,
    },
    image:{
        height:100,
        width:100,
        flex:1
    }
})


export default UpcomingWeather