const Aula09_Numero = ({ numero, index, onExcluir }) => {
    return (
        <div>
            <p>{index}º Sorteado - {numero}</p>

            <button onClick={() => onExcluir(numero)}>
                Excluir
            </button>
        </div>
    );
};

export default Aula09_Numero;