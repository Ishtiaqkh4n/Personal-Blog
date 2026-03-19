
const URL ="http://localhost:8000"
const head = document.getElementById("head")


const auth = btoa("admin:admin")
console.log(auth)
async function retreive(){
try {
        const response = await fetch(`${URL}/admin`,{
            method:"GET",
            headers:{
            'Authorization': 'Basic ' + auth,
            'Content-Type':`application/json`
            },
        })




        if(!response.ok){
        //incase the response is not okay    
        const msg = document.createElement("h1")
        msg.textContent=`Something went wrong try again`;
        head.appendChild(msg)    
        }
        const data = await response.json()
         return data
} catch (error) {
        // for connection error 
        const msg = document.createElement("h1")
        msg.textContent=`Connection error`;
        head.appendChild(msg)
}
}

function Displaydata(articles){
articles.forEach((article)=>{
    const parent = document.createElement("div")
    parent.classList.add("article_style")
    const title = document.createElement("span")
    const del = document.createElement("button")
    const edit = document.createElement("button")
    title.textContent=article.title
    del.textContent="delete"
    edit.textContent="edit"
    del.setAttribute("del-id",article.id)
    edit.setAttribute("edit-id",article.id)
    parent.appendChild(title)
    parent.appendChild(edit)
    parent.appendChild(del)
    head.appendChild(parent)
    
})
}





retreive()
.then((result)=>{
    Displaydata(result)
})




