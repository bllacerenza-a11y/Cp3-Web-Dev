# CP3 - CRUD e IA Generativa: Documentação

## 1. IAs Consultadas
* Gemini (Google)
* ChatGPT (OpenAI)
* Claude (Anthropic)

## 2. Prompt Usado
Como eu estruturei bem o que eu precisava antes de pedir o código (usando a ideia de Spec-Driven Development), não precisei ficar refazendo o prompt várias vezes. Mandei exatamente o mesmo texto de primeira para as três IAs. O prompt foi esse aqui:

> **Atue como um desenvolvedor Front-end.**
> Preciso criar uma aplicação Web de CRUD (Create, Read, Update, Delete) para uma "Lista de Filmes Assistidos". Você deve seguir **ESTRITAMENTE** as regras abaixo, simulando um ambiente de estudos onde só posso usar o que aprendi.
> 
> **Regras Técnicas Obrigatórias:**
> 1. Use apenas HTML, CSS e JavaScript puro (nada de frameworks).
> 2. Os dados devem ser armazenados em um único **Array de Strings** (ex: `["Matrix", "Shrek", "Avatar"]`). É expressamente proibido usar array de objetos.
> 3. Toda a lógica deve estar dentro de **funções nomeadas** (preferencialmente Arrow Functions). Não deixe código solto, exceto declarações de variáveis e a chamada inicial.
> 4. Para manipular o DOM, use `document.querySelector`, `.value`, `.textContent`, `.classList` e construa a lista usando `.innerHTML` combinado com o método `.map().join('')` do array. Não use `document.createElement`.
> 5. Para atualizar o DOM após o clique de botões do HTML via `innerHTML`, você pode usar o atributo `onclick="nomeDaFuncao(indice)"` diretamente na string HTML.
> 
> **Regras de Negócio e Validações:**
> 1. **Login:** A tela inicial deve ter campos de usuário e senha. Credenciais corretas: `aluno` e `fiap2025`.
> 2. Se as credenciais estiverem erradas ou vazias, exiba a mensagem de erro na tela (não no console) e não recarregue a página (use `preventDefault`). Se corretas, oculte o login e mostre a lista.
> 3. **CRUD:** A lista deve iniciar com 3 filmes preenchidos.
> 4. **Create:** Deve ter um botão para adicionar no *início* (use `unshift`) e outro para o *final* (use `push`). Proibido salvar item vazio (mostre erro na tela).
> 5. **Update:** Ao clicar em editar, use um `prompt()` para perguntar o novo nome. Se o usuário cancelar ou deixar vazio, mantenha o valor original.
> 6. **Delete:** Remova o item com base no seu *índice* na lista usando `splice()`, e não pelo nome.
> 7. Toda vez que adicionar, editar ou remover, a tela deve ser atualizada chamando a função de renderização.
> 
> Gere o `index.html`, `style.css` e `script.js`.

## 3. Problemas encontrados nas respostas

* **Claude:** Ele se empolgou bastante. Fez um layout muito avançado e até colocou uma função com Regex para evitar invasão por XSS. O problema é que isso foge totalmente da simplicidade que a gente aprendeu na matéria. Além disso, ele deu um escorregão na teoria: declarou o array principal com `let filmes = []` em vez de usar `const`, que é o ideal e o recomendado nas nossas aulas.
* **ChatGPT:** Ele mandou bem nas regras do CRUD, mas pegou alguns atalhos de código. Por exemplo, pra ver se o usuário tava vazio, ele usou um atalho lógico (`if (!usuario)`) em vez de comparar de forma estrita (`if (usuario === "")`). Outro erro foi que ele deixou a função de renderizar a lista solta lá no final do arquivo, o que faz a lista ser carregada antes mesmo da pessoa logar.
* **Gemini:** Foi o mais "pé no chão" de todos. Ele seguiu certinho o material da aula, usou `const` pro array, não tentou inventar funções complexas que eu não saberia explicar e respeitou a regra de usar `innerHTML` com o `.map()`.

## 4. Por que escolhi o Gemini como base?

Decidi usar o código do Gemini porque foi o que mais respeitou o escopo real de um projeto de CP3. Ele não tentou "mostrar serviço" igual o Claude, colocando coisas que não faziam sentido pra uma avaliação desse momento do curso. Além disso, o Gemini organizou a ordem das funções do jeito certo (diferente do ChatGPT, que chamou a tela fora de hora). O código ficou simples, limpo e atende 100% aos requisitos da entrega sem eu precisar ficar justificando código que eu não vi em aula.
