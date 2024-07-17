import { createContext, useContext, useEffect, useState } from "react";
import { setAtividadesLocalStorage,getAtividadesLocalStorage,setReservasLocalStorage,getReservasLocalStorage } from "./util.js";

export const ReservasContext = createContext({})

export const ReservasProvider = ({children})=> {

    const [reservas,setReservas] = useState([])

    const [atividades,setAtividades] = useState([])

    const getAtividades = ()=>{
        return atividades
    }

    const getReservas = ()=>{
        return reservas
    }
    
    const setAtividadesLS = (atividade)=>{
        setAtividades((prev)=>([...prev,atividade]))
        setAtividadesLocalStorage(atividades.concat(atividade))
    }

    const setReservasLS = (reserva)=>{
        setReservas((prev)=>([...prev,reserva]))
        setReservasLocalStorage(reservas.concat(reserva))
    }

    useEffect(()=>{
        const atividade = getAtividadesLocalStorage()

        console.log(atividade)
        if(atividade){
            setAtividades(atividade)
        }
    },[])

    useEffect(()=>{
        const reserva = getReservasLocalStorage()

        console.log(reserva)
        if(reserva){
            setReservas(reserva)
        }
    },[])

    const deletAtividades = (atividade)=>{
        console.log(atividade)
        setAtividades((prev)=>(prev.filter((item)=>item.id !== atividade.id)))
        setAtividadesLocalStorage(atividades.filter((item)=>item.id !== atividade.id))
        return true
    }

    const deletReservas = (reserva)=>{
        console.log(reserva)
        setReservas((prev)=>(prev.filter((item)=>item.id !== reserva.id)))
        setReservasLocalStorage(reservas.filter((item)=>item.id !== reserva.id))
        return true
    }


    return(
        <ReservasContext.Provider value={{deletAtividades,deletReservas,...reservas,setReservas,getReservas,...atividades,setAtividades,getAtividades,setAtividadesLS,setReservasLS}}>{[children]}</ReservasContext.Provider>
    )
}

export const useReservasContext = ()=>{
    return useContext(ReservasContext)
}

