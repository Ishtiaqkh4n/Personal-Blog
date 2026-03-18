import express from "express"
import cors from "cors"
import fs from "fs"
const filePath = "./store.json"


const app = express()
const PORT = 8000;


app.use(cors())
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
 

app.get("/getData",(req,res)=>{
    res
    .status(200)
    .send(loadData())
})


app.get("/article/:Id",(req,res)=>{
    const {Id} = req.params;
    const data = loadData()
    data.forEach((article)=>{
    if(article.id==Id){
       return res
       .status(200)
       .json(article)
    }
    })
})





app.listen(PORT,()=>{
    console.log(`server is listening on port http://localhost:${PORT}`)
})

