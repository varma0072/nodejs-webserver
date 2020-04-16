
const weatherForm= document.querySelector('form')
const search = document.querySelector('input')
const messOne = document.querySelector('#p1')
const messtwo = document.querySelector("#p2")

weatherForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    const location = search.value
    if(!location){
        console.log('please enter the location ')
    }else{
        messOne.textContent = 'loading'
        messtwo.textContent= 'a'
    fetch('http://localhost:3000/weather?address='+location).then((response)=>{
        response.json().then((data)=>{
            if(data.error){
                messOne.textContent =   data.error
            }else{
                messOne.textContent = data.location
                messtwo.textContent = data.forecaste
            }
        })
    }) 
      }
})
