import { estilos } from "../styles/Estilos";
import { useEffect, useState } from "react"; 
import Aula11_Produtos from "./Aula11_Produtos";

const Aula11_CadastroProdutos = () => {
    const produtoPadrao = {
        nomeProduto: "Hotwheels",
        preco: 15.90,
        linkProduto: "https://www.amazon.com.br",
        linkImagem: "https://images-na.ssl-images-amazon.com/images/I/71jTQHqxvBL._AC_UL495_SR435,495_.jpg",
        Categoria: "brinquedos",
        freteGratis: false
    };

    const [listaProdutos, setListaProdutos] = useState([produtoPadrao]);

    const [nome, setNome] = useState('');
    const [preco, setPreco] = useState('');
    const [linkProduto, setLinkProduto] = useState('');
    const [linkImage, setLinkImage] = useState('');
    const [categoria, setCategoria] = useState('');
    const [freteGratis, setFreteGratis] = useState(false); 

    useEffect(() => {
        const listaSalva = localStorage.getItem('vetorListaProdutos');
        if (listaSalva) {
            const produtosDoBanco = JSON.parse(listaSalva);
            const listaSemDuplicados = produtosDoBanco.filter(p => p.nomeProduto !== "Hotwheels");
            setListaProdutos([produtoPadrao, ...listaSemDuplicados]);
        }
    }, []);

    const adicionarProduto = () => {
        if (!nome) return alert("Digite o nome do produto");

        const novoProduto = {
            nomeProduto: nome,
            preco: parseFloat(preco) || 0,
            linkProduto: linkProduto,
            linkImagem: linkImage,
            Categoria: categoria,
            freteGratis: freteGratis
        };

        const novaLista = [...listaProdutos, novoProduto];
        setListaProdutos(novaLista);
        localStorage.setItem('vetorListaProdutos', JSON.stringify(novaLista));

        setNome(''); setPreco(''); setLinkProduto(''); setLinkImage(''); setCategoria(''); setFreteGratis(false);
    };

    return (
        <div style={estilos.cardAula}>
            <h1>Cadastro de Produtos</h1>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                <input type="text" placeholder="Nome" value={nome} onChange={(e) => setNome(e.target.value)} />
                <input type="number" placeholder="Preço" value={preco} onChange={(e) => setPreco(e.target.value)} />
                <input type="text" placeholder="Link Produto" value={linkProduto} onChange={(e) => setLinkProduto(e.target.value)} />
                <input type="text" placeholder="Link Imagem" value={linkImage} onChange={(e) => setLinkImage(e.target.value)} />
                
                <select value={categoria} onChange={(e) => setCategoria(e.target.value)}>
                    <option value="">Selecione uma categoria</option>
                    <option value="eletrodomestico">Eletrodomestico</option>
                    <option value="roupas">Roupas</option>
                    <option value="livros">Livros</option>
                    <option value="brinquedos">Brinquedos</option>
                </select>

                <label style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <input type="checkbox" checked={freteGratis} onChange={(e) => setFreteGratis(e.target.checked)} />
                    Frete Grátis
                </label>

                <button onClick={adicionarProduto}>Adicionar Produto</button>
            </div>

            <hr />

            <div style={{display: 'flex', gap: 10, flexWrap: 'wrap'}}>
                {listaProdutos.map((produto, pos) => (
                    <Aula11_Produtos key={pos} ProdutoAtual={produto} />
                ))}
            </div>
        </div>
    );
}

export default Aula11_CadastroProdutos;