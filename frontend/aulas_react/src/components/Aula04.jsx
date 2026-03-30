import { estilos } from "../styles/Estilos"
import Aula04_IMC from "./Aula04_IMC"
import Aula04_filmes from "./Aula04_filmes" 


const Aula04 = () => {
    return(
       <div style={estilos.cardAula}>
            <h2>Aula 04 - Props</h2>
            <h3>Props são usadas para passar dados de componentes pai para componentes filhos</h3>
            <hr />

          
            <Aula04_IMC nome="Azulejo" peso={60} altura={1.45} cor="black" />
            
            <hr />
            <h3>Lista de Filmes (Exercicio)</h3>
            
            
            <div style={{display: 'flex', justifyContent: 'center'}}>
                
                <Aula04_filmes 
                    titulo="Cães de caça" 
                    genero="Ação/Drama" 
                    foto="https://i.pinimg.com/1200x/10/19/99/1019996dc79d7a93ec408ae4c8606dcc.jpg" 
                />

                <Aula04_filmes 
                    titulo="Weak hero class" 
                    genero="Ação/Drama" 
                    foto="https://i.pinimg.com/736x/7b/fd/3a/7bfd3abc7d491d8d0263f919b4f55d4b.jpg" 
                />

                <Aula04_filmes 
                    titulo="Vingilante" 
                    genero="Ação/Trhiller/Drama" 
                    foto="https://i.pinimg.com/736x/ca/13/18/ca131870a508db5baac396065c644619.jpg" 
                />

                <Aula04_filmes 
                    titulo="The Good Bad Mother" 
                    genero="Ação/Romance/Açao/Comedia" 
                    foto="https://i.pinimg.com/736x/6c/ea/a9/6ceaa91eccde1dfac09079ea26d88172.jpg" 
                />

            </div>
       </div>
    )
}

export default Aula04