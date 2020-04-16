const request=require('request')


const geocode = (address,callback)=>{
    const url="https://api.mapbox.com/geocoding/v5/mapbox.places/"+ encodeURIComponent(address) +".json?access_token=pk.eyJ1IjoidmFybWEwMDciLCJhIjoiY2s4bzJpcHh3MHFzdjNsbzJ5Z2FmeHRoYyJ9.qo1ivi3zMPvNRQWN-6mM5g&limit=1"
    request({url, json:true },(error,{body})=>{
       if(error){
          callback('unable to connect the location service',undefined)
       } else if(body.features.length === 0){
           callback('cannont find the location service ',undefined)
       } else {
             const latitude =body.features[0].center[1]
             const longitude= body.features[0].center[0]
             const location = body.features[0].place_name
             callback(undefined,{latitude,longitude,location})
       }
    })

}


module.exports = geocode
