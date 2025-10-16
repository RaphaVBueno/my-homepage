import type { Reminder } from './types'

export const jstips: Reminder[] = [
  {
    title: 'Desestruturação de Objetos',
    code: `const usuario = { nome: 'Ana', idade: 28, cidade: 'São Paulo' };

// Básico: extraindo propriedades para variáveis
const { nome, idade } = usuario;
// console.log(nome); -> 'Ana'
// console.log(idade); -> 28

// Com alias (renomeando variáveis)
const { nome: nomeUsuario, idade: idadeUsuario } = usuario;
// console.log(nomeUsuario); -> 'Ana'

// Com valores padrão para propriedades inexistentes
const { pais = 'Brasil' } = usuario;
// console.log(pais); -> 'Brasil'`,
    explanation:
      'A desestruturação permite extrair valores de objetos ou arrays e atribuí-los a variáveis de forma concisa. É uma alternativa mais limpa e legível do que acessar cada propriedade individualmente (ex: usuario.nome). Você pode renomear variáveis usando a sintaxe "propriedade: novoNome" e definir valores padrão para o caso de uma propriedade não existir no objeto.',
  },
  {
    title: 'Optional Chaining (?.)',
    code: `const user = {
  name: 'Carlos',
  address: null
};

// Acesso seguro a uma propriedade aninhada
const zipCode = user?.address?.zipCode;
// console.log(zipCode); -> undefined (não gera erro)

// Uso com chamadas de função que podem não existir
const getInfo = user?.getInfo?.();
// console.log(getInfo); -> undefined`,
    explanation:
      "O operador de encadeamento opcional (?.) permite ler o valor de uma propriedade aninhada sem ter que validar explicitamente se cada elo da cadeia existe. Se qualquer propriedade no caminho for 'null' ou 'undefined', a expressão inteira retorna 'undefined' imediatamente, evitando o erro 'TypeError: Cannot read properties of null (reading '...')'.",
  },
  {
    title: 'Spread Operator (...)',
    code: `// Em Arrays: combinar ou clonar
const front = ['React', 'Vue'];
const allTechs = ['Node', ...front, 'Svelte'];
// console.log(allTechs); -> ['Node', 'React', 'Vue', 'Svelte']

// Em Objetos: combinar ou clonar
const userDetails = { id: 1, name: 'Bia' };
const userWithRole = { ...userDetails, role: 'Admin' };
// console.log(userWithRole); -> { id: 1, name: 'Bia', role: 'Admin' }

// Em Funções: passar elementos de um array como argumentos
const numbers = [10, 20, 5];
const maxNumber = Math.max(...numbers);
// console.log(maxNumber); -> 20`,
    explanation:
      'O operador de propagação (...) permite que um iterável (como um array ou string) seja expandido em locais onde zero ou mais argumentos ou elementos são esperados. Também é usado para expandir as propriedades de um objeto. É extremamente útil para criar cópias rasas (shallow copies) de arrays e objetos, e para combinar múltiplos arrays ou objetos em um só.',
  },
  {
    title: '.map()',
    code: `const numeros = [1, 4, 9, 16];
const raizes = numeros.map(n => Math.sqrt(n));
// console.log(raizes); -> [1, 2, 3, 4]

const produtos = [
  { nome: 'Laptop', preco: 3000 },
  { nome: 'Mouse', preco: 150 }
];
const nomesDosProdutos = produtos.map(p => p.nome);
// console.log(nomesDosProdutos); -> ['Laptop', 'Mouse']`,
    explanation:
      'O método .map() cria um novo array populado com os resultados da chamada de uma função de callback em cada elemento do array original. Ele não modifica o array original (imutabilidade). É a ferramenta ideal quando você precisa transformar cada item de uma lista em outra coisa, mantendo o mesmo número de elementos.',
  },
  {
    title: '.filter()',
    code: `const idades = [15, 22, 18, 30, 17];
const maioresDeIdade = idades.filter(idade => idade >= 18);
// console.log(maioresDeIdade); -> [22, 18, 30]

const funcionarios = [
  { nome: 'Davi', setor: 'TI' },
  { nome: 'Lia', setor: 'RH' },
  { nome: 'Pedro', setor: 'TI' }
];
const equipeDeTI = funcionarios.filter(f => f.setor === 'TI');
// console.log(equipeDeTI); -> [{ nome: 'Davi', setor: 'TI' }, { nome: 'Pedro', setor: 'TI' }]`,
    explanation:
      'O método .filter() cria um novo array contendo todos os elementos que passaram no teste implementado pela função de callback. A função de callback deve retornar um valor booleano (true ou false). Se retornar true, o elemento é incluído no novo array; se retornar false, não é. Assim como o .map(), ele não modifica o array original.',
  },
  {
    title: '.reduce()',
    code: `const numeros = [1, 2, 3, 4, 5];
const soma = numeros.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
// console.log(soma); -> 15

const votos = ['React', 'Vue', 'React', 'Angular', 'React', 'Vue'];
const contagemVotos = votos.reduce((acc, voto) => {
  acc[voto] = (acc[voto] || 0) + 1;
  return acc;
}, {});
// console.log(contagemVotos); -> { React: 3, Vue: 2, Angular: 1 }`,
    explanation:
      "O método .reduce() aplica uma função (o 'redutor') a um acumulador e a cada elemento do array (da esquerda para a direita), para reduzi-lo a um único valor. O segundo argumento do .reduce() é o valor inicial do acumulador. Se não for fornecido, o primeiro elemento do array é usado como valor inicial. É muito poderoso para cálculos, como somas, e para transformar um array em um objeto.",
  },
  {
    title: '.forEach()',
    code: `const nomes = ['Ana', 'Bia', 'Carlos'];
nomes.forEach((nome, indice) => {
  console.log(\`Índice \${indice}: \${nome}\`);
});
// Saída no console:
// Índice 0: Ana
// Índice 1: Bia
// Índice 2: Carlos`,
    explanation:
      "O método .forEach() executa uma função de callback uma vez para cada elemento do array. Diferente do .map() ou .filter(), ele sempre retorna 'undefined' e não é encadeável. É usado exclusivamente para executar 'efeitos colaterais', ou seja, ações que não visam criar um novo array, como modificar variáveis externas, imprimir algo no console ou manipular o DOM.",
  },
  {
    title: '.find()',
    code: `const produtos = [
  { id: 10, nome: 'Teclado' },
  { id: 25, nome: 'Monitor' },
  { id: 42, nome: 'Mouse' }
];

const produtoEncontrado = produtos.find(p => p.id === 25);
// console.log(produtoEncontrado); -> { id: 25, nome: 'Monitor' }

const produtoNaoEncontrado = produtos.find(p => p.id === 99);
// console.log(produtoNaoEncontrado); -> undefined`,
    explanation:
      "O método .find() retorna o primeiro elemento de um array que satisfaz a função de teste fornecida. Se nenhum elemento satisfizer o teste, 'undefined' é retornado. É útil quando você precisa encontrar um objeto específico em uma coleção e não apenas saber se ele existe.",
  },
  {
    title: '.some()',
    code: `const numeros = [1, 5, 8, -3, 10];
const temNumeroNegativo = numeros.some(n => n < 0);
// console.log(temNumeroNegativo); -> true

const permissoes = ['admin', 'editor', 'viewer'];
const podeEditar = permissoes.some(p => p === 'editor');
// console.log(podeEditar); -> true`,
    explanation:
      "O método .some() verifica se pelo menos um elemento no array passa no teste implementado pela função de callback. Ele retorna um booleano ('true' ou 'false'). A iteração para assim que um elemento que satisfaz a condição é encontrado, tornando-o eficiente para verificações.",
  },
  {
    title: '.every()',
    code: `const notas = [10, 8, 9, 7];
const todosAprovados = notas.every(nota => nota >= 7);
// console.log(todosAprovados); -> true

const notas2 = [10, 5, 9, 8];
const todosAprovados2 = notas2.every(nota => nota >= 7);
// console.log(todosAprovados2); -> false`,
    explanation:
      'O método .every() verifica se todos os elementos em um array passam no teste implementado pela função de callback. Assim como o .some(), ele retorna um booleano. A iteração para assim que um elemento que não satisfaz a condição é encontrado, o que o torna eficiente.',
  },
  {
    title: '.includes()',
    code: `const frutas = ['maçã', 'banana', 'laranja'];
const temBanana = frutas.includes('banana');
// console.log(temBanana); -> true

const numeros = [1, 2, NaN, 4];
const temNaN = numeros.includes(NaN);
// console.log(temNaN); -> true (diferente de indexOf)`,
    explanation:
      "O método .includes() determina se um array contém um determinado elemento, retornando 'true' ou 'false' conforme apropriado. É uma forma mais simples e legível de verificar a presença de um valor em comparação com o método .indexOf(), especialmente porque o .includes() consegue encontrar o valor 'NaN' (Not a Number), enquanto o .indexOf() não consegue.",
  },
  {
    title: '.sort()',
    code: `// Ordenação numérica crescente
const numeros = [40, 100, 1, 5, 25];
numeros.sort((a, b) => a - b);
// console.log(numeros); -> [1, 5, 25, 40, 100]

// Ordenação de objetos por uma propriedade
const pessoas = [
  { nome: 'João', idade: 30 },
  { nome: 'Ana', idade: 25 },
];
pessoas.sort((a, b) => a.idade - b.idade);
// console.log(pessoas); -> [{ nome: 'Ana', idade: 25 }, { nome: 'João', idade: 30 }]`,
    explanation:
      'O método .sort() ordena os elementos de um array no próprio local (in-place) e retorna o array ordenado. Por padrão, ele converte os elementos para strings e os ordena. Para ordenar números corretamente, é essencial fornecer uma função de comparação que retorne um valor negativo, zero ou positivo, dependendo da ordem desejada (ex: (a, b) => a - b para ordem crescente).',
  },
  {
    title: '.slice()',
    code: `const animais = ['gato', 'cachorro', 'pato', 'coelho', 'peixe'];

// Pega os elementos do índice 1 ao 3 (não inclusivo)
const algunsAnimais = animais.slice(1, 4);
// console.log(algunsAnimais); -> ['cachorro', 'pato', 'coelho']

// Pega os últimos 2 elementos do array
const ultimosDois = animais.slice(-2);
// console.log(ultimosDois); -> ['coelho', 'peixe']

// Cria uma cópia rasa do array inteiro
const copiaAnimais = animais.slice();`,
    explanation:
      'O método .slice() retorna uma cópia rasa (shallow copy) de uma porção do array em um novo array, selecionada do início ao fim (o fim não é incluído). O array original não é modificado. É muito útil para criar subarrays ou para clonar um array de forma rápida.',
  },
  {
    title: '.splice()',
    code: `const meses = ['Jan', 'Mar', 'Abr', 'Jun'];

// Adiciona 'Fev' no índice 1, sem remover nada
meses.splice(1, 0, 'Fev');
// console.log(meses); -> ['Jan', 'Fev', 'Mar', 'Abr', 'Jun']

// Remove 1 elemento no índice 4 e adiciona 'Mai'
meses.splice(4, 1, 'Mai');
// console.log(meses); -> ['Jan', 'Fev', 'Mar', 'Abr', 'Mai']`,
    explanation:
      'O método .splice() altera o conteúdo de um array ao remover ou substituir elementos existentes e/ou adicionar novos elementos no próprio local (in-place). O primeiro argumento especifica o índice inicial, o segundo especifica quantos elementos remover, e os argumentos seguintes são os elementos a serem adicionados.',
  },
  {
    title: 'Promises',
    code: `// Consumindo uma Promise com fetch
fetch('https://api.github.com/users/google')
  .then(response => response.json())
  .then(data => console.log(data.name))
  .catch(error => console.error('Falha na requisição:', error));

// Criando uma nova Promise
const minhaPromise = new Promise((resolve, reject) => {
  const sucesso = true;
  if (sucesso) {
    resolve('Operação concluída com sucesso!');
  } else {
    reject('A operação falhou.');
  }
});

minhaPromise.then(resultado => console.log(resultado));`,
    explanation:
      "Uma Promise é um objeto que representa a eventual conclusão ou falha de uma operação assíncrona. Ela permite que você associe manipuladores (handlers) ao resultado de uma ação assíncrona. Possui três estados: pendente (pending), resolvida (fulfilled) ou rejeitada (rejected). Usamos '.then()' para lidar com o sucesso, '.catch()' para lidar com falhas, e '.finally()' para executar código independentemente do resultado.",
  },
  {
    title: 'Async/Await',
    code: `const buscarUsuario = async () => {
  try {
    const response = await fetch('https://api.github.com/users/microsoft');
    if (!response.ok) {
      throw new Error('Erro na resposta da rede');
    }
    const data = await response.json();
    console.log(data.name);
  } catch (error) {
    console.error('Falha ao buscar usuário:', error);
  }
};

buscarUsuario();`,
    explanation:
      "Async/Await é uma sintaxe mais moderna e limpa para trabalhar com Promises. A palavra-chave 'async' antes de uma função a transforma em uma função assíncrona, que sempre retorna uma Promise. A palavra-chave 'await' pode ser usada dentro de uma função 'async' para pausar a execução da função até que a Promise seja resolvida ou rejeitada. Isso torna o código assíncrono mais parecido com o código síncrono, facilitando a leitura e a manutenção. O tratamento de erros é feito com blocos try...catch.",
  },
  {
    title: 'Operador Ternário',
    code: `const idade = 20;
const status = idade >= 18 ? 'Adulto' : 'Menor de idade';
// console.log(status); -> 'Adulto'

const usuario = { logado: false };
const mensagem = \`Usuário está \${usuario.logado ? 'Online' : 'Offline'}\`;
// console.log(mensagem); -> 'Usuário está Offline'`,
    explanation:
      "O operador condicional (ternário) é um atalho de uma linha para a instrução 'if...else'. Sua sintaxe é 'condição ? valorSeVerdadeiro : valorSeFalso'. É extremamente útil para atribuições rápidas e para ser usado dentro de templates de string, onde um 'if' completo não caberia.",
  },
  {
    title: 'Coalescência Nula (??)',
    code: `let config = { duracao: 0, velocidade: null };

// Usando ?? (Coalescência Nula)
const duracaoAnimacao = config.duracao ?? 1000; // config.duracao é 0 (não nulo)
// console.log(duracaoAnimacao); -> 0

const velocidadeAnimacao = config.velocidade ?? 90; // config.velocidade é null
// console.log(velocidadeAnimacao); -> 90

// Comparação com || (OU Lógico)
const duracaoComOU = config.duracao || 1000; // 0 é "falsy", então pega o da direita
// console.log(duracaoComOU); -> 1000`,
    explanation:
      "O operador de coalescência nula (??) retorna o operando do lado direito quando o operando do lado esquerdo é 'null' ou 'undefined', e caso contrário, retorna o operando do lado esquerdo. É mais preciso que o operador OU (||) para definir valores padrão, pois o || considera outros valores 'falsy' (como 0, string vazia '', false) como motivo para usar o valor da direita.",
  },
  {
    title: 'Spread (...) em Objetos',
    code: `const user = { id: 123, nome: 'Leo' };
const preferencias = { tema: 'dark', notificacoes: true };

// Combinando dois objetos
const userCompleto = { ...user, ...preferencias };
// console.log(userCompleto); -> { id: 123, nome: 'Leo', tema: 'dark', notificacoes: true }

// Sobrescrevendo uma propriedade
const userAtualizado = { ...user, nome: 'Leonardo' };
// console.log(userAtualizado); -> { id: 123, nome: 'Leonardo' }`,
    explanation:
      'Assim como em arrays, o operador de propagação (...) pode ser usado para expandir as propriedades de um objeto dentro de um novo objeto literal. Isso é fundamental para a imutabilidade em JavaScript, pois permite criar cópias e versões atualizadas de objetos sem alterar o original. Se houver propriedades com o mesmo nome, a última a ser declarada prevalece.',
  },
  {
    title: 'Parâmetros Padrão',
    code: `// Parâmetro simples com valor padrão
function criarPedido(item, quantidade = 1) {
  console.log(\`Pedido: \${quantidade}x \${item}\`);
}
// criarPedido('Café'); -> "Pedido: 1x Café"
// criarPedido('Pizza', 2); -> "Pedido: 2x Pizza"

// Usar 'undefined' invoca o padrão, mas 'null' não
function logValor(valor = 'Padrão') {
  console.log(valor);
}
// logValor(undefined); -> "Padrão"
// logValor(null); -> null`,
    explanation:
      "Parâmetros padrão permitem que os parâmetros de uma função sejam inicializados com valores padrão se nenhum valor ou 'undefined' for passado. Isso torna as funções mais robustas e evita a necessidade de verificações manuais (ex: if (param === undefined)) dentro do corpo da função.",
  },
  {
    title: 'JSON.parse() e JSON.stringify()',
    code: `const usuario = { nome: 'Helena', id: 7, ativo: true };

// 1. Convertendo objeto para string JSON
const jsonString = JSON.stringify(usuario, null, 2); // O 2 é para indentação
/* jsonString agora é:
"{
  "nome": "Helena",
  "id": 7,
  "ativo": true
}"
*/

// 2. Convertendo string JSON de volta para objeto
const objetoUsuario = JSON.parse(jsonString);
// console.log(objetoUsuario.nome); -> 'Helena'`,
    explanation:
      'JSON (JavaScript Object Notation) é um formato de texto para troca de dados. `JSON.stringify()` converte um objeto, array ou valor JavaScript em uma string JSON, útil para enviar dados a um servidor ou armazenar no localStorage. `JSON.parse()` faz o oposto, convertendo uma string JSON em um objeto ou valor JavaScript correspondente, permitindo que os dados recebidos sejam utilizados no código.',
  },
  {
    title: 'Objeto Set',
    code: `const lista = [10, 20, 20, 30, 40, 40, 10];

// Criando um Set para remover duplicatas
const numerosUnicos = new Set(lista);
// console.log(numerosUnicos); -> Set(4) { 10, 20, 30, 40 }

// Convertendo de volta para um Array
const arrayUnico = [...numerosUnicos];
// console.log(arrayUnico); -> [10, 20, 30, 40]

// Usando métodos do Set
numerosUnicos.add(50); // Adiciona um elemento
// console.log(numerosUnicos.has(20)); -> true (Verifica se existe)`,
    explanation:
      'O objeto `Set` permite armazenar uma coleção de valores únicos de qualquer tipo. A principal utilidade é a remoção rápida e eficiente de elementos duplicados de um array. Ele fornece métodos úteis como `.add()`, `.has()` e `.delete()` para manipular a coleção.',
  },
  {
    title: 'Tratamento de Erros (try...catch)',
    code: `function buscarDados(url) {
  try {
    if (!url.startsWith('https')) {
      throw new Error('URL inválida! Apenas HTTPS é permitido.');
    }
    // Simula uma chamada de API que pode falhar
    const dados = JSON.parse('{ "nome": "produto" '); // JSON inválido
    console.log('Dados recebidos:', dados);
  } catch (error) {
    console.error('Ocorreu um erro:', error.message);
  } finally {
    console.log('Tentativa de busca finalizada.');
  }
}`,
    explanation:
      "A estrutura 'try...catch...finally' é usada para lidar com exceções (erros) em tempo de execução. O código dentro do bloco 'try' é executado. Se um erro ocorrer, a execução do 'try' é interrompida e o bloco 'catch' é executado, recebendo o objeto de erro. O bloco 'finally' é opcional e sempre executa no final, independentemente de ter ocorrido um erro ou não. A instrução 'throw' é usada para criar um erro personalizado.",
  },
  {
    title: 'Desestruturação de Arrays',
    code: `const cores = ['vermelho', 'verde', 'azul', 'amarelo'];

// Extraindo os primeiros elementos
const [cor1, cor2] = cores;
// console.log(cor1); -> 'vermelho'

// Pulando elementos com vírgula
const [primeira, , terceira] = cores;
// console.log(terceira); -> 'azul'

// Usando com o parâmetro Rest (...) para pegar o resto
const [principal, ...secundarias] = cores;
// console.log(secundarias); -> ['verde', 'azul', 'amarelo']`,
    explanation:
      'Assim como em objetos, a desestruturação pode ser aplicada a arrays para extrair valores e atribuí-los a variáveis. A atribuição é baseada na posição (índice) do elemento no array. É uma sintaxe muito mais limpa do que acessar cada elemento pelo seu índice (ex: cores[0]).',
  },
  {
    title: 'Parâmetros Rest (...)',
    code: `// Função que aceita um número ilimitado de argumentos
function registrarTags(postId, ...tags) {
  console.log(\`Post ID: \${postId}\`);
  console.log('Tags:', tags); // 'tags' é um array
}

// registrarTags(1, 'js', 'react', 'node');
// Saída:
// Post ID: 1
// Tags: ['js', 'react', 'node']

// Somar todos os números passados para a função
function somarTudo(...numeros) {
  return numeros.reduce((total, num) => total + num, 0);
}
// console.log(somarTudo(1, 2, 3, 4)); -> 10`,
    explanation:
      'A sintaxe de parâmetros rest (...) permite que uma função aceite um número indefinido de argumentos como um array. Isso é útil quando não se sabe quantos argumentos serão passados para a função. O parâmetro rest deve ser sempre o último parâmetro na definição da função.',
  },
  {
    title: 'Object.entries()',
    code: `const usuario = {
  nome: 'Lucas',
  idade: 30,
  ativo: true,
};

// Iterando sobre chave e valor
for (const [chave, valor] of Object.entries(usuario)) {
  console.log(\`\${chave.toUpperCase()}: \${valor}\`);
}
// Saída:
// NOME: Lucas
// IDADE: 30
// ATIVO: true

// Convertendo um objeto para um Map
const mapa = new Map(Object.entries(usuario));
console.log(mapa.get('nome')); // -> 'Lucas'`,
    explanation:
      'O método `Object.entries()` retorna um array de arrays, onde cada subarray contém o par `[chave, valor]` de uma propriedade enumerável do objeto. É extremamente útil para iterar sobre as chaves e os valores de um objeto de forma direta com um loop `for...of` e desestruturação, ou para converter um objeto em outras estruturas de dados como um `Map`.',
  },
  {
    title: 'setTimeout e clearTimeout',
    code: `console.log('Iniciando...');

// Agenda uma tarefa
const timerId = setTimeout(() => {
  console.log('Esta mensagem nunca aparecerá.');
}, 3000);

// Uma condição que cancela a tarefa antes dela executar
if (true) {
  clearTimeout(timerId);
  console.log('Agendamento cancelado!');
}

setTimeout(() => {
  console.log('Executado após 2 segundos.');
}, 2000);`,
    explanation:
      '`setTimeout` é uma função assíncrona que agenda a execução de uma função de callback após um determinado período de tempo em milissegundos. Ela não bloqueia a execução do restante do código. A função retorna um ID numérico único, que pode ser passado para `clearTimeout` para cancelar a execução agendada antes que ela aconteça.',
  },
  {
    title: 'Objeto Map',
    code: `const mapa = new Map();
const chaveObjeto = { id: 1 };
const chaveFuncao = () => {};

// Usando diferentes tipos de chave
mapa.set('uma string', 'Valor associado a uma string');
mapa.set(chaveObjeto, 'Valor associado a um objeto');
mapa.set(chaveFuncao, 'Valor associado a uma função');

console.log(mapa.get(chaveObjeto)); // -> 'Valor associado a um objeto'
console.log(mapa.size); // -> 3
mapa.forEach((valor, chave) => console.log(chave)); // Itera sobre as chaves`,
    explanation:
      'O objeto `Map` é uma coleção de pares chave-valor que, ao contrário dos objetos literais (`{}`), permite que qualquer tipo de valor (objetos, funções, primitivos) seja usado como chave. Ele mantém a ordem de inserção dos elementos e oferece métodos convenientes como `.set()`, `.get()`, `.has()`, `.delete()` e a propriedade `.size`.',
  },
  {
    title: "Modo Estrito ('use strict')",
    code: `// Sem modo estrito, isso falha silenciosamente
// delete Object.prototype;

function modoEstrito() {
  'use strict';
  // Atribuir a uma variável não declarada lança um erro
  // variavelNaoDeclarada = 'erro'; // -> ReferenceError

  const obj = {};
  Object.defineProperty(obj, 'prop', { value: 1, writable: false });
  // Tentar mudar uma propriedade não-escrita lança um erro
  // obj.prop = 2; // -> TypeError
}
modoEstrito();`,
    explanation:
      "O 'use strict' é uma diretiva que ativa um modo mais restrito de processamento do JavaScript. Ele transforma 'erros silenciosos' em erros explícitos (lança exceções), o que ajuda a encontrar bugs e a evitar práticas ruins. Por exemplo, impede o uso de variáveis antes de serem declaradas. Pode ser declarado no início de um script ou de uma função.",
  },
  {
    title: 'Object.freeze()',
    code: `const config = {
  porta: 3000,
  db: { host: 'localhost' }
};

Object.freeze(config);

config.porta = 5000; // A alteração é ignorada
console.log(config.porta); // -> 3000

// A imutabilidade é superficial (shallow)
config.db.host = '127.0.0.1'; // ISSO FUNCIONA!
console.log(config.db.host); // -> '127.0.0.1'`,
    explanation:
      "O método `Object.freeze()` congela um objeto. Um objeto congelado não pode mais ser alterado; novas propriedades não podem ser adicionadas, propriedades existentes não podem ser removidas ou alteradas. É importante notar que o congelamento é 'raso' (shallow), ou seja, se uma propriedade do objeto for outro objeto, este objeto aninhado não será congelado e poderá ser modificado.",
  },
  {
    title: 'Array.from()',
    code: `// De uma NodeList (resultado de querySelectorAll)
// const divs = document.querySelectorAll('div');
// const arrayDeDivs = Array.from(divs);
// arrayDeDivs.map(d => d.style.color = 'red'); // Agora podemos usar métodos de array

// De um Set
const set = new Set(['a', 'b', 'c']);
const arrayDoSet = Array.from(set);
console.log(arrayDoSet); // -> ['a', 'b', 'c']

// Com função de mapeamento
const arrayMapeado = Array.from([1, 2, 3], x => x * 2);
console.log(arrayMapeado); // -> [2, 4, 6]`,
    explanation:
      "O método estático `Array.from()` cria uma nova instância de Array a partir de um objeto 'array-like' (que tem uma propriedade `length` e elementos indexados) ou de um objeto iterável (como Map, Set, ou String). Opcionalmente, pode receber uma função de mapeamento como segundo argumento para transformar cada elemento durante a criação do novo array.",
  },
  {
    title: 'Closures',
    code: `function criarSaudacao(saudacao) {
  // 'saudacao' está no escopo da função externa
  return function(nome) {
    // A função interna 'lembra' da variável 'saudacao'
    console.log(\`\${saudacao}, \${nome}!\`);
  };
}

const saudarComBomDia = criarSaudacao('Bom dia');
const saudarComBoaNoite = criarSaudacao('Boa noite');

saudarComBomDia('Maria'); // -> "Bom dia, Maria!"
saudarComBoaNoite('João'); // -> "Boa noite, João!"`,
    explanation:
      'Um closure (fechamento) ocorre quando uma função é capaz de lembrar e acessar o escopo léxico em que foi criada, mesmo quando está sendo executada fora desse escopo. No exemplo, a função interna retornada tem acesso à variável `saudacao` da função externa `criarSaudacao`, mesmo após a execução de `criarSaudacao` ter sido concluída. Isso permite a criação de funções com estado privado.',
  },
  {
    title: 'Higher-Order Functions',
    code: `const numeros = [1, 2, 3, 4];

// .map é uma Higher-Order Function, pois recebe uma função como argumento.
const dobrados = numeros.map(n => n * 2);
console.log(dobrados); // -> [2, 4, 6, 8]

// Criando uma Higher-Order Function que retorna outra função.
function criarMultiplicador(multiplicador) {
  return function(numero) {
    return numero * multiplicador;
  };
}
const triplicar = criarMultiplicador(3);
console.log(triplicar(5)); // -> 15`,
    explanation:
      'Uma "Higher-Order Function" (Função de Ordem Superior) é uma função que opera em outras funções. Ela pode fazer uma de duas coisas (ou ambas): 1) Receber uma ou mais funções como argumento. 2) Retornar uma nova função como resultado. Métodos de array como `.map()`, `.filter()` e `.reduce()` são exemplos clássicos.',
  },
  {
    title: 'Memoization',
    code: `function memoize(fn) {
  const cache = {};
  return function(...args) {
    const chave = JSON.stringify(args);
    if (cache[chave]) {
      console.log('Buscando do cache...');
      return cache[chave];
    }
    console.log('Calculando resultado...');
    const resultado = fn(...args);
    cache[chave] = resultado;
    return resultado;
  };
}

const somaLenta = (a, b) => a + b; // Simula uma função custosa
const somaMemoizada = memoize(somaLenta);

somaMemoizada(5, 3); // -> Calculando resultado...
somaMemoizada(5, 3); // -> Buscando do cache...`,
    explanation:
      'Memoization é uma técnica de otimização usada para acelerar programas, armazenando os resultados de chamadas de funções custosas e retornando o resultado do cache quando os mesmos inputs ocorrem novamente. Em vez de recalcular, a função simplesmente busca o resultado previamente guardado, economizando tempo de processamento.',
  },
  {
    title: 'Event Loop',
    code: `console.log('Início'); // 1. Executado imediatamente

Promise.resolve().then(() => console.log('Promise resolvida')); // 3. Adicionado à Microtask Queue

setTimeout(() => {
  console.log('Timeout executado'); // 4. Adicionado à Macrotask Queue
}, 0);

console.log('Fim'); // 2. Executado imediatamente

// Ordem de execução no console: Início, Fim, Promise resolvida, Timeout executado`,
    explanation:
      'O Event Loop é o modelo de concorrência do JavaScript que permite a execução de código assíncrono de forma não-bloqueante. A Call Stack (pilha de chamadas) executa tarefas síncronas. Quando encontra uma operação assíncrona (como `setTimeout` ou uma Promise), ela a delega para o ambiente (ex: navegador) e continua. Quando a operação termina, seu callback é colocado em uma fila (Microtask ou Macrotask). O Event Loop move tarefas das filas para a pilha de chamadas assim que ela estiver vazia.',
  },
  {
    title: 'Proxy Objects',
    code: `const usuario = { nome: 'Ana', idade: 25 };

const handler = {
  get(target, property) {
    console.log(\`Acessando a propriedade: \${property}\`);
    return property in target ? target[property] : 'Propriedade não existe';
  },
  set(target, property, value) {
    if (property === 'idade' && typeof value !== 'number') {
      throw new TypeError('Idade deve ser um número.');
    }
    target[property] = value;
    return true;
  }
};

const proxyUsuario = new Proxy(usuario, handler);
console.log(proxyUsuario.nome); // -> 'Acessando a propriedade: nome', 'Ana'
proxyUsuario.idade = 'trinta'; // -> Lança TypeError`,
    explanation:
      "Um objeto `Proxy` permite criar um 'invólucro' para outro objeto (o `target`) e interceptar operações fundamentais, como leitura de propriedades (`get`), atribuição (`set`), chamadas de função (`apply`), etc. Isso possibilita a implementação de lógicas customizadas, como validação, logging, formatação de dados e virtualização, sem modificar o objeto original.",
  },
  {
    title: 'Generators',
    code: `function* contagemRegressiva(inicio) {
  for (let i = inicio; i >= 0; i--) {
    yield i;
  }
}

const contador = contagemRegressiva(3);

console.log(contador.next().value); // -> 3
console.log(contador.next().value); // -> 2
console.log(contador.next().value); // -> 1
console.log(contador.next().value); // -> 0
console.log(contador.next().done); // -> true`,
    explanation:
      "Uma função geradora (declarada com `function*`) é um tipo especial de função que pode ser pausada e retomada. Quando chamada, ela não executa seu corpo, mas retorna um objeto iterador. Cada chamada ao método `.next()` do iterador executa a função até encontrar a próxima palavra-chave `yield`, que 'gera' um valor. Elas são úteis para criar iteradores customizados e gerenciar fluxos de dados de forma síncrona.",
  },
  {
    title: 'Symbol',
    code: `const NOME_PRIVADO = Symbol('nome');

class Pessoa {
  constructor(nome) {
    this[NOME_PRIVADO] = nome;
  }

  getNome() {
    return this[NOME_PRIVADO];
  }
}

const p = new Pessoa('Carlos');
console.log(p.getNome()); // -> 'Carlos'
console.log(Object.keys(p)); // -> [] (a chave Symbol não aparece)`,
    explanation:
      "Um `Symbol` é um tipo de dado primitivo que é sempre único e imutável. Símbolos são frequentemente usados como chaves de propriedade em objetos para evitar colisões de nomes. Propriedades com chave de Símbolo não são enumeradas por laços `for...in` ou `Object.keys()`, ajudando a criar propriedades que são 'privadas' por convenção.",
  },
  {
    title: 'Currying',
    code: `// Função não-curried
const adicionar = (a, b, c) => a + b + c;

// Mesma função, curried
const adicionarCurried = a => b => c => a + b + c;

const adicionar10 = adicionarCurried(10);
const adicionar10e5 = adicionar10(5);
const resultadoFinal = adicionar10e5(3); // -> 18

console.log(resultadoFinal); // -> 18`,
    explanation:
      'Currying é uma técnica de programação funcional que transforma uma função que aceita múltiplos argumentos em uma sequência de funções aninhadas, cada uma aceitando um único argumento. Isso permite criar funções especializadas a partir de uma função mais genérica, fixando alguns de seus argumentos, o que aumenta a reusabilidade e a composição de funções.',
  },
  {
    title: 'Object.seal()',
    code: `const usuario = { nome: 'Bia', ativo: false };
Object.seal(usuario);

// 1. Não pode adicionar novas propriedades
usuario.idade = 28;
console.log(usuario.idade); // -> undefined

// 2. Não pode remover propriedades existentes
delete usuario.nome;
console.log(usuario.nome); // -> 'Bia'

// 3. MAS PODE alterar o valor de propriedades existentes
usuario.ativo = true;
console.log(usuario.ativo); // -> true`,
    explanation:
      "O método `Object.seal()` 'sela' um objeto. Isso impede que novas propriedades sejam adicionadas e que propriedades existentes sejam removidas. No entanto, ao contrário de `Object.freeze()`, os valores das propriedades existentes ainda podem ser alterados, desde que sejam graváveis (`writable`).",
  },
  {
    title: 'Métodos .toUpperCase() e .toLowerCase()',
    code: `const frase = "JavaScript é Versátil";

// Converte tudo para maiúsculas
console.log(frase.toUpperCase());
// Resultado: "JAVASCRIPT É VERSÁTIL"

// Converte tudo para minúsculas
console.log(frase.toLowerCase());
// Resultado: "javascript é versátil"`,
    explanation:
      'Retornam uma nova string convertida para maiúsculas ou minúsculas, respectivamente. As strings em JavaScript são imutáveis, então a string original nunca é alterada.',
  },
  {
    title: 'Métodos .trim(), .trimStart(), .trimEnd()',
    code: `const entrada = "   espaços extras   ";

// Remove espaços em branco do início e do fim
console.log(\`'\${entrada.trim()}'\`);
// Resultado: "'espaços extras'"

// Remove espaços em branco apenas do início (esquerda)
console.log(\`'\${entrada.trimStart()}'\`);
// Resultado: "'espaços extras   '"

// Remove espaços em branco apenas do fim (direita)
console.log(\`'\${entrada.trimEnd()}'\`);
// Resultado: "'   espaços extras'"`,
    explanation:
      'Esses métodos retornam uma nova string com os espaços em branco removidos das extremidades. `.trim()` remove de ambos os lados, `.trimStart()` (ou `.trimLeft()`) remove do início, e `.trimEnd()` (ou `.trimRight()`) remove do fim. São ideais para limpar a entrada de dados do usuário.',
  },
  {
    title: 'Métodos .replace() e .replaceAll()',
    code: `const texto = "O gato subiu no telhado. O gato é preto.";

// .replace() com string substitui apenas a primeira ocorrência
const novoTexto = texto.replace("gato", "cachorro");
// console.log(novoTexto);
// Resultado: "O cachorro subiu no telhado. O gato é preto."

// .replaceAll() substitui todas as ocorrências
const novoTextoCompleto = texto.replaceAll("gato", "cachorro");
// console.log(novoTextoCompleto);
// Resultado: "O cachorro subiu no telhado. O cachorro é preto."`,
    explanation:
      '`.replace()` busca por uma substring (ou expressão regular) e a substitui. Se o primeiro argumento for uma string, apenas a primeira ocorrência é substituída. `.replaceAll()` é um método mais moderno que substitui todas as ocorrências de uma substring, tornando o código mais simples do que usar expressões regulares com a flag global.',
  },
  {
    title: 'Método .split()',
    code: `const csv = "produto;preco;estoque";
const frase = "Eu amo programar em JavaScript";

// Divide a string em um array usando ';' como separador
const cabecalho = csv.split(';');
// console.log(cabecalho); -> ['produto', 'preco', 'estoque']

// Divide a string pelos espaços, criando um array de palavras
const palavras = frase.split(' ');
// console.log(palavras); -> ['Eu', 'amo', 'programar', 'em', 'JavaScript']`,
    explanation:
      "Divide uma string em um array de substrings. O método recebe um argumento que atua como o separador. Se um separador vazio (`''`) for usado, ele divide a string em um array de caracteres individuais.",
  },
  {
    title: 'Método .join() (de Array)',
    code: `const partesUrl = ['https', 'www.meusite.com', 'blog'];
const palavras = ['Olá', 'Mundo'];

// Junta os elementos do array com '/'
const url = partesUrl.join('//');
// console.log(url); -> "https://www.meusite.com//blog"

// Junta os elementos com um espaço
const frase = palavras.join(' ');
// console.log(frase); -> "Olá Mundo"`,
    explanation:
      'Embora seja um método de Array, `.join()` é a operação inversa e complementar de `.split()`. Ele cria e retorna uma nova string unindo todos os elementos de um array, separados pelo separador especificado.',
  },
  {
    title: 'Métodos .startsWith() e .endsWith()',
    code: `const arquivo = "documento.pdf";
const codigo = "ID-12345";

// Verifica se a string começa com um prefixo
console.log(codigo.startsWith('ID-')); // -> true

// Verifica se a string termina com um sufixo
console.log(arquivo.endsWith('.pdf')); // -> true
console.log(arquivo.endsWith('.txt')); // -> false`,
    explanation:
      'Verificam se uma string começa ou termina com os caracteres de outra string, retornando `true` ou `false` conforme o caso. São métodos diretos e legíveis para validações de formato.',
  },
  {
    title: 'Método .includes()',
    code: `const frase = "O rápido anão marrom salta sobre o cão preguiçoso.";

// Verifica se a substring "anão" existe
console.log(frase.includes('anão')); // -> true

// A busca é case-sensitive
console.log(frase.includes('Anão')); // -> false

// Pode especificar uma posição inicial para a busca
console.log(frase.includes('rápido', 10)); // -> false`,
    explanation:
      'Determina se uma string pode ser encontrada dentro de outra, retornando `true` ou `false`. É uma forma moderna e mais legível de verificar a existência de uma substring em comparação com `indexOf`.',
  },
  {
    title: 'Métodos .indexOf() e .lastIndexOf()',
    code: `const texto = "Aprenda JavaScript, pois JavaScript é popular.";

// Retorna o índice da primeira ocorrência de "JavaScript"
console.log(texto.indexOf('JavaScript')); // -> 8

// Retorna o índice da última ocorrência de "JavaScript"
console.log(texto.lastIndexOf('JavaScript')); // -> 28

// Retorna -1 se a substring não for encontrada
console.log(texto.indexOf('Python')); // -> -1`,
    explanation:
      '`.indexOf()` retorna a posição do índice da primeira ocorrência de um valor em uma string. `.lastIndexOf()` retorna a posição da última ocorrência. Ambos retornam `-1` se o valor não for encontrado.',
  },
  {
    title: 'Método .slice()',
    code: `const str = "Mozilla";

// Extrai a string a partir do índice 3
console.log(str.slice(3)); // -> "illa"

// Extrai do índice 1 ao 3 (o índice 4 não é incluído)
console.log(str.slice(1, 4)); // -> "ozi"

// Extrai os últimos 2 caracteres
console.log(str.slice(-2)); // -> "la"`,
    explanation:
      'Extrai uma seção de uma string e retorna uma nova string, sem modificar a original. Aceita índices de início e fim. O uso de índices negativos permite contar a partir do final da string.',
  },
  {
    title: 'Métodos .padStart() e .padEnd()',
    code: `const numero = '5';
const texto = 'Capítulo';

// Preenche a string no início com '0' até atingir o comprimento de 3
console.log(numero.padStart(3, '0')); // -> "005"

// Preenche a string no final com '.' até atingir o comprimento de 12
console.log(texto.padEnd(12, '.')); // -> "Capítulo...."`,
    explanation:
      'Preenchem a string atual com outra string (repetidamente, se necessário) até que a string resultante atinja o comprimento fornecido. `.padStart()` preenche o início e `.padEnd()` preenche o final. Útil para formatação de códigos, relatórios e alinhamento de texto.',
  },
  {
    title: 'Template Literals (Template Strings)',
    code: `const nome = "Ana";
const idade = 28;

// Forma antiga com concatenação
const saudacaoAntiga = "Olá, meu nome é " + nome + " e eu tenho " + idade + " anos.";

// Forma moderna com Template Literals
const saudacaoModerna = \`Olá, meu nome é \${nome} e eu tenho \${idade} anos.\`;
console.log(saudacaoModerna);

// Permitem quebras de linha
const html = \`
  <div>
    <h1>\${nome}</h1>
  </div>
\`;`,
    explanation:
      'Template literals são strings que permitem expressões embutidas e múltiplas linhas. Elas são envolvidas por crases (``) em vez de aspas simples ou duplas. As expressões são inseridas na forma `${expressao}`. São a maneira preferida de construir strings complexas em JavaScript moderno.',
  },
  {
    title: 'Estrutura Condicional (if, else if, else)',
    code: `const nota = 75;
let status;

if (nota >= 90) {
  status = 'Excelente';
} else if (nota >= 70) {
  status = 'Aprovado';
} else if (nota >= 50) {
  status = 'Recuperação';
} else {
  status = 'Reprovado';
}

console.log(\`O status do aluno é: \${status}\`);
// Resultado: "O status do aluno é: Aprovado"`,
    explanation:
      'Executa blocos de código condicionalmente. A primeira condição `if` que for avaliada como verdadeira terá seu bloco executado, e as demais serão ignoradas. O bloco `else` é opcional e serve como um caso padrão, executado se nenhuma das condições anteriores for atendida. É a estrutura fundamental para controlar o fluxo de um programa.',
  },
  {
    title: 'Estrutura de Múltipla Escolha (switch)',
    code: `const nivelAcesso = 'editor';
let mensagem;

switch (nivelAcesso) {
  case 'admin':
    mensagem = 'Acesso total concedido.';
    break;
  case 'editor':
  case 'moderador':
    mensagem = 'Acesso parcial para edição de conteúdo.';
    break;
  case 'visitante':
    mensagem = 'Acesso apenas para visualização.';
    break;
  default:
    mensagem = 'Nível de acesso desconhecido.';
}
console.log(mensagem);
// Resultado: "Acesso parcial para edição de conteúdo."`,
    explanation:
      "Uma alternativa para longas cadeias de `if...else if` que avaliam uma única variável. A expressão no `switch` é comparada com cada `case`. O `break` é crucial para sair do bloco após um caso ser correspondido, evitando a execução dos casos seguintes ('fall-through'). O `default` é opcional e funciona como o `else`.",
  },
  {
    title: 'Loop For (Clássico)',
    code: `// Iteração de 0 a 4
for (let i = 0; i < 5; i++) {
  console.log(\`O número é \${i}\`);
}

// Percorrendo um array pelo índice
const frutas = ['Maçã', 'Banana', 'Laranja'];
for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
}`,
    explanation:
      'Executa um bloco de código um número específico de vezes. É composto por três partes: inicialização (executada uma vez no início), condição (verificada antes de cada iteração) e expressão final (executada ao final de cada iteração, geralmente um incremento). É ideal para quando o número de repetições é conhecido.',
  },
  {
    title: 'Loop For...Of (Iteráveis)',
    code: `const tecnologias = ['React', 'Vue', 'Svelte'];
const palavra = 'Dev';

// Itera sobre os VALORES do array
for (const tech of tecnologias) {
  console.log(tech);
}
// Saída: React, Vue, Svelte

// Itera sobre os CARACTERES da string
for (const letra of palavra) {
  console.log(letra);
}
// Saída: D, e, v`,
    explanation:
      'É a forma moderna e mais legível de iterar sobre os **valores** de objetos iteráveis, como Arrays, Strings, Maps e Sets. A cada iteração, a variável declarada no loop (`tech`, `letra`) recebe o valor do elemento atual, simplificando o acesso direto sem a necessidade de usar um índice.',
  },
  {
    title: 'Loop For...In (Propriedades de Objetos)',
    code: `const carro = {
  marca: 'Ford',
  modelo: 'Mustang',
  ano: 1969
};

// Itera sobre as CHAVES (propriedades) do objeto
for (const propriedade in carro) {
  console.log(\`\${propriedade}: \${carro[propriedade]}\`);
}
// Saída:
// marca: Ford
// modelo: Mustang
// ano: 1969`,
    explanation:
      'Itera sobre as **chaves** (ou propriedades) enumeráveis de um objeto. É a maneira correta para inspecionar as propriedades de um objeto genérico. **Atenção:** Não é recomendado para iterar sobre Arrays, pois pode acessar propriedades inesperadas e a ordem não é garantida. Para arrays, prefira `for...of` ou `.forEach()`.',
  },
  {
    title: 'Loop While',
    code: `let moedas = 5;

while (moedas > 0) {
  console.log(\`Você tem \${moedas} moeda(s). Inserindo uma...\`);
  moedas--; // Essencial para evitar um loop infinito
}

console.log("Acabaram as moedas!");`,
    explanation:
      'Executa um bloco de código repetidamente **enquanto** uma condição especificada for verdadeira. A condição é verificada *antes* de cada iteração. É ideal para situações onde o número de repetições não é conhecido de antemão. É crucial garantir que a condição se torne falsa em algum momento para evitar um loop infinito.',
  },
  {
    title: 'Loop Do...While',
    code: `let tentativas = 0;

do {
  console.log(\`Tentativa número \${tentativas + 1}\`);
  // Suponha que aqui haveria uma lógica que poderia falhar
  tentativas++;
} while (tentativas < 3 && confirm("Tentar novamente?")); // Exemplo interativo

// O bloco acima executa pelo menos uma vez, mesmo se a condição inicial for falsa.`,
    explanation:
      'É uma variante do loop `while`. A principal diferença é que a condição é verificada *após* a execução do bloco de código. Isso garante que o bloco seja executado **pelo menos uma vez**, independentemente da condição ser verdadeira ou falsa na primeira avaliação.',
  },
]
