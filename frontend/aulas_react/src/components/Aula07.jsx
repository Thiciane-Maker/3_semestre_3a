import { estilos } from "../styles/Estilos";

import Aula07_MultiComponentes, { 
    MeuComponenteNomeado1
} from "./Aula07_MultiComponentes";

import Aula07_Perfil from "./Aula07_Perfil";

const Aula07 = () => {
    return (
        <div style={estilos.cardAula}>
            <h2>Aula 07 - Importação e exportação de Módulos</h2>
            <h3>Compreendendo importação e exportação padrão ou nomeada</h3>
            <hr />
            
            <Aula07_MultiComponentes />
            <MeuComponenteNomeado1 />
            
            <hr />
            
            <Aula07_Perfil 
                nome="Moka" 
                foto="https://i.pinimg.com/1200x/c8/c9/0a/c8c90ac287306bac8ee8b4e8993dfd53.jpg"
            />
        </div>
    );
};

export default Aula07;