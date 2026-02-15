import {useEffect,useState} from 'react'
import axios from 'axios'

export default function Admin(){
const [leads,setLeads]=useState([])

useEffect(()=>{
axios.get(import.meta.env.VITE_API_URL+'/api/leads')
.then(res=>setLeads(res.data))
},[])

const exportCSV=()=>{
window.location.href=import.meta.env.VITE_API_URL+'/api/leads/export'
}

return(
<div style={{padding:'40px'}}>
<h2>Admin Panel</h2>
<button onClick={exportCSV}>Export CSV</button>
<table border="1" cellPadding="10">
<thead><tr><th>Name</th><th>Email</th><th>Mobile</th></tr></thead>
<tbody>
{leads.map((l,i)=>(
<tr key={i}>
<td>{l.name}</td>
<td>{l.email}</td>
<td>{l.mobile}</td>
</tr>
))}
</tbody>
</table>
</div>
)}