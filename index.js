const express = require('express');
const app = express();                 /* npm i --s ejs */

app.use(express.static(__dirname + '/views'));

app.listen(3000, function(){
  console.log("Servidor no ar - Porta: 3000!")
});

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));

const Fatura = require('./model/Fatura');

app.get('/', function(req, res){
	res.sendFile(__dirname + '/index.html');
});



app.post('/imprimir', function(req, res){
	var fat = new Fatura();

	console.log(fat)
	
	fat.cli.cpf = req.body.cpf;
	fat.cli.nome = req.body.nome;
	fat.cli.endereco = req.body.endereco;
	fat.cli.telefone = req.body.telefone;

	fat.serv.descricao = req.body.descricao_servico;
	fat.serv.tipoServico = req.body.tipo;
	fat.serv.tempoRealizacao = req.body.tempo;
	fat.serv.dataRealizacao = req.body.data_realizacao;
	fat.serv.valorHora = req.body.valor_unitario;

	fat.dataVencimento = req.body.data_vencimento;
	fat.dataEmissao = req.body.data_emissao;
	
	fat.calcularValorTotal()
	fat.calcularICMS()
	
	res.render('./resultado.ejs', {fat: fat});
});