const philippinesCitiesDict = [
  "ABORLAN",
  "ABRA-DE-ILOG",
  "ABUCAY",
  "ABULUG",
  "ABUYOG",
  "AGCOGON",
  "AGDANGAN",
  "AGLIPAY",
  "AGNO",
  "AGONCILLO",
  "AGOO",
  "AGUILAR",
  "AGUINALDO",
  "AGUTAYA",
  "AJUY",
  "ALABANG",
  "ALABAT",
  "ALABEL",
  "ALAMADA",
  "ALAMINOS",
  "ALANGALANG",
  "ALBUERA",
  "ALBURQUERQUE",
  "ALCALA",
  "ALCANTARA",
  "ALCOY",
  "ALEGRIA",
  "ALFONSO-CASTANEDA",
  "ALFONSO",
  "ALIAGA",
  "ALICIA",
  "ALIMODIAN",
  "ALITAGTAG",
  "ALLACAPAN",
  "ALLEN",
  "ALMAGRO",
  "ALMERIA",
  "ALOGUINSAN",
  "ALORAN",
  "ALTAVAS",
  "ALUBIJID",
  "AMADEO",
  "AMBAGUIO",
  "AMPATUAN",
  "AMULUNG",
  "ANAO-AON",
  "ANAO",
  "ANDA",
  "ANGADANAN",
  "ANGAT",
  "ANGELES-CITY",
  "ANGONO",
  "ANILAO",
  "ANINI-Y",
  "ANTEQUERA",
  "ANTIPOLO",
  "APALIT",
  "APARRI",
  "ARACELI",
  "ARAYAT",
  "ARGAO",
  "ARINGAY",
  "ARITAO",
  "AROROY",
  "ARTECHE",
  "ASINGAN",
  "ASTURIAS",
  "ATIMONAN",
  "ATOK",
  "AURORA",
  "AYUNGON",
  "AYUQUITAN",
  "BAAO",
  "BABATNGON",
  "BACACAY",
  "BACARRA",
  "BACLARAN",
  "BACLAYON",
  "BACNOTAN",
  "BACO",
  "BACOLOD",
  "BACOLOR",
  "BACONG",
  "BACOOR",
  "BACUAG",
  "BADIAN",
  "BADIANGAN",
  "BADOC",
  "BAGABAG",
  "BAGAC",
  "BAGAMANOC",
  "BAGANGA",
  "BAGGAO",
  "BAGO",
  "BAGONG-PAG-ASA",
  "BAGONG-SILANGAN",
  "BAGUIO-CITY",
  "BAGULIN",
  "BAGUMBAYAN",
  "BAIS",
  "BAKUN",
  "BALABAC",
  "BALABAGAN",
  "BALAGTAS",
  "BALAMBAN",
  "BALANGA",
  "BALANGIGA",
  "BALANGKAS",
  "BALANGKAYAN",
  "BALAOAN",
  "BALASAN",
  "BALATAN",
  "BALAYAN",
  "BALBALAN",
  "BALENO",
  "BALER",
  "BALETE",
  "BALIANGAO",
  "BALIGUIAN",
  "BALILIHAN",
  "BALIMBING",
  "BALINDONG",
  "BALINGASAG",
  "BALINGOAN",
  "BALINTAWAK",
  "BALIUAG",
  "BALLESTEROS",
  "BALUD",
  "BALUNGAO",
  "BAMBAN",
  "BAMBANG",
  "BANATE",
  "BANAUE",
  "BANAYBANAY",
  "BANCO-FILIPINO-INTERNATIONAL-VILLAGE",
  "BANGA",
  "BANGAR",
  "BANGUED",
  "BANGUI",
  "BANI",
  "BANISILAN",
  "BANSALAN",
  "BANTACAN",
  "BANTAY",
  "BANTAYAN",
  "BANTING",
  "BARANGKA",
  "BARAS",
  "BARBASA",
  "BARCELONA",
  "BARILI",
  "BARIRA",
  "BAROBO",
  "BAROTAC-NUEVO",
  "BAROTAC-VIEJO",
  "BAROY",
  "BARUGO",
  "BASAY",
  "BASCO",
  "BASEY",
  "BASILISA",
  "BASISTA",
  "BASUD",
  "BATAC",
  "BATAD",
  "BATAN",
  "BATANGAS",
  "BATARASA",
  "BATO",
  "BATOBATO",
  "BATUAN",
  "BAUAN",
  "BAUANG",
  "BAUKO",
  "BAUTISTA",
  "BAY",
  "BAYABAS",
  "BAYANAN",
  "BAYANG",
  "BAYAWAN",
  "BAYBAY",
  "BAYOG",
  "BAYOMBONG",
  "BAYUGAN",
  "BEL-AIR",
  "BELISON",
  "BENITO-SOLIVEN",
  "BIEN-UNIDO",
  "BIGNAY",
  "BILAR",
  "BILIRAN",
  "BINALBAGAN",
  "BINALONAN",
  "BINAN",
  "BINANGONAN",
  "BINGAWAN",
  "BINIDAYAN",
  "BINMALEY",
  "BINONDO",
  "BIRI",
  "BISLIG",
  "BOAC",
  "BOBON",
  "BOCAUE",
  "BOGO",
  "BOKOD",
  "BOLINAO",
  "BOLJOON",
  "BOMBON",
  "BONGABON",
  "BONGABONG",
  "BONGAO",
  "BONIFACIO",
  "BONTOC",
  "BORBON",
  "BORONGAN",
  "BOSTON",
  "BOTOLAN",
  "BROOKES-POINT",
  "BUADIPOSO-BUNTONG",
  "BUBONG",
  "BUCAY",
  "BUENAVISTA",
  "BUGALLON",
  "BUGASONG",
  "BUGHO",
  "BUGUEY",
  "BUGUIAS",
  "BUHI",
  "BULA",
  "BULACAN",
  "BULALACAO",
  "BULAN",
  "BULDON",
  "BULI",
  "BULUAN",
  "BULUSAN",
  "BUNAWAN",
  "BURAUEN",
  "BURDEOS",
  "BURGOS",
  "BURUANGA",
  "BUSTOS",
  "BUSUANGA",
  "BUTIG",
  "BUTUAN",
  "BUUG",
  "CABA",
  "CABADBARAN",
  "CABAGAN",
  "CABANATUAN-CITY",
  "CABANGAN",
  "CABANGLASAN",
  "CABARROGUIS",
  "CABATUAN",
  "CABIAO",
  "CABUCGAYAN",
  "CABUGAO",
  "CABUSAO",
  "CABUYAO",
  "CADIZ",
  "CAGAYAN-DE-ORO",
  "CAGDIANAO",
  "CAGWAIT",
  "CAIBIRAN",
  "CAINTA",
  "CAJIDIOCAN",
  "CALABANGA",
  "CALABAYAN",
  "CALACA",
  "CALAMBA",
  "CALANASAN",
  "CALANOGAS",
  "CALAPAN",
  "CALAPE",
  "CALASIAO",
  "CALATAGAN",
  "CALATRAVA",
  "CALAUAG",
  "CALAUAN",
  "CALAYAN",
  "CALBAYOG-CITY",
  "CALBIGA",
  "CALINOG",
  "CALINTAAN",
  "CALOOCAN-CITY",
  "CALUBIAN",
  "CALUMPANG",
  "CALUMPIT",
  "CALUYA",
  "CAMALANIUGAN",
  "CAMALIG",
  "CAMALIGAN",
  "CAMBANUGOY",
  "CAMILING",
  "CAN-AVID",
  "CANAGATAN",
  "CANAMAN",
  "CANDABA",
  "CANDELARIA",
  "CANDIJAY",
  "CANDON",
  "CANDONI",
  "CANLAON",
  "CANTILAN",
  "CAOAYAN",
  "CAPALONGA",
  "CAPAS",
  "CAPOOCAN",
  "CAPUL",
  "CARAGA",
  "CARAMOAN",
  "CARAMORAN",
  "CARCAR",
  "CARDONA",
  "CARIDAD",
  "CARIGARA",
  "CARLES",
  "CARMEN",
  "CARMONA",
  "CARRANGLAN",
  "CARRASCAL",
  "CASIGURAN",
  "CASTILLA",
  "CASTILLEJOS",
  "CATAINGAN",
  "CATANAUAN",
  "CATARMAN",
  "CATBALOGAN",
  "CATEEL",
  "CATIGBIAN",
  "CATMON",
  "CATUBIG",
  "CAVINTI",
  "CAVITE-CITY",
  "CAWAYAN",
  "CEBU-CITY",
  "CENTRAL-SIGNAL-VILLAGE",
  "CERVANTES",
  "CITY-OF-CALAMBA",
  "CITY-OF-ISABELA",
  "CITY-OF-PARANAQUE",
  "CLARIN",
  "CLAVERIA",
  "COGAN",
  "COLUMBIO",
  "COMPOSTELA",
  "CONCEPCION",
  "CONNER",
  "CONSOLACION",
  "CORCUERA",
  "CORDON",
  "CORELLA",
  "CORON",
  "CORTES",
  "COTABATO",
  "CUARTERO",
  "CUENCA",
  "CULABA",
  "CULASI",
  "CULION",
  "CUPANG",
  "CURRIMAO",
  "CUYAPO",
  "CUYO",
  "DAANBANTAYAN",
  "DAET",
  "DAGAMI",
  "DAGOHOY",
  "DAGUPAN-CITY",
  "DAKIT",
  "DALAGUETE",
  "DAMULOG",
  "DANAO",
  "DANCAGAN",
  "DAO",
  "DAPA",
  "DAPITAN",
  "DARAGA",
  "DARAM",
  "DASMARINAS",
  "DASOL",
  "DATU-ODIN-SINSUAT",
  "DATU-PAGLAS",
  "DATU-PIANG",
  "DAUIN",
  "DAUIS",
  "DAVAO",
  "DEL-CARMEN",
  "DEL-GALLEGO",
  "DESPUJOLS",
  "DIADI",
  "DIFFUN",
  "DIGOS",
  "DILASAG",
  "DIMASALANG",
  "DIMATALING",
  "DIMIAO",
  "DINAGAT",
  "DINALUPIHAN",
  "DINAS",
  "DINGALAN",
  "DINGLE",
  "DINGRAS",
  "DIPACULAO",
  "DIPLAHAN",
  "DIPOLOG",
  "DOLORES",
  "DON-BOSCO",
  "DON-CARLOS",
  "DON-GALO",
  "DONA-REMEDIOS-TRINIDAD",
  "DONSOL",
  "DUENAS",
  "DUERO",
  "DULAG",
  "DUMAGUETE-CITY",
  "DUMALAG",
  "DUMALINAO",
  "DUMANGAS",
  "DUMANJOG",
  "DUMARAN",
  "DUMARAO",
  "DUMINGAG",
  "DUPAX-DEL-NORTE",
  "DUPAX-DEL-SUR",
  "ECHAGUE",
  "EL-NIDO",
  "EL-SALVADOR",
  "ENRILE",
  "ERMITA",
  "ESCALANTE",
  "ESPERANZA",
  "ESPIRITU",
  "ESTANCIA",
  "FAMY",
  "FLORA",
  "FLORIDABLANCA",
  "FORT-BONIFACIO",
  "GABALDON",
  "GAINZA",
  "GALIMUYOD",
  "GAMAY",
  "GAMU",
  "GANASSI",
  "GANDARA",
  "GAPAN",
  "GARCHITORENA",
  "GARCIA-HERNANDEZ",
  "GASAN",
  "GATA",
  "GATTARAN",
  "GENERAL-EMILIO-AGUINALDO",
  "GENERAL-LUNA",
  "GENERAL-MACARTHUR",
  "GENERAL-MAMERTO-NATIVIDAD",
  "GENERAL-MARIANO-ALVAREZ",
  "GENERAL-NAKAR",
  "GENERAL-SANTOS",
  "GENERAL-TINIO",
  "GENERAL-TRIAS",
  "GERONA",
  "GETAFE",
  "GIGAQUIT",
  "GIGMOTO",
  "GINATILAN",
  "GINGOOG",
  "GIPORLOS",
  "GITAGUM",
  "GLAN",
  "GLORIA",
  "GOA",
  "GONZAGA",
  "GUADALUPE-NUEVO",
  "GUAGUA",
  "GUAMBOG",
  "GUBAT",
  "GUIGUINTO",
  "GUIHULNGAN",
  "GUIMBA",
  "GUIMBAL",
  "GUINAYANGAN",
  "GUINDULMAN",
  "GUINOBATAN",
  "GUIPOS",
  "GUIUAN",
  "GUMACA",
  "GUTALAC",
  "HAGONOY",
  "HAMTIC",
  "HERMOSA",
  "HERNANI",
  "HILONGOS",
  "HIMAMAYLAN",
  "HINABANGAN",
  "HINATUAN",
  "HINDANG",
  "HINGYON",
  "HINIGARAN",
  "HINUNANGAN",
  "HINUNDAYAN",
  "HUNDUAN",
  "IBA",
  "IBAAN",
  "IBAJAY",
  "IGBARAS",
  "IGUIG",
  "ILAGAN",
  "ILIGAN",
  "ILOG",
  "ILOILO",
  "IMBATUG",
  "IMPASUGONG",
  "IMUS",
  "INABANGA",
  "INDANAN",
  "INDANG",
  "INFANTA",
  "INITAO",
  "INOPACAN",
  "IPIL",
  "IRIGA-CITY",
  "IROSIN",
  "ISABEL",
  "ISABELA",
  "ISULAN",
  "ITOGON",
  "IVISAN",
  "JABONGA",
  "JAEN",
  "JAGNA",
  "JALAJALA",
  "JAMINDAN",
  "JANIUAY",
  "JARO",
  "JASAAN",
  "JIABONG",
  "JIMALALUD",
  "JIMENEZ",
  "JINOBA-AN",
  "JOLO",
  "JONES",
  "JORDAN",
  "JOSE-ABAD-SANTOS",
  "JOSE-PANGANIBAN",
  "JOSEFINA",
  "JOVELLAR",
  "JUBAN",
  "JULITA",
  "KABACAN",
  "KABANKALAN",
  "KABASALAN",
  "KABAYAN",
  "KABUGAO",
  "KADINGILAN",
  "KALAMANSIG",
  "KALAWIT",
  "KALAYAAN",
  "KALIBO",
  "KALILANGAN",
  "KALINGALAN-CALUANG",
  "KANANYA",
  "KAPALONG",
  "KAPANGAN",
  "KAPATAGAN",
  "KAPAY",
  "KARUHATAN",
  "KASIBU",
  "KATIPUNAN",
  "KAUSWAGAN",
  "KAWAYAN",
  "KAWIT",
  "KAYAPA",
  "KIAMBA",
  "KIANGAN",
  "KIBAWE",
  "KIBLAWAN",
  "KIBUNGAN",
  "KIDAPAWAN",
  "KINOGITAN",
  "KITAOTAO",
  "KITCHARAO",
  "KOLAMBUGAN",
  "KORONADAL",
  "KRUS-NA-LIGAS",
  "KUMALARANG",
  "LA-CARLOTA",
  "LA-HUERTA",
  "LA-LIBERTAD",
  "LA-PAZ",
  "LA-TRINIDAD",
  "LABANGAN",
  "LABASON",
  "LABO",
  "LABRADOR",
  "LAGANGILANG",
  "LAGAWE",
  "LAGINDINGAN",
  "LAGONGLONG",
  "LAGONOY",
  "LAL-LO",
  "LALA",
  "LAMBUNAO",
  "LAMITAN",
  "LAMUT",
  "LANGUYAN",
  "LANTAPAN",
  "LANUZA",
  "LAOAC-EAST",
  "LAOAG",
  "LAOANG",
  "LAPINIG",
  "LAPU-LAPU-CITY",
  "LAPUYAN",
  "LARENA",
  "LAS-NAVAS",
  "LAS-NIEVES",
  "LAS-PINAS-CITY",
  "LASAM",
  "LAUAAN",
  "LAUR",
  "LAUREL",
  "LAVEZARES",
  "LAWAAN",
  "LAWANG-BATO",
  "LAZI",
  "LEGANES",
  "LEGAZPI-CITY",
  "LEMERY",
  "LEON-POSTIGO",
  "LEON",
  "LESO",
  "LEYTE",
  "LIAN",
  "LIANGA",
  "LIBACAO",
  "LIBAGON",
  "LIBERTAD",
  "LIBJO",
  "LIBMANAN",
  "LIBON",
  "LIBONA",
  "LIBUNGAN",
  "LICAB",
  "LIGAO",
  "LILA",
  "LILIO",
  "LILOY",
  "LIMAY",
  "LIMBUHAN",
  "LINAMON",
  "LINGAYEN",
  "LINGIG",
  "LIPA-CITY",
  "LLANERA",
  "LLORENTE",
  "LOAY",
  "LOBO",
  "LOBOC",
  "LOOC",
  "LOON",
  "LOPE-DE-VEGA",
  "LOPEZ-JAENA",
  "LOPEZ",
  "LORETO",
  "LOS-BANOS",
  "LOWER-BICUTAN",
  "LOWER-TUNGAWAN",
  "LOYOLA-HEIGHTS",
  "LUBANG",
  "LUBAO",
  "LUBUAGAN",
  "LUCBAN",
  "LUCENA",
  "LUGAIT",
  "LUGUS",
  "LUISIANA",
  "LUMBA-A-BAYABAO",
  "LUMBANG",
  "LUMBATAN",
  "LUMBAYANAGUE",
  "LUNA",
  "LUPAO",
  "LUPI-VIEJO",
  "LUPON",
  "LUTAYAN",
  "LUUK",
  "M'LANG",
  "MAASIN",
  "MAAYON",
  "MABALACAT",
  "MABINAY",
  "MABINI",
  "MABITAC",
  "MABUHAY",
  "MACABEBE",
  "MACALELON",
  "MACARTHUR",
  "MACO",
  "MACROHON",
  "MADALAG",
  "MADALUM",
  "MADAMBA",
  "MADDELA",
  "MADRID",
  "MADRIDEJOS",
  "MAGALANG",
  "MAGALLANES",
  "MAGARAO",
  "MAGDALENA",
  "MAGDIWANG",
  "MAGPET",
  "MAGSAYSAY",
  "MAGSINGAL",
  "MAGUGPO-POBLACION",
  "MAGUING",
  "MAHAPLAG",
  "MAHARLIKA-VILLAGE",
  "MAHAYAG",
  "MAHINOG",
  "MAIBOG",
  "MAIGO",
  "MAIMBUNG",
  "MAINIT",
  "MAITUM",
  "MAJAYJAY",
  "MAKATI-CITY",
  "MAKATO",
  "MAKILALA",
  "MALABANG",
  "MALABON",
  "MALABUYOC",
  "MALALAG",
  "MALANDAY",
  "MALANGAS",
  "MALAPATAN",
  "MALASIQUI",
  "MALATE",
  "MALAY",
  "MALAYBALAY",
  "MALILIPOT",
  "MALIMONO",
  "MALINAO",
  "MALITA",
  "MALITBOG",
  "MALLIG",
  "MALOLOS",
  "MALUNGUN",
  "MALUSO",
  "MALVAR",
  "MAMBAJAO",
  "MAMBURAO",
  "MAMBUSAO",
  "MAMUNGAN",
  "MANABO",
  "MANAOAG",
  "MANAPLA",
  "MANAY",
  "MANDALUYONG-CITY",
  "MANDAON",
  "MANDAUE-CITY",
  "MANGALDAN",
  "MANGATAREM",
  "MANILA",
  "MANITO",
  "MANJUYOD",
  "MANKAYAN",
  "MANOLO-FORTICH",
  "MANSALAY",
  "MANTICAO",
  "MANUCAN",
  "MAPANAS",
  "MAPANDAN",
  "MARABUT",
  "MARAGONDON",
  "MARAMAG",
  "MARANTAO",
  "MARAWI-CITY",
  "MARCOS",
  "MARGOSATUBIG",
  "MARIA-AURORA",
  "MARIA",
  "MARIANA",
  "MARIBOJOC",
  "MARIHATAG",
  "MARIKINA-CITY",
  "MARIKINA-HEIGHTS",
  "MARILAO",
  "MARIVELES",
  "MAROGONG",
  "MASANTOL",
  "MASBATE",
  "MASINLOC",
  "MASIU",
  "MATAAS-NA-KAHOY",
  "MATAGOB",
  "MATALAM",
  "MATALOM",
  "MATANAO",
  "MATANOG",
  "MATI",
  "MATNOG",
  "MATUNGAO",
  "MAUBAN",
  "MAYANTOC",
  "MAYDOLONG",
  "MAYORGA",
  "MAYOYAO",
  "MEDELLIN",
  "MEDINA",
  "MENDEZ-NUNEZ",
  "MERCEDES",
  "MERIDA",
  "MEXICO",
  "MEYCAUAYAN",
  "MIAGAO",
  "MIDSALIP",
  "MIDSAYAP",
  "MILAGROS",
  "MILAOR",
  "MINA",
  "MINALABAC",
  "MINALIN",
  "MINGLANILLA",
  "MOALBOAL",
  "MOBO",
  "MOGPOG",
  "MOISES-PADILLA",
  "MOLAVE",
  "MONCADA",
  "MONDRAGON",
  "MONKAYO",
  "MONREAL",
  "MONTEVISTA",
  "MORONG",
  "MOTIONG",
  "MULANAY",
  "MULUNDO",
  "MUNAI",
  "MUNTINLUPA-CITY",
  "MURCIA",
  "MUTIA",
  "NAAWAN",
  "NABAS",
  "NABUA",
  "NABUNTURAN",
  "NAGA-CITY",
  "NAGA",
  "NAGCARLAN",
  "NAGTIPUNAN",
  "NAGUILIAN",
  "NAIC",
  "NAMPICUAN",
  "NAPINDAN",
  "NARRA",
  "NARVACAN",
  "NASIPIT",
  "NASUGBU",
  "NATIVIDAD",
  "NATONIN",
  "NAUJAN",
  "NAVAL",
  "NAVOTAS",
  "NEW-CORELLA",
  "NEW-PANAMAO",
  "NEW-WASHINGTON",
  "NORALA",
  "NORZAGARAY",
  "NOVELETA",
  "NUEVA-ERA",
  "NUEVA-VALENCIA",
  "NUMANCIA",
  "NUNUNGAN",
  "OAS",
  "OBANDO",
  "OCAMPO",
  "ODIONGAN",
  "OLONGAPO",
  "OLUTANGA",
  "OPOL",
  "ORANI",
  "ORAS",
  "ORION",
  "ORMOC",
  "OROQUIETA",
  "OSLOB",
  "OTEIZA",
  "OTON",
  "OZAMIZ-CITY",
  "PACO",
  "PADADA",
  "PADRE-BURGOS",
  "PADRE-GARCIA",
  "PAETE",
  "PAGADIAN",
  "PAGALUNGAN",
  "PAGBILAO",
  "PAGLAT",
  "PAGSANJAN",
  "PAGUDPUD",
  "PAKIL",
  "PALANAN",
  "PALANAS",
  "PALAPAG",
  "PALAUIG",
  "PALAYAN-CITY",
  "PALIMBANG",
  "PALO",
  "PALOMPON",
  "PALUAN",
  "PAMBUJAN",
  "PAMPLONA",
  "PANABO",
  "PANANAW",
  "PANAON",
  "PANAY",
  "PANDACAN",
  "PANDAG",
  "PANDAMI",
  "PANDAN",
  "PANDI",
  "PANGANIBAN",
  "PANGANTOCAN",
  "PANGIL",
  "PANGLAO",
  "PANIQUI",
  "PANITAN",
  "PANSOL",
  "PANTABANGAN",
  "PANTAO-RAGAT",
  "PANTAR",
  "PANTUKAN",
  "PANUKULAN",
  "PAOAY",
  "PAOMBONG",
  "PARABCAN",
  "PARACALE",
  "PARACELIS",
  "PARANG",
  "PASACAO",
  "PASAY-CITY",
  "PASIG-CITY",
  "PASIL",
  "PASSI",
  "PASTRANA",
  "PASUQUIN",
  "PATEROS",
  "PATIAN",
  "PATIKUL",
  "PATNANUNGAN",
  "PATNONGON",
  "PAVIA",
  "PAYABON",
  "PAYAO",
  "PAYATAS",
  "PENABLANCA",
  "PENARANDA",
  "PEREZ",
  "PIAGAPO",
  "PIAT",
  "PIDDIG",
  "PIDIGAN",
  "PIGCAWAYAN",
  "PIKIT",
  "PILA",
  "PILAR",
  "PILI",
  "PILILLA",
  "PINABACDAO",
  "PINAGKAISAHAN",
  "PINAMALAYAN",
  "PINAMUNGAHAN",
  "PINAN",
  "PINILI",
  "PINTUYAN",
  "PINUKPUK",
  "PINYAHAN",
  "PIO-DURAN",
  "PITOGO",
  "PLACER",
  "PLAINVIEW",
  "PLARIDEL",
  "POBLACION",
  "POLA",
  "POLANCO",
  "POLANGUI",
  "POLILLO",
  "POLOMOLOK",
  "PONGOTAN",
  "PONOT",
  "PONTEVEDRA",
  "POONA-PIAGAPO",
  "PORAC",
  "PORO",
  "POTOTAN",
  "POZORRUBIO",
  "PRESIDENT-QUIRINO",
  "PRESIDENT-ROXAS",
  "PRIETO-DIAZ",
  "PROJECT-SIX",
  "PROPER-BANSUD",
  "PROSPERIDAD",
  "PUALAS",
  "PUDTOL",
  "PUERTO-GALERA",
  "PUERTO-PRINCESA",
  "PUGO",
  "PULILAN",
  "PULUPANDAN",
  "PUNTURIN",
  "PURA",
  "PUTATAN",
  "QUEZON-CITY",
  "QUEZON",
  "QUIAPO",
  "QUINAPUNDAN",
  "QUIRINO",
  "RAGAN-SUR",
  "RAGAY",
  "RAMAIN",
  "RAMON-MAGSAYSAY",
  "RAMON",
  "RAMOS",
  "RANCHERIA-PAYAU",
  "RAPU-RAPU",
  "REAL",
  "REINA-MERCEDES-VIEJO",
  "REINA-MERCEDES",
  "RIZAL",
  "ROBLES",
  "RODRIGUEZ",
  "ROMBLON",
  "RONDA",
  "ROSALES",
  "ROSARIO",
  "ROSELLER-LIM",
  "ROXAS-CITY",
  "ROXAS",
  "SABANGAN",
  "SABLAN",
  "SABLAYAN",
  "SAGADA",
  "SAGAY",
  "SAGBAYAN",
  "SAGNAY",
  "SAGUDAY",
  "SAGUIARAN",
  "SAINT-BERNARD",
  "SALAMAN",
  "SALAY",
  "SALCEDO",
  "SALUG",
  "SAMAL",
  "SAMBOAN",
  "SAMPALOC",
  "SAN-AGUSTIN",
  "SAN-ANDRES",
  "SAN-ANTONIO",
  "SAN-CARLOS-CITY",
  "SAN-CARLOS",
  "SAN-CLEMENTE",
  "SAN-DIONISIO",
  "SAN-ENRIQUE",
  "SAN-FABIAN",
  "SAN-FELIPE",
  "SAN-FERNANDO",
  "SAN-FRANCISCO",
  "SAN-GABRIEL",
  "SAN-GUILLERMO",
  "SAN-ILDEFONSO",
  "SAN-ISIDRO",
  "SAN-JACINTO",
  "SAN-JOAQUIN",
  "SAN-JORGE",
  "SAN-JOSE-DE-URQUICO",
  "SAN-JOSE-DEL-MONTE",
  "SAN-JOSE",
  "SAN-JUAN",
  "SAN-JULIAN",
  "SAN-LEONARDO",
  "SAN-LUIS",
  "SAN-MANUEL",
  "SAN-MARCELINO",
  "SAN-MARIANO",
  "SAN-MARTIN-DE-PORRES",
  "SAN-MATEO",
  "SAN-MIGUEL",
  "SAN-NARCISO",
  "SAN-NICOLAS",
  "SAN-PABLO",
  "SAN-PASCUAL",
  "SAN-PEDRO",
  "SAN-POLICARPO",
  "SAN-QUINTIN",
  "SAN-RAFAEL",
  "SAN-REMIGIO",
  "SAN-RICARDO",
  "SAN-ROQUE",
  "SAN-SEBASTIAN",
  "SAN-SIMON",
  "SAN-TEODORO",
  "SAN-TOMAS",
  "SAN-VICENTE",
  "SANCHEZ-MIRA",
  "SANTA-ANA",
  "SANTA-BARBARA",
  "SANTA-CATALINA",
  "SANTA-CRUZ",
  "SANTA-ELENA",
  "SANTA-FE",
  "SANTA-IGNACIA",
  "SANTA-JOSEFA",
  "SANTA-LUCIA",
  "SANTA-MAGDALENA",
  "SANTA-MARCELA",
  "SANTA-MARGARITA",
  "SANTA-MARIA",
  "SANTA-MONICA",
  "SANTA-RITA",
  "SANTA-ROSA",
  "SANTA-TERESITA",
  "SANTA",
  "SANTAMESA",
  "SANTANDER",
  "SANTIAGO",
  "SANTO-CRISTO",
  "SANTO-DOMINGO",
  "SANTO-NINO",
  "SANTO-TOMAS",
  "SANTOL",
  "SAPA-SAPA",
  "SAPANG-DALAGA",
  "SAPIAN",
  "SARA",
  "SARANGANI",
  "SARAVIA",
  "SARIAYA",
  "SARRAT",
  "SCIENCE-CITY-OF-MUNOZ",
  "SEBASTE",
  "SERGIO-OSMENA-SR",
  "SEVILLA",
  "SEXMOAN",
  "SHARIFF-AGUAK",
  "SIASI",
  "SIATON",
  "SIAY",
  "SIAYAN",
  "SIBAGAT",
  "SIBALOM",
  "SIBONGA",
  "SIBUCO",
  "SIBULAN",
  "SIBUTAO",
  "SIBUTU",
  "SIERRA-BULLONES",
  "SIGABOY",
  "SIGMA",
  "SILAGO",
  "SILANG",
  "SILAY",
  "SILVINO-LOBOS",
  "SIMBAHAN",
  "SIMUNUL",
  "SINACABAN",
  "SINAIT",
  "SINDANGAN",
  "SINILOAN",
  "SIOCON",
  "SIPALAY",
  "SIPOCOT",
  "SIQUIJOR",
  "SIRAWAY",
  "SIRUMA",
  "SISON",
  "SITANGKAI",
  "SOCCORRO",
  "SOCORRO",
  "SOGOD",
  "SOLANA",
  "SOLANO",
  "SOLSONA",
  "SORSOGON",
  "SOUTH-UBIAN",
  "SOUTH-UPI",
  "SUAL",
  "SUBIC",
  "SUCAT",
  "SUDIPEN",
  "SUGBONGKOGON",
  "SULAT",
  "SULOP",
  "SULTAN-KUDARAT",
  "SUMILAO",
  "SUMISIP",
  "SURALLAH",
  "SURIGAO",
  "SUYO",
  "TAAL",
  "TABACO",
  "TABANGO",
  "TABINA",
  "TABOGON",
  "TABONTABON",
  "TABUELAN",
  "TABUK",
  "TACLOBAN",
  "TACURONG",
  "TADIAN",
  "TAFT",
  "TAGANA-AN",
  "TAGAPUL-AN",
  "TAGAYTAY",
  "TAGBILARAN-CITY",
  "TAGBINA",
  "TAGKAWAYAN",
  "TAGO",
  "TAGOLOAN",
  "TAGUDIN",
  "TAGUIG-CITY",
  "TAGUM",
  "TAIRAN-CAMP",
  "TALACOGON",
  "TALAGUTONG",
  "TALAKAG",
  "TALAVERA",
  "TALAYAN",
  "TALIBON",
  "TALIPAO",
  "TALISAY",
  "TALISAYAN",
  "TALITAY",
  "TALUGTUG",
  "TALUSAN",
  "TAMBO",
  "TAMBULIG",
  "TAMILISAN",
  "TAMPAKAN",
  "TAMPARAN",
  "TANAUAN",
  "TANAY",
  "TANDAG",
  "TANDUBAS",
  "TANGALAN",
  "TANGUB",
  "TANJAY",
  "TANKAL",
  "TANTANGAN",
  "TANUDAN",
  "TANZA",
  "TAPAS",
  "TARAKA",
  "TARANGNAN",
  "TARLAC-CITY",
  "TARRAGONA",
  "TATALON",
  "TATARIKAN",
  "TAYABAS",
  "TAYASAN",
  "TAYSAN",
  "TAYTAY",
  "TAYUG",
  "TAYUM",
  "TERESA",
  "TERNATE",
  "TIAONG",
  "TIBIAO",
  "TIBIGAN",
  "TIGAON",
  "TIGBAO",
  "TIGBAUAN",
  "TINAJEROS",
  "TINAMBAC",
  "TINGLAYAN",
  "TINGLOY",
  "TINOC",
  "TIPO-TIPO",
  "TITAY",
  "TIWI",
  "TOBIAS-FORNIER",
  "TOBOSO",
  "TOLEDO",
  "TOLOSA",
  "TOMAS-OPPUS",
  "TONDO",
  "TORRIJOS",
  "TRECE-MARTIRES-CITY",
  "TRENTO",
  "TRINIDAD",
  "TUAO",
  "TUBA",
  "TUBAO",
  "TUBARAN",
  "TUBAY",
  "TUBLAY",
  "TUBOD",
  "TUBUNGAN",
  "TUBURAN",
  "TUCURAN",
  "TUDELA",
  "TUGATOG",
  "TUGAYA",
  "TUGUEGARAO",
  "TUKTUKAN",
  "TULUNAN",
  "TUMAUINI",
  "TUMBAO",
  "TUNASAN",
  "TUPI",
  "TUY",
  "UBAY",
  "UGONG",
  "UMINGAN",
  "UNISAN",
  "UPI",
  "UPPER-BICUTAN",
  "URBIZTONDO",
  "URDANETA",
  "USON",
  "VALDERRAMA",
  "VALENCIA",
  "VALENZUELA",
  "VALLADOLID",
  "VALLEHERMOSO",
  "VERUELA",
  "VICTORIA",
  "VICTORIAS",
  "VIGA",
  "VIGAN",
  "VILLA-VERDE",
  "VILLABA",
  "VILLANUEVA",
  "VILLAREAL",
  "VILLASIS",
  "VINTAR",
  "VINZONS",
  "VIRAC",
  "WAO",
  "WEST-REMBO",
  "WESTERN-BICUTAN",
  "ZAMBOANGA-CITY",
  "ZAMBOANGUITA",
  "ZARAGOZA",
  "ZARRAGA",
  "ZUMARRAGA",
];

export default philippinesCitiesDict;