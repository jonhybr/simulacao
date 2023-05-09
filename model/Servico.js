const cliente = require('./Cliente')
module.exports = class Servico { 
  constructor() {
	this.descricao = "";
    this.tipoServico = "";
	this.percents = {
		'Instalação de Telefone/Internet': 15,
		'Manutenção de Linha Telefônica/Internet': 12,
		'Troca de Equipamentos (modem)': 23,
		'Suporte Técnico': 17,
  };
    this.percent = 0;
	this.tempoRealizacao = 0;
	this.dataRealizacao = "";
	this.valorHora = 0.0;
  }
  
  
}