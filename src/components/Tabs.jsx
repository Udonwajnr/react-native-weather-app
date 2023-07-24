import React from "react"
import CurrentWeather from "../screens/CurrentWeather"
import City from "../screens/City"
import UpcomingWeather from "../screens/UpcomingWeather"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Feather from "react-native-vector-icons/Feather"


const Tab = createBottomTabNavigator()

const Tabs =({weather})=>{
    return (
    <Tab.Navigator screenOptions={{
    tabBarActiveTintColor:"tomato",
    tabBarInactiveTintColor:"grey",
    tabBarStyle:{
        backgroundColor:"lightblue"
    },
    headerStyle:{
        backgroundColor:"lightblue", 
    },
    headerTitleStyle:{
        fontWeight:"bold",
        fontSize:25,
        color:'tomato', 
        textAlign:"center",
    },
    headerTitleAlign:"center"
    }}>
        <Tab.Screen name={"Current"}  options={{
          tabBarIcon:({focused})=>(<Feather name={'droplet'} size={25} color={focused?"tomato":"black"}/>)
        }}>
          {()=><CurrentWeather weatherData={weather.list[0]} />}
        </Tab.Screen>

        <Tab.Screen name={"Upcoming"} options={{
          tabBarIcon:({focused})=>(<Feather name={'clock'} size={25} color={focused?"tomato":"black"}/>)
        }}>
          {()=><UpcomingWeather weatherData={weather.list}/>}
        </Tab.Screen>

        <Tab.Screen name={"City"} options={{
          tabBarIcon:({focused})=>(<Feather name={'home'} size={25} color={focused?"tomato":"black"}/>)
        }}>
          {()=><City weatherData={weather.city}/>}
          </Tab.Screen>
      </Tab.Navigator>
    )
}

export default Tabs