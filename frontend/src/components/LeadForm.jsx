import {useState} from 'react'
import axios from 'axios'
export default function LeadForm(){
const [data,setData]=useState({name:'',email:'',mobile:''})
const submit=async(e)=>{
e.preventDefault()
await axios.post(import.meta.env.VITE_API_URL+'/api/leads',data)
alert('Lead Submitted')
}
return(
<form onSubmit={submit}>
<input placeholder="Name" required onChange={e=>setData({...data,name:e.target.value})}/><br/>
<input placeholder="Email" required onChange={e=>setData({...data,email:e.target.value})}/><br/>
<input placeholder="Mobile" required onChange={e=>setData({...data,mobile:e.target.value})}/><br/>
<button>Submit</button>
</form>
)}