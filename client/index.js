document.addEventListener("DOMContentLoaded",()=>{

    const head = document.getElementById("head")
    // const articletitle= document.getElementById()
    // const articledate= document.getElementById()
    



    
    const API ="http://localhost:8000/getData"
    
    async function retrieve(){
        const response = await fetch(API)
        if(!response.ok){
            throw new Error("Something went wrong")
        }
        const data = await response.json()
        return data
    }

    
    function Displaydata(articles){
        articles.forEach((article)=>{
        const parent =document.createElement("div")
        parent.id = "articleparent"
        const title = document.createElement("div")
        const date = document.createElement("div")
        title.textContent=article.title
        date.textContent=article.date
           parent.appendChild(title)
           parent.appendChild(date)
           head.appendChild(parent)
        })
    }


    
    
    
    retrieve()
    .then((result)=>{
        Displaydata(result)
          result.forEach(element => {
            console.log(`${element.title} ${element.date}`)
          });
    })
    .catch((error)=>{
        console.log(error)
        
    })

})








