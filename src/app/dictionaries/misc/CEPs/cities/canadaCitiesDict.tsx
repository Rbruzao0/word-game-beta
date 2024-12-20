const canadaCitiesDict = [
  "ABBOTSFORD",
  "ACTON-VALE",
  "ADDINGTON-HIGHLANDS",
  "ADELAIDE-METCALFE",
  "ADJALA-TOSORONTIO",
  "ADMASTON",
  "BROMLEY",
  "ADSTOCK",
  "AIR-RONGE",
  "AIRDRIE",
  "AJAX",
  "AKWESASNE",
  "ALBANEL",
  "ALBERTA-BEACH",
  "ALBERTON",
  "ALFRED-AND-PLANTAGENET",
  "ALGONQUIN-HIGHLANDS",
  "ALLARDVILLE",
  "ALMA",
  "ALNWICK",
  "HALDIMAND",
  "ALONSA",
  "ALTONA",
  "ALVINSTON",
  "AMARANTH",
  "AMHERST",
  "AMHERSTBURG",
  "AMOS",
  "AMQUI",
  "AMULET",
  "ANMORE",
  "ANTIGONISH",
  "ARBORG",
  "ARGYLE",
  "ARMOUR",
  "ARMSTRONG",
  "ARNPRIOR",
  "ARRAN-ELDERSLIE",
  "ARVIAT",
  "ASBESTOS",
  "ASCOT-CORNER",
  "ASHCROFT",
  "ASHFIELD-COLBORNE-WAWANOSH",
  "ASPHODEL-NORWOOD",
  "ASSIGINACK",
  "ASSINIBOIA",
  "ATHABASCA",
  "ATHENS",
  "ATHOLVILLE",
  "ATIKOKAN",
  "AUGUSTA",
  "AURORA",
  "AUSTIN",
  "AYER'S-CLIFF",
  "AYLMER",
  "BAIE-COMEAU",
  "BAIE-D'URFE",
  "BAIE-DU-FEBVRE",
  "BAIE-SAINT-PAUL",
  "BAIE-VERTE",
  "BAKER-LAKE",
  "BALGONIE",
  "BALMORAL",
  "BANCROFT",
  "BANFF",
  "BARRAUTE",
  "BARRHEAD",
  "BARRIE",
  "BARRIERE",
  "BARRINGTON",
  "BAS-CARAQUET",
  "BASSANO",
  "BATHURST",
  "BATTLE-RIVER-NO-438",
  "BATTLEFORD",
  "BAY-BULLS",
  "BAY-ROBERTS",
  "BAYFIELD",
  "BAYHAM",
  "BEACHBURG",
  "BEACONSFIELD",
  "BEAUBASSIN-EAST",
  "BEAUBASSIN-EST",
  "BEAUCEVILLE",
  "BEAUHARNOIS",
  "BEAUMONT",
  "BEAUPORT",
  "BEAUPRE",
  "BEAUSEJOUR",
  "BEAVER-RIVER",
  "BEAVERLODGE",
  "BECANCOUR",
  "BECKWITH",
  "BEDFORD",
  "BEHCHOKO",
  "BELLEDUNE",
  "BELLEVILLE",
  "BELOEIL",
  "BENTLEY",
  "BERESFORD",
  "BERTHIER-SUR-MER",
  "BERTHIERVILLE",
  "BERTRAND",
  "BERWICK",
  "BIFROST-RIVERTON",
  "BIGGAR",
  "BIRCH-HILLS",
  "BISHOPS-FALLS",
  "BLACK-DIAMOND",
  "BLACK-RIVER-MATHESON",
  "BLACKFALDS",
  "BLAINVILLE",
  "BLANC-SABLON",
  "BLANDFORD-BLENHEIM",
  "BLIND-RIVER",
  "BLUCHER",
  "BLUEWATER",
  "BLUMENORT",
  "BOIS-DES-FILION",
  "BOISBRIAND",
  "BOISCHATEL",
  "BOISSEVAIN",
  "BON-ACCORD",
  "BONAVENTURE",
  "BONAVISTA",
  "BONFIELD",
  "BONNECHERE-VALLEY",
  "BONNYVILLE",
  "BOTSFORD",
  "BOTWOOD",
  "BOUCHERVILLE",
  "BOW-ISLAND",
  "BOWDEN",
  "BOWEN-ISLAND",
  "BRACEBRIDGE",
  "BRADFORD-WEST-GWILLIMBURY",
  "BRAMPTON",
  "BRANDON",
  "BRANT",
  "BRANTFORD",
  "BREBEUF",
  "BRENDA-WASKADA",
  "BRESLAU",
  "BRIDGEWATER",
  "BRIGHAM",
  "BRIGHT",
  "BRIGHTON",
  "BRISTOL",
  "BRITANNIA-NO-502",
  "BROCK",
  "BROCKTON",
  "BROCKVILLE",
  "BROKENHEAD",
  "BROMONT",
  "BROOKS",
  "BROSSARD",
  "BROWNSBURG",
  "BRUDENELL,-LYNDOCH-AND-RAGLAN",
  "BRUEDERHEIM",
  "BUCKLAND-NO-491",
  "BUCTOUCHE",
  "BUFFALO-NARROWS",
  "BURFORD",
  "BURGEO",
  "BURIN",
  "BURLINGTON",
  "BURNABY",
  "BURNS-LAKE",
  "BURTON",
  "BURY",
  "CALEDON",
  "CALGARY",
  "CALLANDER",
  "CALMAR",
  "CAMBRIDGE",
  "CAMBRIDGE-BAY",
  "CAMPBELL-RIVER",
  "CAMPBELLTON",
  "CAMROSE",
  "CANDIAC",
  "CANMORE",
  "CANORA",
  "CANTLEY",
  "CANWOOD-NO-494",
  "CAP-CHAT",
  "CAP-PELE",
  "CAP-SAINT-IGNACE",
  "CAP-SANTE",
  "CAPE-BRETON",
  "CAPE-DORSET",
  "CAPLAN",
  "CARAQUET",
  "CARBERRY",
  "CARBONEAR",
  "CARDSTON",
  "CARDWELL",
  "CARIGNAN",
  "CARLETON-PLACE",
  "CARLETON-SUR-MER",
  "CARLING",
  "CARLYLE",
  "CARMAN",
  "CARNDUFF",
  "CARSTAIRS",
  "CARTIER",
  "CARTWRIGHT-ROBLIN",
  "CASSELMAN",
  "CASTLEGAR",
  "CAUSAPSCAL",
  "CAVAN-MONAGHAN",
  "CEDAR",
  "CENTRAL-ELGIN",
  "CENTRAL-FRONTENAC",
  "CENTRAL-HURON",
  "CENTRAL-MANITOULIN",
  "CENTRAL-SAANICH",
  "CENTRE-HASTINGS",
  "CENTRE-WELLINGTON",
  "CENTREVILLE",
  "CENTREVILLE-WAREHAM-TRINITY",
  "CHAMBLY",
  "CHAMBORD",
  "CHAMPLAIN",
  "CHANDLER",
  "CHANNEL-PORT-AUX-BASQUES",
  "CHAPAIS",
  "CHAPLEAU",
  "CHARLEMAGNE",
  "CHARLO",
  "CHARLOTTETOWN",
  "CHASE",
  "CHATEAU-RICHER",
  "CHATEAUGUAY",
  "CHATHAM",
  "CHATSWORTH",
  "CHERTSEY",
  "CHESTER",
  "CHESTERMERE",
  "CHETWYND",
  "CHIBOUGAMAU",
  "CHILLIWACK",
  "CHIPMAN",
  "CHISASIBI",
  "CHISHOLM",
  "CHURCH-POINT",
  "CHUTE-AUX-OUTARDES",
  "CLANWILLIAM-ERICKSON",
  "CLAREMONT",
  "CLARENCE-ROCKLAND",
  "CLARENDON",
  "CLARENVILLE",
  "CLARESHOLM",
  "CLARINGTON",
  "CLARKES-BEACH",
  "CLEARVIEW",
  "CLEARWATER",
  "CLERMONT",
  "CLEVELAND",
  "CLYDE-RIVER",
  "COALDALE",
  "COALHURST",
  "COATICOOK",
  "COBALT",
  "COBOURG",
  "COCAGNE",
  "COCHRANE",
  "COLD-LAKE",
  "COLDSTREAM",
  "COLDWELL",
  "COLERAINE",
  "COLLINGWOOD",
  "COLWOOD",
  "COMOX",
  "COMPTON",
  "CONCEPTION-BAY-SOUTH",
  "CONESTOGO",
  "CONTRECOEUR",
  "COOKSHIRE",
  "COOMBS",
  "COQUITLAM",
  "CORMAN-PARK-NO-344",
  "CORNER-BROOK",
  "CORNWALL",
  "CORNWALLIS",
  "COTE-SAINT-LUC",
  "COTEAU-DU-LAC",
  "COURTENAY",
  "COVERDALE",
  "COWANSVILLE",
  "COWICHAN-BAY",
  "CRABTREE",
  "CRAMAHE",
  "CRANBROOK",
  "CREIGHTON",
  "CRESTON",
  "CROSSFIELD",
  "CROWSNEST-PASS",
  "CUMBERLAND",
  "DALHOUSIE",
  "DALMENY",
  "DANVILLE",
  "DAUPHIN",
  "DAVIDSON",
  "DAWN-EUPHEMIA",
  "DAWSON",
  "DAWSON-CREEK",
  "DE-SALABERRY",
  "DEEP-RIVER",
  "DEER-LAKE",
  "DEGELIS",
  "DELEAGE",
  "DELISLE",
  "DELORAINE-WINCHESTER",
  "DELSON",
  "DELTA",
  "DENMARK",
  "DESBIENS",
  "DESCHAMBAULT",
  "DESERONTO",
  "DEUX-MONTAGNES",
  "DEVON",
  "DIDSBURY",
  "DIEPPE",
  "DIGBY",
  "DILDO",
  "DISRAELI",
  "DOLLARD-DES-ORMEAUX",
  "DONNACONA",
  "DORCHESTER",
  "DORVAL",
  "DOUGLAS",
  "DOURO-DUMMER",
  "DRAYTON-VALLEY",
  "DRUMHELLER",
  "DRUMMOND",
  "NORTH-ELMSLEY",
  "DRUMMONDVILLE",
  "DRYDEN",
  "DUCHESS",
  "DUCK-LAKE-NO-463",
  "DUDSWELL",
  "DUFFERIN",
  "DUNCAN",
  "DUNDAS",
  "DUNDURN-NO-314",
  "DUNHAM",
  "DUNSMUIR",
  "DURHAM",
  "DURHAM-SUD",
  "DUTTON",
  "DUNWICH",
  "DYSART-ET-AL",
  "EAST-ANGUS",
  "EAST-BROUGHTON",
  "EAST-FERRIS",
  "EAST-GARAFRAXA",
  "EAST-GWILLIMBURY",
  "EAST-HAWKESBURY",
  "EAST-KELOWNA",
  "EAST-ST-PAUL",
  "EAST-ZORRA-TAVISTOCK",
  "EASTMAN",
  "ECKVILLE",
  "EDENWOLD-NO-158",
  "EDMONTON",
  "EDMUNDSTON",
  "EDSON",
  "EDWARDSBURGH",
  "CARDINAL",
  "EEL-RIVER-CROSSING",
  "EEYOU-ISTCHEE-BAIE-JAMES",
  "ELIZABETHTOWN-KITLEY",
  "ELK-POINT",
  "ELKFORD",
  "ELLICE-ARCHIE",
  "ELLIOT-LAKE",
  "ELLISON",
  "ELTON",
  "EMERSON-FRANKLIN",
  "EMO",
  "ENDERBY",
  "ENGLEHART",
  "ENNISKILLEN",
  "ERIN",
  "ERRINGTON",
  "ESPANOLA",
  "ESQUIMALT",
  "ESSA",
  "ESSEX",
  "ESTERHAZY",
  "ESTEVAN",
  "ESTEVAN-NO-5",
  "ESTON",
  "ETHELBERT",
  "FALHER",
  "FALMOUTH",
  "FARADAY",
  "FARNHAM",
  "FERME-NEUVE",
  "FERMONT",
  "FERNIE",
  "FISHER",
  "FLAT-ROCK",
  "FLIN-FLON",
  "FLORENCEVILLE",
  "FOAM-LAKE",
  "FOGO-ISLAND",
  "FORESTVILLE",
  "FORT-COULONGE",
  "FORT-ERIE",
  "FORT-FRANCES",
  "FORT-MACLEOD",
  "FORT-QU'APPELLE",
  "FORT-SASKATCHEWAN",
  "FORT-SIMPSON",
  "FORT-SMITH",
  "FORT-ST-JAMES",
  "FORT-ST-JOHN",
  "FORTUNE",
  "FOSSAMBAULT-SUR-LE-LAC",
  "FOX-CREEK",
  "FRAMPTON",
  "FRANKLIN-CENTRE",
  "FREDERICTON",
  "FRELIGHSBURG",
  "FRENCH-RIVER",
  "RIVIERE-DES-FRANCAIS",
  "FRENCHMAN-BUTTE",
  "FRONT-OF-YONGE",
  "FRONTENAC",
  "FRONTENAC-ISLANDS",
  "FRUITVALE",
  "GAMBO",
  "GANANOQUE",
  "GANDER",
  "GASPE",
  "GATINEAU",
  "GEORGIAN-BAY",
  "GEORGIAN-BLUFFS",
  "GEORGINA",
  "GIBBONS",
  "GIBSONS",
  "GILBERT-PLAINS",
  "GILLAM",
  "GIMLI",
  "GIRARDVILLE",
  "GJOA-HAVEN",
  "GLENBORO-SOUTH-CYPRESS",
  "GLENELG",
  "GLENELLA-LANSDOWNE",
  "GLOVERTOWN",
  "GODERICH",
  "GODMANCHESTER",
  "GOLD-RIVER",
  "GOLDEN",
  "GORDON",
  "GORE",
  "GOULDS",
  "GRACEFIELD",
  "GRAHAMDALE",
  "GRANBY",
  "GRAND-BANK",
  "GRAND-BAY-WESTFIELD",
  "GRAND-FALLS",
  "GRAND-FORKS",
  "GRAND-MANAN",
  "GRAND-REMOUS",
  "GRAND-VALLEY",
  "GRAND-VIEW",
  "GRANDE-CACHE",
  "GRANDE-PRAIRIE",
  "GRANDE-RIVIERE",
  "GRANDE-VALLEE",
  "GRASSLAND",
  "GRAVELBOURG",
  "GRAVENHURST",
  "GREATER-MADAWASKA",
  "GREATER-NAPANEE",
  "GREENSTONE",
  "GREENWICH",
  "GRENFELL",
  "GRENVILLE",
  "GRENVILLE-SUR-LA-ROUGE",
  "GREY",
  "GREY-HIGHLANDS",
  "GRIMSBY",
  "GRIMSHAW",
  "GRINDROD",
  "GRUNTHAL",
  "GUELPH",
  "ERAMOSA",
  "HALIFAX",
  "HALTON-HILLS",
  "HAMILTON",
  "HAMILTON-TOWNSHIP",
  "HAMIOTA",
  "HAMPSTEAD",
  "HAMPTON",
  "HANNA",
  "HANOVER",
  "HANWELL",
  "HAPPY-VALLEY",
  "HARBOUR-BRETON",
  "HARBOUR-GRACE",
  "HARBOUR-MAIN-CHAPEL'S-COVE-LAKEVIEW",
  "HARDWICKE",
  "HARRISON-HOT-SPRINGS",
  "HARRISON-PARK",
  "HASTINGS-HIGHLANDS",
  "HATLEY",
  "HAVELOCK",
  "HAVELOCK-BELMONT-METHUEN",
  "HAVRE-SAINT-PIERRE",
  "HAWKESBURY",
  "HAY-RIVER",
  "HEADINGLEY",
  "HEARST",
  "HEBERTVILLE",
  "HEMMINGFORD",
  "HENRYVILLE",
  "HENSALL",
  "HERBERTVILLE",
  "HEROUXVILLE",
  "HIGH-LEVEL",
  "HIGH-PRAIRIE",
  "HIGH-RIVER",
  "HIGHLANDS",
  "HIGHLANDS-EAST",
  "HILLIERS",
  "HILLSBOROUGH",
  "HILLSBURG-ROBLIN-SHELL-RIVER",
  "HILLSBURGH",
  "HINCHINBROOKE",
  "HINDON-HILL",
  "HINTON",
  "HOLYROOD",
  "HOPE",
  "HORTON",
  "HOUSTON",
  "HOWICK",
  "HUDSON",
  "HUDSON-BAY",
  "HUDSON-BAY-NO-394",
  "HUDSON-HOPE",
  "HUMBERMOUTH",
  "HUMBOLDT",
  "HUNTINGDON",
  "HUNTSVILLE",
  "HURON-EAST",
  "HURON-KINLOSS",
  "HURON-SHORES",
  "IGLOOLIK",
  "IGNACE",
  "ILE-A-LA-CROSSE",
  "INDIAN-HEAD",
  "INGERSOLL",
  "INNISFAIL",
  "INNISFIL",
  "INUKJUAK",
  "INUVIK",
  "INVERMERE",
  "INVERNESS",
  "IQALUIT",
  "IRISHTOWN-SUMMERSIDE",
  "IROQUOIS-FALLS",
  "IRRICANA",
  "JASPER",
  "JOLIETTE",
  "KALEDEN",
  "KAMLOOPS",
  "KAMSACK",
  "KAPUSKASING",
  "KAWARTHA-LAKES",
  "KEDGWICK",
  "KELOWNA",
  "KELSEY",
  "KENORA",
  "KENSINGTON",
  "KENT",
  "KENTVILLE",
  "KEREMEOS",
  "KERROBERT",
  "KILLALOE,-HAGARTY-AND-RICHARDS",
  "KILLARNEY--TURTLE-MOUNTAIN",
  "KIMBERLEY",
  "KINCARDINE",
  "KINDERSLEY",
  "KINDERSLEY-NO-290",
  "KING",
  "KINGSCLEAR",
  "KINGSEY-FALLS",
  "KINGSTON",
  "KINGSVILLE",
  "KIPLING",
  "KIPPENS",
  "KIRKLAND",
  "KIRKLAND-LAKE",
  "KITCHENER",
  "KITIMAT",
  "KOMOKA",
  "KUGLUKTUK",
  "KUUJJUAQ",
  "L'-ISLE-VERTE",
  "L'ANCIENNE-LORETTE",
  "L'ANGE-GARDIEN",
  "L'ANSE-SAINT-JEAN",
  "L'ASCENSION-DE-NOTRE-SEIGNEUR",
  "L'ASSOMPTION",
  "L'AVENIR",
  "L'EPIPHANIE",
  "L'ILE-PERROT",
  "L'ISLE-AUX-ALLUMETTES",
  "L'ISLE-AUX-COUDRES",
  "L'ISLET-SUR-MER",
  "LA-BROQUERIE",
  "LA-CONCEPTION",
  "LA-DORE",
  "LA-GUADELOUPE",
  "LA-LOCHE",
  "LA-MACAZA",
  "LA-MALBAIE",
  "LA-MINERVE",
  "LA-PECHE",
  "LA-POCATIERE",
  "LA-PRAIRIE",
  "LA-PRESENTATION",
  "LA-RONGE",
  "LA-SARRE",
  "LA-TUQUE",
  "LABELLE",
  "LABRADOR-CITY",
  "LABRECQUE",
  "LAC-AU-SAUMON",
  "LAC-AUX-SABLES",
  "LAC-BOUCHETTE",
  "LAC-BROME",
  "LAC-DES-ECORCES",
  "LAC-DROLET",
  "LAC-DU-BONNET",
  "LAC-ETCHEMIN",
  "LAC-MEGANTIC",
  "LAC-NOMININGUE",
  "LAC-SUPERIEUR",
  "LACHUTE",
  "LACOLLE",
  "LACOMBE",
  "LADYSMITH",
  "LAIRD",
  "LAIRD-NO-404",
  "LAJORD-NO-128",
  "LAKE-COUNTRY",
  "LAKE-COWICHAN",
  "LAKE-OF-BAYS",
  "LAKESHORE",
  "LAKEVIEW",
  "LAMBTON",
  "LAMBTON-SHORES",
  "LAMEQUE",
  "LAMONT",
  "LANARK-HIGHLANDS",
  "LANDMARK",
  "LANGENBURG",
  "LANGFORD-STATION",
  "LANGHAM",
  "LANGLEY",
  "LANIGAN",
  "LANORAIE",
  "LANTZ",
  "LAPPE",
  "LAROUCHE",
  "LASALLE",
  "LAURENTIAN-HILLS",
  "LAURENTIAN-VALLEY",
  "LAURIER-STATION",
  "LAURIERVILLE",
  "LAVAL",
  "LAVALTRIE",
  "LEAMINGTON",
  "LEBEL-SUR-QUEVILLON",
  "LEDUC",
  "LEEDS-AND-THE-THOUSAND-ISLANDS",
  "LEGAL",
  "LERY",
  "LES-CEDRES",
  "LES-COTEAUX",
  "LES-EBOULEMENTS",
  "LES-ESCOUMINS",
  "LES-ILES-DE-LA-MADELEINE",
  "LES-MECHINS",
  "LETHBRIDGE",
  "LEVIS",
  "LEWISPORTE",
  "LILLOOET",
  "LINCOLN",
  "LIONS-BAY",
  "LISTUGUJ",
  "LLOYDMINSTER",
  "LOGAN-LAKE",
  "LOGY-BAY-MIDDLE-COVE-OUTER-COVE",
  "LONDON",
  "LONGLAKETON-NO-219",
  "LONGUE-RIVE",
  "LONGUEUIL",
  "LORETTE",
  "LORNE",
  "LORRAINE",
  "LORRAINVILLE",
  "LOUISE",
  "LOUISEVILLE",
  "LOYALIST",
  "LUCAN-BIDDULPH",
  "LUMBY",
  "LUMSDEN",
  "LUMSDEN-NO-189",
  "LUNENBURG",
  "LYSTER",
  "MACAMIC",
  "MACDONALD",
  "MACDONALD,-MEREDITH-AND-ABERDEEN-ADDITIONAL",
  "MACKENZIE",
  "MACKLIN",
  "MADAWASKA-VALLEY",
  "MADOC",
  "MAGNETAWAN",
  "MAGOG",
  "MAGRATH",
  "MAHONE-BAY",
  "MAIDSTONE",
  "MALAHIDE",
  "MALARTIC",
  "MALIOTENAM",
  "MALPEQUE",
  "MANDEVILLE",
  "MANITOUWADGE",
  "MANIWAKI",
  "MANNERS-SUTTON",
  "MANNING",
  "MANOUANE",
  "MANSFIELD-ET-PONTEFRACT",
  "MAPLE-CREEK",
  "MAPLE-CREEK-NO-111",
  "MAPLE-RIDGE",
  "MAPLETON",
  "MARATHON",
  "MARIA",
  "MARIEVILLE",
  "MARKHAM",
  "MARKSTAY",
  "MARMORA-AND-LAKE",
  "MARTENSVILLE",
  "MARYSTOWN",
  "MASCOUCHE",
  "MASHTEUIATSH",
  "MASKINONGE",
  "MASSEY-DRIVE",
  "MATAGAMI",
  "MATANE",
  "MATTAWA",
  "MAUGERVILLE",
  "MAYERTHORPE",
  "MCADAM",
  "MCCREARY",
  "MCDOUGALL",
  "MCKELLAR",
  "MCMASTERVILLE",
  "MCNAB",
  "BRAESIDE",
  "MEADOW-LAKE",
  "MEADOW-LAKE-NO-588",
  "MEAFORD",
  "MEDICINE-HAT",
  "MELANCTHON",
  "MELBOURNE",
  "MELFORT",
  "MELITA",
  "MELVILLE",
  "MEMRAMCOOK",
  "MERCIER",
  "MERRICKVILLE",
  "MERRITT",
  "MERVIN-NO-499",
  "MESSINES",
  "METABETCHOUAN-LAC-A-LA-CROIX",
  "METCHOSIN",
  "MIDDLESEX-CENTRE",
  "MIDDLETON",
  "MIDLAND",
  "MILLE-ISLES",
  "MILLET",
  "MILTON",
  "MILTONVALE-PARK",
  "MINITONAS-BOWSMAN",
  "MINNEDOSA",
  "MINTO",
  "MINTO-ODANAH",
  "MIRABEL",
  "MIRAMICHI",
  "MISSION",
  "MISSISSAUGA",
  "MISSISSIPPI-MILLS",
  "MISTASSINI",
  "MISTISSINI",
  "MITCHELL",
  "MONCTON",
  "MONO",
  "MONT-CARMEL",
  "MONT-JOLI",
  "MONT-LAURIER",
  "MONT-ORFORD",
  "MONT-ROYAL",
  "MONT-SAINT-GREGOIRE",
  "MONT-SAINT-HILAIRE",
  "MONT-TREMBLANT",
  "MONTAGUE",
  "MONTCALM",
  "MONTMAGNY",
  "MONTREAL",
  "MONTREAL-EST",
  "MONTREAL-OUEST",
  "MOONBEAM",
  "MOOSE-JAW",
  "MOOSE-JAW-NO-161",
  "MOOSOMIN",
  "MOOSONEE",
  "MORDEN",
  "MORIN-HEIGHTS",
  "MORINVILLE",
  "MORRIS",
  "MORRIS-TURNBERRY",
  "MOSSEY-RIVER",
  "MOUNT-PEARL-PARK",
  "MULMUR",
  "MUSKOKA-FALLS",
  "MUSQUASH",
  "NAIN",
  "NAKUSP",
  "NANAIMO",
  "NANTES",
  "NANTON",
  "NAPIERVILLE",
  "NARAMATA",
  "NAUWIGEWAUK",
  "NEEBING",
  "NEEPAWA",
  "NEGUAC",
  "NELSON",
  "NEUVILLE",
  "NEW-BANDON",
  "NEW-CARLISLE",
  "NEW-GLASGOW",
  "NEW-MARYLAND",
  "NEW-RICHMOND",
  "NEW-TECUMSETH",
  "NEW-WES-VALLEY",
  "NEW-WESTMINSTER",
  "NEWCASTLE",
  "NEWMARKET",
  "NIAGARA-FALLS",
  "NIAGARA-ON-THE-LAKE",
  "NICOLET",
  "NIPAWIN",
  "NIPAWIN-NO-487",
  "NIPIGON",
  "NIPISSING",
  "NISGA'A",
  "NIVERVILLE",
  "NOBLEFORD",
  "NOONAN",
  "NORFOLK-TREHERNE",
  "NORMANDIN",
  "NORTH-ALGONA-WILBERFORCE",
  "NORTH-BATTLEFORD",
  "NORTH-BAY",
  "NORTH-COWICHAN",
  "NORTH-CYPRESS-LANGFORD",
  "NORTH-DUMFRIES",
  "NORTH-DUNDAS",
  "NORTH-FRONTENAC",
  "NORTH-GLENGARRY",
  "NORTH-GRENVILLE",
  "NORTH-HURON",
  "NORTH-KAWARTHA",
  "NORTH-MIDDLESEX",
  "NORTH-NORFOLK",
  "NORTH-PERTH",
  "NORTH-SAANICH",
  "NORTH-STORMONT",
  "NORTH-VANCOUVER",
  "NORTHAMPTON",
  "NORTHEASTERN-MANITOULIN-AND-THE-ISLANDS",
  "NORTHERN-BRUCE-PENINSULA",
  "NORTHERN-ROCKIES",
  "NORTHESK",
  "NORTON",
  "NORWICH",
  "NOTRE-DAME-DE-L'ILE-PERROT",
  "NOTRE-DAME-DE-LOURDES",
  "NOTRE-DAME-DES-NEIGES",
  "NOTRE-DAME-DES-PINS",
  "NOTRE-DAME-DES-PRAIRIES",
  "NOTRE-DAME-DU-BON-CONSEIL",
  "NOTRE-DAME-DU-LAUS",
  "NOTRE-DAME-DU-MONT-CARMEL",
  "NOTRE-DAME-DU-NORD",
  "NOTRE-DAME-DU-PORTAGE",
  "NOUVELLE",
  "NOYAN",
  "OAK-BAY",
  "OAKLAND-WAWANESA",
  "OAKVIEW",
  "OAKVILLE",
  "OBEDJIWAN",
  "OKA",
  "OKOTOKS",
  "OLD-CHELSEA",
  "OLDS",
  "OLIVER",
  "OLIVER-PAIPOONGE",
  "ONE-HUNDRED-MILE-HOUSE",
  "ONOWAY",
  "OOTISCHENIA",
  "ORANGEVILLE",
  "ORILLIA",
  "ORKNEY-NO-244",
  "ORMSTOWN",
  "ORO-MEDONTE",
  "OROMOCTO",
  "OSHAWA",
  "OSLER",
  "OSOYOOS",
  "OTONABEE-SOUTH-MONAGHAN",
  "OTTAWA",
  "OTTERBURN-PARK",
  "OUTLOOK",
  "OWEN-SOUND",
  "OXBOW",
  "OXFORD",
  "OYEN",
  "PALMAROLLE",
  "PANGNIRTUNG",
  "PAPINEAU-CAMERON",
  "PAPINEAUVILLE",
  "PAQUETVILLE",
  "PARADISE",
  "PARKSVILLE",
  "PARRSBORO",
  "PARRY-SOUND",
  "PASADENA",
  "PASPEBIAC",
  "PEACE-RIVER",
  "PEACHLAND",
  "PEEL",
  "PELHAM",
  "PELICAN-NARROWS",
  "PEMBERTON",
  "PEMBINA",
  "PEMBROKE",
  "PENETANGUISHENE",
  "PENHOLD",
  "PENNFIELD-RIDGE",
  "PENTICTON",
  "PERCE",
  "PERRY",
  "PERTH",
  "PERTH-EAST",
  "PERTH-SOUTH",
  "PESSAMIT",
  "PETAWAWA",
  "PETERBOROUGH",
  "PETIT-ROCHER",
  "PETITCODIAC",
  "PETROLIA",
  "PICKERING",
  "PICTOU",
  "PICTURE-BUTTE",
  "PIEDMONT",
  "PIERREVILLE",
  "PILOT-BUTTE",
  "PINAWA",
  "PINCHER-CREEK",
  "PINCOURT",
  "PINEHOUSE",
  "PINEY",
  "PIPESTONE",
  "PITT-MEADOWS",
  "PLACENTIA",
  "PLAISANCE",
  "PLANTAGENET",
  "PLASTER-ROCK",
  "PLESSISVILLE",
  "PLYMPTON-WYOMING",
  "POHENEGAMOOK",
  "POINT-EDWARD",
  "POINTE-A-LA-CROIX",
  "POINTE-AUX-OUTARDES",
  "POINTE-CALUMET",
  "POINTE-CLAIRE",
  "POINTE-DES-CASCADES",
  "POINTE-LEBEL",
  "POND-INLET",
  "PONOKA",
  "PONT-ROUGE",
  "PONTIAC",
  "POPKUM",
  "PORT-ALBERNI",
  "PORT-CARTIER",
  "PORT-COLBORNE",
  "PORT-COQUITLAM",
  "PORT-DANIEL-GASCONS",
  "PORT-HARDY",
  "PORT-HAWKESBURY",
  "PORT-HOPE",
  "PORT-MCNEILL",
  "PORT-MOODY",
  "PORTAGE-LA-PRAIRIE",
  "PORTNEUF",
  "PORTUGAL-COVE-ST-PHILIP'S",
  "POTTON",
  "POUCH-COVE",
  "POVUNGNITUK",
  "POWASSAN",
  "POWELL-RIVER",
  "POWERVIEW-PINE-FALLS",
  "PRAIRIE-LAKES",
  "PRAIRIE-VIEW",
  "PREECEVILLE",
  "PRESCOTT",
  "PREVOST",
  "PRICE",
  "PRINCE",
  "PRINCE-ALBERT",
  "PRINCE-ALBERT-NO-461",
  "PRINCE-GEORGE",
  "PRINCE-RUPERT",
  "PRINCETON",
  "PRINCEVILLE",
  "PROVOST",
  "PUSLINCH",
  "QUALICUM-BEACH",
  "QUEBEC-CITY",
  "QUEENS",
  "QUEENSBURY",
  "QUESNEL",
  "QUINTE-WEST",
  "QUISPAMSIS",
  "RACINE",
  "RAGUENEAU",
  "RAMA",
  "RAMARA",
  "RANKIN-INLET",
  "RAWDON",
  "RAYMOND",
  "RED-DEER",
  "RED-LAKE",
  "REDCLIFF",
  "REDWATER",
  "REGINA",
  "REGINA-BEACH",
  "REINLAND",
  "RENFREW",
  "REPENTIGNY",
  "REPULSE-BAY",
  "REYNOLDS",
  "RICHELIEU",
  "RICHIBUCTO",
  "RICHMOND",
  "RICHMOND-HILL",
  "RIDEAU-LAKES",
  "RIDING-MOUNTAIN-WEST",
  "RIGAUD",
  "RIMBEY",
  "RIMOUSKI",
  "RIPON",
  "RITCHOT",
  "RIVERDALE",
  "RIVERVIEW",
  "RIVIERE-BEAUDETTE",
  "RIVIERE-BLANCHE",
  "RIVIERE-BLEUE",
  "RIVIERE-DU-LOUP",
  "RIVIERE-HEVA",
  "RIVIERE-OUELLE",
  "RIVIERE-ROUGE",
  "ROBERVAL",
  "ROCKWOOD",
  "ROCKY-MOUNTAIN-HOUSE",
  "ROGERSVILLE",
  "ROLAND",
  "ROSEDALE",
  "ROSEMERE",
  "ROSETOWN",
  "ROSSBURN",
  "ROSSER",
  "ROSSLAND",
  "ROSTHERN",
  "ROSTHERN-NO-403",
  "ROTHESAY",
  "ROUGEMONT",
  "ROUYN-NORANDA",
  "ROXTON-FALLS",
  "ROXTON-POND",
  "ROXTON-SUD",
  "ROYSTON",
  "RUSSELL",
  "RUSSELL-BINSCARTH",
  "SAANICH",
  "SABLES-SPANISH-RIVERS",
  "SACKVILLE",
  "SACRE-COEUR-SAGUENAY",
  "SAGAMOK",
  "SAGUENAY",
  "SAINT-ADOLPHE-D'HOWARD",
  "SAINT-AGAPIT",
  "SAINT-AIME-DES-LACS",
  "SAINT-ALBAN",
  "SAINT-ALBERT",
  "SAINT-ALEXANDRE",
  "SAINT-ALEXANDRE-DE-KAMOURASKA",
  "SAINT-ALEXIS",
  "SAINT-ALEXIS-DES-MONTS",
  "SAINT-ALPHONSE-DE-GRANBY",
  "SAINT-ALPHONSE-RODRIGUEZ",
  "SAINT-AMABLE",
  "SAINT-AMBROISE",
  "SAINT-AMBROISE-DE-KILDARE",
  "SAINT-ANACLET-DE-LESSARD",
  "SAINT-ANDRE",
  "SAINT-ANDRE-AVELLIN",
  "SAINT-ANDRE-D'ARGENTEUIL",
  "SAINT-ANDREWS",
  "SAINT-ANICET",
  "SAINT-ANSELME",
  "SAINT-ANTOINE",
  "SAINT-ANTOINE-DE-TILLY",
  "SAINT-ANTOINE-SUR-RICHELIEU",
  "SAINT-ANTONIN",
  "SAINT-APOLLINAIRE",
  "SAINT-ARMAND",
  "SAINT-ARSENE",
  "SAINT-AUBERT",
  "SAINT-AUGUSTIN-DE-DESMAURES",
  "SAINT-BARNABE",
  "SAINT-BARTHELEMY",
  "SAINT-BASILE",
  "SAINT-BASILE-LE-GRAND",
  "SAINT-BENOIT-LABRE",
  "SAINT-BERNARD",
  "SAINT-BERNARD-DE-LACOLLE",
  "SAINT-BLAISE-SUR-RICHELIEU",
  "SAINT-BONAVENTURE",
  "SAINT-BONIFACE",
  "SAINT-BRUNO",
  "SAINT-BRUNO-DE-GUIGUES",
  "SAINT-BRUNO-DE-MONTARVILLE",
  "SAINT-CALIXTE",
  "SAINT-CASIMIR",
  "SAINT-CESAIRE",
  "SAINT-CHARLES",
  "SAINT-CHARLES-BORROMEE",
  "SAINT-CHARLES-DE-BELLECHASSE",
  "SAINT-CHARLES-SUR-RICHELIEU",
  "SAINT-CHRISTOPHE-D'ARTHABASKA",
  "SAINT-CHRYSOSTOME",
  "SAINT-CLAUDE",
  "SAINT-CLET",
  "SAINT-COLOMBAN",
  "SAINT-COME",
  "SAINT-COME-LINIERE",
  "SAINT-CONSTANT",
  "SAINT-CUTHBERT",
  "SAINT-CYPRIEN",
  "SAINT-CYPRIEN-DE-NAPIERVILLE",
  "SAINT-CYRILLE-DE-WENDOVER",
  "SAINT-DAMASE",
  "SAINT-DAMIEN",
  "SAINT-DAMIEN-DE-BUCKLAND",
  "SAINT-DAVID",
  "SAINT-DAVID-DE-FALARDEAU",
  "SAINT-DENIS",
  "SAINT-DENIS-DE-BROMPTON",
  "SAINT-DOMINIQUE",
  "SAINT-DONAT",
  "SAINT-EDOUARD",
  "SAINT-EDOUARD-DE-LOTBINIERE",
  "SAINT-ELIE-DE-CAXTON",
  "SAINT-ELZEAR",
  "SAINT-EPHREM-DE-BEAUCE",
  "SAINT-ESPRIT",
  "SAINT-ETIENNE-DES-GRES",
  "SAINT-EUGENE",
  "SAINT-EUSTACHE",
  "SAINT-FABIEN",
  "SAINT-FAUSTIN-LAC-CARRE",
  "SAINT-FELICIEN",
  "SAINT-FELIX-DE-KINGSEY",
  "SAINT-FELIX-DE-VALOIS",
  "SAINT-FERDINAND",
  "SAINT-FERREOL-LES-NEIGES",
  "SAINT-FLAVIEN",
  "SAINT-FRANCOIS-DE-LA-RIVIERE-DU-SUD",
  "SAINT-FRANCOIS-DU-LAC",
  "SAINT-FRANCOIS-XAVIER-DE-BROMPTON",
  "SAINT-FREDERIC",
  "SAINT-FULGENCE",
  "SAINT-GABRIEL",
  "SAINT-GABRIEL-DE-BRANDON",
  "SAINT-GABRIEL-DE-RIMOUSKI",
  "SAINT-GABRIEL-DE-VALCARTIER",
  "SAINT-GEDEON",
  "SAINT-GEDEON-DE-BEAUCE",
  "SAINT-GEORGE",
  "SAINT-GEORGES-DE-CACOUNA",
  "SAINT-GEORGES-DE-CLARENCEVILLE",
  "SAINT-GERMAIN-DE-GRANTHAM",
  "SAINT-GERVAIS",
  "SAINT-GILLES",
  "SAINT-GUILLAUME",
  "SAINT-HENRI",
  "SAINT-HILARION",
  "SAINT-HIPPOLYTE",
  "SAINT-HONORE",
  "SAINT-HONORE-DE-SHENLEY",
  "SAINT-HUBERT-DE-RIVIERE-DU-LOUP",
  "SAINT-HUGUES",
  "SAINT-HYACINTHE",
  "SAINT-IGNACE-DE-LOYOLA",
  "SAINT-ISIDORE",
  "SAINT-JACQUES",
  "SAINT-JACQUES-LE-MINEUR",
  "SAINT-JAMES",
  "SAINT-JEAN-BAPTISTE",
  "SAINT-JEAN-DE-DIEU",
  "SAINT-JEAN-DE-MATHA",
  "SAINT-JEAN-PORT-JOLI",
  "SAINT-JEAN-SUR-RICHELIEU",
  "SAINT-JEROME",
  "SAINT-JOACHIM",
  "SAINT-JOACHIM-DE-SHEFFORD",
  "SAINT-JOHN",
  "SAINT-JOSEPH",
  "SAINT-JOSEPH-DE-BEAUCE",
  "SAINT-JOSEPH-DE-COLERAINE",
  "SAINT-JOSEPH-DE-SOREL",
  "SAINT-JOSEPH-DU-LAC",
  "SAINT-JUDE",
  "SAINT-JUSTIN",
  "SAINT-LAMBERT",
  "SAINT-LAMBERT-DE-LAUZON",
  "SAINT-LAURENT-DE-L'ILE-D'ORLEANS",
  "SAINT-LAZARE",
  "SAINT-LAZARE-DE-BELLECHASSE",
  "SAINT-LEON-DE-STANDON",
  "SAINT-LEONARD",
  "SAINT-LEONARD-D'ASTON",
  "SAINT-LEONARD-DE-PORTNEUF",
  "SAINT-LIBOIRE",
  "SAINT-LIGUORI",
  "SAINT-LIN-LAURENTIDES",
  "SAINT-LOUIS",
  "SAINT-LOUIS-DE-GONZAGUE",
  "SAINT-LOUIS-DU-HA!-HA!",
  "SAINT-LUCIEN",
  "SAINT-LUDGER",
  "SAINT-MAJORIQUE-DE-GRANTHAM",
  "SAINT-MALACHIE",
  "SAINT-MARC-DES-CARRIERES",
  "SAINT-MARC-SUR-RICHELIEU",
  "SAINT-MARTIN",
  "SAINT-MARTINS",
  "SAINT-MARY",
  "SAINT-MARYS",
  "SAINT-MATHIAS-SUR-RICHELIEU",
  "SAINT-MATHIEU",
  "SAINT-MATHIEU-DE-BELOEIL",
  "SAINT-MATHIEU-DU-PARC",
  "SAINT-MAURICE",
  "SAINT-MAXIME-DU-MONT-LOUIS",
  "SAINT-MICHEL",
  "SAINT-MICHEL-DE-BELLECHASSE",
  "SAINT-MICHEL-DES-SAINTS",
  "SAINT-MICHEL-DU-SQUATEC",
  "SAINT-MODESTE",
  "SAINT-NARCISSE",
  "SAINT-NARCISSE-DE-BEAURIVAGE",
  "SAINT-NARCISSE-DE-RIMOUSKI",
  "SAINT-NAZAIRE",
  "SAINT-NORBERT",
  "SAINT-NORBERT-D'ARTHABASKA",
  "SAINT-ODILON-DE-CRANBOURNE",
  "SAINT-OURS",
  "SAINT-PACOME",
  "SAINT-PAMPHILE",
  "SAINT-PASCAL",
  "SAINT-PATRICE-DE-BEAURIVAGE",
  "SAINT-PATRICE-DE-SHERRINGTON",
  "SAINT-PAUL",
  "SAINT-PAUL-D'ABBOTSFORD",
  "SAINT-PAUL-DE-L'ILE-AUX-NOIX",
  "SAINT-PAULIN",
  "SAINT-PHILIPPE",
  "SAINT-PIE",
  "SAINT-PIERRE-DE-L'ILE-D'ORLEANS",
  "SAINT-PIERRE-LES-BECQUETS",
  "SAINT-PLACIDE",
  "SAINT-POLYCARPE",
  "SAINT-PRIME",
  "SAINT-PROSPER",
  "SAINT-QUENTIN",
  "SAINT-RAPHAEL",
  "SAINT-RAYMOND",
  "SAINT-REMI",
  "SAINT-RENE-DE-MATANE",
  "SAINT-ROBERT",
  "SAINT-ROCH-DE-L'ACHIGAN",
  "SAINT-ROCH-DE-RICHELIEU",
  "SAINT-SAUVEUR",
  "SAINT-SIMEON",
  "SAINT-SIMON",
  "SAINT-STANISLAS",
  "SAINT-STANISLAS-DE-KOSTKA",
  "SAINT-STEPHEN",
  "SAINT-SULPICE",
  "SAINT-SYLVESTRE",
  "SAINT-THEODORE-D'ACTON",
  "SAINT-THOMAS",
  "SAINT-TITE",
  "SAINT-TITE-DES-CAPS",
  "SAINT-UBALDE",
  "SAINT-URBAIN",
  "SAINT-URBAIN-PREMIER",
  "SAINT-VALERE",
  "SAINT-VALERIEN-DE-MILTON",
  "SAINT-VALLIER",
  "SAINT-VICTOR",
  "SAINT-WENCESLAS",
  "SAINT-ZACHARIE",
  "SAINT-ZENON",
  "SAINT-ZOTIQUE",
  "SAINTE-ADELE",
  "SAINTE-AGATHE-DE-LOTBINIERE",
  "SAINTE-AGATHE-DES-MONTS",
  "SAINTE-ANGELE-DE-MONNOIR",
  "SAINTE-ANNE-DE-BEAUPRE",
  "SAINTE-ANNE-DE-BELLEVUE",
  "SAINTE-ANNE-DE-LA-PERADE",
  "SAINTE-ANNE-DE-LA-POCATIERE",
  "SAINTE-ANNE-DE-SABREVOIS",
  "SAINTE-ANNE-DE-SOREL",
  "SAINTE-ANNE-DES-LACS",
  "SAINTE-ANNE-DES-MONTS",
  "SAINTE-ANNE-DES-PLAINES",
  "SAINTE-ANNE-DU-SAULT",
  "SAINTE-BARBE",
  "SAINTE-BEATRIX",
  "SAINTE-BRIGIDE-D'IBERVILLE",
  "SAINTE-BRIGITTE-DE-LAVAL",
  "SAINTE-CATHERINE",
  "SAINTE-CATHERINE-DE-HATLEY",
  "SAINTE-CATHERINE-DE-LA-JACQUES-CARTIER",
  "SAINTE-CECILE-DE-MILTON",
  "SAINTE-CLAIRE",
  "SAINTE-CLOTILDE",
  "SAINTE-CLOTILDE-DE-HORTON",
  "SAINTE-CROIX",
  "SAINTE-ELISABETH",
  "SAINTE-EMELIE-DE-L'ENERGIE",
  "SAINTE-FELICITE",
  "SAINTE-GENEVIEVE-DE-BATISCAN",
  "SAINTE-GENEVIEVE-DE-BERTHIER",
  "SAINTE-HELENE-DE-BAGOT",
  "SAINTE-HENEDINE",
  "SAINTE-JEANNE-D'ARC",
  "SAINTE-JULIE",
  "SAINTE-JULIENNE",
  "SAINTE-JUSTINE",
  "SAINTE-LUCE",
  "SAINTE-LUCIE-DES-LAURENTIDES",
  "SAINTE-MADELEINE",
  "SAINTE-MARCELLINE-DE-KILDARE",
  "SAINTE-MARGUERITE",
  "SAINTE-MARGUERITE-DU-LAC-MASSON",
  "SAINTE-MARIE",
  "SAINTE-MARIE-MADELEINE",
  "SAINTE-MARIE-SALOME",
  "SAINTE-MARTHE",
  "SAINTE-MARTHE-SUR-LE-LAC",
  "SAINTE-MARTINE",
  "SAINTE-MELANIE",
  "SAINTE-PETRONILLE",
  "SAINTE-SABINE",
  "SAINTE-SOPHIE",
  "SAINTE-THECLE",
  "SAINTE-THERESE",
  "SAINTE-THERESE-DE-GASPE",
  "SAINTE-URSULE",
  "SAINTE-VICTOIRE-DE-SOREL",
  "SAINTS-ANGES",
  "SALABERRY-DE-VALLEYFIELD",
  "SALISBURY",
  "SALLUIT",
  "SALMO",
  "SALMON-ARM",
  "SALTAIR",
  "SARNIA",
  "SASKATOON",
  "SAUGEEN-SHORES",
  "SAULT-STE-MARIE",
  "SAYABEC",
  "SCHREIBER",
  "SCOTT",
  "SCUGOG",
  "SECHELT",
  "SEGUIN",
  "SELKIRK",
  "SELWYN",
  "SENNETERRE",
  "SEPT-ILES",
  "SEVERN",
  "SEXSMITH",
  "SHANNON",
  "SHAUNAVON",
  "SHAWINIGAN",
  "SHAWVILLE",
  "SHEDIAC",
  "SHELBURNE",
  "SHELLBROOK",
  "SHELLBROOK-NO-493",
  "SHERBROOKE",
  "SHIPPAGAN",
  "SHIPPEGAN",
  "SHUNIAH",
  "SICAMOUS",
  "SIDNEY",
  "SIFTON",
  "SIMONDS",
  "SIOUX-LOOKOUT",
  "SIOUX-NARROWS-NESTOR-FALLS",
  "SLAVE-LAKE",
  "SMITHERS",
  "SMITHS-FALLS",
  "SMOOTH-ROCK-FALLS",
  "SOOKE",
  "SOREL-TRACY",
  "SORRENTO",
  "SOURIS",
  "SOURIS-GLENWOOD",
  "SOUTH-ALGONQUIN",
  "SOUTH-BRUCE",
  "SOUTH-BRUCE-PENINSULA",
  "SOUTH-DUNDAS",
  "SOUTH-FRONTENAC",
  "SOUTH-GLENGARRY",
  "SOUTH-HURON",
  "SOUTH-QU'APPELLE-NO-157",
  "SOUTH-RIVER",
  "SOUTH-STORMONT",
  "SOUTH-WEST-OXFORD",
  "SOUTHAMPTON",
  "SOUTHESK",
  "SOUTHGATE",
  "SOUTHWEST-MIDDLESEX",
  "SOUTHWOLD",
  "SPALLUMCHEEN",
  "SPANIARDS-BAY",
  "SPARWOOD",
  "SPIRITWOOD-NO-496",
  "SPRINGBROOK",
  "SPRINGDALE",
  "SPRINGFIELD",
  "SPRINGWATER",
  "SPRUCE-GROVE",
  "SQUAMISH",
  "ST-ALBAN'S",
  "ST-ALBERT",
  "ST-ANDREWS",
  "ST-ANTHONY",
  "ST-CATHARINES",
  "ST-CHARLES",
  "ST-CLAIR",
  "ST-CLEMENTS",
  "ST-FRANCOIS-XAVIER",
  "ST-GEORGE",
  "ST-GEORGE'S",
  "ST-JOHN'S",
  "ST-JOSEPH",
  "ST-LAURENT",
  "ST-LAWRENCE",
  "ST-LOUIS-NO-431",
  "ST-MARYS",
  "ST-PAUL",
  "ST-PIERRE-JOLYS",
  "ST-THOMAS",
  "STANLEY",
  "STANSTEAD",
  "STE-ANNE",
  "STE-ROSE",
  "STEINBACH",
  "STELLARTON",
  "STEPHENVILLE",
  "STEPHENVILLE-CROSSING",
  "STETTLER",
  "STEWIACKE",
  "STIRLING-RAWDON",
  "STOKE",
  "STONE-MILLS",
  "STONEHAM-ET-TEWKESBURY",
  "STONEWALL",
  "STONY-PLAIN",
  "STOUFFVILLE",
  "STRATFORD",
  "STRATHMORE",
  "STRATHROY-CARADOC",
  "STRONG",
  "STUARTBURN",
  "STUDHOLM",
  "STUKELY-SUD",
  "SUDBURY",
  "SUMMERLAND",
  "SUMMERSIDE",
  "SUNDRE",
  "SURREY",
  "SUSSEX",
  "SUSSEX-CORNER",
  "SUTTON",
  "SWAN-HILLS",
  "SWAN-RIVER",
  "SWAN-VALLEY-WEST",
  "SWIFT-CURRENT",
  "SWIFT-CURRENT-NO-137",
  "SYLVAN-LAKE",
  "TABER",
  "TACHE",
  "TALOYOAK",
  "TARA",
  "TAY",
  "TAY-VALLEY",
  "TAYLOR",
  "TECUMSEH",
  "TELKWA",
  "TEMISCAMING",
  "TEMISCOUATA-SUR-LE-LAC",
  "TEMISKAMING-SHORES",
  "TERRACE",
  "TERRACE-BAY",
  "TERRASSE-VAUDREUIL",
  "TERREBONNE",
  "TEULON",
  "THAMES-CENTRE",
  "THE-BLUE-MOUNTAINS",
  "THE-NATION",
  "LA-NATION",
  "THE-PAS",
  "THESSALON",
  "THETFORD-MINES",
  "THOMPSON",
  "THOROLD",
  "THREE-HILLS",
  "THUNDER-BAY",
  "THURSO",
  "TILLSONBURG",
  "TIMMINS",
  "TINGWICK",
  "TINY",
  "TISDALE",
  "TOFIELD",
  "TOFINO",
  "TORBAY",
  "TORCH-RIVER-NO-488",
  "TORONTO",
  "TRACADIE",
  "TRAIL",
  "TRECESSON",
  "TRENT-HILLS",
  "TRENT-LAKES",
  "TRENTON",
  "TRES-SAINT-SACREMENT",
  "TRING-JONCTION",
  "TRINITY-BAY-NORTH",
  "TROCHU",
  "TROIS-PISTOLES",
  "TROIS-RIVIERES",
  "TRURO",
  "TUMBLER-RIDGE",
  "TURNER-VALLEY",
  "TWEED",
  "TWILLINGATE",
  "TWO-BORDERS",
  "TWO-HILLS",
  "TYENDINAGA",
  "UASHAT",
  "UCLUELET",
  "UNITY",
  "UPHAM",
  "UPPER-ISLAND-COVE",
  "UPPER-MIRAMICHI",
  "UPTON",
  "UXBRIDGE",
  "VAL-D'OR",
  "VAL-DAVID",
  "VAL-DES-MONTS",
  "VAL-JOLI",
  "VAL-MORIN",
  "VAL-SHEFFORD",
  "VALCOURT",
  "VALEMOUNT",
  "VALLEE-JONCTION",
  "VALLEYVIEW",
  "VANCOUVER",
  "VANDERHOOF",
  "VANSCOY-NO-345",
  "VARENNES",
  "VAUDREUIL-DORION",
  "VAUDREUIL-SUR-LE-LAC",
  "VAUGHAN",
  "VAUXHALL",
  "VEGREVILLE",
  "VENISE-EN-QUEBEC",
  "VERCHERES",
  "VERMILION",
  "VERNON",
  "VICTORIA",
  "VICTORIAVILLE",
  "VIEW-ROYAL",
  "VIKING",
  "VILLE-MARIE",
  "VIRDEN",
  "VULCAN",
  "WABANA",
  "WABASCA",
  "WABUSH",
  "WADENA",
  "WAINFLEET",
  "WAINWRIGHT",
  "WAKEFIELD",
  "WALDHEIM",
  "WALLACE-WOODWORTH",
  "WARFIELD",
  "WARMAN",
  "WARWICK",
  "WASAGA-BEACH",
  "WASAGAMACK",
  "WASKAGANISH",
  "WASWANIPI",
  "WATERLOO",
  "WATERVILLE",
  "WATROUS",
  "WAWA",
  "WEDGEPORT",
  "WEEDON-CENTRE",
  "WELDFORD",
  "WELLAND",
  "WELLESLEY",
  "WELLINGTON",
  "WELLINGTON-NORTH",
  "WEMBLEY",
  "WEMINDJI",
  "WEMOTACI",
  "WENDAKE",
  "WENTWORTH-NORD",
  "WEST-ELGIN",
  "WEST-GREY",
  "WEST-INTERLAKE",
  "WEST-LINCOLN",
  "WEST-NIPISSING",
  "NIPISSING-OUEST",
  "WEST-PERTH",
  "WEST-ST-PAUL",
  "WEST-VANCOUVER",
  "WESTBANK",
  "WESTFIELD-BEACH",
  "WESTLAKE-GLADSTONE",
  "WESTLOCK",
  "WESTMOUNT",
  "WESTVILLE",
  "WETASKIWIN",
  "WEYBURN",
  "WEYBURN-NO-67",
  "WHISTLER",
  "WHITBY",
  "WHITE-CITY",
  "WHITE-ROCK",
  "WHITECOURT",
  "WHITEHEAD",
  "WHITEHORSE",
  "WHITEWATER-REGION",
  "WICKHAM",
  "WICKLOW",
  "WILKIE",
  "WILLIAMS-LAKE",
  "WILMOT",
  "WILTON-NO-472",
  "WINDERMERE",
  "WINDSOR",
  "WINKLER",
  "WINNIPEG",
  "WINNIPEG-BEACH",
  "WITLESS-BAY",
  "WOLFVILLE",
  "WOOD-BUFFALO",
  "WOODLANDS",
  "WOODSTOCK",
  "WOOLWICH",
  "WOTTON",
  "WYNYARD",
  "YAMACHICHE",
  "YAMASKA",
  "YAMASKA-EST",
  "YARMOUTH",
  "YELLOWHEAD",
  "YELLOWKNIFE",
  "YORKTON",
  "YOUBOU",
  "ZORRA",
];

export default canadaCitiesDict;
