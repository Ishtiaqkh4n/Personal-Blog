


const URL = "http://localhost:8000"

const urlParams =  new URLSearchParams(location.search);
const id = urlParams.get("id")
async function showArticles(id) {
   const response = await fetch(`${URL}/article/${id}`)
   if (!response.ok) {
      throw new Error("something went wrong")
   }
   const data = await response.json()
   const parent = document.createElement("div")
   const title = document.createElement("h3")
   const date = document.createElement("h4")
   const content = document.createElement("span")
   date.textContent=data.date
   title.textContent=data.title
   content.textContent=data.body
   parent.appendChild(date)
   parent.appendChild(title)
   parent.appendChild(content)
   document.body.appendChild(parent)
}

  showArticles(id)

