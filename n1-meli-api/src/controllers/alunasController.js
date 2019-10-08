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