import type { Reminder } from './types'

// Lembretes de Matemática (e Raciocínio Lógico) com os conteúdos que mais caem em concursos.
// - title: tema
// - code: fórmulas/esquema para revisão rápida
// - explanation: dica para memorizar e pegadinhas comuns
export const mathtips: Reminder[] = [
  {
    title: 'Porcentagem — Fator Multiplicativo',
    code: `x% = x/100        25% = 0,25      3% = 0,03

AUMENTO de x%  -> multiplique por (1 + x/100)
  +20% de 150:  150 × 1,20 = 180
DESCONTO de x% -> multiplique por (1 − x/100)
  −15% de 200:  200 × 0,85 = 170

SUCESSIVOS -> MULTIPLIQUE os fatores (nunca some!)
  +10% e +20%:  1,10 × 1,20 = 1,32  -> +32%  (✘ 30%)
  +20% e −20%:  1,20 × 0,80 = 0,96  -> −4%   (✘ 0%)

VARIAÇÃO PERCENTUAL:
  (final − inicial) / inicial × 100
  De 80 para 100:  20/80  = +25%
  De 100 para 80: −20/100 = −20%`,
    explanation:
      'Pense sempre em fatores: aumento de 30% = × 1,3; desconto de 30% = × 0,7. Isso resolve aumentos e descontos sucessivos em uma conta só. Pegadinha clássica: aumentar 20% e depois diminuir 20% NÃO volta ao valor original (dá 4% a menos). A variação é sempre calculada sobre o valor INICIAL.',
  },
  {
    title: 'Regra de Três Simples',
    code: `DIRETAMENTE proporcional (↑ e ↑) -> multiplica CRUZADO
  2 kg ——— R$ 10
  5 kg ——— x
  2x = 5 · 10  ->  x = R$ 25

INVERSAMENTE proporcional (↑ e ↓) -> multiplica EM LINHA
  4 operários ——— 6 dias
  8 operários ——— x
  8x = 4 · 6  ->  x = 3 dias

PERGUNTA-CHAVE:
  "Se uma grandeza aumenta, a outra aumenta ou diminui?"
  Aumenta junto -> DIRETA
  Diminui ...... -> INVERSA

Exemplos de inversas: velocidade x tempo,
  nº de trabalhadores x dias, vazão x tempo`,
    explanation:
      'Monte sempre a tabela com as mesmas unidades na mesma coluna. Antes de calcular, faça a pergunta-chave e use o bom senso: mais operários terminam a obra em MENOS dias, então é inversa. Se for inversa, inverta uma das frações antes de multiplicar cruzado (ou multiplique em linha).',
  },
  {
    title: 'Regra de Três Composta',
    code: `6 máquinas produzem 900 peças em 5 dias.
Quantas peças 4 máquinas produzem em 9 dias?

  Máquinas   Dias   Peças
     6         5     900
     4         9      x

1) A coluna do x é a referência.
2) Compare cada grandeza com o x, ISOLADAMENTE:
   + máquinas -> + peças  (direta)
   + dias     -> + peças  (direta)
3) Inverta as inversas e monte:
   900/x = (6/4) · (5/9) = 30/36
   x = 900 · 36 / 30 = 1.080 peças

ATALHO (causa x consequência):
  (máquinas × dias) / peças = constante
  (6 × 5)/900 = (4 × 9)/x  ->  x = 1.080`,
    explanation:
      'O atalho "causa e consequência" evita erro de direta/inversa: tudo que PRODUZ (trabalhadores, máquinas, horas, dias, eficiência) fica de um lado; o que é PRODUZIDO (peças, metros, obra) e a dificuldade ficam do outro. Multiplique cruzado. Sempre compare cada coluna com o x mantendo as demais fixas.',
  },
  {
    title: 'Razão e Proporção',
    code: `RAZÃO: a/b   (lê-se "a está para b")
PROPORÇÃO: a/b = c/d  ->  a · d = b · c
  (produto dos meios = produto dos extremos)

PROPRIEDADE DA SOMA (muito usada!):
  a/b = c/d = (a + c)/(b + d)

MÉTODO DA CONSTANTE k:
  Idades de pai e filho estão na razão 7/2 e somam 54.
  P = 7k, F = 2k
  7k + 2k = 54  ->  k = 6
  P = 42 anos, F = 12 anos

RAZÕES ESPECIAIS:
  Escala ...... desenho / real   (1:100 -> 1 cm = 1 m)
  Velocidade .. distância / tempo
  Densidade ... massa / volume`,
    explanation:
      'Sempre que a questão disser "estão na razão de a para b", escreva os valores como a·k e b·k. Isso transforma o problema em uma equação simples. Na escala, cuidado com as unidades: 1:50.000 significa que 1 cm no mapa vale 50.000 cm = 500 m na realidade.',
  },
  {
    title: 'Divisão Proporcional',
    code: `DIRETAMENTE proporcional: cada parte = k × peso
  Dividir R$ 1.200 entre A, B, C proporcional a 2, 3 e 5:
  2k + 3k + 5k = 1.200  ->  k = 120
  A = 240   B = 360   C = 600

INVERSAMENTE proporcional: use os INVERSOS dos pesos
  Dividir 260 inversamente a 2, 3 e 4:
  k/2 + k/3 + k/4 = 260

  MACETE: tire o MMC(2, 3, 4) = 12
  pesos diretos: 12/2 = 6, 12/3 = 4, 12/4 = 3
  6k + 4k + 3k = 260  ->  k = 20
  Partes: 120, 80, 60

Proporcional a A e inversamente a B:
  peso = A / B`,
    explanation:
      'Na divisão inversa, quem tem o MAIOR peso recebe a MENOR parte (ex.: dividir prêmio inversamente às faltas). Transformar os inversos em números inteiros com o MMC deixa a conta muito mais rápida. Confira sempre: a soma das partes tem que dar o total.',
  },
  {
    title: 'Juros Simples',
    code: `J = C · i · t
M = C + J = C · (1 + i · t)

C = capital    i = taxa (em decimal)
t = tempo      M = montante

⚠ Taxa e tempo SEMPRE na mesma unidade!
  2% a.m. por 1 ano -> t = 12 meses

Ex.: R$ 2.000 a 3% a.m. por 5 meses
  J = 2.000 · 0,03 · 5 = R$ 300
  M = R$ 2.300

Taxas PROPORCIONAIS (só no regime simples):
  12% a.a. = 1% a.m.     2% a.m. = 24% a.a.

Crescimento LINEAR (como uma PA)`,
    explanation:
      'Nos juros simples, os juros incidem sempre sobre o capital inicial, por isso o crescimento é linear. Lembre "J = CIT" (capital, taxa, tempo). Converta a taxa percentual para decimal (3% = 0,03) e ajuste a unidade do tempo à da taxa. Ano comercial = 360 dias; mês comercial = 30 dias.',
  },
  {
    title: 'Juros Compostos',
    code: `M = C · (1 + i)ᵗ
J = M − C

Ex.: R$ 1.000 a 10% a.m. por 2 meses
  M = 1.000 · (1,1)² = 1.000 · 1,21 = R$ 1.210
  (no regime simples seriam R$ 1.200)

"Juros sobre juros" -> crescimento EXPONENCIAL (PG)

⚠ Taxas EQUIVALENTES (não proporcionais!):
  (1 + i_anual) = (1 + i_mensal)¹²
  10% a.m. ≠ 120% a.a.
  21% a.a. ≡ 10% a.s.   (1,1² = 1,21)

COMPARAÇÃO:
  t < 1 período -> SIMPLES rende mais
  t = 1 período -> IGUAIS
  t > 1 período -> COMPOSTO rende mais`,
    explanation:
      'Decore algumas potências úteis: 1,1² = 1,21; 1,1³ = 1,331; 1,2² = 1,44; 1,05² = 1,1025. As provas costumam fornecer tabelas ou valores aproximados de (1+i)ᵗ. Atenção à diferença entre taxas proporcionais (regime simples: divide/multiplica) e equivalentes (regime composto: potência).',
  },
  {
    title: 'MMC e MDC',
    code: `MMC -> eventos que se REPETEM e COINCIDEM
  "Um ônibus sai a cada 12 min e outro a cada 18 min.
   Saíram juntos agora. Quando sairão juntos de novo?"
  MMC(12, 18) = 36 min

MDC -> DIVIDIR em partes iguais, do MAIOR tamanho possível
  "Cortar fitas de 24 m e 36 m em pedaços iguais,
   os maiores possíveis."
  MDC(24, 36) = 12 m  (2 + 3 = 5 pedaços)

FATORAÇÃO:
  12 = 2² · 3        18 = 2 · 3²
  MMC = todos os fatores, MAIOR expoente = 2² · 3² = 36
  MDC = só os comuns,     MENOR expoente = 2 · 3   = 6

PROPRIEDADE:  MMC(a, b) · MDC(a, b) = a · b
  36 · 6 = 216 = 12 · 18  ✔`,
    explanation:
      'Palavras-chave: "novamente juntos", "coincidir", "ao mesmo tempo" = MMC (o resultado é MAIOR ou igual aos números). "Maior tamanho possível", "dividir sem sobras", "menor número de pedaços" = MDC (o resultado é MENOR ou igual aos números). Se dois números são primos entre si, MDC = 1 e MMC = produto.',
  },
  {
    title: 'Frações',
    code: `SOMA / SUBTRAÇÃO: iguale os denominadores (MMC)
  1/4 + 1/6 = 3/12 + 2/12 = 5/12

MULTIPLICAÇÃO: em cima × em cima, embaixo × embaixo
  2/3 · 4/5 = 8/15

DIVISÃO: mantém a 1ª e multiplica pelo INVERSO da 2ª
  2/3 ÷ 4/5 = 2/3 · 5/4 = 10/12 = 5/6

"FRAÇÃO DE" = multiplicação
  2/3 de 90 = 2/3 · 90 = 60

PROBLEMA DO RESTANTE (pegadinha!):
  Gastou 1/3 do salário e depois 1/4 do RESTANTE.
  Sobrou 2/3; gastou 1/4 disso -> sobrou 3/4 de 2/3
  Restou: 2/3 · 3/4 = 1/2 do salário

Dízima: 0,333... = 1/3     0,777... = 7/9
        0,1212... = 12/99`,
    explanation:
      'Fique atento a "do total" x "do restante": quando a fração é sobre o que sobrou, multiplique as frações que SOBRAM em cada etapa. Para dízimas periódicas simples, coloque o período no numerador e tantos 9 quanto forem os algarismos do período no denominador.',
  },
  {
    title: 'Potenciação e Radiciação',
    code: `aᵐ · aⁿ = a^(m+n)       aᵐ ÷ aⁿ = a^(m−n)
(aᵐ)ⁿ = a^(m·n)          (a · b)ⁿ = aⁿ · bⁿ
a⁰ = 1   (a ≠ 0)         a⁻ⁿ = 1 / aⁿ
(a/b)⁻ⁿ = (b/a)ⁿ         a^(m/n) = ⁿ√(aᵐ)

⚠ PEGADINHAS DE SINAL:
  (−2)² = 4        −2² = −4
  (−2)³ = −8       base negativa + expoente ímpar = negativo
  (2³)² = 64   ≠   2^(3²) = 2⁹ = 512

RADICAIS:
  √a · √b = √(a·b)        √a / √b = √(a/b)
  √8 = √(4·2) = 2√2       √50 = 5√2
  √(a + b) ≠ √a + √b      (√(9+16) = 5, e não 3 + 4 = 7)
  Racionalizar: 1/√2 = √2/2`,
    explanation:
      'Na multiplicação de mesma base, SOMA os expoentes; na divisão, SUBTRAI; potência de potência, MULTIPLICA. Expoente negativo "inverte" a base. O parêntese faz toda a diferença: em −2² apenas o 2 é elevado ao quadrado. Raiz de soma não é soma de raízes!',
  },
  {
    title: 'Equação do 2º Grau',
    code: `ax² + bx + c = 0   (a ≠ 0)

Δ = b² − 4ac
x = (−b ± √Δ) / 2a

  Δ > 0 -> duas raízes reais diferentes
  Δ = 0 -> duas raízes reais iguais
  Δ < 0 -> nenhuma raiz real

SOMA E PRODUTO (atalho!):
  S = x₁ + x₂ = −b/a
  P = x₁ · x₂ =  c/a

  x² − 5x + 6 = 0  ->  S = 5, P = 6  ->  raízes 2 e 3

VÉRTICE DA PARÁBOLA:
  xᵥ = −b / 2a        yᵥ = −Δ / 4a
  a > 0 -> concavidade para CIMA  -> ponto de MÍNIMO
  a < 0 -> concavidade para BAIXO -> ponto de MÁXIMO`,
    explanation:
      'Quando a = 1, tente soma e produto antes de Bhaskara: procure dois números que somados dão −b e multiplicados dão c. Problemas de "lucro máximo", "área máxima" ou "altura máxima" pedem o VÉRTICE (yᵥ é o valor máximo/mínimo; xᵥ é onde ele ocorre). Macete: "a" positivo = parábola sorrindo 🙂.',
  },
  {
    title: 'Sistemas de Equações (Problemas)',
    code: `Num estacionamento há carros e motos:
20 veículos e 64 rodas. Quantos carros?

  c + m = 20
  4c + 2m = 64

MÉTODO DA ADIÇÃO (multiplique a 1ª por −2 e some):
  −2c − 2m = −40
   4c + 2m =  64
  ───────────────
   2c = 24  ->  c = 12 carros, m = 8 motos

MÉTODO DA SUBSTITUIÇÃO:
  m = 20 − c  ->  4c + 2(20 − c) = 64
  2c + 40 = 64  ->  c = 12

MACETE "TUDO MOTO":
  Se fossem 20 motos -> 40 rodas. Faltam 24 rodas.
  Cada carro acrescenta 2 rodas -> 24/2 = 12 carros`,
    explanation:
      'Primeiro, traduza o texto em equações: "o dobro de" = 2x, "a diferença entre" = x − y, "excede em 5" = x = y + 5. O macete "suponha que todos são do mesmo tipo" resolve rapidamente problemas de galinhas e coelhos, cédulas de dois valores, questões certas e erradas etc.',
  },
  {
    title: 'Progressão Aritmética (PA)',
    code: `Soma-se sempre a mesma RAZÃO (r)
  2, 5, 8, 11, ...   (r = 3)

TERMO GERAL:   aₙ = a₁ + (n − 1) · r
SOMA:          Sₙ = (a₁ + aₙ) · n / 2

Ex.: a₁ = 3 e r = 4. Qual o 10º termo e a soma?
  a₁₀ = 3 + 9 · 4 = 39
  S₁₀ = (3 + 39) · 10 / 2 = 210

PROPRIEDADES:
  • Termo do meio = média dos vizinhos: b = (a + c)/2
  • Termos equidistantes dos extremos têm a mesma soma
  • 3 termos em PA: (x − r, x, x + r)

  1 + 2 + 3 + ... + 100 = (1 + 100) · 100/2 = 5.050`,
    explanation:
      'Para lembrar a fórmula da soma, pense no "truque de Gauss": o primeiro + o último = o segundo + o penúltimo = ... Então basta multiplicar essa soma pela metade da quantidade de termos. Quando o problema tiver 3 termos em PA com soma conhecida, use (x − r, x, x + r): a razão se cancela na soma.',
  },
  {
    title: 'Progressão Geométrica (PG)',
    code: `Multiplica-se sempre pela mesma RAZÃO (q)
  3, 6, 12, 24, ...   (q = 2)

TERMO GERAL:      aₙ = a₁ · qⁿ⁻¹
SOMA FINITA:      Sₙ = a₁ · (qⁿ − 1) / (q − 1)
SOMA INFINITA (−1 < q < 1):
                  S∞ = a₁ / (1 − q)

Ex.: a₁ = 2 e q = 3. Qual o 5º termo?
  a₅ = 2 · 3⁴ = 162

Ex.: 10 + 5 + 2,5 + ... = 10 / (1 − 1/2) = 20

PROPRIEDADES:
  • Termo do meio² = produto dos vizinhos: b² = a · c
  • 3 termos em PG: (x/q, x, x · q)`,
    explanation:
      'Na PG, a razão é encontrada dividindo um termo pelo anterior (q = a₂/a₁). Situações de "dobra a cada", "triplica a cada", "reduz pela metade" e juros compostos são PGs. A soma infinita só existe quando a razão está entre −1 e 1 (os termos vão diminuindo).',
  },
  {
    title: 'Contagem e Permutações',
    code: `PRINCÍPIO FUNDAMENTAL DA CONTAGEM (PFC):
  Etapas independentes -> MULTIPLIQUE
  3 camisas e 4 calças -> 3 × 4 = 12 trajes

  "E" -> multiplica        "OU" -> soma

PERMUTAÇÃO SIMPLES (ordenar todos): Pₙ = n!
  Anagramas de AMOR: 4! = 24
  4! = 24   5! = 120   6! = 720   7! = 5.040

PERMUTAÇÃO COM REPETIÇÃO: n! / (a! · b! · ...)
  Anagramas de ARARA (A aparece 3×, R aparece 2×):
  5! / (3! · 2!) = 120 / 12 = 10

PERMUTAÇÃO CIRCULAR: (n − 1)!
  5 pessoas numa mesa redonda: 4! = 24

"JUNTOS": trate o grupo como 1 bloco e permute dentro dele
  ANA e BIA sempre juntas em fila de 5: 4! · 2! = 48`,
    explanation:
      'O PFC resolve a maioria das questões: desenhe "tracinhos" para cada posição e coloque quantas opções há em cada uma, começando pelas posições com restrição. Para "sempre juntos", forme um bloco; para "nunca juntos", calcule o total menos os casos em que estão juntos.',
  },
  {
    title: 'Arranjo x Combinação',
    code: `PERGUNTA-CHAVE: a ORDEM importa?

ARRANJO (ordem IMPORTA)
  A(n,p) = n! / (n − p)!
  Pódio (1º, 2º, 3º) com 8 atletas:
  A(8,3) = 8 · 7 · 6 = 336
  -> senhas, placas, cargos distintos (presidente/vice)

COMBINAÇÃO (ordem NÃO importa)
  C(n,p) = n! / [p! · (n − p)!]
  Comissão de 3 pessoas entre 8:
  C(8,3) = (8 · 7 · 6) / (3 · 2 · 1) = 56
  -> grupos, comissões, saladas, apertos de mão

TESTE RÁPIDO: troque a ordem dos escolhidos.
  Mudou o resultado? -> ARRANJO
  Não mudou? ........ -> COMBINAÇÃO

C(n,p) = C(n, n−p)  ->  C(10,8) = C(10,2) = 45`,
    explanation:
      'Atalho de cálculo: o arranjo A(n,p) é o produto de p números decrescentes a partir de n; a combinação é esse mesmo produto dividido por p!. Exemplo: escolher 2 representantes (sem cargos) = combinação; escolher presidente e tesoureiro = arranjo. Número de apertos de mão entre n pessoas = C(n,2).',
  },
  {
    title: 'Probabilidade',
    code: `P(A) = casos favoráveis / casos possíveis    (0 ≤ P ≤ 1)

COMPLEMENTAR: P(não A) = 1 − P(A)
  "Pelo menos um" -> use o complementar!
  P(pelo menos 1 cara em 3 lançamentos) = 1 − (1/2)³ = 7/8

"E" (independentes) -> MULTIPLICA
  P(6 e 6 em dois dados) = 1/6 · 1/6 = 1/36

"OU" -> SOMA (e tira a interseção)
  P(A ou B) = P(A) + P(B) − P(A e B)

SEM REPOSIÇÃO: o total diminui a cada retirada
  Urna: 3 azuis e 2 vermelhas. Tirar 2 azuis:
  3/5 · 2/4 = 6/20 = 3/10

CONDICIONAL ("sabendo que..."):
  P(A | B) = P(A e B) / P(B)
  -> o espaço amostral passa a ser só B`,
    explanation:
      'Sempre que aparecer "pelo menos um", calcule a probabilidade de "nenhum" e subtraia de 1 — é muito mais rápido. Em "sabendo que" ou "dado que", reduza o espaço amostral ao que já se sabe. Dois dados têm 36 resultados possíveis; uma moeda lançada n vezes tem 2ⁿ resultados.',
  },
  {
    title: 'Média, Mediana e Moda',
    code: `MÉDIA ARITMÉTICA = soma / quantidade
  (4, 6, 8, 10) -> 28 / 4 = 7

MÉDIA PONDERADA = Σ(valor × peso) / Σ(pesos)
  Nota 6 (peso 2) e nota 9 (peso 3):
  (6·2 + 9·3) / (2 + 3) = 39/5 = 7,8

MEDIANA = valor central dos dados ORDENADOS
  (3, 5, 7, 9, 11) -> 7
  Qtd. par: média dos dois centrais
  (2, 4, 6, 8) -> (4 + 6)/2 = 5

MODA = valor que mais se repete
  (2, 3, 3, 5, 7) -> 3   (pode ser amodal, bimodal...)

PROPRIEDADES DA MÉDIA:
  Somar k a todos ........ média + k
  Multiplicar todos por k  média × k
  Soma total = média × quantidade`,
    explanation:
      'Pegadinha nº 1: esquecer de ORDENAR os dados antes de achar a mediana. Pegadinha nº 2: problemas do tipo "a média de 10 números é 8; retirando um número, a média passa a 7" — use soma = média × quantidade (80 − 63 = 17). A mediana não é afetada por valores extremos; a média é.',
  },
  {
    title: 'Conjuntos e Diagrama de Venn',
    code: `n(A ∪ B) = n(A) + n(B) − n(A ∩ B)

n(A ∪ B ∪ C) = n(A) + n(B) + n(C)
             − n(A∩B) − n(A∩C) − n(B∩C)
             + n(A∩B∩C)

Ex.: 40 gostam de futebol, 30 de vôlei e 10 de ambos.
  Pelo menos um: 40 + 30 − 10 = 60
  Só futebol: 40 − 10 = 30
  Só vôlei:   30 − 10 = 20

DIAGRAMA DE VENN: comece SEMPRE pela interseção!
  (do centro para fora, descontando o que já foi usado)

Nº de subconjuntos de um conjunto com n elementos: 2ⁿ
A − B = elementos de A que NÃO estão em B
"Nenhum dos dois" = Total − n(A ∪ B)`,
    explanation:
      'O erro mais comum é somar n(A) + n(B) sem retirar a interseção, contando duas vezes quem está nos dois grupos. No diagrama, preencha primeiro a região comum a todos, depois as interseções de dois, e por último as regiões "só A", "só B". Não esqueça quem está fora de todos os conjuntos.',
  },
  {
    title: 'Lógica — Tabela-Verdade dos Conectivos',
    code: `CONECTIVO          SÍMBOLO   REGRA
E (conjunção)       p ∧ q    só é V se AMBAS forem V
OU (disjunção)      p ∨ q    só é F se AMBAS forem F
OU...OU (exclusiva) p ⊻ q    V se valores DIFERENTES
SE...ENTÃO          p → q    só é F em V → F
SE E SOMENTE SE     p ↔ q    V se valores IGUAIS

MACETE da condicional: "VERA FISCHER é FALSA"
  V → F = F   (todas as outras combinações são V)

Nº de linhas da tabela-verdade = 2ⁿ
  (n = nº de proposições simples)

TAUTOLOGIA ... sempre V
CONTRADIÇÃO .. sempre F
CONTINGÊNCIA . às vezes V, às vezes F

Não são proposições: perguntas, ordens, exclamações,
frases sem verbo, sentenças abertas (x + 2 = 5)`,
    explanation:
      'Proposição é uma frase declarativa que pode ser julgada como V ou F. Na condicional p → q, se o antecedente (p) é falso, a proposição é sempre verdadeira, não importa q. Questões do tipo "sabendo que a proposição é falsa" ficam fáceis com "Vera Fischer": se p → q é F, então p é V e q é F.',
  },
  {
    title: 'Lógica — Negações',
    code: `NEGAÇÃO DE...           É...
p ∧ q   (E)             ~p ∨ ~q   (nega ambas e troca E por OU)
p ∨ q   (OU)            ~p ∧ ~q   (nega ambas e troca OU por E)
p → q   (SE...ENTÃO)    p ∧ ~q    (Mantém a 1ª E Nega a 2ª)
p ↔ q   (SE E SOMENTE SE) p ⊻ q   (ou p ou q)

QUANTIFICADORES:
  "Todo A é B" ........ -> "Algum A não é B"
  "Nenhum A é B" ...... -> "Algum A é B"
  "Algum A é B" ....... -> "Nenhum A é B"
  "Algum A não é B" ... -> "Todo A é B"

Ex.: "Se chove, então levo guarda-chuva."
  Negação: "Chove E não levo guarda-chuva."

⚠ A negação de "Todo político é honesto"
  NÃO é "Nenhum político é honesto"!
  É: "Algum político não é honesto."`,
    explanation:
      'Leis de De Morgan: para negar "E" e "OU", negue as duas partes e troque o conectivo. Para negar a condicional, NÃO use "se...então" na resposta: a negação é sempre com "E" (macete "MA-NE": MAntém a primeira E NEga a segunda). Para negar "todo", basta um contraexemplo ("algum... não").',
  },
  {
    title: 'Lógica — Equivalências',
    code: `p → q  ≡  ~q → ~p    (CONTRAPOSITIVA: inverte e nega)
p → q  ≡  ~p ∨ q     (NEga a 1ª OU MAntém a 2ª)

Ex.: "Se estudo, então passo."
  ≡ "Se não passo, então não estudo."
  ≡ "Não estudo ou passo."

⚠ NÃO são equivalentes à condicional:
  q → p   (recíproca)   "Se passo, então estudo."
  ~p → ~q (inversa)     "Se não estudo, então não passo."

p ↔ q  ≡  (p → q) ∧ (q → p)

CONDIÇÃO SUFICIENTE x NECESSÁRIA (em p → q):
  p é condição SUFICIENTE para q
  q é condição NECESSÁRIA para p

"Todo A é B" ≡ "Se é A, então é B"`,
    explanation:
      'A contrapositiva é a equivalência mais cobrada: inverta a ordem e negue as duas partes. Macete "NEYMAR" para a outra: NEga a primeira, troca por OU, MAntém a segunda. Na condicional, o que vem depois do "se" é suficiente; o que vem depois do "então" é necessário.',
  },
  {
    title: 'Geometria Plana — Áreas',
    code: `Quadrado ........ A = l²
Retângulo ....... A = b · h
Triângulo ....... A = (b · h) / 2
  Equilátero .... A = l²√3 / 4     altura h = l√3 / 2
Paralelogramo ... A = b · h
Trapézio ........ A = (B + b) · h / 2
Losango ......... A = (D · d) / 2
Círculo ......... A = π · r²
Circunferência .. C = 2 · π · r   (comprimento/perímetro)

Soma dos ângulos internos de um polígono:
  Sᵢ = (n − 2) · 180°
  Triângulo = 180°   Quadrilátero = 360°

⚠ SEMELHANÇA (razão k entre lados):
  Áreas na razão k²   |   Volumes na razão k³
  Dobrou o lado do quadrado -> a área QUADRUPLICA`,
    explanation:
      'Atenção à altura: ela é sempre perpendicular à base (não é o lado inclinado). Se o problema der o diâmetro, divida por 2 para achar o raio antes de usar πr². Use π ≈ 3,14 ou π = 3 conforme o enunciado. Perímetro é a soma dos lados (contorno); área é a superfície interna.',
  },
  {
    title: 'Teorema de Pitágoras e Trigonometria',
    code: `Em todo triângulo RETÂNGULO:
  a² = b² + c²   (hipotenusa² = cateto² + cateto²)
  Hipotenusa = lado oposto ao ângulo de 90° (o maior)

TERNOS PITAGÓRICOS (decore!):
  3, 4, 5   (e múltiplos: 6-8-10, 9-12-15, 12-16-20)
  5, 12, 13
  8, 15, 17
  7, 24, 25

Diagonal do quadrado ...... d = l√2
Diagonal do retângulo ..... d = √(a² + b²)
Diagonal do cubo .......... D = a√3

TRIGONOMETRIA ("SOH-CAH-TOA"):
  sen = oposto / hipotenusa
  cos = adjacente / hipotenusa
  tg  = oposto / adjacente

         30°     45°     60°
  sen    1/2    √2/2    √3/2
  cos   √3/2    √2/2    1/2
  tg    √3/3     1       √3`,
    explanation:
      'Antes de fazer contas, verifique se os lados formam um terno pitagórico (ou múltiplo) — economiza muito tempo. Para a tabela de ângulos notáveis: o seno cresce 1, 2, 3 (√1/2, √2/2, √3/2) e o cosseno é o inverso. Lembre: sen 30° = cos 60° = 1/2.',
  },
  {
    title: 'Volumes e Capacidade',
    code: `Cubo ............ V = a³
Paralelepípedo .. V = a · b · c
Prisma .......... V = Área da base · h
Cilindro ........ V = π · r² · h
Pirâmide ........ V = (Área da base · h) / 3
Cone ............ V = (π · r² · h) / 3
Esfera .......... V = (4/3) · π · r³

CONVERSÕES ESSENCIAIS:
  1 dm³ = 1 litro (L)
  1 m³  = 1.000 litros
  1 cm³ = 1 mililitro (mL)

Ex.: Caixa d'água de 2 m × 1,5 m × 1 m
  V = 3 m³ = 3.000 litros`,
    explanation:
      'Pirâmide e cone são "pontudos" e valem 1/3 do prisma/cilindro de mesma base e altura. A conversão 1 dm³ = 1 L é a mais cobrada: transforme as medidas em decímetros antes de multiplicar para obter o volume diretamente em litros.',
  },
  {
    title: 'Unidades de Medida e Tempo',
    code: `COMPRIMENTO (×10 a cada degrau):
  km   hm   dam   m   dm   cm   mm
  -> para a direita MULTIPLICA | <- para a esquerda DIVIDE

ÁREA (×100 a cada degrau):
  1 m² = 100 dm² = 10.000 cm²
  1 hectare (ha) = 10.000 m²     1 km² = 100 ha

VOLUME (×1.000 a cada degrau):
  1 m³ = 1.000 dm³ = 1.000.000 cm³

TEMPO (base 60!):
  1 h = 60 min = 3.600 s
  0,5 h = 30 min
  1,2 h = 1 h 12 min        (✘ 1 h 20 min)
  2,25 h = 2 h 15 min
  1 dia = 24 h = 1.440 min`,
    explanation:
      'O expoente da unidade diz quantas casas andar: comprimento anda 1 casa por degrau, área (²) anda 2 e volume (³) anda 3. No tempo, nunca leia a parte decimal como minutos: multiplique a parte decimal por 60 (0,2 h × 60 = 12 min). Erro clássico das provas!',
  },
  {
    title: 'Divisibilidade e Números Primos',
    code: `Por 2 .. termina em número par
Por 3 .. soma dos algarismos divisível por 3   (123: 1+2+3 = 6 ✔)
Por 4 .. dois últimos algarismos divisíveis por 4 (316: 16 ✔)
Por 5 .. termina em 0 ou 5
Por 6 .. divisível por 2 E por 3
Por 8 .. três últimos algarismos divisíveis por 8
Por 9 .. soma dos algarismos divisível por 9   (729: 18 ✔)
Por 10 . termina em 0
Por 11 . (soma das ordens ímpares) − (soma das pares)
         divisível por 11   (2.937: (7+9) − (3+2) = 11 ✔)

PRIMOS (divisíveis só por 1 e por ele mesmo):
  2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47...
  2 é o ÚNICO primo par    |    1 NÃO é primo

QUANTIDADE DE DIVISORES:
  Fatore, some 1 a cada expoente e multiplique
  72 = 2³ · 3²  ->  (3+1) · (2+1) = 12 divisores`,
    explanation:
      'Os critérios de 3 e 9 (soma dos algarismos) são os mais usados. Para saber se um número é primo, teste a divisão apenas pelos primos até a raiz quadrada dele (para 97, basta testar 2, 3, 5 e 7). Divisível por 6 = por 2 e 3; por 12 = por 3 e 4; por 15 = por 3 e 5.',
  },
  {
    title: 'Problemas de Torneiras (Trabalho Conjunto)',
    code: `Cada um faz uma FRAÇÃO do trabalho por hora: 1/t

JUNTOS:          1/T = 1/t₁ + 1/t₂ + ...
ATALHO P/ DOIS:  T = (t₁ · t₂) / (t₁ + t₂)
                 ("produto pela soma")

Ex.: A enche o tanque em 3 h; B em 6 h. Juntas?
  T = (3 · 6) / (3 + 6) = 18/9 = 2 horas

UMA ENCHE E OUTRA ESVAZIA -> SUBTRAI:
  1/T = 1/t_enche − 1/t_esvazia
  Enche em 4 h; ralo esvazia em 12 h:
  1/T = 1/4 − 1/12 = 2/12  ->  T = 6 horas

Serve para: pintores, máquinas, digitadores,
operários que trabalham juntos...`,
    explanation:
      'A lógica é pensar em "quanto cada um faz em 1 hora": se A enche em 3 h, enche 1/3 do tanque por hora. Some as frações dos que ajudam e subtraia as dos que atrapalham. Confira: o tempo juntos é SEMPRE menor do que o tempo do mais rápido sozinho.',
  },
  {
    title: 'Velocidade Média e Encontro',
    code: `v = d / t        d = v · t        t = d / v

CONVERSÃO:
  km/h ÷ 3,6 = m/s       m/s × 3,6 = km/h
  72 km/h = 20 m/s       108 km/h = 30 m/s

SENTIDOS OPOSTOS (encontro) -> SOMA as velocidades
  Distância 300 km, um a 60 km/h e outro a 40 km/h:
  t = 300 / (60 + 40) = 3 h

MESMO SENTIDO (alcance) -> SUBTRAI as velocidades

⚠ VELOCIDADE MÉDIA ≠ MÉDIA DAS VELOCIDADES!
  Ida a 60 km/h e volta a 40 km/h (mesma distância):
  vₘ = 2 · 60 · 40 / (60 + 40) = 48 km/h   (✘ 50)`,
    explanation:
      'A velocidade média é SEMPRE distância total ÷ tempo total. Quando os trechos têm a mesma distância, use a média harmônica (2·v₁·v₂ / (v₁+v₂)); só use a média aritmética simples se os TEMPOS forem iguais. Cuidado com unidades: converta minutos em horas (30 min = 0,5 h).',
  },
  {
    title: 'Função Afim (1º Grau)',
    code: `f(x) = ax + b
  a = coeficiente angular (taxa de variação)
  b = coeficiente linear (onde a reta corta o eixo y)

  a > 0 -> crescente      a < 0 -> decrescente
  Raiz (zero da função): ax + b = 0  ->  x = −b/a

ACHAR A FUNÇÃO POR DOIS PONTOS (x₁, y₁) e (x₂, y₂):
  a = (y₂ − y₁) / (x₂ − x₁)
  depois substitua um ponto para achar b

Ex.: Táxi cobra R$ 5 fixos + R$ 2 por km
  f(x) = 2x + 5
  10 km -> f(10) = 2 · 10 + 5 = R$ 25

"Valor fixo + valor por unidade" = função afim!
  (planos de celular, contas de água/luz, salário + comissão)`,
    explanation:
      'Em problemas contextualizados, o valor FIXO é o "b" e o valor que muda por unidade é o "a". Para comparar dois planos, iguale as funções (f(x) = g(x)) e descubra a partir de quando um passa a valer mais a pena. O gráfico é sempre uma reta.',
  },
  {
    title: 'Calendário e Sequências Cíclicas',
    code: `DIAS DA SEMANA: divida os dias por 7 e use o RESTO
  Hoje é segunda. Que dia será daqui a 100 dias?
  100 ÷ 7 = 14, resto 2  ->  segunda + 2 = QUARTA

ANO:
  365 dias = 52 semanas + 1 dia
  -> a mesma data no ano seguinte "anda" 1 dia da semana
  -> se passar por um 29/fev (bissexto), anda 2 dias

BISSEXTO: divisível por 4
  (anos terminados em 00: só se divisíveis por 400)
  2024, 2028 ✔    1900 ✘    2000 ✔

SEQUÊNCIAS CÍCLICAS (mesmo raciocínio do resto):
  A B C D A B C D A B ...  Qual é a 50ª letra?
  50 ÷ 4 = 12, resto 2  ->  B
  (resto 0 -> última letra do ciclo)`,
    explanation:
      'Qualquer padrão que se repete (dias da semana, cores, letras, figuras) é resolvido pelo RESTO da divisão pelo tamanho do ciclo. Lembre: resto zero corresponde ao último elemento do ciclo, não ao primeiro. Meses com 31 dias: conte nos nós dos dedos da mão (jan, mar, mai, jul, ago, out, dez).',
  },
]
