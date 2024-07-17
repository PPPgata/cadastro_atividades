import { useState } from "react"
import "./style.css"
import {useReservasContext} from"../../Context/context.js"
const InputAtividades = ()=>{

    const useReservas = useReservasContext()


    
    const [input,setInput] = useState(
    {
        id: "",
        nome: "",
        descricao: "",
        local: "",
        data: "",
        time: ""
    })

   
    function createId() {
        const uniqueId = 'id-' + Date.now().toString(36) + Math.random().toString(36).substr(2, 9);
        return uniqueId;
      }

    function registrarAtividades(){
        setInput((prev)=>({...prev,id:createId()}))
        useReservas.setAtividadesLS(input)

        console.log(useReservas.getAtividades())
        
        
    }

    return(
        <div className="input-atividade">
                    <input onChange={(e)=> setInput((prev)=>({...prev,nome:e.target.value}))} value={input.nome} type="text" placeholder="Nome da atividade"></input>
                    <input onChange={(e)=> setInput((prev)=>({...prev,descricao:e.target.value}))} value={input.descricao} type="text" placeholder="Descrição"></input>
                    <input onChange={(e)=> setInput((prev)=>({...prev,local:e.target.value}))} value={input.local} type="text" placeholder="Local"></input>
                    <input onChange={(e)=> setInput((prev)=>({...prev,data:e.target.value}))} value={input.data} type="date" ></input>
                    <input onChange={(e)=> setInput((prev)=>({...prev,time:e.target.value}))} value={input.time} type="time" ></input>
                    <button onClick={registrarAtividades} className="botao">cadastrar atividade</button>
        </div>
    ) 
}

export default InputAtividades