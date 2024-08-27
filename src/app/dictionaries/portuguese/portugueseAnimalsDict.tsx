const portugueseAnimalsDict = [
  "ABELHA",
  "ABELHA-AMARELA",
  "ABELHA-BRAVA",
  "ABELHA-CAGA-FOGO",
  "ABELHARUCO",
  "ABETARDA",
  "ABETOURO",
  "ABIBE",
  "ABRE-ASA",
  "ABROTEA",
  "ABUTRE",
  "ABUTRE-DAS-MONTANHAS",
  "ABUTRE-DO-EGITO",
  "ABUTRE-DO-NOVO-MUNDO",
  "ACANA",
  "ACARA",
  "ACAUA",
  "ACOR",
  "ACURANA",
  "AGULHA",
  "AGULHAO",
  "AIAI",
  "ALBATROZ",
  "ALBATROZ-DE-SOBRANCELHA",
  "ALBATROZ-GIGANTE",
  "ALCATRAZ",
  "ALCE",
  "ALFAIATE",
  "ALPACA",
  "ANACONDA",
  "ANAMBE",
  "ANAMBE-ACU",
  "ANAMBE-BRANCO",
  "ANAMBE-POMBO",
  "ANCHOVA",
  "ANDORINHA",
  "ANDORINHA-DE-PESCOCO-VERMELHO",
  "ANDORINHA-DO-MAR",
  "ANDORINHA-DO-MATO",
  "ANHUMA",
  "ANTA",
  "ANTILOPE",
  "ARANHA",
  "ARANHA-CARANGUEJEIRA",
  "ARANHA-CARANGUEJO",
  "ARANHA-FEDIDA",
  "ARAPACU",
  "ARAPONGA",
  "ARARA",
  "ARARA-AMARELA",
  "ARARA-AZUL",
  "ARARA-MACAU",
  "ARARAJUBA",
  "ARATU",
  "ARENQUE",
  "ARGANAZ",
  "ARIRANHA",
  "ARMINHO",
  "ARRAIA",
  "ASA-BRANCA",
  "ASNO",
  "ATOBA",
  "ATUM",
  "AVESTRUZ",
  "AZULAO",
  "AZULAO-BICUDO",
  "AZULAO-DO-NORDESTE",
  "AZULAO-DO-SUL",
  "BABUINO",
  "BACALHAU",
  "BACORA",
  "BACURAU",
  "BACURAU-DE-ASA-FINA",
  "BACURAU-DE-CAUDA-BRANCA",
  "BACURI",
  "BADEJO",
  "BAGRE",
  "BAIACU",
  "BAIACU-DE-ESPINHO-LISTRADO",
  "BAIACU-PAPAGAIO",
  "BALANCA-RABO",
  "BALEIA",
  "BALEIA-ANA",
  "BALEIA-AZUL",
  "BALEIA-JUBARTE",
  "BALEIA-NEGRA",
  "BALEIA-PILOTO-TROPICAL",
  "BARATA",
  "BARBADO",
  "BARBO",
  "BARBUDO-DE-COLEIRA",
  "BARBUDO-DE-PESCOCO-FERRUGEM",
  "BARRACUDA",
  "BATE-BICO",
  "BATUIRA",
  "BEIJA-FLOR",
  "BEIJA-FLOR-BRILHO-DE-FOGO",
  "BEIJA-FLOR-DE-GRAVATA-VERDE",
  "BEIJA-FLOR-DE-PEITO-AZUL",
  "BEIJA-FLOR-TESOURA",
  "BELUGA",
  "BEM-TE-VI",
  "BENEDITO",
  "BENEDITO-DE-TESTA-AMARELA",
  "BENEDITO-DE-TESTA-VERMELHA",
  "BESOURO",
  "BETARA",
  "BEZERRO",
  "BICHO-DA-SEDA",
  "BICHO-PREGUICA",
  "BICO-CHATO",
  "BICO-DE-AGULHA",
  "BICO-VIRADO",
  "BICUDO",
  "BIGUA",
  "BIJUPIRA",
  "BISAO",
  "BISONTE",
  "BOA",
  "BODE",
  "BODIAO",
  "BODIAO-DE-NORONHA",
  "BODIAO-RABO-DE-FORQUILHA",
  "BOI",
  "BOIPEBA",
  "BOIPEVA",
  "BOIPIRANGA",
  "BORBOLETA",
  "BOTO",
  "BRIBA",
  "BUDIAO",
  "BUFALO",
  "BUFO",
  "BUGIO",
  "BURRO",
  "BUTEO",
  "BUTIO",
  "CABRA",
  "CABRITO",
  "CACAO",
  "CACAO-ANJO",
  "CACAO-BAGRE",
  "CACAO-DE-BICO-DOCE",
  "CACATUA",
  "CACHALOTE",
  "CACHORRO",
  "CACHORRO-DO-MANGUE",
  "CACHORRO-DO-MATO",
  "CACHORRO,-CAO",
  "CADELA",
  "CAGADO",
  "CAGARRA",
  "CAIMAN-CROCODILUS",
  "CAIMAO",
  "CALANGO",
  "CAMALEAO",
  "CAMARAO",
  "CAMARAO-D'AGUA-DOCE",
  "CAMARAO-DE-AREIA",
  "CAMARAO-DE-SETE-BARBAS",
  "CAMELO",
  "CAMELUS-BACTRIANUS",
  "CAMUNDONGO",
  "CAMURCA",
  "CANARIO",
  "CANARIO-DE-SAPE",
  "CANARIO-DO-BREJO",
  "CANARIO-PARDINHO",
  "CANDIRU",
  "CANGATI",
  "CANGURU",
  "CANIS-LUPUS",
  "CAO-DA-PRADARIA",
  "CAPIVARA",
  "CARACAL",
  "CARACOL",
  "CARAMUJO",
  "CARANGUEJEIRA",
  "CARANGUEJO",
  "CARANHA",
  "CARAVELA-PORTUGUESA",
  "CARDEAL",
  "CARNEIRO",
  "CARPA",
  "CARRAPATO",
  "CARRICA",
  "CASCAVEL",
  "CASCUDO",
  "CASTOR",
  "CATUA",
  "CAVALA",
  "CAVALO",
  "CAVALO-MARINHO",
  "CAXINGUELE",
  "CEGONHA",
  "CENTOPEIA",
  "CERVO",
  "CHACAL",
  "CHERNE",
  "CHIMPANZE",
  "CHINCHILA",
  "CHITA",
  "CHOLOEPUS-DIDACTYLUS",
  "CHRYSOCYON-BRACHYURUS",
  "CIGANA",
  "CIGARRA",
  "CISNE",
  "COALA",
  "COATI",
  "COBAIA",
  "COBRA",
  "CODORNA",
  "COELHO",
  "COIOTE",
  "CONDOR",
  "CORAL",
  "CORCA",
  "CORUJA",
  "CORVINA",
  "CORVO",
  "COTOVIA",
  "CROCODILO",
  "CROCODYLUS-ACUTUS",
  "CROTALUS-DURISSUS",
  "CUCO",
  "CUICA",
  "CUPIM",
  "CURIO",
  "CUTIA",
  "DALFINHO",
  "DAMAO",
  "DANCADOR",
  "DANCADOR",
  "DANCADOR-DE-CAUDA-GRADUADA",
  "DANCADOR-DE-COROA-DOURADA",
  "DANCADOR-DE-CRISTA",
  "DANCADOR-DO-TEPUI",
  "DANCARINO",
  "DANCARINO-DE-CRISTA-AMARELA",
  "DANCARINO-DE-CRISTA-LARANJA",
  "DANCARINO-DE-GARGANTA-BRANCA",
  "DANCARINO-OLIVACEO",
  "DEGOLADO",
  "DEGOLADO-DE-CABECA-VERMELHA",
  "DEGU",
  "DELOMYS-SUBLINEATUS",
  "DEMONIO-DA-TASMANIA",
  "DIABLOTIM",
  "DIABO-DA-TASMANIA",
  "DIABO-DA-TASMANIA",
  "DIABO-ESPINHOSO",
  "DIABO-MARINHO",
  "DIAMANTE-DE-GOULD",
  "DIK-DIK",
  "DINGO",
  "DINOSSAURO",
  "DIUCA",
  "DODO",
  "DODO",
  "DODO",
  "DOJO",
  "DOM-FAFE",
  "DONINHA",
  "DONINHA-AMAZONICA",
  "DOURADA",
  "DOURADO",
  "DOURADO",
  "DOURADO-DO-MAR",
  "DRAGAO",
  "DRAGAO",
  "DRAGAO",
  "DRAGAO-DE-KOMODO",
  "DRAGAO-DO-BANHADO",
  "DRAGAO-DO-BANHADO",
  "DRAGAO-DO-BREJO",
  "DRAGAO-VOADOR",
  "DRAGAO-VOADOR",
  "DROMEDARIO",
  "DRONGO",
  "DRONGO-DE-CAUDA-FORCADA",
  "DRONGO-DE-CAUDA-QUADRADA",
  "DUGAO",
  "DUGONGO",
  "DUGONGO",
  "EILEMA",
  "EIRA-BARBARA",
  "ELANDE",
  "ELEFANTE",
  "ELEFANTE-AFRICANO",
  "ELEFANTE-ASIATICO",
  "ELEFANTE-MARINHO",
  "EMA",
  "EMU",
  "ENCHOVA",
  "ENCHOVA-PRETA",
  "ENCONTRO",
  "ENCONTROS-VERDES",
  "ENFERRUJADINHO",
  "ENFERRUJADO",
  "ENGUIA",
  "ENGUIA-D'AGUA-DOCE",
  "ENGUIA-DO-MAR",
  "ENGUIA-ELETRICA",
  "ENHO",
  "ENTUFADO",
  "ENTUFADO-BAIANO",
  "ENXADA",
  "EREMOMELA",
  "EREMOMELA-DE-BARRETE-VERDE",
  "EREMOMELA-DE-BARRIGA-AMARELA",
  "ESCARAVELHO",
  "ESCORPIAO",
  "ESCREVEDEIRA",
  "ESCREVEDEIRA-AMARELA",
  "ESCREVEDEIRA-DE-GARGANTA-PRETA",
  "ESCREVEDEIRA-DE-PEITO-CANELADO",
  "ESMERALDA-DE-CAUDA-AZUL",
  "ESMERILHAO",
  "ESPADARTE",
  "ESPONJA",
  "ESPONJA-D'AGUA-DOCE",
  "ESQUILO",
  "ESQUILO-VERMELHO",
  "ESQUILO-VOADOR",
  "ESTALADOR",
  "ESTORNINHO",
  "ESTORNINHO-DE-BARRIGA-PRETA",
  "ESTORNINHO-DE-DORSO-VIOLETA",
  "ESTORNINHO-DE-ORELHA-AZUL",
  "ESTORNINHO-ROSADO",
  "ESTRELA-DO-MAR",
  "ESTRELA-DO-NORTE",
  "ESTRELINHA",
  "ESTRELINHA-AMETISTA",
  "ESTRELINHA-DE-CABECA-LISTADA",
  "ESTRELINHA-DE-POUPA",
  "ESTURJAO",
  "EUCLIDIA",
  "FACOQUERO",
  "FAIGAO-DE-BICO-FINO",
  "FAISAO",
  "FAISAO-DOURADO",
  "FALAROPO-DE-BICO-FINO",
  "FALCAO",
  "FALCAO-CABURE",
  "FALCAO-DE-PEITO-VERMELHO",
  "FALCAO-PEREGRINO",
  "FELIPE-DO-TEPUI",
  "FELIS-CONCOLOR",
  "FELIS-DOMESTICUS",
  "FELIS-PARDALIS",
  "FELIS-WIEDII",
  "FELOSA",
  "FENECO",
  "FERREIRINHO",
  "FIGUINHA",
  "FIGUINHA-AMAZONICA",
  "FIGUINHA-DE-RABO-CASTANHO",
  "FIGUINHA-DO-MANGUE",
  "FILIPE",
  "FIM-FIM",
  "FLAMINGO",
  "FLAUTIM",
  "FOCA",
  "FOGUEIRA",
  "FORMIGA",
  "FORMIGA-ACUCAREIRA",
  "FORMIGA-CAIAPO",
  "FORMIGA-CARREGADEIRA",
  "FOSSA",
  "FRACA-CRISTATA",
  "FRACA-DA-GUINE",
  "FRAGATA",
  "FRANCISCANA",
  "FRANCOLIM",
  "FRANGO-D'AGUA",
  "FREGATA-MINOR",
  "FREIRA",
  "FREIRA-DO-ALTO",
  "FREIRINHA",
  "FRISADA",
  "FRUXU",
  "FUINHA",
  "FULMAR",
  "FULMAR-GLACIAL",
  "FURA-BARREIRA",
  "FURA-BUXO-DE-CARA-CINZA",
  "FURA-FLOR",
  "FURA-FLOR-ESCAMADO",
  "FURA-FLOR-GRANDE",
  "FURA-PASTOS",
  "FURAO",
  "FURAO-GRANDE",
  "FURAO-PEQUENO",
  "FURNARIUS-RUFUS",
  "FURRIEL",
  "FUSELO",
  "GAFANHOTO",
  "GAFANHOTO-BANDEIRA",
  "GAFANHOTO-VERDE",
  "GAIO",
  "GAIVOTA",
  "GAIVOTA-MARIA-VELHA",
  "GAIVOTA-PRETA",
  "GAIVOTA-RAPINEIRA",
  "GAIVOTAO",
  "GALAGO",
  "GALHUDO",
  "GALINHA",
  "GALINHA-D'AGUA",
  "GALINHA-D'ANGOLA",
  "GALINHA-DO-MATO",
  "GALINHOLA",
  "GALITO",
  "GALO",
  "GALO-DA-CAMPINA-DA-AMAZONIA",
  "GALO-DA-COSTA",
  "GALO-DA-SERRA",
  "GAMBA",
  "GAMO",
  "GANSO",
  "GARAJU",
  "GARCA",
  "GARCA-AZUL",
  "GARCA-BRANCA-GRANDE",
  "GARCA-REAL",
  "GARIBALDI",
  "GAROUPA",
  "GAROUPA-CRIOULA",
  "GAROUPA-VERMELHA",
  "GARRICHA",
  "GARRINCHA",
  "GARRINCHAO-DE-BARRIGA-VERMELHA",
  "GARRINCHAO-DE-BICO-GRANDE",
  "GATO",
  "GATO-DO-MATO",
  "GATO-DOS-PAMPAS",
  "GATO-MARACAJA",
  "GATO-MOURISCO",
  "GATURAMO",
  "GAURO",
  "GAVIAL",
  "GAVIAO",
  "GAVIAO-AZUL",
  "GAVIAO-CAIPIRA",
  "GAVIAO-CARIJO",
  "GAZELA",
  "GECO",
  "GENETA",
  "GEOPHAPS-PLUMIFERA",
  "GEOPHAPS-SCRIPTA",
  "GERBO",
  "GIBAO",
  "GIRAFA",
  "GIRINO",
  "GLUTAO",
  "GNU",
  "GOETE",
  "GOLFINHO",
  "GOLINHO",
  "GOMESOPHIS-BRASILIENSIS",
  "GORAZ",
  "GORDINHO",
  "GORETE",
  "GORILA",
  "GRALHA",
  "GRANADEIRO",
  "GRANTIELLA-PICTA",
  "GRAUNA",
  "GRAVETEIRO",
  "GRAXAIM",
  "GRAZINA",
  "GRIFO",
  "GRILO",
  "GRITADOR",
  "GROU",
  "GUACHARO",
  "GUAIQUICA",
  "GUAIUBA",
  "GUAIVIRA",
  "GUANACO",
  "GUARA",
  "GUARA",
  "GUARACABUCU",
  "GUARACAVA",
  "GUARACAVUCU",
  "GUARANTA",
  "GUARAXAIM",
  "GUARDA-RIOS",
  "GUARIBA",
  "GUARIJUBA",
  "GUARIJUBA",
  "GUARU",
  "GUAXE",
  "GUAXINIM",
  "GUEPARDO",
  "GUIGO",
  "GUINCHO",
  "GUINUMBI",
  "GURIJUBA",
  "GURINHATA",
  "HADDOCK",
  "HADOQUE",
  "HADOQUE",
  "HALICORES",
  "HAMSTER",
  "HAMSTER-DE-CAUDA-LONGA",
  "HAMSTER-LISTRADO-CHINES",
  "HAMSTER-TIBETANO",
  "HAMSTER-TURCO",
  "HARPIA",
  "HIENA",
  "HIENA-CASTANHA",
  "HIENA-LISTRADA",
  "HIENA-MALHADA",
  "HIENA-RISCADA",
  "HILOQUERO",
  "HIPOPOTAMO",
  "HIPOPOTAMO-PIGMEU",
  "HIRACE",
  "HIRAX",
  "HIRAX",
  "HOLOCHILUS-BRASILIENSIS",
  "HUIA",
  "IAQUE",
  "IGUANA",
  "IGUANA-DO-DESERTO",
  "IGUANA-MARINHO",
  "IGUANARA",
  "IGUANINHA-RAJADA",
  "IGUANINHA-VERDE",
  "IMPALA",
  "INAMU",
  "INAMU-PRETO",
  "INAMUACU",
  "INAMUCUA",
  "INAMUGUACU",
  "INAMUPIXUNA",
  "INAMUQUIA",
  "INDICADOR",
  "INDICADOR-DE-BICO-AGUCADO",
  "INDICADOR-DE-GARGANTA-MALHADA",
  "INDICADOR-MALHADO",
  "INDICADOR-PIGMEU",
  "INDRI",
  "INHACOSO",
  "INHALA",
  "INHAMBU",
  "INHAMBU-ANHANGA",
  "INHAMBU-CARAPE",
  "INHAMBU-CARIJO",
  "INHAMBU-CHORORO",
  "INHAMBU-DE-CABECA-VERMELHA",
  "INHAMBU-GUACU",
  "INHAMBU-PRETO,-INAMBU-PRETO",
  "INHAMBU,-INAMBU",
  "INHAMBUACU,-INAMBUACU",
  "INHAMBUAPE",
  "INHAMBUCUA,-INAMBUCUA",
  "INHAMBUGUACU,-INAMBUGUACU",
  "INHAMBUI",
  "INHAMBUPIXUNA,-INAMBUPIXUNA",
  "INHAMBUQUIA,-INAMBUQUIA",
  "INHAPIM",
  "INHAPUPE",
  "INHAUMA",
  "INSEPARAVEL",
  "INSEPARAVEL-DE-CABECA-CINZENTA",
  "INSEPARAVEL-DE-NIASSA",
  "IPECUACAMIRA",
  "IPECUATI",
  "IRAPUA",
  "IRAPUA",
  "IRAPUA",
  "IRARA",
  "IRATAUA",
  "IRATAUA-GRANDE",
  "IRATAUA-PEQUENO",
  "IRATIM",
  "IRATIM",
  "IRAUNA",
  "IRAUNA-DA-GUIANA",
  "IRAUNA-DE-BICO-BRANCO",
  "IRAUNA-DO-NORTE",
  "IRAUNA-GRANDE",
  "IRAUNA-VELADA",
  "IRAXIM",
  "IRERE",
  "IRRE",
  "ITAPEMA",
  "JABIRU",
  "JABIRU",
  "JABURU",
  "JABURU-MOLEQUE",
  "JABUTI",
  "JABUTI",
  "JABUTI-MANCHADO",
  "JABUTIBOIA",
  "JABUTIM",
  "JACAMARACU",
  "JACAMARICI",
  "JACAMI",
  "JACAMIM",
  "JACAMIM-COPEJUBA",
  "JACAMIM-DE-COSTAS-BRANCAS",
  "JACAMIM-PRETO",
  "JACANA",
  "JACARE",
  "JACARE-ACU",
  "JACARE-COROA",
  "JACARE-DE-PAPO-AMARELO",
  "JACARERANA",
  "JACARETINGA",
  "JACAREUNA",
  "JACU",
  "JACU-CIGANO",
  "JACU-ESTALO",
  "JACU-ESTALO-ESCAMOSO",
  "JACUACU",
  "JACUCACA",
  "JACUGUACU",
  "JACUMIRIM",
  "JACUNDA",
  "JACUNDA-PIRANGA",
  "JACUNDA-VERDE",
  "JACUPARA",
  "JACUPEBA",
  "JACUPEMBA",
  "JACURUTU",
  "JACURUXI",
  "JACUTINGA",
  "JAGUACINIM",
  "JAGUAR",
  "JAGUARACA",
  "JAGUARE",
  "JAGUARECA",
  "JAGUARETE",
  "JAGUARUNDI",
  "JAGUATIRICA",
  "JAMANTA",
  "JANAUI",
  "JANAUIRA",
  "JANDAIA",
  "JAO",
  "JAPACANIM",
  "JAPU",
  "JAPUACU",
  "JAPUGUACU",
  "JARACAMBEVA",
  "JARAQUI",
  "JARARACA",
  "JARARACA-DE-BARRIGA-PRETA",
  "JARARACA-DO-CERRADO",
  "JARARACA-DO-RABO-BRANCO",
  "JARARACUCU",
  "JARARAQUINHA",
  "JARATATACA",
  "JARITATACA",
  "JARITATACA",
  "JATAI",
  "JATUARANA",
  "JAU",
  "JAVALI",
  "JEGUE",
  "JERIPOCA",
  "JERUVA",
  "JIBOIA",
  "JOANA-GUENZA",
  "JOANINHA",
  "JOAO-BARBUDO",
  "JOAO-BOBO",
  "JOAO-CONGO",
  "JOAO-CORTA-PAU",
  "JOAO-DE-BARRO",
  "JOAO-DO--TEPUI",
  "JOAO-DO-PANTANAL",
  "JOAO-PEDREIRO",
  "JOAO-TENENEM",
  "JUCURUTU",
  "JUMENTO",
  "JUNDIA",
  "JUNDIA-DA-LAGOA",
  "JUPARA",
  "JURITI",
  "JURITI-AZUL",
  "JURITI-VERDADEIRA",
  "JURITI-VERMELHA",
  "JURITIPIRANGA",
  "JURUPARA",
  "JURUPENSEM",
  "JURUPOCA",
  "JURUVA",
  "JURUVIARA",
  "JURUVIARA-BOREAL",
  "JURUVIARA-VERDE-AMARELADA",
  "KAKAPO",
  "KEA",
  "KINGUIO",
  "KINGUIO-BOLHA",
  "KINGUIO-CABECA-DE-LEAO",
  "KINGUIO-COMETA",
  "KINGUIO-ORANDA",
  "KINGUIO-TELESCOPIO",
  "KIWI",
  "KOALA",
  "KOOKABURRA",
  "KOWARI",
  "KOWARI",
  "KRILL",
  "KRILL-ANTARTICO",
  "KRILL-DO-NORTE",
  "KRILL-DO-PACIFICO",
  "KUDU",
  "LACRAIA",
  "LAGARTA",
  "LAGARTEIRO",
  "LAGARTIXA",
  "LAGARTIXA-DA-AREIA",
  "LAGARTIXA-DAS-DUNAS",
  "LAGARTIXA-DE-DEDOS-DENTEADOS",
  "LAGARTIXA-DO-MATO",
  "LAGARTIXA-IBERICA",
  "LAGARTIXA-PRETA",
  "LAGARTO",
  "LAGOPODE",
  "LAGOSTA",
  "LAGOSTIM",
  "LAMA-GLAMA",
  "LAMBARI",
  "LAMPREIA",
  "LAPARO",
  "LAVADEIRA",
  "LAVAGANTE",
  "LAVERCA",
  "LEAO",
  "LEAO-MARINHO",
  "LEBRE",
  "LEIRAO",
  "LEMINGUE",
  "LEMURE",
  "LENHEIRO",
  "LEONTOPITHECUS-ROSALIA",
  "LEOPARDO",
  "LEOPON",
  "LESMA",
  "LHAMA",
  "LIBELLULA-LINNAEUS",
  "LIBELULA",
  "LICRANCO",
  "LIGRE",
  "LIMPA-FOLHA",
  "LIMPA-FOLHA-COROADO",
  "LIMPA-FOLHA-DE-BICO-VIRADO",
  "LIMPA-FOLHA-DE-CAUDA-RUIVA",
  "LIMPA-FOLHA-DO-BREJO",
  "LIMPA-VIDRO",
  "LIMULO",
  "LINCE",
  "LINGUADO",
  "LOBO",
  "LOBO-CINZENTO",
  "LOBO-DO-MAR",
  "LOBO-GUARA",
  "LOBO-MARINHO",
  "LOBO-VERMELHO",
  "LOMBRIGA",
  "LONTRA",
  "LORIS",
  "LOUVA-A-DEUS",
  "LUGRE",
  "LULA",
  "LUTRA-LONGICAUDIS",
  "MACACO",
  "MACACO-ARANHA",
  "MACACO-BARRIGUDO",
  "MACACO-CABELUDO",
  "MACACO-NARIGUDO",
  "MACACO-PREGO",
  "MACARICO",
  "MACARICO-DE-BICO-BRANCO",
  "MACARICO-DE-BICO-TORTO",
  "MACARICO-DO-CAMPO",
  "MACARICO-PINTADO",
  "MACUCO",
  "MACUCO-DO-PANTANAL",
  "MACURU",
  "MACURU-DE-PEITO-MARROM",
  "MACURU-DE-PESCOCO-BRANCO",
  "MACURU-PINTADO",
  "MAE-DA-LUA",
  "MAE-DE-TAOCA",
  "MAGUARI",
  "MAGUARIM",
  "MAITACA",
  "MAITACA",
  "MAITACA-AZUL",
  "MAITACA-DO-SUL",
  "MAMUTE",
  "MANATI",
  "MANATIM",
  "MANATIM",
  "MANDA-LUA",
  "MANDI",
  "MANDIACU",
  "MANDIGUACU",
  "MANDIM",
  "MANDRIL",
  "MANGANGA",
  "MANGONA",
  "MANGUSTO",
  "MANJUBA",
  "MANJUBAO",
  "MANTA",
  "MAPARA",
  "MARABU",
  "MARACACHAO",
  "MARACANA",
  "MARIMBONDO",
  "MARIPOSA",
  "MARIPOSA-IMPERADOR",
  "MARIQUIM,-MIRIQUI",
  "MARIQUINHA",
  "MARIQUITA",
  "MARISCO",
  "MARITACA",
  "MARITACA",
  "MARKHOR",
  "MARLIM",
  "MARMOTA",
  "MARRECA",
  "MARRECO",
  "MARRECO",
  "MARTA",
  "MARTIM-PESCADOR",
  "MASSARONGO",
  "MASTODONTE",
  "MATRACAO",
  "MATRINXA",
  "MATUPIRI",
  "MAU",
  "MAXALALAGA",
  "MEDUSA",
  "MELHARUCO",
  "MELRO",
  "MELRO-AMARELO",
  "MELRO-DE-PESCOCO-AMARELO",
  "MELRO-PINTADO",
  "MERGANSO",
  "MERGULHAO",
  "MERLUZA",
  "MERO",
  "MERO-PRETO",
  "MEXILHAO",
  "MEXILHAO-DO-MANGUE",
  "MEXILHAO-MARINHO",
  "MICHOLE",
  "MICO",
  "MICO-LEAO-DOURADO",
  "MICO-PRETO",
  "MIGALA",
  "MILHAFRE",
  "MILHAROS",
  "MILHEIROS",
  "MINEIRINHO",
  "MINHOCA",
  "MIRAGUAIA",
  "MIXILA",
  "MIXOLE",
  "MOA",
  "MOBELHA",
  "MOCHO",
  "MOCHO-CARIJO",
  "MOCHO-NEGRO",
  "MOCHO-ORELHUDO",
  "MOCO",
  "MOLEIRO",
  "MONO",
  "MONO",
  "MORCEGO",
  "MORCEGO-DO-MAR",
  "MORCEGO-VAMPIRO",
  "MOREIA",
  "MOREIA-DO-MANGUE",
  "MOREIA-PINTADA",
  "MOREIATIM",
  "MORGANHO",
  "MORSA",
  "MOSCA",
  "MOSCA-DE-CASA",
  "MOSCA-DE-FOGO",
  "MOSCA-DOMESTICA",
  "MOSQUITO",
  "MOSQUITO-DA-DENGUE",
  "MOSQUITO-DA-MALARIA",
  "MOSQUITO-PREGO",
  "MUCUA",
  "MUCUM",
  "MUCURANA",
  "MUFLAO",
  "MULA",
  "MURIQUI",
  "MURIQUINA",
  "MURUCUTUCA",
  "MURUCUTUTU",
  "MUSARANHO",
  "MUSARANHO",
  "NAJA",
  "NAJA-CUSPIDEIRA",
  "NAJA-INDIANA",
  "NAJA-MOSSAMBICA",
  "NAJA-NIVEA",
  "NAMBU",
  "NAMBU",
  "NAMORADO",
  "NANDAIA",
  "NANDAIA",
  "NANDINIA",
  "NANDU,-NHANDU",
  "NARCEJA",
  "NARCEJA-COMUM",
  "NARCEJA-DE-BICO-TORTO",
  "NARCEJA-DE-PULITZER",
  "NARCEJA-GALEGA",
  "NARCEJA-MIUDA",
  "NARCEJA-MUDA",
  "NARCEJA-PEQUENA",
  "NARCEJA-PINTADA",
  "NARCEJA-REAL",
  "NARCEJAO",
  "NARCEJINHA",
  "NARVAL",
  "NAUTILO",
  "NEGRINHO",
  "NEGRINHO",
  "NEGRINHO-DO-MATO",
  "NEINEI",
  "NEON",
  "NEON",
  "NEON",
  "NHACUNDA",
  "NHAMBIBOROROCA",
  "NHAMBU",
  "NHANDAIA",
  "NHANDIA",
  "NHANDUGUACU",
  "NIALA",
  "NILGO",
  "NIQUIM",
  "NOITIBO",
  "NOITIBO-DA-EUROPA",
  "NOITIBO-DE-NUCA-VERMELHA",
  "NOITIBO-DE-PESCOCO-DOURADO",
  "NOITIBO-DO-CREPUSCULO",
  "NOITIBO-RABILONGO",
  "NOITIBO-SARDENTO",
  "NOIVINHA",
  "NOIVINHA-BRANCA",
  "NOIVINHA-CASTANHA",
  "NOIVINHA-COROADA",
  "NOIVINHA-DE-RABO-PRETO",
  "NUMBAT",
  "NUTRIA",
  "OCAPI",
  "OLHETE",
  "OLHO--BRANCO",
  "OLHO-BRANCO-DO-CABO",
  "OLHO-DE-BOI",
  "OLHO-DE-CAO",
  "OLHO-FALSO",
  "ONCA",
  "ONCA-PINTADA",
  "ONCA-PRETA",
  "ONCINHA",
  "ORANGOTANGO",
  "ORANGOTANGO-DE-SUMATRA",
  "ORCA",
  "ORCA-PIGMEIA",
  "ORICTEROPO",
  "ORNITORRINCO",
  "OSCAR",
  "OSGA",
  "OSGA-DAS-SELVAGENS",
  "OSGA-MOURA",
  "OSGA-TURCA",
  "OSTRA",
  "OSTRA-AMERICANA",
  "OSTRA-CHATA",
  "OSTRA-DO-MANGUE",
  "OSTRA-JAPONESA",
  "OSTRACEIRO",
  "OSTRACEIRO-DAS-CANARIAS",
  "OSTRACEIRO-EUROPEU",
  "OTARIA",
  "OTOCION",
  "OURICO",
  "OURICO-CACHEIRO",
  "OURICO-DO-MAR",
  "OVELHA",
  "PANDA",
  "PANTERA",
  "PAPAGAIO",
  "PARDAL",
  "PASSARO",
  "PATO",
  "PAVAO",
  "PEIXE",
  "PEIXE-BOI",
  "PELICANO",
  "PERCEVEJO",
  "PERERECA",
  "PERIQUITO",
  "PERNILONGO",
  "PERU",
  "PESCADA",
  "PICA-PAU",
  "PINGUIM",
  "PIOLHO",
  "PIRANHA",
  "PIRARUCU",
  "POLVO",
  "POMBO",
  "PONEI",
  "PORCO",
  "PORCO-ESPINHO",
  "PORQUINHO-DA-INDIA",
  "PREA",
  "PREGUICA",
  "PULGA",
  "QUAGA",
  "QUATI",
  "QUATI-DE-BANDO",
  "QUATI-DE-VARA",
  "QUATIMIRIM",
  "QUATIMUNDEU",
  "QUATIPURU",
  "QUATIPURU",
  "QUATIPURUACU",
  "QUATIPURUZINHO",
  "QUEBRA-NOZES",
  "QUEBRA-OSSOS",
  "QUEBRA-SEMENTES-DO-NIASSA",
  "QUEIXADA",
  "QUEIXADA-RUIVA",
  "QUELEA",
  "QUELEA-CARDEAL",
  "QUELEA-DE-BICO-VERMELHO",
  "QUELEA-DE-CABECA-VERMELHA",
  "QUELONIOS",
  "QUEM-QUEM",
  "QUEM-QUEM-DE-MONTE",
  "QUEM-QUEM-MINEIRA",
  "QUEM-QUEM-MINEIRA-DE-DUAS-CORES",
  "QUEM-TE-VESTIU",
  "QUERO-QUERO",
  "QUETEZAL",
  "QUETZAL",
  "QUETZAL",
  "QUIMERA",
  "QUIMERA-ANTARTICA",
  "QUIRIQUIRI",
  "QUIRQUINCHO",
  "QUOLL",
  "RA",
  "RA-DE-FOCINHO-PONTIAGUDO",
  "RA-DE-UNHAS-AFRICANA",
  "RA-IBERICA",
  "RA-VERDE",
  "RABICURTA",
  "RABIRRUIVO",
  "RABO-AMARELO",
  "RABO-BRANCO",
  "RABO-DE-ARAME",
  "RABO-DE-ESCRIVAO",
  "RABO-DE-ESPINHO",
  "RABO-DE-JUNCO",
  "RABO-DE-PALHA",
  "RABO-ESPINHOSO",
  "RABO-MOLE-DA-SERRA",
  "RABUDINHO",
  "RABUDO",
  "RAIA",
  "RAIA-BORBOLETA",
  "RAIA-ELETRICA",
  "RAIA-LIXA",
  "RAPAZINHO",
  "RAPOSA",
  "RAPOSA-DO-CAMPO",
  "RAPOSA-VERMELHA",
  "RAPOSA-VOADORA",
  "RAPOSAO",
  "RATAO-DO-BANHADO",
  "RATAZANA",
  "RATO",
  "RATO-BRANCO",
  "RATO-CALUNGA",
  "RATO-CHINCHILA",
  "RATO-CORO",
  "REALITO",
  "REI-DO-BOSQUE",
  "RELA",
  "REMEIRO",
  "REMORA",
  "RENA",
  "RENDADINHO",
  "RENDEIRA",
  "RHEA-AMERICANA",
  "RINOCERONTE",
  "RISADINHA",
  "ROAZ-CORVINEIRO",
  "ROBALO",
  "RODOSTOMO",
  "ROLA",
  "ROLA-AZUL",
  "ROLA-CARIJO",
  "ROLA-RABILONGA",
  "ROLIEIRO",
  "ROLINHA",
  "ROMBUDO",
  "ROUXINOL",
  "ROUXINOL-DO-CAMPO",
  "ROUXINOL-DOS-PANTANOS",
  "SABIA",
  "SABIA-COLEIRA",
  "SABIA-DA-CAMPINA",
  "SABOGA",
  "SACARRABOS",
  "SACI",
  "SAGUI",
  "SAGUI",
  "SAGUI-CARATINGA",
  "SAGUI-IMPERADOR",
  "SAGUIM",
  "SAGUIRU",
  "SAI",
  "SAI-ACU-AZUL",
  "SAI-ANDORINHA",
  "SAICANGA",
  "SAIRA",
  "SAIRA-DE-CHAPEU-PRETO",
  "SAIRA-DOURADINHA",
  "SALAMANDRA",
  "SALAMANTA",
  "SALEMA",
  "SALMAO",
  "SALTEIRA",
  "SANA",
  "SANA-CARIJO",
  "SANA-DE-SAMAMBAIA",
  "SANGUESSUGA",
  "SANHACO",
  "SANHACO-DA-AMAZONIA",
  "SANHACO-DE-MAMOEIRO",
  "SANHACU",
  "SAPATEIRA",
  "SAPO",
  "SAPO-BOI",
  "SAPO-CURURU",
  "SARACURA",
  "SARACURA-DO-MANGUE",
  "SARACURA-SANA",
  "SARACURACU",
  "SARACURUCU",
  "SARAPO",
  "SARDA",
  "SARDAO",
  "SARDINHA",
  "SARDINHA-AMAZONICA",
  "SARDINHA-DE-AGUA-DOCE",
  "SARGENTO",
  "SARIEMA",
  "SARIGUE",
  "SARIPOCA",
  "SARUE",
  "SAUDADE",
  "SAURA",
  "SAUVA",
  "SAVACU",
  "SAVELHA",
  "SCOPUS-UMBRETTA",
  "SEBINHO",
  "SECRETARIO",
  "SEIXOEIRA",
  "SERELEPE",
  "SERIEMA",
  "SERIEMA",
  "SERPENTE",
  "SERTANEJO-ESCURO",
  "SERVAL",
  "SETE-CORES-DA-AMAZONIA",
  "SIAGONODON-SEPTEMSTRIATUS",
  "SINGANGA",
  "SIRI",
  "SIRIPIPI-DE-BENGUELA",
  "SISAO",
  "SMILODON",
  "SOCO",
  "SOCO-BOI",
  "SOCO-CRIMINOSO",
  "SOCOI",
  "SOCOI-AMARELO",
  "SOCOI-VERMELHO",
  "SOLENODONTE",
  "SOLHA",
  "SOROROCA",
  "SOVELA-VERMELHA",
  "SOVI",
  "SPILOTES-PULLATUS",
  "STENOCERCUS-FIMBRIATUS",
  "STERCORARIUS-SKUA",
  "SUACUBOIA",
  "SUCUARANA",
  "SUCURI",
  "SUIRIRI",
  "SULA-LEUCOGASTER",
  "SURICATA",
  "SURICATE",
  "SURICATE",
  "SURUBI",
  "SURUBI",
  "SURUBIM",
  "SURUCUA",
  "SURUCUA-PEQUENO",
  "SURUCUA-TATA",
  "SURUCUCU",
  "SURUCUCU-DE-FOGO",
  "SURUCUCU-DO-PANTANAL",
  "SURUCUCURANA",
  "TAGARELA-EUROPEU",
  "TAINHA",
  "TAMANDUA",
  "TAMANDUA-ACU",
  "TAMANDUA-BANDEIRA",
  "TAMANDUA-MIRIM",
  "TAMANDUAI",
  "TAMBORIL",
  "TANGARA",
  "TAPICURU",
  "TAPIR",
  "TAPIRUS-TERRESTRES",
  "TAPITI",
  "TARAMBOLA",
  "TARANTULA",
  "TARSIO",
  "TARTARUGA",
  "TARTARUGA-DA-AMAZONIA",
  "TARTARUGA-DE-PENTE",
  "TARTARUGA-DO-PANTANAL",
  "TARTARUGA-VERDE",
  "TATU",
  "TATU-BOLA",
  "TATU-MIRIM",
  "TATU-RABO-DE-COURO",
  "TATUI",
  "TAYASSU-TAJACU",
  "TECELAO",
  "TECELAO-DE-BICO-VERMELHO",
  "TECELAO-DE-CABECA-PRETA",
  "TECELAO-MALHADO",
  "TEIU",
  "TENREQUE",
  "TENTILHAO",
  "TEQUE-TEQUE",
  "TETRA",
  "TEXUGO",
  "THALASSARCHE-CAUTA",
  "THALASSARCHE-MELANOPHRIS",
  "TICO-TICO",
  "TICO-TICO-DO-MATO",
  "TICO-TICO-DO-TEPUI",
  "TICO-TICO-REI",
  "TIGRE",
  "TILAPIA",
  "TIMBORE",
  "TOLIPEUTES-MATACUS",
  "TONINHA",
  "TORDEIA",
  "TORDO",
  "TORORO",
  "TOUPEIRA",
  "TOURO",
  "TOUTINEGRA",
  "TRACA",
  "TRACAJA",
  "TRAIRA",
  "TRAIRAO",
  "TREPADOR",
  "TRETIOSINCUS-AGILIS",
  "TRICHIURUS-LEPTUROS",
  "TRILEPIDA-JANI",
  "TRITAO",
  "TROMBETEIRO",
  "TROPIDURO",
  "TRUIRAPEVA",
  "TRUTA",
  "TUBARAO",
  "TUBARAO-AZUL",
  "TUBARAO-BALEIA",
  "TUBARAO-BRANCO",
  "TUBARAO-LIXA",
  "TUBARAO-MARTELO",
  "TUBARAO-TIGRE",
  "TUCANO",
  "TUCO-TUCO",
  "TUCUNARE",
  "TUCUXI",
  "TUIM",
  "TUIUIU",
  "TUPAIA",
  "TUPINAMBIS-TEGUIXIN",
  "TURDUS-MERULA",
  "TURNIX-PYRRHOTHORAX",
  "TURU-TURU",
  "TYPHLOPS-AMOIPIRA",
  "UACARI",
  "UACARI-BRANCO",
  "UACARI-PRETO",
  "UACARI-VERMELHO",
  "UARU",
  "UARUURA",
  "UBARANA-FOCINHO-DE-RATO",
  "UDU",
  "UDU-DE-BICO-LARGO",
  "UDU-DE-COROA-AZUL",
  "UI-PI",
  "UIRACU",
  "UIRACU-FALSO",
  "UIRACU-VERDADEIRO",
  "UIRAMIRI",
  "UIRAPURU",
  "UIRAPURU-DE-CABECA-BRANCA",
  "UIRAPURU-DE-CABECA-VERMELHA",
  "UIRAPURU-DE-COSTA-AZUL",
  "UIRAPURU-LARANJA",
  "UIRAPURU-VERDADEIRO",
  "UNAU",
  "UNHA-LONGA",
  "UNHA-LONGA-DE-GARGANTA-LARANJA",
  "UNICORNIO",
  "UPEROLEIA-BOREALIS",
  "UPEROLEIA-ORIENTALIS",
  "UPEROLEIA-TALPA",
  "URAEGINTHUS-CYANOCEPHALUS",
  "URAEGINTHUS-GRANATINUS",
  "URANOSCODON-SUPERCILIOSUS",
  "URITUTU",
  "UROSTICTE-RUFICRISSA",
  "UROTRYGON-CHILENSIS",
  "UROTRYGON-MICROPHTHALMUM",
  "URSO",
  "URSO-CINZENTO",
  "URSO-DO-HIMALAIA",
  "URSO-NEGRO",
  "URSO-PANDA",
  "URSO-PARDO",
  "URSO-POLAR",
  "URU",
  "URU-CORCOVADO",
  "URU-DE-TOPETE",
  "URUBU",
  "URUBU-CAAPOR",
  "URUBU-CACADOR",
  "URUBU-DE-CABECA-AMARELA",
  "URUBU-DE-CABECA-PRETA",
  "URUBU-DE-CABECA-VERMELHA",
  "URUBU-JEREBA",
  "URUBU-MINISTRO",
  "URUBU-REI",
  "URUBUZINHO",
  "URUMUTUM",
  "URUPIAGARA",
  "URUTAGO",
  "URUTAI",
  "URUTAU",
  "URUTAU-DE-ASA-BRANCA",
  "URUTAU-FERRUGEM",
  "URUTAUI",
  "URUTAURANA",
  "URUTU",
  "URUTU",
  "URUTU-CRUZEIRO",
  "VACA",
  "VACA-MARINHA",
  "VAGA-LUME",
  "VARANUS-ACANTHURUS",
  "VARANUS-PRISCUS",
  "VARANUS-SALVADORII",
  "VEADO",
  "VEADO-BRANCO",
  "VEADO-CAMPEIRO",
  "VEADO-CATINGUEIRO",
  "VEADO-DO-MANGUE",
  "VEADO-VIRA",
  "VENTRIFOSSA-GARMANI",
  "VENTRIFOSSA-MACROPOGON",
  "VERDELHAO",
  "VERDILHAO",
  "VERDILHAO",
  "VERDILHAO-COMUM",
  "VERDILHAO-DE-CABECA-PRETA",
  "VERDILHAO-DO-VIETNAME",
  "VERDILHAO-SERRANO",
  "VERDINHO",
  "VERDINHO-COROADO",
  "VERDINHO-DA-VARZEA",
  "VERMELHO-HENRIQUE",
  "VESPA",
  "VESPA-CABOCLA",
  "VESPA-CACADORA",
  "VESPA-CEGA",
  "VESPA-DE-COBRA",
  "VESPA-DE-RODEIO",
  "VESPERTILIO",
  "VESTE-AMARELA",
  "VI-VIO",
  "VIBORA",
  "VIBORA-CORNUDA",
  "VICUNHA",
  "VIEIRA",
  "VIGONHO",
  "VIRA-BOSTA",
  "VIRA-FOLHA",
  "VIRA-FOLHA-CEARENSE",
  "VIRA-FOLHA-DE-BICO-CURTO",
  "VIRA-FOLHA-DE-GARGANTA-CINZA",
  "VIRA-FOLHA-DE-PEITO-VERMELHO",
  "VIRA-PEDRAS",
  "VIRUCU",
  "VISCACHA",
  "VISON",
  "VISSIA",
  "VITE-VITE",
  "VITE-VITE-CAMURCA",
  "VITE-VITE-DE-CABECA-MARROM",
  "VITE-VITE-DO-TEPUI",
  "VITE-VITE-UIRAPURU",
  "VITELA",
  "VITREORANA-CASTROVIEJOI",
  "VITREORANA-EURYGNATHA",
  "VITREORANA-HELENAE",
  "VIUVA",
  "VIUVA",
  "VIUVA-DE-COLAR-VERMELHO",
  "VIUVA-DE-MANTO-AMARELO",
  "VIUVA-DO-PARAISO-ORIENTAL",
  "VIUVA-NEGRA",
  "VIUVINHA",
  "VIUVINHA-DE-OCULOS",
  "VOMBA",
  "VOMBATE",
  "VOROMPATRA",
  "XAIA",
  "XAJA",
  "XAJA",
  "XANGO",
  "XANTHOPSAR-FLAVUS",
  "XANTIDEO",
  "XARA",
  "XARELETE",
  "XARELETE",
  "XAREU",
  "XAREU-BRANCO",
  "XAREU-DOURADO",
  "XAREU-PEQUENO",
  "XAREU-PRETO",
  "XARU",
  "XAUIM",
  "XEMA-SABINI",
  "XENODON-NEUWIEDII",
  "XENOHYLA-TRUNCATA",
  "XENOPHOLIS-WERDINGORUM",
  "XERELETE",
  "XERO",
  "XERONYCTERIS-VIEIRAI",
  "XEXEU",
  "XEXEU-BAUA",
  "XEXEU-DE-BANANA",
  "XEXEU-DO-MANGUE",
  "XEXEUZINHO-DO-BREJO",
  "XIMANGO",
  "XIMANGO-BRANCO",
  "XIMANGO-CARRAPATEIRO",
  "XIMANGO-DO-CAMPO",
  "XIMBURE",
  "XIRA",
  "XIXARRO",
  "XOFRANGO",
  "XUE",
  "XUE",
  "XUE-ACU",
  "XUE-GUACU",
  "XUMBERGA",
  "XURI",
  "YAK",
  "YNAMBU",
  "YORKSHIRE",
  "YORKSHIRE-TERRIER",
  "ZABELE",
  "ZACHAENUS-CARVALHOI",
  "ZACHAENUS-PARVULUS",
  "ZAGLOSSO",
  "ZANGAO",
  "ZARAGATEIRO",
  "ZARAGATEIRO-DA-CHINA",
  "ZARAGATEIRO-DE-CRISTA-BRANCA",
  "ZARAGATEIRO-DE-FACE-PRETA",
  "ZARRO",
  "ZARRO-DE-COLAR",
  "ZARRO-NEGRINHA",
  "ZEBRA",
  "ZEBU",
  "ZENION-JAPONICUM",
  "ZENOPSIS-NEBULOSA",
  "ZIDEDE",
  "ZIDEDE-DE-ASA-CINZA",
  "ZIDEDE-DO-NORDESTE",
  "ZIPHIUS-CAVIROSTRIS",
  "ZOMBETEIRO",
  "ZOMBETEIRO-DE-BICO-VERMELHO",
  "ZOMBETEIRO-DE-DAMARALANDIA",
  "ZORRILHO",
  "ZOSTEROPS-JAPONICUS",
  "ZOSTEROPS-LATERALIS",
  "ZUNGARO-JAHU",
];

export default portugueseAnimalsDict;
