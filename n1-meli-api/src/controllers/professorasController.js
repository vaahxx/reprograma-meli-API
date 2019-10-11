// acesso a camada Model
const professorasJson = require('../model/professoras.json');

exports.get = (req, res) => {
    const professorasSemCpf = professorasJson.map((e) => {
        e.cpf = '***********';
        return e;
    })
    res.status(200).send(professorasSemCpf)
}