import CardAtividades from "../../Components/CardAtividades"
import Header from "../../Components/Header"
import InputAtividades from "../../Components/InputAtividades"
import Titulo from "../../Components/Titulo"

const Atividades = ()=>{
    return(
        <div>
            <Header/>
            <div className="atividade">
                <Titulo
                    texto={"Atividade"}
                />
                <InputAtividades/>
                <CardAtividades/>
            </div>
        </div>
    )
}

export default Atividades