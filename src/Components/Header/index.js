import { Link } from "react-router-dom"
import "./style.css"


const Header = ()=>{
    return(
        <header>
        <div className='content'>
            <div className='links'>
               <Link to="/"  className='link'>Home</Link>
               <Link to="/atividades" className='link'>Atividades</Link>
               <Link to="/reservas"  className='link'>Reservas</Link>
            </div>
        </div>
      </header>
    )
}

export default Header