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



app.listen(PORT,()=>{
    console.log(`server is listening on port http://localhost:${PORT}`)
})

