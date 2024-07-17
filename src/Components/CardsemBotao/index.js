import "./style.css"
import { useReservasContext } from '../../Context/context'



const CardSemBotao = ()=>{

  const useReservas = useReservasContext()

    var reservas = useReservas.getReservas()
    return(
        <div className='cardsembotao'>
          <div className='reservas'>
            <h2 className='tituloreserva'>Reserva</h2>
            <ul>
              {reservas.map((reservas)=>(
                              <li key={reservas.id} className="reserva">
                                  <p>{reservas.atividadeSelect} em {reservas.data} às {reservas.time}</p>
                              </li>
                      ))}
            </ul>

            
            
            
            {/* <p className='reserva'>coisa boba</p>
            <p className='reserva'>coisa boba</p>
            <p className='reserva'>coisa boba</p> */}
          </div>
        </div>
    )
}

export default CardSemBotao