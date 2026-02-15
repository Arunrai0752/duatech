import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import Lead from './models/Lead.js'
import {Parser} from 'json2csv'

const app=express()
app.use(cors())
app.use(express.json())

mongoose.connect(process.env.MONGO_URI)

app.post('/api/leads',async(req,res)=>{
const lead=new Lead(req.body)
await lead.save()
res.json({msg:'Saved'})
})

app.get('/api/leads',async(req,res)=>{
const leads=await Lead.find()
res.json(leads)
})

app.get('/api/leads/export',async(req,res)=>{
const leads=await Lead.find()
const parser=new Parser()
const csv=parser.parse(leads)
res.header('Content-Type','text/csv')
res.attachment('leads.csv')
return res.send(csv)
})

app.listen(process.env.PORT||5000)