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
    )
}

export default Reservas