const request=require('request')
const forecast=(lan,long,callback)=>{
    const url='http://api.weatherstack.com/current?access_key=9d8574b126bc910b046d1355817ca474&query='+lan+','+long+'&units=m'
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