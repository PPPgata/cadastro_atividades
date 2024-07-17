import './style.css'
import { useReservasContext } from '../../Context/context'

const CardReserva = ()=>{
    const useReservas = useReservasContext()

    var reservas = useReservas.getReservas()
        console.log(reservas)

        const excluirReservas = (item)=>{
            useReservas.deletReservas(item)
        }

    return(
       <div className='cardreserva'>
            <h2 className='tituloReserva'>Reserva Realizada</h2>
            <div className="reservas-realizada">
                <ul>

                        {reservas.map((reservas)=>(
                            <li key={reservas.id} className="reserva-atividade">
                                <p className='reserva-realizadas'>{reservas.atividadeSelect}</p>
                                <p className='reserva-realizadas'>{reservas.data}</p>
                                <p className='reserva-realizadas'>{reservas.time}</p>
                                <button onClick={()=>excluirReservas(reservas)} className="botao-cancelar-reserva">Cancelar Reserva</button>
                            </li>
                    ))}
                </ul>
            </div>
       </div>
    )
}

export default CardReserva