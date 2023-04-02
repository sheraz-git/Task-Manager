import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="main_container">
<header className="header">
    <div className="leftside"><img  src="download.png" style={{width:"auto",height:"100px"}}/> </div>
    <div className="center"><h2 id='logoname'>TASK-MANAGER</h2></div>
    <div className="rightside"><button className="button1"><Link to="/Addtask"> LOGIN</Link></button><button className="button1"><Link to="/Signin">SIGNIN</Link></button></div>
    </header>

    </div>
  )
}
