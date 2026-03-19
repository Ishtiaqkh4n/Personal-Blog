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
    const data = loadData()
    data.forEach((article)=>{
    if(article.id==Id){
       return res
       .status(200)
       .json(article)
    }
    })
})


//middleware 
app.use("/auth",middleAuth)

// app.get("/admin",(req,res)=>{
//     res.status(200).send("HELLO THIS IS DASHBOARD")
// })

app.get("/auth/admin",(req,res)=>{
     console.log("clicked")
     res
    .status(200)
    .send(loadData())
})





app.listen(PORT,()=>{
    console.log(`server is listening on port http://localhost:${PORT}`)
})

