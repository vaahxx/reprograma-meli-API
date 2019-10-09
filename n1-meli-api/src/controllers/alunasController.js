// acesso a camada Model
const alunas = require('../model/alunas.json');

exports.get = (req, res) => {
    console.log(req.url);
    res.status(200).send(alunas);

}
exports.getById = (req, res) => {
    // pega o ID dos queryParameters da URL
    const id = req.params.id;
    console.log(id);
    res.status(200).send(alunas.find(e => e.id == id));
}
exports.getBooks = (req, res) => {
    const id = req.params.id;
    const aluna = alunas.find(e => e.id == id);
    const livrosAluna = aluna.livros;
    const livrosLidos = livrosAluna.filter(e => e.leu == "true");

    // map(): para retornar outro array
    const tituloLivros = livrosAluna.map(e => e.titulo);

    let livros = [];
    livrosAluna.forEach(element => {
        livros.push(element.titulo);
    });
    
    let livrosLidos = [];
    aluna.livros.forEach(element => {
        if (element.leu === true) {
            livrosLidos.push(element.titulo);
        }
    });

    console.log(livros)
    console.log(aluna.livros)
    console.log(livrosLidos)

    

    res.status(200).send(livros);
}