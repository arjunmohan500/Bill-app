const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const {billmodel}= require('./models/Bill')

const app=express()

app.use(cors())
app.use(express.json())
mongoose.connect("mongodb+srv://arjun:arjun2001@cluster0.jyq1ewu.mongodb.net/billdb?retryWrites=true&w=majority&appName=Cluster0")

app.post('/add',(req,res)=>{
let input=req.body
let bill=new billmodel(input)
    bill.save()
    res.json({"status":"success"})

})

 
app.post('/view', (req,res) => {
    coursemodel.find().then((data) => {
        res.json(data)
    }

    ).catch(
        (error) => {
            res.json(error)
        }
    )
})

app.listen(8080,()=>{
console.log("server started")
})