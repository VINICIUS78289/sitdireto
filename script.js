// Botões principais
const btnCliente = document.getElementById('btn-cliente');
const btnEquipe = document.getElementById('btn-equipe');
const btnDuvidas = document.getElementById('btn-duvidas');

// Containers
const containerInicial = document.getElementById('container-inicial');
const containerCliente = document.getElementById('container-cliente');
const containerDetalhes = document.getElementById('container-detalhes');
const containerEquipe = document.getElementById('container-equipe');
const containerMovimentacao = document.getElementById('container-movimentacao');
const containerDuvidas = document.getElementById('container-duvidas');

// Botões de voltar
const btnVoltarCliente = document.getElementById('btn-voltar-cliente');
const btnVoltarDetalhes = document.getElementById('btn-voltar-detalhes');
const btnVoltarEquipe = document.getElementById('btn-voltar-equipe');
const btnVoltarMovimentacao = document.getElementById('btn-voltar-movimentacao');
const btnVoltarDuvidas = document.getElementById('btn-voltar-duvidas');

// Cliente -> Ver detalhes
const btnVerDetalhes = document.getElementById('btn-ver-detalhes');

// Equipe -> Cadastrar Movimentação
const btnCadastrarMovimentacao = document.getElementById('btn-cadastrar-movimentacao');

// Ações
btnCliente.addEventListener('click', () => {
    containerInicial.style.display = 'none';
    containerCliente.style.display = 'block';
});

btnEquipe.addEventListener('click', () => {
    containerInicial.style.display = 'none';
    containerEquipe.style.display = 'block';
});

btnDuvidas.addEventListener('click', () => {
    containerInicial.style.display = 'none';
    containerDuvidas.style.display = 'block';
});

btnVoltarCliente.addEventListener('click', () => {
    containerCliente.style.display = 'none';
    containerInicial.style.display = 'block';
});

btnVerDetalhes.addEventListener('click', () => {
    containerCliente.style.display = 'none';
    containerDetalhes.style.display = 'block';
});

btnVoltarDetalhes.addEventListener('click', () => {
    containerDetalhes.style.display = 'none';
    containerCliente.style.display = 'block';
});

btnVoltarEquipe.addEventListener('click', () => {
    containerEquipe.style.display = 'none';
    containerInicial.style.display = 'block';
});

btnCadastrarMovimentacao.addEventListener('click', () => {
    containerEquipe.style.display = 'none';
    containerMovimentacao.style.display = 'block';
});

btnVoltarMovimentacao.addEventListener('click', () => {
    containerMovimentacao.style.display = 'none';
    containerEquipe.style.display = 'block';
});

btnVoltarDuvidas.addEventListener('click', () => {
    containerDuvidas.style.display = 'none';
    containerInicial.style.display = 'block';
});

// Enviar dúvida
const formDuvida = document.getElementById('form-duvida');
const listaRespostas = document.getElementById('lista-respostas');

formDuvida.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const nomeCliente = document.getElementById('nome-cliente').value;
    const produto = document.getElementById('produto').value;
    const duvida = document.getElementById('duvida').value;

    // Adiciona a dúvida à lista de respostas
    const li = document.createElement('li');
    li.textContent = `${nomeCliente} (Produto: ${produto}): ${duvida}`;
    listaRespostas.appendChild(li);

    // Limpa o formulário
    formDuvida.reset();
});
