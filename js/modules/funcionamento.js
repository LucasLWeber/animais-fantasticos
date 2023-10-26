export default class Funcionamento {

  constructor(funcionamento, activeClass) {
    this.funcionamento = document.querySelector(funcionamento);
    (activeClass === undefined) ? this.activeClass = 'aberto' : this.activeClass = activeClass;
  }

  dadosFuncionamento() {
    this.diasSemana = this.funcionamento.dataset.semana.split(',').map(Number); // map(Number) -> macete para retornar o array convertido para número
    this.horarioSemana = this.funcionamento.dataset.horario.split(',').map(Number);
  }

  dadosAgora() {
    this.dataAgora = new Date();
    this.diaAgora = this.dataAgora.getDay();
    this.horarioAgora = this.dataAgora.getUTCHours() - 3;
  }

  aberto() {
    const semanaAberto = (this.diasSemana.indexOf(this.diaAgora) !== -1);
    const horarioAberto = (this.horarioAgora >= this.horarioSemana[0] && this.horarioAgora < this.horarioSemana[1]);
    return semanaAberto && horarioAberto;
  }

  ativaAberto() {
    if (this.aberto())
      this.funcionamento.classList.add(this.activeClass);
  }

  init() {
    if (this.funcionamento){
      this.dadosFuncionamento();
      this.dadosAgora();
      this.ativaAberto();
    }
    return this;
  }
}

