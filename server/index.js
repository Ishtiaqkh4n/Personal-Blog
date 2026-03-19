import express from "express"
import cors from "cors"
import fs from "fs"
const filePath = "./store.json"
import basicAuth from "express-basic-auth"


const app = express()
const PORT = 8000;



app.use(
  cors({
    origin: "http://127.0.0.1:5500",
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
);
app.use(express.json())


const loadData = ()=>{
try {
        const dataBuffer = fs.readFileSync(filePath)
        const dataTostring = dataBuffer.toString()
        return JSON.parse(dataTostring)
} catch (error) {
        return []
}
}

const SaveData = (articles)=>{
    const data = JSON.stringify(articles)
    fs.writeFileSync(filePath,data)
}


app.get("/getData",(req,res)=>{
    res
    .status(200)
    .send(loadData())
})


const middleAuth = basicAuth({
    users:{
        "admin":"admin"
    },
    challenge:true,
    unauthorizedResponse:(req)=>{
        return `Acces Denied : Invalid Credentials`
    }

})

app.get("/article/:Id",(req,res)=>{
    const {Id} = req.params;
    if(!Id) return res.status(404).send("Id is required")
    const data = loadData()
    if(!data) return res.status(404).send([])
    data.forEach((article)=>{
    if(article.id==Id){
       return res
       .status(200)
       .json(article)
    }
    })
})


//middleware 
app.use("/admin",middleAuth)

// app.get("/admin",(req,res)=>{
//     res.status(200).send("HELLO THIS IS DASHBOARD")
// })

app.get("/admin",(req,res)=>{
     console.log("clicked")
     res
    .status(200)
    .send(loadData())
})


app.delete("/admin/delete/:Id",(req,res)=>{
  const {Id} = req.params;
  if(!Id) return res.status(404).send("Id is required")
  const articles =loadData()  
  const newArr = articles.filter((article)=> article.id!=Id)
  SaveData(newArr)
  return res
  .status(200)
  .send(`Article ${Id} deleted successfully`)
 
  })


app.patch("/admin/update/:Id",(req,res)=>{
    const {Id} = req.params;
    console.log(Id )
    const {title,content} = req.body
    if(!Id) return res.status(404).send("Id is required")
    const articles = loadData()
     const newArr = articles.map((article)=>{
      if(article.id==Id){
          article.title = title
          article.date=new Date()
          article.body = content

      }
      return article
  })
  
   SaveData(newArr)
   return res
   .status(201)
   .send("Item updated successfully")
 

})


///add new article
app.post("/admin/new",(req,res)=>{
  const {title,content} = req.body
  const data = loadData()
  //query the  last id in db 
  const Id = data.at(-1).id+1;
    // if(data.length>0) data[data.length-1].id+1     
     
  const article ={
    id:Id,
    title:title,
    date:new Date(),
    body:content
  }  
  data.push(article)
  SaveData(data)

   return res
   .status(201)
   .send("article addedd successfully")
  

})




app.listen(PORT,()=>{
    console.log(`server is listening on port http://localhost:${PORT}`)
})

