

    
    const head = document.getElementById("head")
    const URL ="http://localhost:8000"
    const HOME ="http://localhost:8000/getData"

    async function retrieve(){
    try {
            const response = await fetch(HOME)
            if(!response.ok){
                const msg = document.createElement("h1")
                msg.textContent=`Something went wrong try again`;
                head.appendChild(msg)
            }
            const data = await response.json()
            return data
    } catch (error) {
                const msg = document.createElement("h1")
                msg.textContent=`Connection error`;
                head.appendChild(msg)
    }
    }
    function Displaydata(articles){
        if(!articles) return
        articles.forEach((article)=>{
        const parent =document.createElement("div")
        const title = document.createElement("div")
        const date = document.createElement("div")
        parent.id = "articleparent"
        parent.setAttribute("data-id", article.id);
        title.setAttribute("data-id", article.id);
        date.setAttribute("data-id", article.id);
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
    })

 
 document.addEventListener("click",(e)=>{
    
   const id  =e.target.getAttribute("data-id")
    console.log(`id ${id}`)  
    window.location.href=`../article/article.html?id=${id}`             
})
















