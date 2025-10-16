import type { Reminder } from './types'

export const pythontips: Reminder[] = [
  {
    title: 'List Comprehensions',
    code: `numeros = [1, 2, 3, 4, 5]

# Mapeamento: criar uma nova lista com o quadrado de cada número
quadrados = [n**2 for n in numeros]
# Resultado: [1, 4, 9, 16, 25]

# Mapeamento e Filtro: criar uma lista com o quadrado apenas dos números pares
quadrados_pares = [n**2 for n in numeros if n % 2 == 0]
# Resultado: [4, 16]`,
    explanation:
      "List Comprehensions são uma forma concisa e legível de criar listas. A sintaxe é mais curta e muitas vezes mais rápida que um loop 'for' tradicional. É a maneira 'Pythonica' de criar listas baseadas em outras listas ou iteráveis.",
  },
  {
    title: 'f-Strings (Formatação de Strings)',
    code: `nome = "Maria"
idade = 30
pi = 3.14159

# Uso básico
saudacao = f"Olá, {nome}! Você tem {idade} anos."
# Resultado: "Olá, Maria! Você tem 30 anos."

# Uso com expressões e formatação
info = f"O valor de pi arredondado é {pi:.2f}. O dobro da idade é {idade * 2}."
# Resultado: "O valor de pi arredondado é 3.14. O dobro da idade é 60."`,
    explanation:
      "Introduzidas no Python 3.6, as f-Strings são a maneira mais moderna, rápida e legível de formatar strings. Você simplesmente prefixa a string com a letra 'f' e coloca as variáveis ou expressões dentro de chaves `{}` diretamente na string.",
  },
  {
    title: 'Desempacotamento (Unpacking)',
    code: `numeros = [10, 20, 30, 40, 50]

# Desempacotamento básico
primeiro, segundo = (10, 20)
# primeiro -> 10, segundo -> 20

# Capturando o resto com *
inicio, *meio, fim = numeros
# inicio -> 10
# meio -> [20, 30, 40]
# fim -> 50

# Em loops for
usuarios = [('Ana', 25), ('Beto', 32)]
for nome, idade in usuarios:
    print(f"{nome} tem {idade} anos")`,
    explanation:
      'O desempacotamento permite atribuir os itens de uma sequência (lista, tupla) a múltiplas variáveis de uma só vez. O operador `*` pode ser usado para capturar múltiplos itens restantes em uma lista, tornando o código mais flexível e expressivo.',
  },
  {
    title: 'Dictionary Comprehensions',
    code: `nomes = ['ana', 'bruno', 'carla']

# Criando um dicionário a partir de uma lista
quadrados = {x: x**2 for x in range(5)}
# Resultado: {0: 0, 1: 1, 2: 4, 3: 9, 4: 16}

# Invertendo um dicionário
produtos = {'mouse': 50, 'teclado': 120}
precos_produtos = {preco: produto for produto, preco in produtos.items()}
# Resultado: {50: 'mouse', 120: 'teclado'}`,
    explanation:
      'Semelhante às List Comprehensions, as Dictionary Comprehensions oferecem uma maneira concisa de criar dicionários. A sintaxe `{chave: valor for item in iteravel}` é poderosa para transformar e construir dicionários de forma eficiente.',
  },
  {
    title: 'Função enumerate()',
    code: `frutas = ['maçã', 'banana', 'laranja']

# O jeito não-pythonico
# indice = 0
# for fruta in frutas:
#   print(indice, fruta)
#   indice += 1

# O jeito Pythonico com enumerate
for indice, fruta in enumerate(frutas):
    print(f"Índice {indice}: {fruta}")
# Saída:
# Índice 0: maçã
# Índice 1: banana
# Índice 2: laranja`,
    explanation:
      'A função `enumerate()` adiciona um contador a um iterável e o retorna em forma de um objeto enumerado. É a forma preferida para obter tanto o índice quanto o valor ao iterar sobre uma lista ou outra sequência, evitando a necessidade de um contador manual.',
  },
  {
    title: '*args e **kwargs',
    code: `def cadastro(nome, *args, **kwargs):
    print(f"Nome: {nome}")
    print(f"Args (informações extras): {args}")
    print(f"Kwargs (dados nomeados): {kwargs}")

cadastro(
    "Carlos",
    "Brasileiro", "Casado", # Estes são os *args
    idade=40, cidade="São Paulo" # Estes são os **kwargs
)
# Saída:
# Nome: Carlos
# Args (informações extras): ('Brasileiro', 'Casado')
# Kwargs (dados nomeados): {'idade': 40, 'cidade': 'São Paulo'}`,
    explanation:
      '`*args` permite que uma função receba um número indefinido de argumentos posicionais, que são agrupados em uma tupla. `**kwargs` permite que a função receba um número indefinido de argumentos nomeados, que são agrupados em um dicionário. São essenciais para criar funções flexíveis e decorators.',
  },
  {
    title: 'Gerenciador de Contexto (with)',
    code: `# O jeito seguro, mas verboso
# f = open('arquivo.txt', 'w')
# try:
#   f.write('Olá, mundo!')
# finally:
#   f.close()

# O jeito Pythonico com 'with'
with open('arquivo.txt', 'w') as f:
    f.write('Olá, mundo!')
# O arquivo é fechado automaticamente aqui, mesmo se ocorrer um erro.`,
    explanation:
      "O gerenciador de contexto, ativado pela palavra-chave `with`, simplifica o gerenciamento de recursos como arquivos ou conexões de rede. Ele garante que as operações de 'limpeza' (como fechar um arquivo) sejam executadas automaticamente no final do bloco, mesmo que ocorram exceções, tornando o código mais seguro e limpo.",
  },

  {
    title: 'Slicing (Fatiamento de Sequências)',
    code: `lista = [10, 20, 30, 40, 50, 60]

# Pega do índice 1 ao 3 (não inclusivo)
fatia1 = lista[1:4] # -> [20, 30, 40]

# Pega do início até o índice 2 (não inclusivo)
fatia2 = lista[:3] # -> [10, 20, 30]

# Pega os últimos 3 elementos
fatia3 = lista[-3:] # -> [40, 50, 60]

# Inverte a lista
invertida = lista[::-1] # -> [60, 50, 40, 30, 20, 10]`,
    explanation:
      'O fatiamento é uma forma poderosa de extrair subsequências de listas, tuplas e strings. A sintaxe é `sequencia[inicio:fim:passo]`. Todos os parâmetros são opcionais. O uso de índices negativos permite contar a partir do final da sequência.',
  },
  {
    title: 'Type Hinting (Dicas de Tipos)',
    code: `def calcular_area(raio: float) -> float:
    """Calcula a área de um círculo."""
    return 3.14159 * (raio ** 2)

def saudar(nome: str, repeticoes: int = 1) -> None:
    """Imprime uma saudação."""
    for _ in range(repeticoes):
        print(f"Olá, {nome}")

# Ferramentas como MyPy podem verificar a tipagem estaticamente
# calcular_area("texto") # -> MyPy apontaria um erro aqui`,
    explanation:
      'As dicas de tipos permitem anotar os tipos esperados para variáveis, parâmetros de funções e valores de retorno. Elas não são obrigatórias em tempo de execução, mas melhoram a legibilidade do código, auxiliam IDEs com autocompletar e permitem a verificação estática de tipos com ferramentas como o MyPy, ajudando a encontrar bugs antes da execução.',
  },
  {
    title: 'Método .append()',
    code: `frutas = ['maçã', 'banana']

# Adiciona um único item ao final da lista
frutas.append('laranja')

# print(frutas)
# Resultado: ['maçã', 'banana', 'laranja']`,
    explanation:
      "Adiciona um único elemento ao final da lista. Este método modifica a lista original (operação 'in-place') e não retorna nenhum valor (retorna 'None'). É a forma mais comum de adicionar um item a uma lista.",
  },
  {
    title: 'Método .extend()',
    code: `numeros = [1, 2, 3]
mais_numeros = [4, 5, 6]

# Adiciona todos os itens de um iterável (outra lista, tupla, etc.)
numeros.extend(mais_numeros)

# print(numeros)
# Resultado: [1, 2, 3, 4, 5, 6]`,
    explanation:
      'Adiciona os elementos de um iterável (como outra lista) ao final da lista atual. Diferente de `.append()`, que adicionaria a lista `[4, 5, 6]` como um único elemento, `.extend()` adiciona cada item individualmente. Também modifica a lista original.',
  },
  {
    title: 'Método .insert()',
    code: `letras = ['a', 'c', 'd']

# Insere o elemento 'b' no índice 1
letras.insert(1, 'b')

# print(letras)
# Resultado: ['a', 'b', 'c', 'd']`,
    explanation:
      'Insere um elemento em uma posição (índice) específica. O primeiro argumento é o índice onde o elemento será inserido, e o segundo é o próprio elemento. Todos os elementos a partir daquele índice são deslocados para a direita.',
  },
  {
    title: 'Método .pop()',
    code: `linguagens = ['Python', 'Java', 'C#', 'JavaScript']

# Remove e retorna o último item se nenhum índice for especificado
ultima = linguagens.pop()
# print(ultima) -> 'JavaScript'
# print(linguagens) -> ['Python', 'Java', 'C#']

# Remove e retorna o item no índice 1
segunda = linguagens.pop(1)
# print(segunda) -> 'Java'
# print(linguagens) -> ['Python', 'C#']`,
    explanation:
      'Remove e retorna um elemento de um índice específico. Se nenhum índice for fornecido, ele remove e retorna o último elemento da lista. É útil quando você precisa remover um item e armazená-lo em uma variável ao mesmo tempo.',
  },
  {
    title: 'Método .remove()',
    code: `cores = ['azul', 'verde', 'vermelho', 'verde']

# Remove a primeira ocorrência do valor 'verde'
cores.remove('verde')

# print(cores)
# Resultado: ['azul', 'vermelho', 'verde']`,
    explanation:
      'Remove a primeira ocorrência de um valor específico na lista. Se o valor aparecer várias vezes, apenas o primeiro será removido. Se o valor não existir na lista, ele levanta uma exceção `ValueError`.',
  },
  {
    title: 'Método .sort()',
    code: `numeros = [4, 1, 8, 3, 15]
palavras = ['banana', 'maçã', 'abacaxi']

# Ordena a lista de forma crescente (in-place)
numeros.sort()
# print(numeros) -> [1, 3, 4, 8, 15]

# Ordena em ordem decrescente
numeros.sort(reverse=True)
# print(numeros) -> [15, 8, 4, 3, 1]

# Ordena por um critério (tamanho da palavra)
palavras.sort(key=len)
# print(palavras) -> ['maçã', 'banana', 'abacaxi']`,
    explanation:
      "Ordena os itens da lista 'in-place' (modifica a lista original). Por padrão, ordena em ordem crescente. Aceita o argumento `reverse=True` para ordenar em ordem decrescente e o argumento `key` para especificar uma função de critério de ordenação.",
  },
  {
    title: 'Método .reverse()',
    code: `lista = [1, 'dois', 3, 'quatro']

# Inverte a ordem dos elementos (in-place)
lista.reverse()

# print(lista)
# Resultado: ['quatro', 3, 'dois', 1]`,
    explanation:
      "Inverte a ordem dos elementos da lista. Assim como `.sort()`, esta operação é 'in-place', modificando a lista original diretamente e não retornando nenhum valor.",
  },
  {
    title: 'Método .index()',
    code: `letras = ['a', 'b', 'c', 'd', 'b', 'e']

# Retorna o índice da primeira ocorrência de 'b'
indice = letras.index('b')
# print(indice) -> 1

# Procura por 'b' a partir do índice 2
indice_2 = letras.index('b', 2)
# print(indice_2) -> 4`,
    explanation:
      'Retorna o índice da primeira ocorrência de um valor. Se o valor não for encontrado, levanta uma exceção `ValueError`. Você pode opcionalmente fornecer um segundo argumento para especificar o índice inicial da busca.',
  },
  {
    title: 'Método .count()',
    code: `votos = ['sim', 'não', 'sim', 'sim', 'abstenção']

# Conta quantas vezes 'sim' aparece na lista
contagem_sim = votos.count('sim')
# print(contagem_sim) -> 3

# Conta um item que não existe
contagem_nao = votos.count('talvez')
# print(contagem_nao) -> 0`,
    explanation:
      'Retorna o número de vezes que um elemento específico aparece na lista. Se o elemento não existir, retorna 0 (não levanta um erro).',
  },
  {
    title: 'Método .copy()',
    code: `lista_original = [1, [2, 3]]
copia = lista_original.copy()
referencia = lista_original

# Modificar a cópia não afeta a original
copia.append(4)
# print(lista_original) -> [1, [2, 3]]
# print(copia) -> [1, [2, 3], 4]

# Modificar a lista interna na cópia AFETA a original (cópia rasa)
copia[1].append('a')
# print(lista_original) -> [1, [2, 3, 'a']]`,
    explanation:
      "Retorna uma cópia 'rasa' (shallow copy) da lista. Isso significa que uma nova lista é criada, mas os elementos dentro dela são referências aos mesmos objetos da lista original. Alterar a lista aninhada na cópia também altera a da original. É diferente de `nova_lista = lista_original`, que apenas cria uma nova referência para a mesma lista.",
  },
  {
    title: 'Método .clear()',
    code: `numeros = [10, 20, 30, 40]

# Remove todos os elementos da lista
numeros.clear()

# print(numeros)
# Resultado: []`,
    explanation:
      "Remove todos os itens de uma lista, deixando-a vazia. Esta operação é 'in-place' e é equivalente a `del lista[:]`.",
  },
  {
    title: 'Métodos .upper(), .lower(), .capitalize(), .title()',
    code: `texto = "uMa FrAsE de ExEmPlO"

# Converte tudo para maiúsculas
print(texto.upper())  # Resultado: "UMA FRASE DE EXEMPLO"

# Converte tudo para minúsculas
print(texto.lower())  # Resultado: "uma frase de exemplo"

# Apenas o primeiro caractere da string em maiúsculo
print(texto.capitalize())  # Resultado: "Uma frase de exemplo"

# O primeiro caractere de cada palavra em maiúsculo
print(texto.title())  # Resultado: "Uma Frase De Exemplo"`,
    explanation:
      'Esses métodos retornam uma nova string com a capitalização alterada, sem modificar a original. `.upper()` para maiúsculas, `.lower()` para minúsculas, `.capitalize()` para capitalizar apenas o primeiro caractere da string, e `.title()` para capitalizar o início de cada palavra.',
  },
  {
    title: 'Métodos .strip(), .lstrip(), .rstrip()',
    code: `entrada_usuario = "   Olá Mundo   "

# Remove espaços em branco do início e do fim
print(f"'{entrada_usuario.strip()}'")  # Resultado: "'Olá Mundo'"

# Remove espaços em branco apenas do início (esquerda)
print(f"'{entrada_usuario.lstrip()}'") # Resultado: "'Olá Mundo   '"

# Remove espaços em branco apenas do fim (direita)
print(f"'{entrada_usuario.rstrip()}'") # Resultado: "'   Olá Mundo'"

# Também pode remover caracteres específicos
url = "www.exemplo.com.br"
print(url.strip("w.br")) # Resultado: "exemplo.com"`,
    explanation:
      'Esses métodos são usados para remover espaços em branco (ou outros caracteres especificados) das extremidades de uma string. `.strip()` remove de ambos os lados, `.lstrip()` remove da esquerda (início) e `.rstrip()` remove da direita (fim). São essenciais para limpar dados inseridos pelo usuário.',
  },
  {
    title: 'Método .replace()',
    code: `frase = "Eu gosto de cachorros. Cachorros são amigáveis."

# Substitui todas as ocorrências
nova_frase = frase.replace("Cachorros", "Gatos")
# print(nova_frase) -> "Eu gosto de gatos. Gatos são amigáveis."

# Substitui apenas a primeira ocorrência
outra_frase = frase.replace("Cachorros", "Gatos", 1)
# print(outra_frase) -> "Eu gosto de Gatos. Cachorros são amigáveis."`,
    explanation:
      'Retorna uma cópia da string com todas as ocorrências de uma substring substituídas por outra. Opcionalmente, um terceiro argumento pode ser passado para limitar o número de substituições.',
  },
  {
    title: 'Método .split()',
    code: `dados = "nome,idade,cidade"
frase = "Python é uma linguagem poderosa"

# Divide a string em uma lista usando a vírgula como delimitador
lista_dados = dados.split(',')
# print(lista_dados) -> ['nome', 'idade', 'cidade']

# Se nenhum delimitador for especificado, divide pelos espaços em branco
lista_palavras = frase.split()
# print(lista_palavras) -> ['Python', 'é', 'uma', 'linguagem', 'poderosa']`,
    explanation:
      "Divide uma string em uma lista de substrings. Por padrão, a divisão ocorre em qualquer espaço em branco. Você pode fornecer um argumento para especificar um delimitador diferente (como ',' ou ';').",
  },
  {
    title: 'Método .join()',
    code: `palavras = ['Python', 'é', 'incrível']
dados = ['arquivo', 'csv']

# Junta os elementos da lista em uma única string, separados por um espaço
frase = " ".join(palavras)
# print(frase) -> "Python é incrível"

# Junta usando um ponto como separador
nome_arquivo = ".".join(dados)
# print(nome_arquivo) -> "arquivo.csv"`,
    explanation:
      'É o inverso de `.split()`. Une os elementos de um iterável (como uma lista de strings) em uma única string. A string na qual o método é chamado serve como o separador entre os elementos.',
  },
  {
    title: 'Métodos .startswith() e .endswith()',
    code: `url = "https://www.google.com"
arquivo = "imagem.jpg"

# Verifica se a string começa com um prefixo
print(url.startswith('https://'))  # Resultado: True
print(url.startswith('http://'))   # Resultado: False

# Verifica se a string termina com um sufixo
print(arquivo.endswith('.jpg'))    # Resultado: True
print(arquivo.endswith(('.jpg', '.png'))) # Pode receber uma tupla de opções`,
    explanation:
      'Esses métodos retornam `True` ou `False` dependendo se a string começa ou termina com a substring especificada. São muito úteis para validações de formatos, como URLs ou extensões de arquivos.',
  },
  {
    title: 'Métodos .find() e .index()',
    code: `frase = "O rato roeu a roupa do rei de Roma."

# .find() retorna o índice da primeira ocorrência ou -1 se não encontrar
posicao_rato = frase.find('rato')
# print(posicao_rato) -> 2
posicao_gato = frase.find('gato')
# print(posicao_gato) -> -1

# .index() faz o mesmo, mas levanta um ValueError se não encontrar
posicao_roupa = frase.index('roupa')
# print(posicao_roupa) -> 16
# posicao_gato = frase.index('gato') # -> ValueError: substring not found`,
    explanation:
      'Ambos os métodos são usados para encontrar o índice da primeira ocorrência de uma substring. A principal diferença é o comportamento quando a substring não é encontrada: `.find()` retorna `-1`, enquanto `.index()` lança uma exceção `ValueError`. Use `.find()` se não tiver certeza se a substring existe.',
  },
  {
    title: 'Método .count()',
    code: `texto = "banana nanica"

# Conta o número de ocorrências de uma substring
contagem_a = texto.count('a')
# print(contagem_a) -> 4

contagem_na = texto.count('na')
# print(contagem_na) -> 3`,
    explanation:
      'Retorna o número de vezes que uma substring aparece dentro da string. A contagem não é sobreposta.',
  },
  {
    title: 'Métodos .isdigit(), .isalpha(), .isalnum()',
    code: `num_str = "12345"
letra_str = "Python"
misto_str = "Python3"

# Verifica se todos os caracteres são dígitos
print(num_str.isdigit())   # -> True
print(letra_str.isdigit()) # -> False

# Verifica se todos os caracteres são letras do alfabeto
print(letra_str.isalpha()) # -> True
print(misto_str.isalpha()) # -> False

# Verifica se todos os caracteres são alfanuméricos (letras ou números)
print(misto_str.isalnum()) # -> True
print("com espaco".isalnum()) # -> False`,
    explanation:
      'Esses métodos de verificação retornam `True` se todos os caracteres na string corresponderem a um determinado tipo e `False` caso contrário. São muito úteis para validar entradas de dados.',
  },
  {
    title: 'Operador in',
    code: `frase = "Bem-vindo ao mundo do Python"

# Verifica se uma substring está contida na string
tem_mundo = "mundo" in frase
# print(tem_mundo) -> True

tem_java = "Java" in frase
# print(tem_java) -> False

# O oposto com 'not in'
nao_tem_java = "Java" not in frase
# print(nao_tem_java) -> True`,
    explanation:
      'O operador `in` é uma maneira limpa e legível de verificar se uma string contém uma determinada substring. Ele retorna um valor booleano (`True` ou `False`) e é frequentemente usado em condicionais `if`.',
  },
  {
    title: 'Estrutura Condicional (if, elif, else)',
    code: `idade = 25

if idade < 18:
    print("Menor de idade")
elif 18 <= idade < 65:
    print("Adulto")
else:
    print("Idoso")

# Resultado: "Adulto"`,
    explanation:
      "Executa blocos de código com base em condições. A indentação (espaços no início da linha) é fundamental em Python para definir os blocos. `elif` é a contração de 'else if' e permite testar múltiplas condições em sequência. O bloco `else` é executado se nenhuma das condições anteriores for verdadeira.",
  },
  {
    title: 'Loop For (Iteração sobre Sequências)',
    code: `tecnologias = ['Python', 'Django', 'Flask']

# Itera sobre os ITENS de uma lista
for tech in tecnologias:
    print(tech)

# Usando range() para repetir um número de vezes
for i in range(5):
    print(f"Repetição número {i}")`,
    explanation:
      "É o principal loop em Python, projetado para iterar sobre os itens de qualquer sequência ou objeto iterável (listas, tuplas, strings, dicionários, etc.). A forma `for item in sequencia:` é a maneira mais comum e 'Pythonica' de percorrer coleções, pois acessa os elementos diretamente.",
  },
  {
    title: 'Loop While',
    code: `contador = 5

while contador > 0:
    print(f"Contagem regressiva: {contador}")
    contador -= 1  # Essencial para evitar um loop infinito

print("Fim!")`,
    explanation:
      'Executa um bloco de código repetidamente enquanto uma condição for avaliada como verdadeira. A condição é verificada antes de cada iteração. É ideal para situações onde o número de repetições não é conhecido de antemão, mas depende de um estado que muda dentro do loop.',
  },
  {
    title: 'Comando Break (Interrompendo Loops)',
    code: `numeros = [1, 5, 10, -3, 8, 12]

for n in numeros:
    if n < 0:
        print("Número negativo encontrado! Interrompendo o loop.")
        break  # Sai do loop imediatamente
    print(f"Processando número {n}")`,
    explanation:
      'A palavra-chave `break` encerra a execução do loop (`for` ou `while`) mais interno em que se encontra. O controle do programa passa para a próxima instrução após o corpo do loop. É usado para parar a iteração quando uma condição específica é atingida.',
  },
  {
    title: 'Comando Continue (Pulando Iterações)',
    code: `numeros = [1, 2, 3, 4, 5, 6]

for n in numeros:
    if n % 2 != 0:
        continue  # Pula para a próxima iteração
    print(f"Encontrado número par: {n}")`,
    explanation:
      'A palavra-chave `continue` interrompe a iteração atual do loop e passa para o início da próxima iteração. O código restante no bloco do loop para a iteração atual não é executado. É útil para pular determinados itens de uma sequência sem sair do loop.',
  },
  {
    title: 'Tratamento de Erros (try, except, else, finally)',
    code: `def dividir(a, b):
    try:
        resultado = a / b
    except ZeroDivisionError as e:
        print(f"Erro: Não é possível dividir por zero. ({e})")
    except TypeError as e:
        print(f"Erro: Os operandos devem ser números. ({e})")
    else:
        # Executa somente se NENHUMA exceção ocorrer no 'try'
        print(f"Resultado da divisão: {resultado}")
    finally:
        # Executa SEMPRE, com ou sem exceção
        print("Operação de divisão finalizada.")

dividir(10, 2)  # Sucesso
dividir(10, 0)  # Falha (ZeroDivisionError)`,
    explanation:
      "Permite lidar com exceções (erros) que podem ocorrer durante a execução de um código. O bloco `try` contém o código que pode falhar. Se um erro ocorrer, o bloco `except` correspondente é executado. O bloco `else` (opcional) é executado se não houver erros. O bloco `finally` (opcional) é sempre executado, independentemente de ter ocorrido um erro ou não, sendo ideal para 'limpeza' de recursos.",
  },
  {
    title: 'Operador Ternário',
    code: `idade = 20

# Sintaxe: valor_se_verdadeiro if condicao else valor_se_falso
status = "Adulto" if idade >= 18 else "Menor de idade"

print(status)
# Resultado: "Adulto"`,
    explanation:
      "Fornece uma forma concisa de escrever uma instrução `if/else` em uma única linha, especialmente útil para atribuições condicionais. A sintaxe é altamente legível e considerada 'Pythonica' para condicionais simples.",
  },
]
