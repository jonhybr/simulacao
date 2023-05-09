const Cliente = require('./Cliente');
const Servico = require('./Servico');

module.exports = class Fatura { 
  constructor() {
	this.dataVencimento = "";
    this.dataEmissao = "";
	this.valorTotal = 0.0;
	this.valorIcms = 0.0;
	this.cli = new Cliente();
	this.serv = new Servico();
  }
  calcularValorTotal(){

	this.valorTotal = (this.serv.valorHora * this.serv.tempoRealizacao);

  }

  calcularICMS(){
	this.serv.percent = this.serv.percents[this.serv.tipo];
	this.valorIcms = this.total * this.serv.percents[this.serv.tipo] / 100
  }

}