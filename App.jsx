import React  from "react"
import { NavigationContainer } from "@react-navigation/native"
import Tabs from "./src/components/Tabs"
import { ActivityIndicator ,View,StyleSheet} from "react-native"
import { useGetWeather } from "./src/hooks/useGetWeather";
import ErrorItem from "./src/components/ErrorItem";

const App=()=>{
  const [loading,error,weather] = useGetWeather()

  if(weather && weather.list && !loading){
    return(
      <NavigationContainer>
        <Tabs weather={weather} />
      </NavigationContainer>)
  }


return(
  <View style={styles.container}>
    {
      error?
      <ErrorItem/>
      :
    <ActivityIndicator
    color={"blue"}
    size={"large"}
    />
    }
  </View>   
  )
}

const styles = StyleSheet.create({
  container:{
    justifyContent:"center",
    flex:1,
    backgroundColor:"white"
  }
})


export default App