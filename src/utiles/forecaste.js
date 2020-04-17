const request=require('request')
const forecast=(lan,long,callback)=>{
    const url='http://api.weatherstack.com/current?access_key=e53e43e267023b7de6e0f9dc79a048d9&query='+lan+','+long+'&units=m'
    request({url,json:true},(error,{body})=>{
       if(error){
          callback("unable to connect to weather stack , check your internet ",undefined)
       } else if(body.error){
           callback('unable to  find the location . my weather stack API is unsubsribed now because it is free version and  time period is over . i will continue my service after i subscribe to weather stack',undefined)
       } else{
          callback(undefined,'description :'+body.current.weather_descriptions +'.... it is currently '+body.current.temperature+' temperature out.  humudity:'+body.current.humidity+'. wind speed:'+body.current.wind_speed)
       }
 
    })
 }

 module.exports=forecast