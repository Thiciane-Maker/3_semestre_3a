import Livro from '../models/Livro.js'

let listaLivros = [
    new Livro(1, 'O Alienista', 'Machado de Assis', 95),
    new Livro(2, 'Dom Casmurro', 'Machado de Assis', 228),
    new Livro(3, 'Capitães da Areia', 'Jorge Amado', 200)
]

const livroController = {
    listar: (req, res) => {
        res.render('livros.ejs', { livros: listaLivros, erro: null })
    },

    adicionar: (req, res) => {
        const { titulo, autor, paginas } = req.body;

        try {
            const novoLivro = new Livro(
                listaLivros.length + 1,
                titulo,
                autor,
                Number(paginas)
            )
            listaLivros.push(novoLivro)
            
            res.redirect('/livros') 
        } 
        catch (e) {
            res.status(400).render('livros.ejs', { livros: listaLivros, erro: e.message })
        }
    }, 

    marcarComoLido: (req, res) => {
        const { id } = req.body; 
        
        // Busca o livro
        const livroEncontrado = listaLivros.find(l => l.id === Number(id))

     
        if (livroEncontrado) {
            livroEncontrado.marcarComoLido(); // Estava "livro.marcarComoLido"
        }
        
        res.redirect('/livros');
    }
}

export default livroController;