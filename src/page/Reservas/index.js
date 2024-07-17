import CardReserva from "../../Components/CardReserva"
import Header from "../../Components/Header"
import InpurReserva from "../../Components/InputReserva"
import Titulo from "../../Components/Titulo"

const Reservas = ()=>{
    return(
        <div>
            <Header/>
            <Titulo
            texto={"Reservas"}
            />
            <InpurReserva/>
            <CardReserva/>
        </div>
        
//         
// 
// 
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/PPPgata/exame-julio.git
// git push -u origin main 
    )
}

export default Reservas