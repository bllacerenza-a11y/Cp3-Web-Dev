// 1. Array de Strings (Regra obrigatória)
const filmes = ["Matrix", "O Senhor dos Anéis", "De Volta para o Futuro"];

// 2. Seleção de Elementos (Aula de DOM)
const telaLogin = document.querySelector("#tela-login");
const formLogin = document.querySelector("#form-login");
const inputUsuario = document.querySelector("#usuario");
const inputSenha = document.querySelector("#senha");
const mensagemLogin = document.querySelector("#mensagem-login");

const telaApp = document.querySelector("#tela-app");
const inputNovoFilme = document.querySelector("#novo-filme");
const btnAddInicio = document.querySelector("#btn-add-inicio");
const btnAddFim = document.querySelector("#btn-add-fim");
const listaFilmes = document.querySelector("#lista-filmes");
const mensagemApp = document.querySelector("#mensagem-app");

// 3. Função de Login (Orquestradora e Validação)
const realizarLogin = (evento) => {
    evento.preventDefault(); // Impede o recarregamento da página

    const usuario = inputUsuario.value.trim();
    const senha = inputSenha.value.trim();

    // Validação de campos vazios
    if (usuario === "" || senha === "") {
        mensagemLogin.textContent = "Preencha todos os campos!";
        mensagemLogin.className = "mensagem-erro";
        return;
    }

    // Validação de credenciais
    if (usuario === "aluno" && senha === "fiap2025") {
        telaLogin.classList.add("escondido");
        telaApp.classList.remove("escondido");
        renderizarLista(); // Chama a primeira renderização
    } else {
        mensagemLogin.textContent = "Usuário ou senha incorretos!";
        mensagemLogin.className = "mensagem-erro";
    }
};

// 4. Função de Renderização (Read)
const renderizarLista = () => {
    // Usando map() para gerar HTML e join('') para tirar as vírgulas (Visto na apostila de Arrays pág 8)
    listaFilmes.innerHTML = filmes.map((filme, indice) => {
        return "<li>" + filme + 
               "<div>" +
               "<button onclick='editarFilme(" + indice + ")'>Editar</button>" +
               "<button onclick='removerFilme(" + indice + ")'>Remover</button>" +
               "</div></li>";
    }).join("");
};

// 5. Funções de Adição (Create)
const adicionarAoInicio = () => {
    const novoFilme = inputNovoFilme.value.trim();

    if (novoFilme === "") {
        mensagemApp.textContent = "O nome do filme não pode ser vazio!";
        mensagemApp.className = "mensagem-erro";
        return;
    }

    filmes.unshift(novoFilme); // Adiciona no início (Apostila Arrays pág 2)
    inputNovoFilme.value = "";
    mensagemApp.textContent = "";
    renderizarLista();
};

const adicionarAoFinal = () => {
    const novoFilme = inputNovoFilme.value.trim();

    if (novoFilme === "") {
        mensagemApp.textContent = "O nome do filme não pode ser vazio!";
        mensagemApp.className = "mensagem-erro";
        return;
    }

    filmes.push(novoFilme); // Adiciona no final
    inputNovoFilme.value = "";
    mensagemApp.textContent = "";
    renderizarLista();
};

// 6. Função de Edição (Update)
const editarFilme = (indice) => {
    const nomeAtual = filmes[indice];
    const novoNome = prompt("Edite o nome do filme:", nomeAtual);

    // Valida se o usuário não clicou em cancelar (null) e não enviou vazio
    if (novoNome !== null && novoNome.trim() !== "") {
        filmes[indice] = novoNome.trim(); // Atualiza na posição exata
        renderizarLista();
        mensagemApp.textContent = "";
    }
};

// 7. Função de Remoção (Delete)
const removerFilme = (indice) => {
    filmes.splice(indice, 1); // Remove 1 item a partir do índice recebido (Apostila Arrays pág 9)
    renderizarLista();
};

// 8. Event Listeners (Aula de DOM)
formLogin.addEventListener("submit", realizarLogin);
btnAddInicio.addEventListener("click", adicionarAoInicio);
btnAddFim.addEventListener("click", adicionarAoFinal);
