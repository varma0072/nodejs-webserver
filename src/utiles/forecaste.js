const request=require('request')
const forecast=(lan,long,callback)=>{
    const url='http://api.weatherstack.com/current?access_key=e53e43e267023b7de6e0f9dc79a048d9&query='+lan+','+long+'&units=f'
    request({url,json:true},(error,{body})=>{
       if(error){
          callback("unable to connect to weather stack",undefined)
       } else if(body.error){
           callback('unable find the location ',undefined)
       } else{
          callback(undefined,body.current.weather_descriptions +' it is currently '+body.current.temperature+' out.there is '+body.current.feelslike+"of rain is there")
       }
 
    })
 }

 module.exports=forecast