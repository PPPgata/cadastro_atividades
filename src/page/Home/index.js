import CardSemBotao from "../../Components/CardsemBotao"
import Header from "../../Components/Header"
import Titulo from "../../Components/Titulo"

const Home = ()=>{
    return(
        <div>
             <Header/>
             <Titulo
             texto="Pagina Inicial"
             />
             <CardSemBotao/>
        </div>
       
        
    )
}

export default Home