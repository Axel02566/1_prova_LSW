/*
// ===== 1. DADOS =====
// nomeLoja e o array produtos (Tarefa 1)

// ===== 2. FUNÇÕES =====
// todas as funções das Tarefas 2 a 11

// ===== 3. PROGRAMA PRINCIPAL =====

// os testes: chamadas das funções e console.log
Para executar, abra o terminal na pasta do arquivo e digite node loja.js. O programa deve rodar sem erros.
Cada tarefa tem uma função com nome e parâmetros já definidos. Use exatamente esses nomes.
Use apenas o que estudamos: let, const, if, for, funções, arrays, objetos, métodos de string e JSON.
No programa principal, antes de testar cada tarefa, exiba um título no formato:
 --- Tarefa N: descrição ---.
Trabalhe tarefa por tarefa: escreva a função, teste, confira a saída e só então passe para a próxima.


3. Tarefas
Cada tarefa traz o nome da função, o que ela deve fazer, os conceitos envolvidos, perguntas para guiar o raciocínio e a saída esperada com os dados da Papelaria Exemplo.
Tarefa 1 — Dados da loja
No início do arquivo, crie a constante nomeLoja, com o nome da sua loja, e o array produtos, com no mínimo 6 produtos.
Cada produto é um objeto com exatamente 5 propriedades: nome (texto), categoria (texto), preco (número), quantidade (número de unidades em estoque) e vendidos (número de unidades já vendidas). Use pelo menos 2 categorias diferentes e deixe pelo menos 2 produtos com quantidade menor que 5 (eles serão usados na Tarefa 6).
Exemplo de um produto da Papelaria Exemplo:
{ nome: "Caderno", categoria: "cadernos", preco: 25, quantidade: 12, vendidos: 3 }
Conceitos envolvidos: constantes, array, objeto, tipos de dados (texto e número).
Pense antes de codificar:
Como escrever um objeto com 5 propriedades?
Como colocar vários objetos dentro de um único array?
Tarefa 2 — Listar os produtos
function listarProdutos(lista)
Exiba cada produto do array em uma linha, numerada a partir de 1, no formato: número. nome | categoria | R$ preço | quantidade un. | vendidos vendidos
Conceitos envolvidos: laço de repetição, índice do array, length, acesso a propriedades, template literal.
Pense antes de codificar:
Como percorrer todos os produtos, do primeiro ao último, sem saber quantos são?
Se o índice do primeiro produto é 0, como mostrar a numeração começando em 1?
Como testar: chame a função passando o array produtos.
Saída esperada:
1. Caderno | cadernos | R$ 25 | 12 un. | 3 vendidos
2. Caneta azul | escrita | R$ 3 | 50 un. | 20 vendidos
3. Lápis | escrita | R$ 2 | 2 un. | 15 vendidos
4. Borracha | escrita | R$ 1 | 30 un. | 8 vendidos
5. Mochila | acessórios | R$ 120 | 1 un. | 2 vendidos
6. Estojo | acessórios | R$ 18 | 6 un. | 4 vendidos
Tarefa 3 — Cadastrar um produto
function cadastrarProduto(lista, nome, categoria, preco, quantidade)
Crie um novo produto com os 4 dados recebidos e com vendidos igual a 0 (um produto novo ainda não foi vendido). Adicione-o ao final do array e retorne a nova quantidade de produtos da lista.
Conceitos envolvidos: objeto, parâmetros, método de array para adicionar elementos, return.
Pense antes de codificar:
Como montar um objeto usando os valores que chegaram pelos parâmetros?
Qual método de array adiciona um elemento no final?
Depois de adicionar, como saber quantos produtos existem?
Como testar: cadastre um produto novo e use o valor retornado para exibir a mensagem Produto cadastrado! Agora a loja tem N produtos.
Saída esperada:
Produto cadastrado! Agora a loja tem 7 produtos.
Tarefa 4 — Valor do estoque
function calcularValorEstoque(lista)
Retorne o valor total do estoque: a soma de preço × quantidade de todos os produtos. Exemplo: o Caderno vale 25 × 12 = 300 e a Caneta azul vale 3 × 50 = 150; o resultado é a soma dos valores de todos os produtos.
Conceitos envolvidos: variável acumuladora, laço de repetição, operadores aritméticos, return.
Pense antes de codificar:
Onde a soma deve começar e com qual valor inicial?
O que precisa acontecer com a soma a cada produto percorrido?
Em que momento o resultado deve ser retornado: dentro ou depois do laço?
Como testar: exiba Valor do estoque: R$ ... com o valor retornado pela função.
Saída esperada:
Valor do estoque: R$ 832
Tarefa 5 — Buscar um produto
function buscarProduto(lista, termo)
Procure o primeiro produto cujo nome contém o termo pesquisado, sem diferenciar maiúsculas de minúsculas (buscar "MOCHILA" deve encontrar "Mochila"). Retorne o produto encontrado ou null se nenhum produto corresponder.
Conceitos envolvidos: laço de repetição, if, métodos de string (minúsculas e “contém”), return, null.
Pense antes de codificar:
Como comparar dois textos ignorando maiúsculas e minúsculas?
Qual método verifica se um texto contém outro?
Se a função encontrar o produto, ela precisa continuar procurando?
Onde deve ficar o retorno de null para que só aconteça quando nada for encontrado?
Como testar: busque um produto que existe (escrito em maiúsculas) e exiba seu nome e preço. Depois busque um produto que não existe e, quando o resultado for null, exiba Produto não encontrado.
Saída esperada:
Encontrado: Mochila - R$ 120
Produto não encontrado.
Tarefa 6 — Produtos em falta
function produtosEmFalta(lista, minimo)
Retorne um novo array apenas com os produtos cuja quantidade é menor que minimo. O array original não deve ser alterado.
Conceitos envolvidos: array vazio, laço de repetição, if, adicionar elementos, return.
Pense antes de codificar:
Onde os produtos selecionados serão guardados?
Qual condição decide se um produto entra ou não no novo array?
Como testar: chame a função com mínimo 5 e exiba quantos produtos foram retornados.
Saída esperada:
Produtos com menos de 5 unidades: 3
Tarefa 7 — Aplicar desconto
function aplicarDesconto(lista, categoria, percentual)
Para cada produto da categoria informada, altere o preço aplicando o desconto. Retorne quantos produtos foram alterados. Fórmula: novo preço = preço - (preço × percentual ÷ 100). Exemplo: 10% de desconto em R$ 3 resulta em R$ 2.7.
Conceitos envolvidos: laço de repetição, if, alteração de propriedade de objeto, contador, return.
Pense antes de codificar:
Como identificar se um produto pertence à categoria recebida?
Como alterar o valor de uma propriedade de um objeto que já existe?
Como contar quantos produtos foram alterados?
Como testar: aplique 10% de desconto em uma categoria, exiba quantos produtos foram alterados e o novo preço de um deles.
Saída esperada:
3 produtos receberam desconto.
Novo preço da caneta: R$ 2.7
Tarefa 8 — Registrar uma venda
function registrarVenda(lista, nome, quantidade)
Registre a venda de uma quantidade de um produto, usando a função da Tarefa 5 para encontrá-lo pelo nome. A venda não acontece se o produto não existir ou se não houver unidades suficientes em estoque; nesse caso, a função retorna false. Se a venda for possível, diminua a quantidade em estoque, aumente os vendidos e retorne true.
Conceitos envolvidos: reutilização de funções, if, operadores lógicos, alteração de propriedades, valores booleanos, return.
Pense antes de codificar:
Qual função que você já criou encontra um produto pelo nome?
Quais são as duas situações que impedem a venda? Como verificar as duas em uma única condição?
Quais duas propriedades mudam quando uma venda acontece? Uma aumenta e outra diminui: qual é qual?
Como testar: venda 3 unidades de um produto com estoque suficiente e, se o retorno for true, exiba o nome, a nova quantidade em estoque e o total de vendidos. Depois tente vender mais unidades do que existem e, se o retorno for false, exiba Venda não realizada: estoque insuficiente ou produto inexistente.
Saída esperada:
Venda realizada! Caderno: 9 un. em estoque, 6 vendidos.
Venda não realizada: estoque insuficiente ou produto inexistente.
Tarefa 9 — Padronizar nomes
function formatarNome(texto)
Retorne o texto sem espaços nas pontas, com a primeira letra maiúscula e o restante em minúsculas. Depois, altere a função da Tarefa 3 para que todo produto cadastrado tenha o nome salvo já formatado.
Conceitos envolvidos: métodos de string (remover espaços, pegar um caractere, recortar, maiúsculas e minúsculas), concatenação.
Pense antes de codificar:
O texto deve ser limpo antes ou depois de separar a primeira letra?
Como pegar só a primeira letra? E todo o texto a partir da segunda?
Como juntar as duas partes em um único texto?
Como testar: exiba o resultado da função para o texto "   bORRACHA branca  ".
Saída esperada:
Borracha branca
Tarefa 10 — Salvar e recuperar em JSON
function converterParaJSON(lista) e function lerJSON(texto)
converterParaJSON deve retornar o array convertido em texto JSON. lerJSON deve retornar o array de volta, a partir do texto JSON.
Conceitos envolvidos: JSON.stringify, JSON.parse, typeof.
Pense antes de codificar:
Qual método transforma objetos em texto? E qual faz o caminho inverso?
Como provar que o resultado da conversão é mesmo um texto?
Como testar: converta os produtos, exiba o tipo do resultado, recupere o array e exiba quantos itens voltaram e o nome do primeiro.
Saída esperada:
string
Itens recuperados: 7 | Primeiro: Caderno
Tarefa 11 — Relatório final
function gerarRelatorio(nome, lista)
Exiba um relatório da loja, no formato da saída abaixo, com:
o nome da loja em maiúsculas;
a quantidade de produtos cadastrados;
o valor total do estoque, usando a função da Tarefa 4;
a quantidade e a lista dos produtos com menos de 5 unidades, usando a função da Tarefa 6.
Conceitos envolvidos: reutilização de funções, template literal, laço de repetição.
Pense antes de codificar:
Quais funções que você já criou resolvem parte deste relatório?
Como chamar uma função dentro de outra e usar o valor que ela retorna?
Como testar: chame a função passando nomeLoja e produtos.
Saída esperada:
===== RELATÓRIO: PAPELARIA EXEMPLO =====
Produtos cadastrados: 7
Valor total em estoque: R$ 738.6
Produtos com estoque baixo: 3
- Lápis (2 un.)
- Mochila (1 un.)
- Caderno de desenho (4 un.)
Saída completa do programa (exemplo)
Ao final, node loja.js deve mostrar todos os testes, nesta ordem. Com os dados da Papelaria Exemplo, a saída é:
--- Tarefa 2: listar ---
1. Caderno | cadernos | R$ 25 | 12 un. | 3 vendidos
2. Caneta azul | escrita | R$ 3 | 50 un. | 20 vendidos
3. Lápis | escrita | R$ 2 | 2 un. | 15 vendidos
4. Borracha | escrita | R$ 1 | 30 un. | 8 vendidos
5. Mochila | acessórios | R$ 120 | 1 un. | 2 vendidos
6. Estojo | acessórios | R$ 18 | 6 un. | 4 vendidos
--- Tarefa 3: cadastrar ---
Produto cadastrado! Agora a loja tem 7 produtos.
--- Tarefa 4: valor do estoque ---
Valor do estoque: R$ 832
--- Tarefa 5: buscar ---
Encontrado: Mochila - R$ 120
Produto não encontrado.
--- Tarefa 6: em falta ---
Produtos com menos de 5 unidades: 3
--- Tarefa 7: desconto ---
3 produtos receberam desconto.
Novo preço da caneta: R$ 2.7
--- Tarefa 8: registrar venda ---
Venda realizada! Caderno: 9 un. em estoque, 6 vendidos.
Venda não realizada: estoque insuficiente ou produto inexistente.
--- Tarefa 9: formatar nome ---
Borracha branca
--- Tarefa 10: JSON ---
string
Itens recuperados: 7 | Primeiro: Caderno
--- Tarefa 11: relatório ---
===== RELATÓRIO: PAPELARIA EXEMPLO =====
Produtos cadastrados: 7
Valor total em estoque: R$ 738.6
Produtos com estoque baixo: 3
- Lápis (2 un.)
- Mochila (1 un.)
- Caderno de desenho (4 un.)


4. Como entregar

4.1 Criar o repositório (uma única vez, no início do projeto)
No GitHub, clique em New repository.
Nome: lsw-projeto1-seunome, sem acentos e sem espaços. Exemplo: lsw-projeto1-mariasouza.
Marque Public e Add a README file. Clique em Create repository.
Edite o README (ícone de lápis) com o conteúdo abaixo e clique em Commit changes.
# Minha Loja - Nome da sua loja

Aluno(a): Nome Completo - Matrícula

Como executar: node loja.js

Funcionalidades: lista com o nome de cada função e o que ela faz
4.2 Enviar o código (commits)
Faça um commit ao concluir cada tarefa, com a mensagem Tarefa N - descrição (exemplo: Tarefa 2 - listar produtos). Escolha uma das formas:


5. Avaliação e regras
O projeto é individual: códigos copiados de colegas ou da internet não serão considerados, e o professor poderá pedir que você explique qualquer parte do seu código. Serão avaliados o funcionamento de cada uma das 11 tarefas (função com o nome indicado, chamada no programa principal e saída no formato pedido), a organização do código nas três partes, o uso correto dos conceitos estudados, o README e os commits feitos a cada tarefa. O programa deve executar com node loja.js sem erros: uma função que gera erro ao executar não é considerada como funcionando, e um erro que interrompe o programa compromete todas as tarefas que não chegam a ser executadas.


6. Checklist de entrega
Antes de clicar em Entregar, confira cada item.
☐ Escolhi um tipo de loja que não é papelaria.
☐ Criei nomeLoja e o array produtos com no mínimo 6 produtos, cada um com nome, categoria, preco, quantidade e vendidos.
☐ Usei pelo menos 2 categorias e deixei pelo menos 2 produtos com quantidade menor que 5.
☐ Fiz listarProdutos, cadastrarProduto (com vendidos igual a 0) e calcularValorEstoque.
☐ Fiz buscarProduto e exibo "Produto não encontrado." quando o resultado é null.
☐ Fiz produtosEmFalta retornando um novo array.
☐ Fiz aplicarDesconto retornando quantos produtos foram alterados.
☐ Fiz registrarVenda usando buscarProduto, retornando true ou false.
☐ Fiz formatarNome e atualizei cadastrarProduto para usá-la.
☐ Fiz converterParaJSON e lerJSON.
☐ Fiz gerarRelatorio usando as funções das Tarefas 4 e 6.
☐ O programa principal testa todas as tarefas, na ordem, cada uma com seu título.
☐ O código está organizado nas 3 partes: dados, funções e programa principal.
☐ Executei node loja.js e não apareceu nenhum erro.
☐ Criei o repositório público lsw-projeto1-seunome e preenchi o README.
☐ Fiz um commit para cada tarefa (1 a 11).
☐ Entreguei o link na atividade Projeto 1 — Minha Loja e o status está Entregue.




*/


const nomeLoja = "Oficina do joão";
const minimoEstoque = 5; // quantidade mínima de estoque para um produto não estar em falta


/*
Cada produto é um objeto com exatamente 5 propriedades: nome (texto), categoria (texto), preco (número), quantidade (número de unidades em estoque) e vendidos (número de unidades já vendidas). Use pelo menos 2 categorias diferentes e deixe pelo menos 2 produtos com quantidade menor que 5 
*/

let produtos = [
    {
        nome: "Parafuso",
        categoria: "Ferramentas",
        preco: 1.5,
        quantidade: 100,
        vendidos: 50
    },
    {
        nome: "Martelo",
        categoria: "Ferramentas",
        preco: 25.0,
        quantidade: 4,
        vendidos: 15
    },
    {
        nome: "Chave de fenda",
        categoria: "Ferramentas",
        preco: 10.0,
        quantidade: 30,
        vendidos: 10
    },
    {
        nome: "Lixa",
        categoria: "Materiais",
        preco: 5.0,
        quantidade: 50,
        vendidos: 25
    },
    {
        nome: "Tinta",
        categoria: "Materiais",
        preco: 20.0,
        quantidade: 3,
        vendidos: 5
    },
    {
        nome: "Pincel",
        categoria: "Materiais",
        preco: 8.0,
        quantidade: 15,
        vendidos: 10
    }
];


/*

Saída esperada (exemplo):
1. Caderno | cadernos | R$ 25 | 12 un. | 3 vendidos
2. Caneta azul | escrita | R$ 3 | 50 un. | 20 vendidos
3. Lápis | escrita | R$ 2 | 2 un. | 15 vendidos
4. Borracha | escrita | R$ 1 | 30 un. | 8 vendidos
5. Mochila | acessórios | R$ 120 | 1 un. | 2 vendidos
6. Estojo | acessórios | R$ 18 | 6 un. | 4 vendidos

 */
function exibirProdutos() {
    console.log("Produtos disponíveis na loja:");
    for (let i = 0; i < produtos.length; i++) {
        const produto = produtos[i];
        console.log(`${i + 1}) ${produto.nome} | ${produto.categoria} |R$${produto.preco.toFixed(2)} | ${produto.quantidade} unidades |${produto.vendidos} vendidos`);
    }
}

function cadastrarProduto(nome, categoria, preco, quantidade) {
    const novoProduto = {
        nome: nome,
        categoria: categoria,
        preco: preco,
        quantidade: quantidade,
        vendidos: 0
    };
    produtos.push(novoProduto);
    console.log(`Produto cadastrado! Agora a loja possui ${produtos.length} produtos.`);
}


// Saída esperada: "O valor total do estoque é $[valorTotal]"
// atribuir isso na main e exibir no console.log
function calcularValorTotalEstoque() {
    let valorTotal = 0;
    for (let i = 0; i < produtos.length; i++) {
        const produto = produtos[i];
        valorTotal += produto.preco * produto.quantidade;
    }
    return valorTotal;
}
/*
 Procure o primeiro produto cujo nome contém o termo pesquisado, sem diferenciar maiúsculas de minúsculas (buscar "MOCHILA" deve encontrar "Mochila"). Retorne o produto encontrado ou null se nenhum produto corresponder.
 */

function buscarProduto(nome) {
    for (let i = 0; i < produtos.length; i++) {
        const produto = produtos[i];
        if (produto.nome.toLowerCase().includes(nome.toLowerCase())) {
            console.log(`Encontrado: ${produto.nome} - R$ ${produto.preco.toFixed(2)}`);
            return produto;
        }
    }
    console.log(`Produto não encontrado: ${nome}`);
    return null;
}

function produtoEmFalta(produto, minimo) {
    if (produto.quantidade < minimo) {
        console.log(`O produto ${produto.nome} está em falta! Quantidade em estoque: ${produto.quantidade}`);
        return true;
    }
    return false;
}

function aplicarDesconto(produto, categoria ,percentual) {
    if (produto.categoria === categoria) {
        const desconto = produto.preco * (percentual / 100);
        produto.preco -= desconto;
        console.log(`Desconto aplicado! Novo preço do produto ${produto.nome}: R$ ${produto.preco.toFixed(2)}`);
    } else {
        console.log(`O produto ${produto.nome} não pertence à categoria ${categoria}. Nenhum desconto aplicado.`);
    }
}

/*

Saída esperada de registrarVenda:
Venda realizada! Caderno: 9 un. em estoque, 6 vendidos.
Venda não realizada: estoque insuficiente ou produto inexistente.

*/

function registrarVenda(produto, nome, quantidade) {
    if (produto.nome === nome) {
        if (produto.quantidade >= quantidade) {
            produto.quantidade -= quantidade;
            produto.vendidos += quantidade;
            console.log(`Venda registrada! Produto: ${produto.nome}, Quantidade: ${quantidade}, Novo estoque: ${produto.quantidade}`);
        } else {
            console.log(`Estoque insuficiente para a venda do produto ${produto.nome}.`);
        }
    } else {
        console.log(`O produto ${produto.nome} não corresponde ao nome informado.`);
    }
}

function formatarNomeProduto(texto) {
    const palavras = texto.split(" ");
    for (let i = 0; i < palavras.length; i++) {
        palavras[i] = palavras[i].charAt(0).toUpperCase() + palavras[i].slice(1).toLowerCase();
    }
    return palavras.join(" ");
}

function main() {
    exibirProdutos();
    console.log(`O valor total do estoque é $${calcularValorTotalEstoque().toFixed(2)}`);
    produtoEmFalta(produtos[0], minimoEstoque);
    return;
}