import {Link} from 'react-router-dom'
export default function Navbar(){
return(
<nav style={{background:'#0A1F44',color:'white',padding:'15px',display:'flex',justifyContent:'space-between'}}>
<div>DUVA Tech</div>
<div>
<Link to="/" style={{color:'white',marginRight:'15px'}}>Home</Link>
<Link to="/admin" style={{color:'#00FF88'}}>Admin</Link>
</div>
</nav>
)}