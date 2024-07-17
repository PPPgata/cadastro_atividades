import { useReservasContext } from '../../Context/context'
import './style.css'

const CardAtividades = ()=>{

    

    const useReservas = useReservasContext()

    var atividades = useReservas.getAtividades()
        console.log(atividades)

    
    const excluirAtividade = (item)=>{
        useReservas.deletAtividades(item)
    }



    return(
        <div className='cardAtividade'>
            <h2 className='tituloAtividade'>Atividades Cadastrada</h2>
            <div className="reservas-realizada">
                <ul>
                    {atividades.map((atividades)=>(
                        <li key={atividades.id} className="reserva-atividade">
                        <p className='reserva-realizadas'>{atividades.nome}</p>
                        <button  onClick={()=>excluirAtividade(atividades)} className="botao-excluir">Excluir</button>
                        </li>
                    ))}
                </ul>
            </div> 
        </div>
    )
}

export default CardAtividades