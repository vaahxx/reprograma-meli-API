// acesso a camada Model
const alunas = require('../model/alunas.json');

exports.get = (req, res) => {
    console.log(req.url);
    res.status(200).send(alunas);

}
exports.getById = (req, res) => {
    // pega o ID dos queryParameters da URL
    const idURL = req.params.id;
    if (idURL > 17) {
        // res.send('ID invalido');
        res.redirect(301, 'https://pt.wikipedia.org/wiki/Barbie');
    }
    const alunaEncontrada = alunas.find(e => e.id == idURL);
    res.status(200).send(alunaEncontrada);
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

    console.log(livros)
    console.log(aluna.livros)
    console.log(livrosLidos)

    if (!aluna) {
        Response.send('Nao encontrei esta aluna');
    }
    res.status(200).send(livros);
}

exports.getSp = (req, res) => {
    const paulistas = alunas.filter(e => e.nasceuEmSp == "true");
    const paulistasNome = paulistas.map(e => e.nome);
    console.log(paulistas);
    console.log(paulistasNome);
    res.status(200).send(paulistasNome);
}

function calcularIdade(diaDeNasc, mesDeNasc, anoDeNasc) {
      const now = new Date()
      const anoAtual = now.getFullYear()
      const mesAtual = now.getMonth() + 1 // adiciona 1 porque o array de meses começa no 0 
      const hoje = now.getDate()
    
      let idade = anoAtual - anoDeNasc
    
      if (mesAtual < mesDeNasc || (mesAtual == mesDeNasc && hoje < diaDeNasc)) {
        idade -= 1
      }
      return idade
    }

    exports.getIdade = (req, res) => {
        const idURL = req.params.id;
        const alunaEscolhida = alunas.find(e => e.id == idURL);
        console.log(alunaEscolhida);
        console.log(alunaEscolhida.dateOfBirth);
        const dtNasc = alunaEscolhida.dateOfBirth.split('/');
        const idade = calcularIdade(dtNasc[0], dtNasc[1], dtNasc[2]);
        console.log(idade);
        res.send(`A idade da aluna é ${idade}`);
    };