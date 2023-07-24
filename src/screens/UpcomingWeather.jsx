import React from "react"
import { SafeAreaView,StyleSheet,FlatList, ImageBackground } from "react-native"
import ListItem from "../components/ListItems"

const UpcomingWeather= ({weatherData})=>{
    const renderItem =({item})=>{
        return(
            <ListItem condition={item.weather[0].main}
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
         imageStyle={{
            resizeMode: 'cover' // works only here!
          }}
         >
        <FlatList
        data={weatherData}
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
        marginTop: 0,
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
        // backgroundColor:'pink'
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
        flex:1,
    }
})


export default UpcomingWeather