const path=require('path') 
const express = require('express')
const hbs = require('hbs')
const geocode= require('./utiles/geocode')
const forecaste=require('./utiles/forecaste')

const app=express()
const port=process.env.PORT || 3000
// define paths for express js
const publicDirect = path.join(__dirname,"../public")
const viewspath = path.join(__dirname,'../templates/views')
const partialsPath=path.join(__dirname,'../templates/particals')

// set handle bars egine and view location
app.set('view engine','hbs')
app.set('views',viewspath)
hbs.registerPartials(partialsPath)

app.use(express.static(publicDirect))   // to hear path setting .............................coman to all projects 


// home page by in hbs pages in web project 
app.get('',(req,res)=>{res.render('index',{title:'weather app'})})
// about page by in hbs
app.get('/about',(req,res)=>{res.render('about',{title:'weather app'})})
// help page by in hbs
app.get('/help',(req,res)=>{res.render('help',{title:'weather app', des:'the page is contain sometext'})})


// weather page (main function)...........................................................................
app.get('/weather',(req,res)=>{
    if(!req.query.address){
        res.send({error:'the address should be provide '})
    }
       geocode(req.query.address,(error,{latitude,longitude,location}={})=>{
           if(error){
               return res.send({error})
           }
           forecaste(latitude,longitude,(error,forecastData)=>{
               if(error){
                   return res.send({error})
               }
               
          res.send({
            forecaste:forecastData,
            location,
            address:req.query.address
                }) 
           })
       })
    
    
})

// to hear main function................................................................................
//error sample pages 
app.get('/help/*',(req,res)=>{res.render('404',{title:'404',name:'chandu',errorM:'help articles is not found '})})

app.get('*',(req,res)=>{ res.render('404',{title:'404',name:'chandu',errorM:'page is not found '}) })

app.listen(port,()=>{console.log('the server is started  port in  '+port)})