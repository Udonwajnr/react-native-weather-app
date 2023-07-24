import React,{useState,useEffect} from "react"
import Geolocation from '@react-native-community/geolocation';
import {WEATHER_API_KEY} from "@env"

export const useGetWeather = ()=>{
const [loading,setLoading] = useState(true)
const [location,setLocation] = useState({})
const [weather,setWeather] = useState([])
const [error,setError] = useState()
const [latitude,setLatitude] = useState(null)
const [longitude,setLongitude] = useState(null)

const getCurrentLocation =()=>{
  Geolocation.getCurrentPosition(
    position =>{
      const {latitude,longitude} = position.coords;
      setLocation({latitude,longitude})
      setLongitude(longitude)
      setLatitude(latitude)
    },
    error=>console.log("Error",error.message),
    {enableHighAccuracy:true,timeout:15000,maximumAge:10000}
  )
}


useEffect(()=>{
    (
      async()=>{
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          {
            title: 'Cool Photo App location Permission',
            message:
              'Cool Photo App needs access to your location ',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log('You can use the Location');
        } else {
          console.log(' location denied');
        }
      }
       catch (err) {
        console.warn(err);
      }
   })

   
  const fetchWeatherData = async ()=>{
  try{ const res = await fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}&units=metric`)
    const data = await res?.json()
    setWeather(data)
  }
    catch (e){
      setError("could not Fetch Weather")
    }finally{
      setLoading(false)
    }
  }
  
  getCurrentLocation()
  fetchWeatherData()
  },[longitude,latitude])
  return [loading,error,weather]  
}