import React from "react"
import { SafeAreaView,ViewProps,Text, View,StyleSheet } from "react-native"
import Feather from "react-native-vector-icons/Feather"

const CurrentWeather =()=>{
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <Feather
          name={"sun"}
          size={100}
          color="black"
        />
          <Text>Current Weather</Text>
          <Text style={styles.temp}>6</Text>
          <Text style={styles.feels}>Feels like 5</Text>
          <View style={styles.highLowWrapper}>
            <Text style={styles.highLow}>High:8</Text>
            <Text style={styles.highLow}> Low 6 </Text>
          </View>
        </View>
            <View style={styles.bodyWrapper}>
              <Text style={styles.description}>Its Sunny</Text>
              <Text>Its perfect t-shirt Weather</Text>
         </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  wrapper:{
    flex:1,
    backgroundColor:"blue"
  },
  container:{
    backgroundColor:"blue",
    flex:1,
    alignItems:"center",
    justifyContent:"center"

  },
  temp:{
    color:"black",
    fontSize:48
  },
  feels:{
    fontSize:30,
    color:"black"
  },
  highLow:{
    color:"black",
    fontSize:20
  },
  highLowWrapper:{
    flexDirection:"row"
  },
  bodyWrapper:{
    justifyContent:"flex-end",
    alignItems:'flex-start',
    paddingLeft:25,
    marginBottom:40
  },
  description:{
    fontSize:48
  },
  message:{
    fontSize:30
  }
})

export default CurrentWeather