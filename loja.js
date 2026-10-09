/*
// ORGANIZAÇÃO DO CÓDIGO
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


Tarefas (0 )
Cada tarefa traz o nome da função, o que ela deve fazer, os conceitos envolvidos, perguntas para guiar o raciocínio e a saída esperada com os dados da Papelaria ExemplO.


Tarefa 1 — Dados da loja
No início do arquivo, crie a constante nomeLoja, com o nome da sua loja, e o array produtos, com no mínimo 6 produtos.
Cada produto é um objeto com exatamente 5 propriedades: nome (texto), categoria (texto), preco (número), quantidade (número de unidades em estoque) e vendidos (número de unidades já vendidas). Use pelo menos 2 categorias diferentes e deixe pelo menos 2 produtos com quantidade menor que 5 (eles serão usados na Tarefa 6).
Exemplo de um produto da Papelaria Exemplo:
{ nome: "Caderno", categoria: "cadernos", preco: 25, quantidade: 12, vendidos: 3 }


Tarefa 2 — Listar os produtos
function listarProdutos(lista)
Exiba cada produto do array em uma linha, numerada a partir de 1, no formato: número. nome | categoria | R$ preço | quantidade un. | vendidos vendidos

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

Saída esperada:
Produto cadastrado! Agora a loja tem 7 produtos.


Tarefa 4 — Valor do estoque
function calcularValorEstoque(lista)
Retorne o valor total do estoque: a soma de preço × quantidade de todos os produtos. Exemplo: o Caderno vale 25 × 12 = 300 e a Caneta azul vale 3 × 50 = 150; o resultado é a soma dos valores de todos os produtos.

Saída esperada:
Valor do estoque: R$ 832


Tarefa 5 — Buscar um produto
function buscarProduto(lista, termo)
Procure o primeiro produto cujo nome contém o termo pesquisado, sem diferenciar maiúsculas de minúsculas (buscar "MOCHILA" deve encontrar "Mochila"). Retorne o produto encontrado ou null se nenhum produto corresponder.
Conceitos envolvidos: laço de repetição, if, métodos de string (minúsculas e “contém”), return, null.

Saída esperada:
Encontrado: Mochila - R$ 120
Produto não encontrado.


Tarefa 6 — Produtos em falta
function produtosEmFalta(lista, minimo)
Retorne um novo array apenas com os produtos cuja quantidade é menor que minimo. O array original não deve ser alterado.

Saída esperada:
Produtos com menos de 5 unidades: 3


Tarefa 7 — Aplicar desconto
function aplicarDesconto(lista, categoria, percentual)
Para cada produto da categoria informada, altere o preço aplicando o desconto. Retorne quantos produtos foram alterados. Fórmula: novo preço = preço - (preço × percentual ÷ 100). Exemplo: 10% de desconto em R$ 3 resulta em R$ 2.7.

Saída esperada:
3 produtos receberam desconto.
Novo preço da caneta: R$ 2.7


Tarefa 8 — Registrar uma venda
function registrarVenda(lista, nome, quantidade)
Registre a venda de uma quantidade de um produto, usando a função da Tarefa 5 para encontrá-lo pelo nome. A venda não acontece se o produto não existir ou se não houver unidades suficientes em estoque; nesse caso, a função retorna false. Se a venda for possível, diminua a quantidade em estoque, aumente os vendidos e retorne true.

Saída esperada:
Venda realizada! Caderno: 9 un. em estoque, 6 vendidos.
Venda não realizada: estoque insuficiente ou produto inexistente.


Tarefa 9 — Padronizar nomes
function formatarNome(texto)
Retorne o texto sem espaços nas pontas, com a primeira letra maiúscula e o restante em minúsculas. Depois, altere a função da Tarefa 3 para que todo produto cadastrado tenha o nome salvo já formatado.
Conceitos envolvidos: métodos de string (remover espaços, pegar um caractere, recortar, maiúsculas e minúsculas), concatenação.

Saída esperada:
Borracha branca


Tarefa 10 — Salvar e recuperar em JSON
function converterParaJSON(lista) e function lerJSON(texto)
converterParaJSON deve retornar o array convertido em texto JSON. lerJSON deve retornar o array de volta, a partir do texto JSON.

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

*/

//INICIO DO CÓDIGO

// ===== 1. DADOS =====
// Tarefa 1 — Dados da loja

const nomeLoja = "Oficina de Materiais de Construção do joão";
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


// ===== 2. FUNÇÕES =====

/*

Saída esperada (exemplo):
1. Caderno | cadernos | R$ 25 | 12 un. | 3 vendidos
2. Caneta azul | escrita | R$ 3 | 50 un. | 20 vendidos
3. Lápis | escrita | R$ 2 | 2 un. | 15 vendidos
4. Borracha | escrita | R$ 1 | 30 un. | 8 vendidos
5. Mochila | acessórios | R$ 120 | 1 un. | 2 vendidos
6. Estojo | acessórios | R$ 18 | 6 un. | 4 vendidos

 */
function listarProdutos(lista) {
    for (let i = 0; i < lista.length; i++) {
        const produto = lista[i];
        console.log(`${i + 1}. ${produto.nome} | ${produto.categoria} | R$ ${produto.preco} | ${produto.quantidade} un. | ${produto.vendidos} vendidos`);
    }
}

function cadastrarProduto(lista, nome, categoria, preco, quantidade) {
    const novoProduto = {
        nome: formatarNome(nome),
        categoria: categoria,
        preco: preco,
        quantidade: quantidade,
        vendidos: 0
    };
    lista.push(novoProduto);
    return lista.length;
}


function calcularValorEstoque(lista) {
    let valorTotal = 0;
    for (let i = 0; i < lista.length; i++) {
        const produto = lista[i];
        valorTotal += produto.preco * produto.quantidade;
    }
    return valorTotal;
}
/*
 Procure o primeiro produto cujo nome contém o termo pesquisado, sem diferenciar maiúsculas de minúsculas (buscar "MOCHILA" deve encontrar "Mochila"). Retorne o produto encontrado ou null se nenhum produto corresponder.
 */

function buscarProduto(lista, termo) {
    for (let i = 0; i < lista.length; i++) {
        const produto = lista[i];
        if (produto.nome.toLowerCase().includes(termo.toLowerCase())) {
            return produto;
        }
    }
    return null;
}

function produtosEmFalta(lista, minimo) {
    const produtosBaixoEstoque = [];
    for (let i = 0; i < lista.length; i++) {
        if (lista[i].quantidade < minimo) {
            produtosBaixoEstoque.push(lista[i]);
        }
    }
    return produtosBaixoEstoque;
}

function aplicarDesconto(lista, categoria, percentual) {
    let produtosAlterados = 0;
    for (let i = 0; i < lista.length; i++) {
        if (lista[i].categoria === categoria) {
            lista[i].preco -= lista[i].preco * percentual / 100;
            produtosAlterados++;
        }
    }
    return produtosAlterados;
}

/*

Saída esperada de registrarVenda:
Venda realizada! Caderno: 9 un. em estoque, 6 vendidos.
Venda não realizada: estoque insuficiente ou produto inexistente.

*/

function registrarVenda(lista, nome, quantidade) {
    const produto = buscarProduto(lista, nome);
    if (produto === null || produto.quantidade < quantidade) {
        return false;
    }

    produto.quantidade -= quantidade;
    produto.vendidos += quantidade;
    return true;
}

function formatarNome(texto) {
    const nomeSemEspacos = texto.trim().toLowerCase();
    if (nomeSemEspacos.length === 0) {
        return "";
    }
    return nomeSemEspacos.charAt(0).toUpperCase() + nomeSemEspacos.slice(1);
}

function converterParaJSON(lista) {
    return JSON.stringify(lista);
}

function lerJSON(texto) {
    return JSON.parse(texto);
}

function gerarRelatorio(nome, lista) {
    const produtosBaixoEstoque = produtosEmFalta(lista, minimoEstoque);
    console.log(`===== RELATÓRIO: ${nome.toUpperCase()} =====`);
    console.log(`Produtos cadastrados: ${lista.length}`);
    console.log(`Valor total em estoque: R$ ${calcularValorEstoque(lista)}`);
    console.log(`Produtos com estoque baixo: ${produtosBaixoEstoque.length}`);
    for (let i = 0; i < produtosBaixoEstoque.length; i++) {
        const produto = produtosBaixoEstoque[i];
        console.log(`- ${produto.nome} (${produto.quantidade} un.)`);
    }
}

// ===== 3. PROGRAMA PRINCIPAL =====

function main() {
    console.log("--- Tarefa 2: listar ---");
    listarProdutos(produtos);

    console.log("--- Tarefa 3: cadastrar ---");
    const quantidadeProdutos = cadastrarProduto(produtos, "  serra circular  ", "Ferramentas", 50, 4);
    console.log(`Produto cadastrado! Agora a loja tem ${quantidadeProdutos} produtos.`);

    console.log("--- Tarefa 4: valor do estoque ---");
    console.log(`Valor do estoque: R$ ${calcularValorEstoque(produtos)}`);

    console.log("--- Tarefa 5: buscar ---");
    const produtoEncontrado = buscarProduto(produtos, "MARTELO");
    if (produtoEncontrado !== null) {
        console.log(`Encontrado: ${produtoEncontrado.nome} - R$ ${produtoEncontrado.preco}`);
    }
    if (buscarProduto(produtos, "Produto inexistente") === null) {
        console.log("Produto não encontrado.");
    }

    console.log("--- Tarefa 6: em falta ---");
    const produtosBaixoEstoque = produtosEmFalta(produtos, minimoEstoque);
    console.log(`Produtos com menos de ${minimoEstoque} unidades: ${produtosBaixoEstoque.length}`);

    console.log("--- Tarefa 7: desconto ---");
    const quantidadeComDesconto = aplicarDesconto(produtos, "Materiais", 10);
    console.log(`${quantidadeComDesconto} produtos receberam desconto.`);
    const tinta = buscarProduto(produtos, "Tinta");
    if (tinta !== null) {
        console.log(`Novo preço da tinta: R$ ${tinta.preco}`);
    }

    console.log("--- Tarefa 8: registrar venda ---");
    if (registrarVenda(produtos, "Parafuso", 10)) {
        const parafuso = buscarProduto(produtos, "Parafuso");
        console.log(`Venda realizada! Parafuso: ${parafuso.quantidade} un. em estoque, ${parafuso.vendidos} vendidos.`);
    }
    if (!registrarVenda(produtos, "Martelo", 100)) {
        console.log("Venda não realizada: estoque insuficiente ou produto inexistente.");
    }
    if (!registrarVenda(produtos, "Produto inexistente", 1)) {
        console.log("Venda não realizada: estoque insuficiente ou produto inexistente.");
    }

    console.log("--- Tarefa 9: formatar nome ---");
    console.log(formatarNome("  cHAVE de fenda  "));

    console.log("--- Tarefa 10: JSON ---");
    const textoJSON = converterParaJSON(produtos);
    console.log(typeof textoJSON);
    const produtosRecuperados = lerJSON(textoJSON);
    console.log(`Itens recuperados: ${produtosRecuperados.length} | Primeiro: ${produtosRecuperados[0].nome}`);

    console.log("--- Tarefa 11: relatório ---");
    gerarRelatorio(nomeLoja, produtos);
}

main();