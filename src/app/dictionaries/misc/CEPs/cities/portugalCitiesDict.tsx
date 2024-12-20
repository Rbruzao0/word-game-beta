const portugalCitiesDict = [
  "ABRANTES",
  "AGUALVA",
  "AGUAS-SANTAS",
  "AGUEDA",
  "ALBERGARIA-A-VELHA",
  "ALBUFEIRA",
  "ALCACER-DO-SAL",
  "ALCANENA",
  "ALCOBACA",
  "ALCOCHETE",
  "ALDEIA-DE-PAIO-PIRES",
  "ALDOAR",
  "ALENQUER",
  "ALFENA",
  "ALIJO",
  "ALJUSTREL",
  "ALMADA",
  "ALMARGEM",
  "ALMEIRIM",
  "AMADORA",
  "AMARANTE",
  "AMARES",
  "AMORA",
  "ANADIA",
  "ANGRA-DO-HEROISMO",
  "ANSIAO",
  "ANTA",
  "ARCOS-DE-VALDEVEZ",
  "ARCOZELO",
  "ARGANIL",
  "AROUCA",
  "ARRENTELA",
  "ARRUDA-DOS-VINHOS",
  "AVEIRO",
  "AVER-O-MAR",
  "AVES",
  "AVINTES",
  "AZAMBUJA",
  "BAIAO",
  "BARCELOS",
  "BARREIRO",
  "BATALHA",
  "BEJA",
  "BELAS",
  "BENAVENTE",
  "BOMBARRAL",
  "BOUGADO",
  "BRAGA",
  "BRAGANCA",
  "CABECEIRAS-DE-BASTO",
  "CACEM",
  "CADAVAL",
  "CALDAS-DA-RAINHA",
  "CALHETA",
  "CAMARA-DE-LOBOS",
  "CAMARATE",
  "CANICO",
  "CANTANHEDE",
  "CAPARICA",
  "CARREGADO",
  "CARREGAL-DO-SAL",
  "CARTAXO",
  "CASCAIS",
  "CASTELO-BRANCO",
  "CASTRO-DAIRE",
  "CAXIAS",
  "CELORICO-DE-BASTO",
  "CHAMUSCA",
  "CHARNECA",
  "CHAVES",
  "CINFAES",
  "COIMBRA",
  "CONDEIXA-A-NOVA",
  "CORROIOS",
  "CORUCHE",
  "COSTA-DE-CAPARICA",
  "COSTAS-DE-CAO",
  "COVILHA",
  "CUNHA-ALTA",
  "EIRAS",
  "ELVAS",
  "ENTRONCAMENTO",
  "ERICEIRA",
  "ERMEZINDE",
  "ESMORIZ",
  "ESPINHO",
  "ESPOSENDE",
  "ESTARREJA",
  "ESTORIL",
  "ESTREITO-DE-CAMARA-DE-LOBOS",
  "ESTREMOZ",
  "EVORA",
  "FAFE",
  "FALAGUEIRA",
  "FAMALICAO",
  "FANZERES",
  "FARO",
  "FATIMA",
  "FEIRA",
  "FELGUEIRAS",
  "FERREIRA-DO-ZEZERE",
  "FIGUEIRA-DA-FOZ",
  "FUNCHAL",
  "FUNDAO",
  "GAFANHA-DA-NAZARE",
  "GONDIZALVES",
  "GONDOMAR",
  "GOUVEIA",
  "GRANDOLA",
  "GRIJO",
  "GUARDA",
  "GUIFOES",
  "GUIMARAES",
  "HORTA",
  "IDANHA-A-NOVA",
  "ILHAVO",
  "LAGOA",
  "LAGOS",
  "LAMACAES",
  "LAMEGO",
  "LARANJEIRA",
  "LEIRIA",
  "LISBON",
  "LORDELO-DO-OURO",
  "LOULE",
  "LOURES",
  "LOURINHA",
  "LOUROSA",
  "LOUSA",
  "LOUSADA",
  "MACEDO-DE-CAVALEIROS",
  "MACEIRA",
  "MACHICO",
  "MAFAMUDE",
  "MAFRA",
  "MAIA",
  "MANGUALDE",
  "MARCO-DE-CANAVEZES",
  "MARINHA-GRANDE",
  "MASSAMA",
  "MATOSINHOS",
  "MEALHADA",
  "MEIXEDO",
  "MELGACO",
  "MELRES",
  "MIRA",
  "MIRANDA-DO-CORVO",
  "MIRANDELA",
  "MOIMENTA-DA-BEIRA",
  "MOITA",
  "MONCAO",
  "MONTALEGRE",
  "MONTEMOR-O-NOVO",
  "MONTEMOR-O-VELHO",
  "MONTIJO",
  "MOREIRA",
  "MORTAGUA",
  "MOURA",
  "MURTOSA",
  "NAZARE",
  "NELAS",
  "OBIDOS",
  "ODEMIRA",
  "ODIVELAS",
  "OEIRAS",
  "OLHAO",
  "OLIVEIRA-DE-AZEMEIS",
  "OLIVEIRA-DE-FRADES",
  "OLIVEIRA-DO-BAIRRO",
  "OLIVEIRA-DO-HOSPITAL",
  "OLIVEIRINHA",
  "OUREM",
  "OVAR",
  "PACOS-DE-FERREIRA",
  "PALMELA",
  "PAREDE",
  "PAREDES",
  "PAREDES-DE-COURA",
  "PENACOVA",
  "PENAFIEL",
  "PENICHE",
  "PERAFITA",
  "PESO-DA-REGUA",
  "PIEDADE",
  "PINHAL-NOVO",
  "PINHEL",
  "POMBAL",
  "PONTA-DELGADA",
  "PONTA-DO-SOL",
  "PONTE-DA-BARCA",
  "PONTE-DE-LIMA",
  "PONTE-DE-SOR",
  "PONTINHA",
  "PORTALEGRE",
  "PORTELA",
  "PORTIMAO",
  "PORTO",
  "PORTO-DE-MOS",
  "POVOA-DE-LANHOSO",
  "POVOA-DE-SANTA-IRIA",
  "POVOA-DE-VARZIM",
  "PRAIA-DA-VITORIA",
  "PRAIA-DO-CARVOEIRO",
  "QUARTEIRA",
  "QUELUZ",
  "RABO-DE-PEIXE",
  "RAMADA",
  "REBORDOSA",
  "REGUENGOS-DE-MONSARAZ",
  "RESENDE",
  "RIBEIRA-BRAVA",
  "RIBEIRA-GRANDE",
  "RIO-DE-MOURO",
  "RIO-MAIOR",
  "RIO-TINTO",
  "SABUGAL",
  "SACAVEM",
  "SALVATERRA-DE-MAGOS",
  "SANTA-CLARA",
  "SANTA-COMBA-DAO",
  "SANTA-CRUZ",
  "SANTA-IRIA-DA-AZOIA",
  "SANTAREM",
  "SANTIAGO-DO-CACEM",
  "SANTO-ANDRE",
  "SANTO-TIRSO",
  "SAO-BRAS-DE-ALPORTEL",
  "SAO-FELIX-DA-MARINHA",
  "SAO-JOAO-DA-MADEIRA",
  "SAO-JOAO-DAS-LAMPAS",
  "SAO-JOAO-DE-VER",
  "SAO-MAMEDE-DE-INFESTA",
  "SAO-MARTINHO-DO-BISPO",
  "SAO-PEDRO-DO-SUL",
  "SAO-TIAGO-DE-CUSTOIAS",
  "SATAO",
  "SEIA",
  "SEIXAL",
  "SENHORA-DA-HORA",
  "SERPA",
  "SERTA",
  "SESIMBRA",
  "SETUBAL",
  "SEVER-DO-VOUGA",
  "SILVES",
  "SINES",
  "SINTRA",
  "SOBRADO-DE-PAIVA",
  "SOBRAL-DE-MONTE-AGRACO",
  "SOBREDA",
  "SOURE",
  "TABUA",
  "TAVAREDE",
  "TAVIRA",
  "TOMAR",
  "TONDELA",
  "TORRE-DE-MONCORVO",
  "TORRES-NOVAS",
  "TORRES-VEDRAS",
  "TRANCOSO",
  "TROFA",
  "UL",
  "VAGOS",
  "VALADARES",
  "VALBOM",
  "VALE-DE-CAMBRA",
  "VALE-DE-CAVALOS",
  "VALENCA",
  "VALONGO",
  "VENDAS-NOVAS",
  "VIALONGA",
  "VIANA-DO-CASTELO",
  "VIEIRA-DO-MINHO",
  "VILA-DO-CONDE",
  "VILA-FRANCA-DE-XIRA",
  "VILA-FRANCA-DO-CAMPO",
  "VILA-FRESCAINHA",
  "VILA-NOVA-DE-CERVEIRA",
  "VILA-NOVA-DE-GAIA",
  "VILA-POUCA-DE-AGUIAR",
  "VILA-REAL",
  "VILA-REAL-DE-SANTO-ANTONIO",
  "VILA-VERDE",
  "VINHAIS",
  "VISEU",
  "VIZELA",
  "VOUZELA",
];

export default portugalCitiesDict;
