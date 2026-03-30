import express from 'express';

const app = express();

    app.get('/', async(req,res)=>{
        res.status(200).json('Api Funcionando');
    })


app.get('/cep/:codigo', async(req,res) =>{
    const codigo = req.params.codigo;
    const resposta =  await fetch(`https://viacep.com.br/ws/${codigo}`)
    const dados = await resposta.json();

    res.status(201).json(dados);
})

const porta = 3000;
app.listen(porta, () =>{
    console.log(`http://localhost:${porta}`)
})