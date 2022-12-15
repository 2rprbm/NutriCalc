document.querySelector(".titulo").textContent = "NutriCalc"

const infoPeso = document.querySelectorAll(".info-peso")
const infoAltura = document.querySelectorAll(".info-altura")
const infoIMC = document.querySelectorAll(".info-imc")
const infoPacientes = document.querySelectorAll(".paciente")
infoPacientes.forEach(paciente => {
    calculaIMC(paciente);  
});

function calculaIMC(paciente){
    const pesoPaciente = paciente.querySelector(".info-peso").textContent;
    const alturaPaciente = paciente.querySelector(".info-altura").textContent;
    paciente.querySelector(".info-imc").textContent = (pesoPaciente/(alturaPaciente*2)).toFixed(2)
}

 const botaoAdicionar = document.querySelector("#adicionar-paciente");
 botaoAdicionar.addEventListener('click', (evento) => {
    evento.preventDefault();
     const nomeNovo = document.querySelector("#nome").value;
     const pesoNovo = document.querySelector("#peso").value;
     const alturaNova = document.querySelector("#altura").value;
     const gorduraNova = document.querySelector("#gordura").value;
     adicionaPaciente(nomeNovo, pesoNovo, alturaNova, gorduraNova);
     document.querySelector("#form-adiciona").reset();
 })

 function adicionaPaciente(nomePacienteNovo, pesoPacienteNovo, alturaPacienteNovo, gorduraPacienteNovo){
    const tabelaPacientes = document.querySelector("#tabela-pacientes");
    const linhaNova = document.createElement("tr");
    tabelaPacientes.appendChild(linhaNova);
    linhaNova.classList.add("paciente");
    criarColunasNovas(linhaNova, nomePacienteNovo, "info-nome");
    criarColunasNovas(linhaNova, pesoPacienteNovo,"info-peso");
    criarColunasNovas(linhaNova, alturaPacienteNovo,"info-altura");
    criarColunasNovas(linhaNova, gorduraPacienteNovo,"info-gordura");
    criarColunasNovas(linhaNova, 0,"info-imc");
    calculaIMC(linhaNova);


 }

 function criarColunasNovas(linha, coluna, classe){
    const colunaNovaNome = document.createElement("td");
    linha.appendChild(colunaNovaNome);
    colunaNovaNome.textContent = coluna;
    colunaNovaNome.classList.add(classe);
 }

  const tabela = document.querySelector("#tabela-pacientes")
  tabela.addEventListener('click', (e) => {
     console.log(tabela)
     e.target.parentNode.remove()
  })

  const campoFiltro = document.querySelector("#filtrar-tabela")
  campoFiltro.addEventListener('input', ()=>{
    const pacientes = document.querySelectorAll(".paciente")
    pacientes.forEach(paciente => {
        let exp = new RegExp(campoFiltro.value,"i")
        if(!exp.test(paciente.querySelector(".info-nome").textContent)){
            paciente.classList.add("invisivel")
        } else paciente.classList.remove("invisivel")
    })
  })