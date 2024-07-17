import './style.css'
import { useReservasContext } from '../../Context/context'
import { useState } from 'react'
const InpurReserva = ()=>{

    const useReservas = useReservasContext()

    var atividades = useReservas.getAtividades()
    console.log(atividades)

    const [input,setInput] = useState(
        {
            id:"",
            atividadeSelect:"",
            data:"",
            time:""

        })

        function createId() {
            const uniqueId = 'id-' + Date.now().toString(36) + Math.random().toString(36).substr(2, 9);
            return uniqueId;
          }
    
        function registrarReserva(){
            setInput((prev)=>({...prev,id:createId()}))
            useReservas.setReservasLS(input)
    
            console.log(useReservas.getReservas())
            
            
        }

    return(
        <div className='inputReserva'>
            <select onChange={(e)=> setInput((prev)=>({...prev,atividadeSelect:e.target.value}))} className='input--reserva'>
                <option value={""} selected disabled>selecionar atividade</option>
                {atividades.map((atividades)=>(
                    <option>{atividades.nome}</option>
                ))}
            </select>
            <input onChange={(e)=> setInput((prev)=>({...prev,data:e.target.value}))} className='input--reserva' type='date'></input>
            <input onChange={(e)=> setInput((prev)=>({...prev,time:e.target.value}))} className='input--reserva' type='time'></input>
            <button onClick={registrarReserva} className="botao">cadastrar atividade</button>
        </div>
    )
}

export default InpurReserva