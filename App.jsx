import React from "react"
import { SafeAreaView,View,StyleSheet } from "react-native"
import CurrentWeather from "./src/components/CurrentWeather"
import UpcomingWeather from "./src/components/UpcomingWeather"

const App=()=>{
  return(
      <View style={styles.container}>
        {/* <CurrentWeather/> */}
        <UpcomingWeather/>
      </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  }
})
export default App