import type { Reminder } from './types'

// Lembretes de Língua Portuguesa com os conteúdos que mais caem em concursos.
// - title: tema
// - code: resumo/esquema para revisão rápida
// - explanation: dica para memorizar e pegadinhas comuns
export const portuguesetips: Reminder[] = [
  {
    title: 'Crase — Regra Geral e Proibições',
    code: `CRASE = a (preposição) + a (artigo/pronome)

MACETE DA TROCA: troque por uma palavra masculina.
Se aparecer "AO", tem crase.
  Fui à escola.  -> Fui ao colégio.  ✔ crase
  Vi a escola.   -> Vi o colégio.    ✘ crase

MACETE DO "VOLTAR" (lugares):
  Vou a Roma  -> volto DE Roma   -> crase pra quê?
  Vou à Bahia -> volto DA Bahia  -> crase há!

NUNCA há crase antes de:
  • palavra masculina ........ a pé, a cavalo
  • verbo .................... a partir de, a correr
  • pronome pessoal .......... a ela, a você
  • pronome de tratamento .... a Vossa Excelência
  • artigo indefinido ........ a uma
  • palavras repetidas ....... cara a cara, gota a gota
  • "a" + palavra no plural .. Falei a pessoas`,
    explanation:
      'Crase não é acento, é a fusão de duas vogais "a". Por isso só existe quando o termo anterior exige a preposição "a" E o termo seguinte aceita o artigo "a". Exceção nos pronomes de tratamento: "senhora", "senhorita" e "dona" admitem crase (Entreguei à senhora). Se o "a" estiver no singular antes de palavra no plural, é só preposição — sem crase.',
  },
  {
    title: 'Crase — Casos Obrigatórios e Facultativos',
    code: `OBRIGATÓRIA:
  • Horas exatas ....... Chegou às 8h.
  • Locuções femininas . às vezes, à noite, às pressas,
                         à medida que, à custa de
  • "à moda de" oculto . bife à milanesa, gol à Pelé
  • aquele/aquela/aquilo  Refiro-me àquele livro.
  • Paralelismo ........ das 8h às 18h (mas: de 8h a 18h)

FACULTATIVA:
  • Nome próprio feminino ..... Entreguei a/à Maria.
  • Possessivo feminino (sing.) Fui a/à sua casa.
  • Depois de "até" ........... Fui até a/à praia.

CASA e TERRA:
  Voltei a casa. (o próprio lar, sem especificar)  ✘
  Voltei à casa dos meus pais. (especificada)      ✔
  Os marinheiros desceram a terra. (terra firme)   ✘`,
    explanation:
      'Antes de horas, a crase só aparece se houver a preposição "a" exigida: "desde as 8h", "após as 8h", "para as 8h" não têm crase porque a preposição já é outra. Em "de... a..." sem artigo no primeiro termo, também não há crase no segundo (paralelismo). Dica: "casa" e "terra" só recebem crase quando vierem especificadas.',
  },
  {
    title: 'Concordância Verbal — Casos que Mais Caem',
    code: `HAVER = existir / acontecer / tempo -> IMPESSOAL (singular)
  Havia muitos problemas.        (✘ haviam)
  Deve haver soluções.           (✘ devem haver)

FAZER = tempo / clima -> IMPESSOAL (singular)
  Faz dez anos que não o vejo.   (✘ fazem)

EXISTIR / OCORRER / ACONTECER -> concordam normalmente
  Existem muitos problemas.

SUJEITO DEPOIS DO VERBO -> concorda normalmente
  Faltam três dias. / Restam duas vagas.

SE apassivador (VTD) -> concorda com o sujeito
  Vendem-se casas. (= casas são vendidas)
SE indeterminador (VTI/VI) -> sempre singular
  Precisa-se de funcionários.

"UM DOS QUE" -> plural (preferível)
  Ele é um dos que mais trabalham.

PORCENTAGEM -> com o número ou com o especificador
  1% dos alunos faltou/faltaram.`,
    explanation:
      'O verbo "haver" no sentido de existir não tem sujeito, então fica sempre no singular — e "contamina" o auxiliar (deve haver, pode haver, vai haver). Já "existir" tem sujeito e concorda normalmente. Pegadinha clássica das bancas: colocar o sujeito depois do verbo para você não perceber o plural (ex.: "Faltam" e não "Falta" três dias).',
  },
  {
    title: 'Concordância Nominal',
    code: `VARIAM: anexo, incluso, obrigado, mesmo, quite, próprio
  Seguem anexas as planilhas. (mas: "em anexo" não varia)
  Ela disse: "Muito obrigada".

NÃO VARIAM: menos, alerta, pseudo
  Havia menos pessoas. (✘ menas)

MEIO
  advérbio (= um pouco) -> invariável
    Ela está meio cansada.
  numeral (= metade) -> varia
    Comeu meia pizza. / meio-dia e meia (hora)

BASTANTE (macete: troque por "muito")
  advérbio (= muito) -> invariável
    Elas são bastante dedicadas. (muito dedicadas)
  adjetivo (= muitos) -> varia
    Há bastantes livros. (muitos livros)

É PROIBIDO / É NECESSÁRIO / É BOM
  sem artigo -> invariável: É proibido entrada.
  com artigo -> concorda:   É proibida a entrada.`,
    explanation:
      'Para "bastante", troque por "muito": se virar "muitos/muitas", varia; se ficar "muito", não varia. Para "meio", troque por "um pouco" (invariável) ou "metade" (varia). Nas expressões "é proibido/é necessário", observe o artigo: ele obriga a concordância. Adjetivo depois de dois substantivos pode concordar com o mais próximo ou ir para o plural.',
  },
  {
    title: 'Regência Verbal',
    code: `ASSISTIR
  a  = ver ......... Assisti ao filme. (✘ assisti o filme)
  OD = ajudar ...... O médico assistiu o paciente.
  a  = caber ....... Assiste ao réu o direito de...

ASPIRAR
  OD = cheirar ..... Aspirou o perfume.
  a  = desejar ..... Aspira ao cargo.

VISAR
  OD = mirar/dar visto  Visou o alvo. / Visou o cheque.
  a  = objetivar ...... Visa ao bem-estar.

PREFERIR -> prefere-se algo A algo
  Prefiro café a chá. (✘ mais... do que / do que)

OBEDECER / DESOBEDECER -> a: Obedeça às leis.
IMPLICAR (= acarretar) -> sem prep.: Isso implica mudanças.
CHEGAR / IR -> a: Cheguei a casa. Vou ao banco. (✘ cheguei em)
NAMORAR -> sem prep.: Ela namora o João. (✘ com o João)
PAGAR / PERDOAR -> algo (coisa) + A alguém (pessoa)
  Paguei a conta ao garçom. / Perdoou ao amigo.`,
    explanation:
      'Regência é a relação entre o verbo e seu complemento (com ou sem preposição). Muitos verbos mudam de sentido conforme a regência. Dica: a preposição "a" exigida pelo verbo + artigo "a" = crase (Assisti à peça). Para "preferir", nunca use "mais" nem "do que". Por isso regência e crase costumam aparecer juntas nas provas.',
  },
  {
    title: 'Regência Nominal',
    code: `NOME              PREPOSIÇÃO       EXEMPLO
apto ............ a / para ...... apto ao cargo
ansioso ......... por / para .... ansioso por notícias
acessível ....... a ............. acessível a todos
alheio .......... a ............. alheio aos problemas
aversão ......... a / por ....... aversão a mentiras
compatível ...... com ........... compatível com o sistema
favorável ....... a ............. favorável à proposta
imune ........... a / de ........ imune a críticas
obediência ...... a ............. obediência às normas
preferível ...... a ............. é preferível sair a ficar
residente ....... em ............ residente na Rua X
situado ......... em ............ situado na Av. Brasil
medo ............ a / de ........ medo de altura
contemporâneo ... a / de ........ contemporâneo de Machado`,
    explanation:
      'Na regência nominal, quem exige a preposição é um substantivo, adjetivo ou advérbio, e o termo regido é o complemento nominal. Pegadinhas frequentes: "preferível a" (✘ preferível do que) e "residente/situado em" (✘ residente à Rua X). Se o nome pede "a" e vem palavra feminina com artigo, há crase: "favorável à proposta".',
  },
  {
    title: 'Colocação Pronominal',
    code: `PRÓCLISE (antes do verbo) — OBRIGATÓRIA com palavra atrativa:
  • Negação ............ Não me ligue. / Nunca o vi.
  • Advérbio (s/ vírgula) Aqui se trabalha.
  • Pronome relativo ... O livro que me deram...
  • Pronome indefinido . Tudo se resolve.
  • Conj. subordinativa  Quando me viu, sorriu.
  • Frase exclam./optat. Deus te abençoe!

ÊNCLISE (depois do verbo):
  • Início de frase .... Disseram-me a verdade. (✘ Me disseram)
  • Após vírgula ....... Ontem, contaram-me tudo.
  • Imperativo afirmat.  Faça-me um favor.

MESÓCLISE (no meio) — futuro do presente/pretérito,
sem palavra atrativa:
  Far-se-á a reunião. / Dir-te-ia a verdade.

⚠ NUNCA ênclise com futuro nem com particípio:
  ✘ Farei-o   ✘ Tinha feito-me`,
    explanation:
      'Regra de ouro: não se inicia frase com pronome oblíquo átono na norma culta. Primeiro procure a palavra atrativa (negação, advérbio, pronome relativo/indefinido, conjunção subordinativa); se houver, use próclise. Se o verbo estiver no futuro e não houver palavra atrativa, use mesóclise. A ênclise é a "padrão" quando nada obriga as outras.',
  },
  {
    title: 'Uso dos Porquês',
    code: `POR QUE -> pergunta / "por qual motivo" / "pelo qual"
  Por que você saiu?
  Não sei por que ele saiu.   (= por qual motivo)
  O caminho por que passei.   (= pelo qual)

POR QUÊ -> igual ao anterior, mas no FIM da frase
  Você saiu por quê?
  Ele saiu e não disse por quê.

PORQUE -> resposta / explicação (= pois, uma vez que)
  Saí porque estava cansado.

PORQUÊ -> substantivo (vem com artigo/determinante)
  Não entendi o porquê da decisão.
  Quero saber os porquês.`,
    explanation:
      'Macete: SEPARADO = pergunta (dá para trocar por "por qual motivo" ou "pelo qual"); JUNTO = resposta (dá para trocar por "pois"). Acento circunflexo aparece quando o "que" é tônico: no fim da frase (antes de ponto) ou quando vira substantivo (o porquê, um porquê).',
  },
  {
    title: 'Vírgula — Quando Usar e Quando é Proibido',
    code: `⛔ PROIBIDO separar (ordem direta S-V-C):
  ✘ Sujeito e verbo ...... Os alunos, chegaram cedo.
  ✘ Verbo e complemento .. Comprei, um carro.

✔ OBRIGATÓRIO:
  • Vocativo ............. João, venha aqui.
  • Aposto explicativo ... Brasília, a capital, é linda.
  • Adj. adverbial longo
    deslocado ............ No fim do ano, viajaremos.
    (curto = facultativa: Hoje(,) saio cedo.)
  • Coordenadas (exceto "e")
                           Estudou, mas não passou.
  • Adverbial antes da principal
                           Quando chegar, avise-me.
  • Adjetiva explicativa . O homem, que é mortal, erra.
  • Expressões explicativas  isto é, ou seja, por exemplo
  • Omissão do verbo ..... Eu prefiro café; ela, chá.

"E" + vírgula: quando os sujeitos são diferentes
ou há valor adversativo/repetição (polissíndeto).`,
    explanation:
      'Monte mentalmente a ordem direta: SUJEITO + VERBO + COMPLEMENTO + adjunto adverbial. Esses três primeiros termos nunca se separam por uma única vírgula. Mas atenção: um termo intercalado entre duas vírgulas é permitido (Os alunos, cansados, chegaram). Questões perguntam se a vírgula é "obrigatória", "facultativa" ou se "altera o sentido".',
  },
  {
    title: 'Orações Adjetivas — Restritiva x Explicativa',
    code: `RESTRITIVA (SEM vírgula) -> restringe, especifica uma parte
  Os alunos que estudaram passaram.
  -> Só ALGUNS estudaram, e só esses passaram.

EXPLICATIVA (COM vírgula) -> generaliza, explica o todo
  Os alunos, que estudaram, passaram.
  -> TODOS estudaram, e todos passaram.

Introduzidas por PRONOME RELATIVO:
  que, o qual, cujo, onde, quem, quanto, como

Pegadinha clássica:
  "A retirada das vírgulas prejudicaria o sentido?"
  -> SIM! Muda de explicativa para restritiva.
  (Gramaticalmente continua correta, mas o SENTIDO muda.)`,
    explanation:
      'Pense: a vírgula "abre" a oração para todos (explicativa); sem vírgula ela "fecha" o grupo (restritiva). Ex.: "Os brasileiros, que gostam de futebol, ..." diz que TODOS os brasileiros gostam de futebol; sem vírgulas, fala apenas daqueles que gostam. O pronome "que" relativo pode ser trocado por "o qual/a qual".',
  },
  {
    title: 'Orações Coordenadas',
    code: `ASSINDÉTICAS: sem conjunção
  Cheguei, vi, venci.

SINDÉTICAS: com conjunção
  ADITIVA ....... e, nem, não só... mas também
                  Estudou e passou.
  ADVERSATIVA ... mas, porém, contudo, todavia,
                  entretanto, no entanto
                  Estudou, mas não passou.
  ALTERNATIVA ... ou... ou, ora... ora, quer... quer
                  Ou estuda, ou trabalha.
  CONCLUSIVA .... logo, portanto, por isso, então,
                  pois (DEPOIS do verbo)
                  Estudou muito; passará, pois, na prova.
  EXPLICATIVA ... pois (ANTES do verbo), porque, que
                  Estude, pois a prova é amanhã.

Mnemônico das sindéticas: "3A + CE"
  Aditiva, Adversativa, Alternativa, Conclusiva, Explicativa`,
    explanation:
      'Orações coordenadas são independentes sintaticamente. Para o "pois": ANTES do verbo é explicativo; DEPOIS do verbo (entre vírgulas) é conclusivo. As bancas adoram pedir a troca de conectivo mantendo o sentido: só troque por outro do MESMO grupo (ex.: "mas" por "contudo", "portanto" por "logo").',
  },
  {
    title: 'Orações Subordinadas Adverbiais (Conectivos)',
    code: `CAUSAL ......... porque, já que, visto que, uma vez que,
                 como (no início da frase)
CONCESSIVA ..... embora, ainda que, mesmo que, conquanto,
                 posto que, se bem que
CONDICIONAL .... se, caso, desde que (+ subjuntivo),
                 contanto que, a menos que
CONFORMATIVA ... conforme, segundo, consoante,
                 como (= conforme)
CONSECUTIVA .... tão/tal/tanto... que, de modo que
COMPARATIVA .... como, (mais/menos) do que, tal qual
FINAL .......... para que, a fim de que
PROPORCIONAL ... à medida que, à proporção que,
                 quanto mais... (tanto) mais
TEMPORAL ....... quando, enquanto, assim que,
                 logo que, desde que (+ indicativo)

Mnemônico: "CA-CON-CON-CON-CON-COM-FI-PRO-TEM"`,
    explanation:
      'A CONCESSIVA indica um obstáculo que NÃO impede o fato (Embora chovesse, saí) — diferente da adversativa, que liga orações independentes. "Desde que" pode ser condicional (Irei desde que você vá) ou temporal (Desde que chegou, trabalha). "Como" pode ser causal, comparativo ou conformativo — analise o sentido. Concessivas costumam exigir verbo no subjuntivo.',
  },
  {
    title: 'Orações Subordinadas Substantivas',
    code: `Exercem função de substantivo.
Iniciam com conjunção integrante "QUE" ou "SE".

MACETE: substitua a oração por "ISSO".

SUBJETIVA (sujeito)
  É importante que você estude.   -> ISSO é importante.
OBJETIVA DIRETA (objeto direto)
  Espero que você venha.          -> Espero ISSO.
OBJETIVA INDIRETA (objeto indireto)
  Gosto de que me elogiem.        -> Gosto DISSO.
COMPLETIVA NOMINAL (complemento nominal)
  Tenho certeza de que vencerei.  -> Tenho certeza DISSO.
PREDICATIVA (após verbo de ligação)
  Meu desejo é que você passe.    -> Meu desejo é ISSO.
APOSITIVA (geralmente após dois-pontos)
  Só quero uma coisa: que seja feliz.`,
    explanation:
      'A conjunção integrante "que" pode ser trocada por "isso" junto com toda a oração. Se a oração está ligada a um VERBO com preposição, é objetiva indireta; se está ligada a um NOME (substantivo/adjetivo) com preposição, é completiva nominal. Subjetivas aparecem muito com "é bom que", "convém que", "parece que".',
  },
  {
    title: 'Funções do SE',
    code: `PARTÍCULA APASSIVADORA (VTD) -> verbo concorda
  Vendem-se casas.  (= Casas são vendidas)
ÍNDICE DE INDETERMINAÇÃO (VTI, VI, VL) -> singular
  Precisa-se de funcionários. / Vive-se bem aqui.
PRONOME REFLEXIVO -> ação volta ao sujeito
  Ele se cortou.
PRONOME RECÍPROCO -> ação mútua
  Os noivos se abraçaram.
CONJUNÇÃO CONDICIONAL (= caso)
  Se chover, não irei.
CONJUNÇÃO INTEGRANTE (início de or. substantiva)
  Não sei se ele virá.
PARTE INTEGRANTE DO VERBO (pronominal)
  Ele se arrependeu. / Ela se queixou.
PARTÍCULA EXPLETIVA (de realce, pode ser retirada)
  Foi-se embora.`,
    explanation:
      'O caso mais cobrado: VTD + SE = voz passiva sintética. Teste: se der para transformar em "são vendidas", é apassivadora e o verbo concorda com o sujeito. Se o verbo tiver preposição (VTI: precisar DE, tratar DE, confiar EM), é índice de indeterminação e o verbo fica no singular SEMPRE: "Trata-se de questões" (✘ Tratam-se).',
  },
  {
    title: 'Funções do QUE',
    code: `PRONOME RELATIVO (= o qual)
  O livro que comprei é bom.
CONJUNÇÃO INTEGRANTE (= isso)
  Espero que você venha.
PRONOME INTERROGATIVO
  Que horas são?
ADVÉRBIO DE INTENSIDADE (= quão)
  Que lindo dia!
SUBSTANTIVO (acentuado = algo, alguma coisa)
  Ela tem um quê de mistério.
PREPOSIÇÃO (= de)
  Tenho que sair.  (= Tenho de sair)
CONJUNÇÃO EXPLICATIVA (= pois)
  Volte cedo, que vai chover.
CONJUNÇÃO COMPARATIVA
  Ele é mais alto (do) que eu.
CONJUNÇÃO CONSECUTIVA
  Falou tanto que ficou rouco.
PARTÍCULA EXPLETIVA (realce, retirável)
  Quase que caí. / Eu é que sei.
INTERJEIÇÃO
  Quê! Você aqui?`,
    explanation:
      'As duas funções mais cobradas são pronome relativo (troque por "o qual/a qual/os quais") e conjunção integrante (troque a oração inteira por "isso"). Se a troca por "o qual" funcionar, é relativo e introduz oração adjetiva; se a troca por "isso" funcionar, é integrante e introduz oração substantiva.',
  },
  {
    title: 'Vozes Verbais',
    code: `ATIVA: o sujeito pratica a ação
  O técnico consertou o computador.

PASSIVA ANALÍTICA: SER + particípio
  O computador foi consertado pelo técnico.

PASSIVA SINTÉTICA: VTD + SE
  Consertou-se o computador.
  Consertaram-se os computadores.

REFLEXIVA: o sujeito pratica e sofre
  O técnico se feriu.

TRANSPOSIÇÃO ATIVA -> PASSIVA:
  • Objeto direto -> sujeito paciente
  • Sujeito -> agente da passiva
  • O TEMPO VERBAL fica no verbo SER:
    consertou  (pret. perfeito)   -> foi consertado
    consertava (pret. imperfeito) -> era consertado
    consertará (futuro)           -> será consertado
    tinha consertado              -> tinha sido consertado`,
    explanation:
      'Só vai para a voz passiva o verbo que tem objeto direto (VTD ou VTDI) — exceções tradicionais: obedecer, pagar e perdoar. Na transposição, o verbo SER assume exatamente o tempo e modo do verbo original, e o verbo principal vai para o particípio. As bancas costumam errar o tempo verbal na alternativa incorreta.',
  },
  {
    title: 'Tipos de Sujeito',
    code: `SIMPLES ......... um núcleo
  O aluno estudou.
COMPOSTO ........ dois ou mais núcleos
  Pedro e Ana estudaram.
OCULTO .......... identificado pela desinência verbal
  Estudamos muito. (nós)
INDETERMINADO ... existe, mas não se identifica
  • 3ª pessoa do plural sem referente:
    Roubaram meu carro.
  • VTI / VI / VL + SE:
    Precisa-se de ajuda.

ORAÇÃO SEM SUJEITO (verbos impessoais):
  • Fenômenos da natureza ... Choveu muito.
  • HAVER = existir ......... Há vagas.
  • HAVER/FAZER = tempo ..... Faz anos. Há dias.
  • SER = hora/data/distância É uma hora. São dez horas.`,
    explanation:
      'Não confunda sujeito OCULTO (dá para saber quem é pela terminação do verbo) com INDETERMINADO (não dá para saber quem praticou a ação). Atenção: em "Roubaram meu carro" o sujeito é indeterminado, mas em "Os ladrões chegaram. Roubaram meu carro." é oculto (eles). Verbos de fenômeno da natureza em sentido figurado têm sujeito: "Choveram críticas".',
  },
  {
    title: 'Transitividade Verbal',
    code: `VI (intransitivo) ...... sentido completo
  O bebê dormiu.
VTD (transitivo direto) . complemento SEM preposição
  Comprei pão.             (objeto direto)
VTI (transitivo indireto) complemento COM preposição
  Gosto de música.         (objeto indireto)
VTDI (bitransitivo) ..... os dois
  Entreguei o livro ao professor.
VL (de ligação) ......... liga sujeito a uma qualidade
  ser, estar, permanecer, ficar, parecer,
  continuar, andar (= estar)
  Ela está cansada.        (predicativo do sujeito)

PRONOMES OBLÍQUOS:
  o, a, os, as -> OBJETO DIRETO   (Eu o vi.)
  lhe, lhes    -> OBJETO INDIRETO (Obedeço-lhe.)
  ✘ "Eu lhe vi"  (ver é VTD -> Eu o vi)
  ✘ "Eu o obedeço" (obedecer é VTI -> Eu lhe obedeço)`,
    explanation:
      'A transitividade depende do contexto, não do verbo isolado: "Ele anda rápido" (VI) x "Ele anda triste" (VL). Dica: pergunte "quem ama, ama O QUÊ?" (VTD) e "quem gosta, gosta DE QUÊ?" (VTI). O pronome "lhe" só substitui objeto indireto de pessoa — erro comum cobrado em provas.',
  },
  {
    title: 'Complemento Nominal x Adjunto Adnominal',
    code: `Ambos podem vir com preposição depois de um substantivo.

ADJUNTO ADNOMINAL -> sentido ATIVO (agente / posse)
  A crítica do professor foi dura.  (o professor criticou)
  O carro de João.                  (posse)

COMPLEMENTO NOMINAL -> sentido PASSIVO (alvo / paciente)
  A crítica ao professor foi dura.  (o professor foi criticado)
  A construção da casa atrasou.     (a casa foi construída)

DICAS RÁPIDAS:
  • Completa ADJETIVO ou ADVÉRBIO -> sempre complemento nominal
    útil à sociedade / favoravelmente ao réu
  • Preposição diferente de "de" -> quase sempre compl. nominal
  • Substantivo CONCRETO -> adjunto adnominal
    copo de vidro / casa de madeira`,
    explanation:
      'Pergunte: o termo preposicionado PRATICA ou SOFRE a ação expressa pelo substantivo abstrato? Se pratica (agente) ou indica posse, é adjunto adnominal. Se sofre (paciente/alvo), é complemento nominal. "O amor de mãe" (a mãe ama = adjunto) x "O amor à pátria" (a pátria é amada = complemento).',
  },
  {
    title: 'Acentuação Gráfica',
    code: `OXÍTONAS (última sílaba tônica) — acentua se terminar em:
  A(s), E(s), O(s), EM, ENS
  sofá, café, avô, também, parabéns

PAROXÍTONAS (penúltima) — acentua as que NÃO terminam
em A, E, O, EM(S). Ou seja: L, N, R, X, PS, I(S), US,
UM(S), ÃO(S), Ã(S), ditongo
  fácil, hífen, caráter, tórax, bíceps, júri,
  vírus, álbum, órfão, ímã, história

PROPAROXÍTONAS — TODAS são acentuadas
  lâmpada, médico, público

MONOSSÍLABOS TÔNICOS em A(s), E(s), O(s)
  pá, pé, pó, más, três

HIATO: I/U tônicos sozinhos na sílaba (ou com S)
  saída, baú, país, saúde  (✘ se seguido de NH: rainha)`,
    explanation:
      'Oxítonas e paroxítonas são "opostas": o que acentua uma não acentua a outra (sofá x mesa; fácil x papel). Novo Acordo: caiu o acento dos ditongos abertos ÉI/ÓI em paroxítonas (ideia, heroico, jiboia — mas oxítonas mantêm: papéis, herói), do EE/OO (creem, voo, enjoo) e de diferenciais como para/pelo/pera. Continuam: pôde/pode, pôr/por, têm/tem, vêm/vem.',
  },
  {
    title: 'Hífen (Novo Acordo Ortográfico)',
    code: `REGRA DE OURO: letras IGUAIS separam, DIFERENTES juntam
  micro-ondas, anti-inflamatório, inter-regional  (iguais)
  autoescola, infraestrutura, antiaéreo           (diferentes)

Prefixo terminado em VOGAL + palavra com R ou S -> DOBRA
  antirrugas, contrassenso, ultrassom, autorretrato

Palavra começando com H -> sempre hífen
  anti-higiênico, super-homem, pré-história

Sempre com hífen:
  ex-, vice-, recém-, sem-, além-, aquém-,
  pré-, pós-, pró- (quando tônicos/acentuados)
  ex-marido, vice-presidente, pós-graduação, recém-nascido

EXCEÇÕES:
  CO e RE juntam sempre: cooperar, coerdeiro, reeleição
  SUB + R ou B -> hífen: sub-reitor, sub-bibliotecário
  PAN / CIRCUM + vogal, H, M, N -> hífen: pan-americano`,
    explanation:
      'Lembre do "ímã": letras iguais se repelem (hífen), letras diferentes se atraem (juntam). Se depois do prefixo vier R ou S e o prefixo terminar em vogal, a consoante dobra para manter o som (anti + social = antissocial). Pré/pós/pró acentuados levam hífen; sem acento juntam (prever, preestabelecer, promover).',
  },
  {
    title: 'Parônimos que Mais Caem',
    code: `RATIFICAR  = confirmar       x RETIFICAR  = corrigir
DESCRIÇÃO  = descrever       x DISCRIÇÃO  = ser discreto
EMINENTE   = ilustre         x IMINENTE   = prestes a ocorrer
DELATAR    = denunciar       x DILATAR    = alargar
INFLIGIR   = aplicar (pena)  x INFRINGIR  = violar (lei)
FLAGRANTE  = evidente        x FRAGRANTE  = perfumado
EMIGRAR    = sair do país    x IMIGRAR    = entrar no país
MANDATO    = período/procuração x MANDADO = ordem judicial
TRÁFEGO    = trânsito        x TRÁFICO    = comércio ilegal
DEFERIR    = aprovar         x DIFERIR    = diferenciar/adiar
CONSERTO   = reparo          x CONCERTO   = espetáculo musical
DESPERCEBIDO = não notado    x DESAPERCEBIDO = desprevenido

SESSÃO = reunião / tempo de espetáculo
SEÇÃO  = divisão, departamento
CESSÃO = ato de ceder`,
    explanation:
      'Macetes: RE-tificar = REfazer/corrigir; RA-tificar = confirmar. E-migrar = sair (Exit); I-migrar = entrar (In). E-minente = Excelente; I-minente = Imediato. INFRINGIR = INFRAÇÃO (violar a lei); INFLIGIR = aplicar castigo. Sessão de cinema, seção de roupas, cessão de direitos.',
  },
  {
    title: 'Expressões que Confundem',
    code: `MAL x MAU
  MAL = oposto de BEM ... Ele dorme mal. / O mal venceu.
  MAU = oposto de BOM ... Ele é um mau aluno.

HÁ x A (tempo)
  HÁ = passado (= faz) ...... Saí há duas horas.
  A  = futuro / distância ... Volto daqui a 2 horas. Fica a 5 km.
  ✘ "Há dois anos atrás" (redundância)

ONDE x AONDE
  ONDE  = lugar fixo (estar, morar) ... Onde você mora?
  AONDE = movimento (ir, chegar) ...... Aonde você vai?

SENÃO x SE NÃO
  SENÃO  = caso contrário / mas sim ... Estude, senão reprova.
  SE NÃO = caso não ................... Se não chover, iremos.

AFIM x A FIM DE
  AFIM     = afinidade .... áreas afins
  A FIM DE = finalidade ... Estudo a fim de passar.

ACERCA DE = sobre ............ Falamos acerca do tema.
HÁ CERCA DE = existe/faz aprox. Há cerca de 10 anos...
A CERCA DE = distância aprox. . Fica a cerca de 2 km.`,
    explanation:
      'Use os opostos para decidir: MAL/BEM e MAU/BOM. Para "há" x "a", troque por "faz": se der certo, é "há" (passado). "Aonde" = "a + onde", só com verbos que pedem a preposição "a" (ir a, chegar a). Se você puder trocar por "caso contrário", escreva "senão" junto.',
  },
  {
    title: 'Pronomes Demonstrativos (Este, Esse, Aquele)',
    code: `ESPAÇO:
  ESTE   -> perto de quem fala (aqui)
  ESSE   -> perto de quem ouve (aí)
  AQUELE -> longe de ambos (lá)

TEMPO:
  ESTE   -> presente ............ Este ano está difícil.
  ESSE   -> passado/futuro próximo Esse dia foi marcante.
  AQUELE -> passado distante .... Naquela época...

NO TEXTO (coesão):
  ESTE -> o que AINDA VAI ser dito (catafórico)
    Meu desejo é este: passar no concurso.
  ESSE -> o que JÁ FOI dito (anafórico)
    Passar no concurso: esse é meu desejo.

RETOMANDO DOIS TERMOS:
  ESTE = o mais próximo (último citado)
  AQUELE = o mais distante (primeiro citado)
  Pelé e Neymar são craques: este é atual; aquele, lendário.
  (este = Neymar | aquele = Pelé)`,
    explanation:
      'Macete do texto: "ESSE já foi, ESTE está por vir". Ou seja, "esse" retoma (olha para trás) e "este" anuncia (olha para frente). Questões de coesão textual perguntam muito a qual termo um pronome se refere — volte ao texto e identifique o referente mais próximo que faça sentido.',
  },
  {
    title: 'Pronome Relativo CUJO e uso do ONDE',
    code: `CUJO = do qual / da qual / de quem -> indica POSSE
  O autor cujo livro li é famoso.  (o livro DO autor)

REGRAS DO CUJO:
  • Concorda com o termo SEGUINTE (a coisa possuída)
    O aluno cuja nota foi alta... / A empresa cujos lucros...
  • NUNCA leva artigo depois
    ✘ cujo o livro   ✘ cuja a casa
  • Recebe a preposição exigida pelo verbo
    O filme a cujo final assisti.   (assistir A)
    A pessoa em cuja casa fiquei.   (ficar EM)
    O autor de cuja obra gosto.     (gostar DE)

ONDE -> só para LUGAR físico
  ✔ A cidade onde nasci.
  ✘ A reunião onde decidimos...  -> em que / na qual
  ✘ O momento onde percebi...    -> em que / no qual`,
    explanation:
      'O "cujo" fica entre o possuidor (antes) e o possuído (depois), concordando com o possuído. Para saber se precisa de preposição, olhe o verbo da oração que ele inicia. "Onde" para tempo ou situação é erro comum na linguagem do dia a dia e muito cobrado: substitua por "em que" ou "no/na qual".',
  },
  {
    title: 'Verbos Derivados (Conjugação)',
    code: `Derivados seguem a conjugação do verbo PRIMITIVO!

TER -> manter, deter, conter, obter, reter
  Se ele mantiver a calma...      (✘ manter)
  Quando eles obtiverem...        (✘ obterem)
  Eles detêm o poder.

VER -> prever, rever  (futuro do subjuntivo: VIR)
  Quando eu vir você...           (✘ ver)
  Se ele revir o processo...      (✘ rever)

VIR -> intervir, convir, provir
  O juiz interveio.               (✘ interviu)
  Se ele intervier...             (✘ intervir)

PÔR -> compor, propor, supor, repor, dispor
  Se eu propuser...               (✘ propor)
  Eles se dispuseram a ajudar.

FAZER -> satisfazer, refazer, desfazer
  Se o resultado o satisfizer...  (✘ satisfazer)

⚠ REQUERER NÃO segue "querer":
  eu requeiro, ele requereu       (✘ requis)`,
    explanation:
      'Para conjugar um derivado, conjugue primeiro o verbo primitivo e depois acrescente o prefixo: "se ele tiver" -> "se ele mantiver"; "ele veio" -> "ele interveio"; "quando eu vir" -> "quando eu previr". O futuro do subjuntivo (se/quando eu...) é o tempo mais cobrado nessas questões.',
  },
  {
    title: 'Figuras de Linguagem',
    code: `METÁFORA .... comparação implícita
               "Seus olhos são duas estrelas."
COMPARAÇÃO ... com conectivo (como, tal qual)
               "Olhos brilhantes como estrelas."
METONÍMIA .... troca por relação lógica
               (autor/obra, parte/todo, marca/produto)
               "Li Machado de Assis." "Bebeu um copo d'água."
HIPÉRBOLE .... exagero  "Já te disse um milhão de vezes."
EUFEMISMO .... suaviza  "Ele partiu desta para melhor."
IRONIA ....... diz o contrário  "Que belo serviço!" (estragou)
ANTÍTESE ..... palavras opostas  "Entre o amor e o ódio."
PARADOXO ..... ideias que se contradizem
               "O amor é fogo que arde sem se ver."
PROSOPOPEIA .. dá ações humanas a seres inanimados
               "O vento sussurrava segredos."
SINESTESIA ... mistura de sentidos  "Voz doce." "Cor gritante."
CATACRESE .... metáfora já "gasta"  "pé da mesa", "céu da boca"
PLEONASMO .... redundância  "Vi com meus próprios olhos."
ELIPSE ....... omissão de termo  "Na sala, apenas três alunos."
ZEUGMA ....... omissão de termo já dito
               "Eu gosto de café; ela, de chá."`,
    explanation:
      'ANTÍTESE x PARADOXO: na antítese os opostos só aparecem lado a lado (vida e morte); no paradoxo eles se fundem numa ideia logicamente impossível (estou morto e vivo ao mesmo tempo). METÁFORA x METONÍMIA: a metáfora se baseia em semelhança; a metonímia em uma relação real (o autor pela obra, o recipiente pelo conteúdo).',
  },
  {
    title: 'Interpretação x Compreensão de Texto',
    code: `COMPREENSÃO -> o que ESTÁ no texto (explícito)
  Palavras-chave na questão:
  "segundo o texto", "de acordo com o autor",
  "o texto informa", "conforme o texto"

INTERPRETAÇÃO -> o que se CONCLUI do texto (implícito)
  Palavras-chave na questão:
  "infere-se", "depreende-se", "conclui-se",
  "o texto permite deduzir", "subentende-se"

ERROS MAIS COMUNS nas alternativas:
  • EXTRAPOLAÇÃO -> vai além do texto (info externa)
  • REDUÇÃO ...... considera só uma parte do texto
  • CONTRADIÇÃO .. afirma o oposto do texto

⚠ Desconfie de palavras ABSOLUTAS:
  sempre, nunca, todos, nenhum, apenas, somente,
  exclusivamente, jamais, totalmente`,
    explanation:
      'Responda com base no TEXTO, não no seu conhecimento de mundo — uma alternativa pode ser verdadeira na realidade e errada segundo o texto. Leia primeiro as perguntas, depois o texto, e grife conectivos (mas, portanto, embora), pois eles revelam a argumentação do autor. Alternativas com generalizações costumam estar erradas.',
  },
  {
    title: 'Tipologia Textual',
    code: `NARRATIVO .............. conta fatos em sequência
  personagens, tempo, espaço, enredo, narrador
  verbos no pretérito (fez, disse, chegou)

DESCRITIVO ............. retrata características
  "retrato verbal", adjetivos, verbos de estado

DISSERTATIVO-ARGUMENTATIVO -> defende ponto de vista
  tese + argumentos + conclusão
  (artigo de opinião, editorial, redação de concurso)

DISSERTATIVO-EXPOSITIVO -> expõe/explica, sem opinar
  (verbete, texto didático, reportagem)

INJUNTIVO (instrucional) -> orienta, ordena
  verbos no imperativo (receita, manual, bula)

TIPO x GÊNERO:
  TIPO   = estrutura/modo de organização (os 5 acima)
  GÊNERO = forma concreta que circula na sociedade
           (notícia, crônica, carta, e-mail, receita...)
  Um gênero pode misturar tipos; vale o PREDOMINANTE.`,
    explanation:
      'Tipos textuais são poucos e fixos; gêneros são infinitos. Para identificar o tipo, pergunte: o texto conta (narração), mostra como é (descrição), explica (expositivo), convence (argumentativo) ou manda fazer (injuntivo)? Em provas, o "editorial" e o "artigo de opinião" são os exemplos clássicos de texto argumentativo.',
  },
  {
    title: 'Pronomes de Tratamento (Redação Oficial)',
    code: `VOSSA x SUA
  VOSSA -> falando COM a pessoa
    Vossa Excelência está convidado.
  SUA   -> falando SOBRE a pessoa
    Sua Excelência, o Ministro, chegou.

CONCORDÂNCIA: verbo e pronomes na 3ª PESSOA
  ✔ Vossa Senhoria sabe que seu pedido...
  ✘ Vossa Senhoria sabeis que vosso pedido...

ADJETIVO concorda com o SEXO da pessoa:
  Vossa Excelência está cansado (homem) / cansada (mulher)

PRINCIPAIS:
  Vossa Excelência ... Presidente, Ministros, Governadores,
                       Prefeitos, Parlamentares, Juízes
  Vossa Senhoria ..... demais autoridades e particulares
  Vossa Magnificência  Reitores de universidade
  Vossa Santidade .... Papa
  Vossa Majestade .... Reis e rainhas`,
    explanation:
      'Apesar do "Vossa", a concordância é SEMPRE na 3ª pessoa (como "você"). Lembre: VOSSA para quem você fala (2ª pessoa do discurso), SUA para de quem você fala (3ª pessoa do discurso). Atenção: pelo Decreto nº 9.758/2019, na administração pública federal o tratamento entre agentes públicos passou a ser apenas "Senhor(a)".',
  },
]
