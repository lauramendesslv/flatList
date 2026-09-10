export type Filme = {
    id: string;
    titulo: string;
    cor: string;
    image: string;
};
 
export type Categoria = {
    id: string;
    titulo: string;
    filmes: Filme[];
};
 
export const descricoesDosFilmes: Record<string, string> = {
    Oppenheimer: "A história do físico J. Robert Oppenheimer e do projeto que levou à criação da primeira bomba atômica.",
    "Duna 2": "Paul Atreides se une a Chani e aos Fremen para buscar vingança contra os responsáveis pela destruição de sua família.",
    Barbie: "Barbie deixa Barbieland e parte para o mundo real em uma jornada de autoconhecimento, identidade e novas possibilidades.",
    "Poor Things": "Uma jovem ressuscitada pelo excêntrico cientista Godwin Baxter embarca em uma viagem de descobertas e liberdade.",
    Saltburn: "Um estudante é atraído para o mundo fascinante e decadente de uma família rica durante um verão inesquecível.",
    "John Wick 4": "John Wick enfrenta novos inimigos e uma organização poderosa em sua luta para conquistar a liberdade.",
    "Missão Impossível": "Ethan Hunt e sua equipe correm contra o tempo para impedir que uma arma perigosa caia nas mãos erradas.",
    "Top Gun": "Um piloto talentoso entra na escola de elite Top Gun e precisa equilibrar rivalidade, coragem e responsabilidade.",
    "Mad Max": "Em um deserto pós-apocalíptico, sobreviventes se unem para escapar de um tirano e alcançar uma terra segura.",
    "Como perder um homem em 10 dias": "Uma jornalista aposta que consegue fazer um homem terminar um relacionamento enquanto ele tenta fazê-la se apaixonar.",
    "10 coisas que eu odeio em você": "Para conquistar uma garota, um adolescente precisa encontrar um par para sua irmã mais velha, que não quer namorar.",
    "Vestida para casar": "Uma mulher que sempre ajuda os outros a se casarem precisa enfrentar seus próprios sentimentos e escolhas.",
    "Como se fosse a primeira vez": "Um homem se apaixona por uma mulher que perde a memória todos os dias e decide reconquistá-la continuamente.",
    "Esposa de mentirinha": "Um cirurgião convence sua assistente a fingir ser sua esposa, mas a mentira transforma a viagem dos dois em algo inesperado.",
    Hereditary: "Após a morte da matriarca da família, acontecimentos perturbadores revelam segredos assustadores sobre seus antepassados.",
    Midsommar: "Um casal viaja para um festival aparentemente acolhedor na Suécia e encontra rituais cada vez mais perturbadores.",
    "Get Out": "Um jovem visita a família    de sua namorada e percebe que a recepção amigável esconde uma ameaça terrível.",
    "Episódio IV – Uma Nova Esperança": "Luke Skywalker se junta à Aliança Rebelde para enfrentar o Império e ajudar a resgatar a Princesa Leia.",
    "Episódio V – O Império Contra-Ataca": "Enquanto a Rebelião é perseguida pelo Império, Luke busca treinamento e enfrenta uma revelação decisiva.",
    "Episódio VI – O Retorno de Jedi": "Os heróis da Rebelião tentam destruir a nova Estrela da Morte e libertar a galáxia do domínio do Império.",
    "Episódio I – A Ameaça Fantasma": "Dois Jedi protegem a Rainha Amidala e conhecem Anakin Skywalker em meio a uma crise política na galáxia.",
    "Episódio II – Ataque dos Clones": "Anakin Skywalker e Obi-Wan Kenobi investigam uma tentativa de assassinato enquanto a galáxia se aproxima da guerra.",
    "Episódio III – A Vingança dos Sith": "Anakin é seduzido pelo lado sombrio enquanto a República cai e o Império Galáctico nasce.",
    "Episódio VII – O Despertar da Força": "Uma nova geração de heróis se une à Resistência para enfrentar o retorno de uma ameaça do passado.",
    "Episódio VIII – Os Últimos Jedi": "Rey procura Luke Skywalker enquanto a Resistência luta para sobreviver ao avanço da Primeira Ordem.",
    "Episódio IX – A Ascensão Skywalker": "A Resistência enfrenta sua batalha final contra a Primeira Ordem e uma ameaça que ressurge das sombras.",
    Superbad: "Dois amigos tentam aproveitar a última grande festa do ensino médio antes de seguirem caminhos diferentes.",
    "The Grand Budapest": "Um concierge lendário e seu jovem protegido se envolvem em uma aventura após a morte de uma hóspede rica.",
    "Knives Out": "Um detetive investiga a morte de um escritor e descobre que todos os membros da família têm algo a esconder.",
    "Free Solo": "O escalador Alex Honnold se prepara para realizar, sem cordas, a primeira escalada solo da parede El Capitan.",
};
 
export function obterDescricaoDoFilme(titulo: string) {
    return descricoesDosFilmes[titulo] ?? "Conheca a historia deste filme e descubra por que ele faz parte da nossa selecao.";
}
 
 