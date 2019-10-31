// acesso a camada Model
const professorasJson = require('../model/professoras.json');

exports.get = (req, res) => {
    const professorasSemCpf = professorasJson.map((e) => {
        e.cpf = '***********';
        return e;
    })
    res.status(200).send(professorasSemCpf)
}

exports.post = (req, res) => {
    const professorasSemCpf = professorasJson.map((e) => {
        e.cpf = '***********';
        return e;
    })
    // destructuring assignment
    const {id, nome, especialidade, signo, cpf} = req.body;
    professorasSemCpf.push({id, nome, especialidade, signo, cpf});
    fs.writeFile("./src/model/professoras.json", JSON.stringify(professorasJson), 'utf8', function (err) {
        if (err) {
            return res.status(500).send({ message:err });
        }
        console.log('file was saved');
    });
    return res.status(201).send(professorasSemCpf);
}

exports.getById = (req, res) => {
    const idURL = req.params.id;
    const professoraEncontrada = professorasJson.find(e => e.id == idURL);
    professoraEncontrada.cpf = '*********'
    res.status(200).send(professoraEncontrada);    
}