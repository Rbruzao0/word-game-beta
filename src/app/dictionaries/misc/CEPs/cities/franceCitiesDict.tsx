const franceCitiesDict = [
  "ABBEVILLE",
  "ACHERES",
  "AGDE",
  "AGEN",
  "AIGUES-MORTES",
  "AIRE-SUR-LA-LYS",
  "AIX-EN-PROVENCE",
  "AIX-LES-BAINS",
  "AIZENAY",
  "AJACCIO",
  "ALBERT",
  "ALBERTVILLE",
  "ALBI",
  "ALENCON",
  "ALES",
  "ALFORTVILLE",
  "ALLAUCH",
  "ALLONNES",
  "AMBARES-ET-LAGRAVE",
  "AMBERIEU-EN-BUGEY",
  "AMBOISE",
  "AMIENS",
  "AMILLY",
  "AMNEVILLE",
  "ANDERNOS-LES-BAINS",
  "ANDRESY",
  "ANGERS",
  "ANGLET",
  "ANGOULEME",
  "ANICHE",
  "ANNAPPES",
  "ANNECY",
  "ANNECY-LE-VIEUX",
  "ANNEMASSE",
  "ANNOEULLIN",
  "ANNONAY",
  "ANTIBES",
  "ANTONY",
  "ANZIN",
  "APT",
  "ARCACHON",
  "ARCUEIL",
  "ARGELES-SUR-MER",
  "ARGENTAN",
  "ARGENTEUIL",
  "ARLES",
  "ARMENTIERES",
  "ARNOUVILLE-LES-GONESSE",
  "ARPAJON",
  "ARQUES",
  "ARRAS",
  "ARTIGUES-PRES-BORDEAUX",
  "ATHIS-MONS",
  "AUBAGNE",
  "AUBENAS",
  "AUBERGENVILLE",
  "AUBERVILLIERS",
  "AUBIERE",
  "AUCAMVILLE",
  "AUCH",
  "AUCHEL",
  "AUDENGE",
  "AUDINCOURT",
  "AULNAY-SOUS-BOIS",
  "AULNOYE-AYMERIES",
  "AURAY",
  "AURILLAC",
  "AURIOL",
  "AUTERIVE",
  "AUTUN",
  "AUXERRE",
  "AVIGNON",
  "AVION",
  "AVON",
  "AVRANCHES",
  "AVRILLE",
  "AYTRE",
  "BAGNEUX",
  "BAGNOLET",
  "BAGNOLS-SUR-CEZE",
  "BAILLEUL",
  "BALMA",
  "BAR-LE-DUC",
  "BARENTIN",
  "BASSE-GOULAINE",
  "BASTIA",
  "BAYEUX",
  "BAYONNE",
  "BEAUCAIRE",
  "BEAUCHAMP",
  "BEAUMONT",
  "BEAUMONT-SUR-OISE",
  "BEAUNE",
  "BEAUSOLEIL",
  "BEAUVAIS",
  "BEGLES",
  "BELFORT",
  "BELLEGARDE-SUR-VALSERINE",
  "BELLERIVE-SUR-ALLIER",
  "BELLEVUE",
  "BELLEY",
  "BERCK-SUR-MER",
  "BERGERAC",
  "BERNAY",
  "BERRE-L'ETANG",
  "BESANCON",
  "BETHUNE",
  "BETTON",
  "BEUVRY",
  "BEZIERS",
  "BEZONS",
  "BIARRITZ",
  "BIGANOS",
  "BILLERE",
  "BIOT",
  "BISCARROSSE",
  "BISCHHEIM",
  "BISCHWILLER",
  "BLAGNAC",
  "BLAIN",
  "BLANQUEFORT",
  "BLOIS",
  "BOBIGNY",
  "BOIS-COLOMBES",
  "BOIS-D'ARCY",
  "BOIS-GUILLAUME",
  "BOISSY-SAINT-LEGER",
  "BOLBEC",
  "BOLLENE",
  "BONDOUFLE",
  "BONDUES",
  "BONDY",
  "BONNEUIL-SUR-MARNE",
  "BONNEVILLE",
  "BORDEAUX",
  "BORGO",
  "BOUC-BEL-AIR",
  "BOUCAU",
  "BOUGIVAL",
  "BOUGUENAIS",
  "BOULOGNE-BILLANCOURT",
  "BOULOGNE-SUR-MER",
  "BOURG-DE-PEAGE",
  "BOURG-EN-BRESSE",
  "BOURG-LA-REINE",
  "BOURG-LES-VALENCE",
  "BOURGES",
  "BOURGOIN-JALLIEU",
  "BRESSUIRE",
  "BREST",
  "BRETIGNY-SUR-ORGE",
  "BREUILLET",
  "BRIANCON",
  "BRIE-COMTE-ROBERT",
  "BRIGNAIS",
  "BRIGNOLES",
  "BRIVE-LA-GAILLARDE",
  "BRON",
  "BRUAY-SUR-L'ESCAUT",
  "BRUGES",
  "BRUMATH",
  "BRUNOY",
  "BRUZ",
  "BRY-SUR-MARNE",
  "BULLY-LES-MINES",
  "BURES-SUR-YVETTE",
  "BUSSY-SAINT-GEORGES",
  "BUXEROLLES",
  "CABESTANY",
  "CABRIES",
  "CACHAN",
  "CAEN",
  "CAGNES-SUR-MER",
  "CAHORS",
  "CALAIS",
  "CALUIRE-ET-CUIRE",
  "CAMBRAI",
  "CANET-EN-ROUSSILLON",
  "CANNES",
  "CANTELEU",
  "CAPBRETON",
  "CARCASSONNE",
  "CARMAUX",
  "CARPENTRAS",
  "CARQUEFOU",
  "CARQUEIRANNE",
  "CARRIERES-SOUS-POISSY",
  "CARRIERES-SUR-SEINE",
  "CARROS",
  "CARVIN",
  "CASTANET-TOLOSAN",
  "CASTELGINEST",
  "CASTELNAU-LE-LEZ",
  "CASTELNAUDARY",
  "CASTELSARRASIN",
  "CASTRES",
  "CAUDEBEC-LES-ELBEUF",
  "CAUDRY",
  "CAVAILLON",
  "CEBAZAT",
  "CENON",
  "CERGY",
  "CERNAY",
  "CESSON",
  "CESSON-SEVIGNE",
  "CESTAS",
  "CHALETTE-SUR-LOING",
  "CHALLANS",
  "CHALON-SUR-SAONE",
  "CHALONS-EN-CHAMPAGNE",
  "CHAMALIERES",
  "CHAMBERY",
  "CHAMBLY",
  "CHAMBRAY-LES-TOURS",
  "CHAMONIX-MONT-BLANC",
  "CHAMPIGNY-SUR-MARNE",
  "CHAMPS-SUR-MARNE",
  "CHANTELOUP-LES-VIGNES",
  "CHANTEPIE",
  "CHANTILLY",
  "CHAPONOST",
  "CHARENTON-LE-PONT",
  "CHARLEVILLE-MEZIERES",
  "CHARTRES",
  "CHASSIEU",
  "CHATEAU-D'OLONNE",
  "CHATEAU-GONTIER",
  "CHATEAU-THIERRY",
  "CHATEAUBRIANT",
  "CHATEAUDUN",
  "CHATEAUNEUF-LES-MARTIGUES",
  "CHATEAURENARD",
  "CHATEAUROUX",
  "CHATELLERAULT",
  "CHATENAY-MALABRY",
  "CHATILLON",
  "CHATOU",
  "CHAUMONT",
  "CHAUNY",
  "CHAVILLE",
  "CHECY",
  "CHELLES",
  "CHENNEVIERES-SUR-MARNE",
  "CHENOVE",
  "CHERBOURG",
  "CHEVIGNY-SAINT-SAUVEUR",
  "CHEVILLY-LARUE",
  "CHILLY-MAZARIN",
  "CHOISY-LE-ROI",
  "CHOLET",
  "CLAMART",
  "CLAYE-SOUILLY",
  "CLERMONT",
  "CLERMONT-FERRAND",
  "CLERMONT-L'HERAULT",
  "CLICHY",
  "CLICHY-SOUS-BOIS",
  "CLUSES",
  "COGNAC",
  "COGOLIN",
  "COLMAR",
  "COLOMBES",
  "COLOMIERS",
  "COMBS-LA-VILLE",
  "COMINES",
  "COMPIEGNE",
  "CONCARNEAU",
  "CONDE-SUR-L'ESCAUT",
  "CONFLANS-SAINTE-HONORINE",
  "CORBAS",
  "CORBEIL-ESSONNES",
  "CORMEILLES-EN-PARISIS",
  "COSNE-SUR-LOIRE",
  "COUDEKERQUE-BRANCHE",
  "COUERON",
  "COULOMMIERS",
  "COURBEVOIC",
  "COURCOURONNES",
  "COURNON-D'AUVERGNE",
  "COURRIERES",
  "COUTRAS",
  "COUZEIX",
  "CRAN-GEVRIER",
  "CRAPONNE",
  "CREIL",
  "CREPY-EN-VALOIS",
  "CREST",
  "CRETEIL",
  "CREUTZWALD",
  "CROISSY-SUR-SEINE",
  "CROIX",
  "CROSNE",
  "CUERS",
  "CUGNAUX",
  "CUSSET",
  "DAMMARIE-LE-LYS",
  "DAMMARTIN-EN-GOELE",
  "DARDILLY",
  "DARNETAL",
  "DAX",
  "DECINES-CHARPIEU",
  "DENAIN",
  "DEUIL-LA-BARRE",
  "DEVILLE-LES-ROUEN",
  "DIEPPE",
  "DIGNE-LES-BAINS",
  "DIJON",
  "DINAN",
  "DINARD",
  "DIVONNE-LES-BAINS",
  "DOLE",
  "DOMBASLE-SUR-MEURTHE",
  "DOMERAT",
  "DOMONT",
  "DOUAI",
  "DOUARNENEZ",
  "DOUCHY-LES-MINES",
  "DOURDAN",
  "DRAGUIGNAN",
  "DRANCY",
  "DRAVEIL",
  "DREUX",
  "DUGNY",
  "DUNKERQUE",
  "EAUBONNE",
  "ECHIROLLES",
  "ECULLY",
  "ELANCOURT",
  "ELBEUF",
  "ELNE",
  "ENGHIEN-LES-BAINS",
  "ENTRAIGUES-SUR-LA-SORGUE",
  "EPERNAY",
  "EPINAL",
  "EPINAY-SOUS-SENART",
  "EPINAY-SUR-ORGE",
  "EPINAY-SUR-SEINE",
  "ERAGNY",
  "ERGUE-GABERIC",
  "ERMONT",
  "ERSTEIN",
  "ESCAUDAIN",
  "ESCOUBLAC",
  "ESSEY-LES-NANCY",
  "ETAMPES",
  "ETAPLES",
  "EVIAN-LES-BAINS",
  "EVREUX",
  "EVRY",
  "EYBENS",
  "EYSINES",
  "EZANVILLE",
  "FACHES-THUMESNIL",
  "FAMECK",
  "FECAMP",
  "FERNEY-VOLTAIRE",
  "FEYZIN",
  "FIGEAC",
  "FIRMINY",
  "FLERS",
  "FLERS-LEZ-LILLE",
  "FLEURY-LES-AUBRAIS",
  "FLEURY-MEROGIS",
  "FLOIRAC",
  "FLORANGE",
  "FOIX",
  "FONDETTES",
  "FONSORBES",
  "FONTAINE",
  "FONTAINE-LES-DIJON",
  "FONTAINEBLEAU",
  "FONTENAY-AUX-ROSES",
  "FONTENAY-LE-COMTE",
  "FONTENAY-LE-FLEURY",
  "FONTENAY-SOUS-BOIS",
  "FORBACH",
  "FOS-SUR-MER",
  "FOSSES",
  "FOUESNANT",
  "FOUGERES",
  "FOURMIES",
  "FRANCHEVILLE",
  "FRANCONVILLE",
  "FREJUS",
  "FRESNES",
  "FRONTIGNAN",
  "FROUZINS",
  "FUVEAU",
  "GAGNY",
  "GAILLAC",
  "GAILLARD",
  "GAP",
  "GARCHES",
  "GARDANNE",
  "GARGES-LES-GONESSE",
  "GENAS",
  "GENNEVILLIERS",
  "GENTILLY",
  "GERZAT",
  "GEX",
  "GIEN",
  "GIF-SUR-YVETTE",
  "GIGNAC-LA-NERTHE",
  "GISORS",
  "GIVORS",
  "GOLBEY",
  "GONESSE",
  "GONFREVILLE-L'ORCHER",
  "GOUSSAINVILLE",
  "GOUVIEUX",
  "GRABELS",
  "GRADIGNAN",
  "GRAND-COURONNE",
  "GRANDE-SYNTHE",
  "GRANVILLE",
  "GRASSE",
  "GRAULHET",
  "GRAVELINES",
  "GRENADE",
  "GRENOBLE",
  "GRETZ-ARMAINVILLIERS",
  "GRIGNY",
  "GUEBWILLER",
  "GUERANDE",
  "GUERET",
  "GUICHEN",
  "GUIDEL",
  "GUILHERAND",
  "GUIPAVAS",
  "GUJAN-MESTRAS",
  "GUYANCOURT",
  "HAGONDANGE",
  "HAGUENAU",
  "HALLUIN",
  "HARNES",
  "HAUBOURDIN",
  "HAUTMONT",
  "HAYANGE",
  "HAZEBROUCK",
  "HELLEMMES-LILLE",
  "HEM",
  "HENDAYE",
  "HENIN-BEAUMONT",
  "HENNEBONT",
  "HERICOURT",
  "HEROUVILLE-SAINT-CLAIR",
  "HIRSON",
  "HOENHEIM",
  "HOUILLES",
  "HYERES",
  "IFS",
  "IGNY",
  "ILLKIRCH-GRAFFENSTADEN",
  "ILLZACH",
  "INGRE",
  "IRIGNY",
  "ISBERGUES",
  "ISSOIRE",
  "ISSOUDUN",
  "ISSY-LES-MOULINEAUX",
  "ISTRES",
  "IVRY-SUR-SEINE",
  "JANZE",
  "JARVILLE-LA-MALGRANGE",
  "JEUMONT",
  "JOIGNY",
  "JOINVILLE-LE-PONT",
  "JOUE-LES-TOURS",
  "JOUY-LE-MOUTIER",
  "JUVIGNAC",
  "JUVISY-SUR-ORGE",
  "KINGERSHEIM",
  "L'HAY-LES-ROSES",
  "L'ILE-SAINT-DENIS",
  "L'ISLE-ADAM",
  "L'ISLE-D'ABEAU",
  "L'ISLE-JOURDAIN",
  "L'ISLE-SUR-LA-SORGUE",
  "L'UNION",
  "LA-CELLE-SAINT-CLOUD",
  "LA-CHAPELLE-D'ARMENTIERES",
  "LA-CHAPELLE-SAINT-LUC",
  "LA-CHAPELLE-SAINT-MESMIN",
  "LA-CHAPELLE-SUR-ERDRE",
  "LA-CIOTAT",
  "LA-COURNEUVE",
  "LA-CRAU",
  "LA-FARE-LES-OLIVIERS",
  "LA-FARLEDE",
  "LA-FERTE-BERNARD",
  "LA-FERTE-SOUS-JOUARRE",
  "LA-FLECHE",
  "LA-GARDE",
  "LA-GARENNE-COLOMBES",
  "LA-GRANDE-MOTTE",
  "LA-LONDE-LES-MAURES",
  "LA-MADELEINE",
  "LA-MOTTE-SERVOLEX",
  "LA-QUEUE-EN-BRIE",
  "LA-RAVOIRE",
  "LA-RICHE",
  "LA-ROCHE-SUR-FORON",
  "LA-ROCHE-SUR-YON",
  "LA-ROCHELLE",
  "LA-SALVETAT-SAINT-GILLES",
  "LA-SEYNE-SUR-MER",
  "LA-TESTE-DE-BUCH",
  "LA-TRINITE",
  "LA-VALETTE-DU-VAR",
  "LAMBALLE",
  "LAMBERSART",
  "LAMBESC",
  "LAMORLAYE",
  "LANCON-PROVENCE",
  "LANDERNEAU",
  "LANDIVISIAU",
  "LANESTER",
  "LANNION",
  "LAON",
  "LATTES",
  "LAUNAGUET",
  "LAVAL",
  "LAVAUR",
  "LAXOU",
  "LE-BEAUSSET",
  "LE-BLANC-MESNIL",
  "LE-BOURGET",
  "LE-BOUSCAT",
  "LE-CANNET",
  "LE-CHAMBON-FEUGEROLLES",
  "LE-CHESNAY",
  "LE-CRES",
  "LE-CREUSOT",
  "LE-GRAND-QUEVILLY",
  "LE-HAILLAN",
  "LE-HAVRE",
  "LE-KREMLIN-BICETRE",
  "LE-LOROUX-BOTTEREAU",
  "LE-LUC",
  "LE-MANS",
  "LE-MEE-SUR-SEINE",
  "LE-MUY",
  "LE-PASSAGE",
  "LE-PECQ",
  "LE-PERREUX-SUR-MARNE",
  "LE-PETIT-COURONNE",
  "LE-PETIT-QUEVILLY",
  "LE-PLESSIS-ROBINSON",
  "LE-PLESSIS-TREVISE",
  "LE-POIRE-SUR-VIE",
  "LE-PONT-DE-CLAIX",
  "LE-PONTET",
  "LE-PORTEL",
  "LE-PRADET",
  "LE-PRE-SAINT-GERVAIS",
  "LE-PUY-EN-VELAY",
  "LE-RAINCY",
  "LE-RELECQ-KERHUON",
  "LE-RHEU",
  "LE-TAILLAN-MEDOC",
  "LE-TEICH",
  "LE-TEIL",
  "LE-THOR",
  "LE-VESINET",
  "LEERS",
  "LEGUEVIN",
  "LEMPDES",
  "LENS",
  "LEOGNAN",
  "LES-CLAYES-SOUS-BOIS",
  "LES-HERBIERS",
  "LES-LILAS",
  "LES-MUREAUX",
  "LES-PAVILLONS-SOUS-BOIS",
  "LES-PENNES-MIRABEAU",
  "LES-PONTS-DE-CE",
  "LES-SABLES-D'OLONNE",
  "LES-SORINIERES",
  "LESCAR",
  "LESQUIN",
  "LEVALLOIS-PERRET",
  "LEZIGNAN-CORBIERES",
  "LIBOURNE",
  "LIEUSAINT",
  "LIEVIN",
  "LIFFRE",
  "LILLE",
  "LILLEBONNE",
  "LILLERS",
  "LIMAY",
  "LIMEIL-BREVANNES",
  "LIMOGES",
  "LIMOUX",
  "LINGOLSHEIM",
  "LISIEUX",
  "LIVRON-SUR-DROME",
  "LIVRY-GARGAN",
  "LOGNES",
  "LOMME",
  "LONGJUMEAU",
  "LONGUENESSE",
  "LONGVIC",
  "LONGWY",
  "LONS",
  "LONS-LE-SAUNIER",
  "LOOS",
  "LORGUES",
  "LORIENT",
  "LORMONT",
  "LOUDEAC",
  "LOURDES",
  "LOUVIERS",
  "LOUVRES",
  "LUCE",
  "LUCON",
  "LUNEL",
  "LUNEVILLE",
  "LYON",
  "LYS-LES-LANNOY",
  "MACON",
  "MAGNY-LE-HONGRE",
  "MAGNY-LES-HAMEAUX",
  "MAINVILLIERS",
  "MAISONS-ALFORT",
  "MAISONS-LAFFITTE",
  "MAIZIERES-LES-METZ",
  "MALAKOFF",
  "MANDELIEU-LA-NAPOULE",
  "MANOSQUE",
  "MANTES-LA-JOLIE",
  "MANTES-LA-VILLE",
  "MARCK",
  "MARCQ-EN-BAROEUL",
  "MARGNY-LES-COMPIEGNE",
  "MARIGNANE",
  "MARLY",
  "MARLY-LE-ROI",
  "MARMANDE",
  "MAROMME",
  "MARQUETTE-LES-LILLE",
  "MARSEILLE",
  "MARTIGUES",
  "MASSY",
  "MAUBEUGE",
  "MAUGUIO",
  "MAULEON",
  "MAUREPAS",
  "MAXEVILLE",
  "MAYENNE",
  "MAZAMET",
  "MEAUX",
  "MELUN",
  "MENDE",
  "MENNECY",
  "MENTON",
  "MERICOURT",
  "MERIGNAC",
  "MERU",
  "MERVILLE",
  "MERY-SUR-OISE",
  "METZ",
  "MEUDON",
  "MEYLAN",
  "MEYZIEU",
  "MEZE",
  "MILLAU",
  "MIONS",
  "MIOS",
  "MIRAMAS",
  "MIRIBEL",
  "MITRY-MORY",
  "MOHON",
  "MOISSAC",
  "MOISSY-CRAMAYEL",
  "MOLSHEIM",
  "MONDEVILLE",
  "MONISTROL-SUR-LOIRE",
  "MONS-EN-BAROEUL",
  "MONT-DE-MARSAN",
  "MONT-SAINT-AIGNAN",
  "MONT-SAINT-MARTIN",
  "MONTARGIS",
  "MONTATAIRE",
  "MONTAUBAN",
  "MONTBELIARD",
  "MONTBRISON",
  "MONTCEAU-LES-MINES",
  "MONTELIMAR",
  "MONTEREAU-FAUT-YONNE",
  "MONTESSON",
  "MONTEUX",
  "MONTEVRAIN",
  "MONTFERMEIL",
  "MONTGERON",
  "MONTIGNY-EN-GOHELLE",
  "MONTIGNY-LE-BRETONNEUX",
  "MONTIGNY-LES-CORMEILLES",
  "MONTIGNY-LES-METZ",
  "MONTIVILLIERS",
  "MONTLHERY",
  "MONTLOUIS-SUR-LOIRE",
  "MONTLUCON",
  "MONTMAGNY",
  "MONTMORENCY",
  "MONTPELLIER",
  "MONTREUIL",
  "MONTROUGE",
  "MORANGIS",
  "MORIERES-LES-AVIGNON",
  "MORLAIX",
  "MORSANG-SUR-ORGE",
  "MOUANS-SARTOUX",
  "MOUGINS",
  "MOULINS",
  "MOUVAUX",
  "MULHOUSE",
  "MURET",
  "NANCY",
  "NANGIS",
  "NANTERRE",
  "NANTES",
  "NARBONNE",
  "NEMOURS",
  "NEUILLY-PLAISANCE",
  "NEUILLY-SUR-MARNE",
  "NEUILLY-SUR-SEINE",
  "NEUVILLE-EN-FERRAIN",
  "NEUVILLE-LES-DIEPPE",
  "NEVERS",
  "NICE",
  "NIMES",
  "NIORT",
  "NOEUX-LES-MINES",
  "NOGENT-LE-ROTROU",
  "NOGENT-SUR-MARNE",
  "NOGENT-SUR-OISE",
  "NOISIEL",
  "NOISY-LE-GRAND",
  "NOISY-LE-SEC",
  "NORT-SUR-ERDRE",
  "NOTRE-DAME-DE-GRAVENCHON",
  "NOYON",
  "OBERNAI",
  "OCTEVILLE",
  "OIGNIES",
  "OISSEL",
  "OLIVET",
  "OLLIOULES",
  "OLONNE-SUR-MER",
  "OLORON-SAINTE-MARIE",
  "ONET-VILLAGE",
  "ONNAING",
  "ORANGE",
  "ORLEANS",
  "ORLY",
  "ORMESSON-SUR-MARNE",
  "ORSAY",
  "ORTHEZ",
  "ORVAULT",
  "OSNY",
  "OSTWALD",
  "OUISTREHAM",
  "OULLINS",
  "OUTREAU",
  "OYONNAX",
  "OZOIR-LA-FERRIERE",
  "PACE",
  "PALAISEAU",
  "PAMIERS",
  "PANAZOL",
  "PANTIN",
  "PARAME",
  "PARAY-LE-MONIAL",
  "PAREMPUYRE",
  "PARIS",
  "PARTHENAY",
  "PASSY",
  "PAU",
  "PELISSANNE",
  "PERENCHIES",
  "PERIGNY",
  "PERIGUEUX",
  "PERNES-LES-FONTAINES",
  "PEROLS",
  "PERPIGNAN",
  "PERSAN",
  "PERTUIS",
  "PESSAC",
  "PETITE-SYNTHE",
  "PFASTATT",
  "PIA",
  "PIBRAC",
  "PIERRE-BENITE",
  "PIERREFITTE-SUR-SEINE",
  "PIERRELATTE",
  "PIERRELAYE",
  "PITHIVIERS",
  "PLABENNEC",
  "PLAISANCE-DU-TOUCH",
  "PLAISIR",
  "PLAN-DE-CUQUES",
  "PLERIN",
  "PLOEMEUR",
  "PLOERMEL",
  "PLOUFRAGAN",
  "PLOUGASTEL-DAOULAS",
  "PLOUZANE",
  "POISSY",
  "POISY",
  "POITIERS",
  "PONT-A-MOUSSON",
  "PONT-DU-CHATEAU",
  "PONT-SAINT-ESPRIT",
  "PONT-SAINTE-MAXENCE",
  "PONTARLIER",
  "PONTCHATEAU",
  "PONTIVY",
  "PONTOISE",
  "PORNIC",
  "PORNICHET",
  "PORT-DE-BOUC",
  "PORTES-LES-VALENCE",
  "PORTET-SUR-GARONNE",
  "PORTO-VECCHIO",
  "PRIVAS",
  "PROVINS",
  "PUTEAUX",
  "QUETIGNY",
  "QUEVEN",
  "QUIMPER",
  "QUIMPERLE",
  "QUINCY-SOUS-SENART",
  "RAISMES",
  "RAMBOUILLET",
  "RAMONVILLE-SAINT-AGNE",
  "REDON",
  "REIMS",
  "RENNES",
  "REVEL",
  "REZE",
  "RIEDISHEIM",
  "RILLIEUX-LA-PAPE",
  "RIOM",
  "RIORGES",
  "RIS-ORANGIS",
  "RIVE-DE-GIER",
  "RIVESALTES",
  "RIXHEIM",
  "ROANNE",
  "ROCHE-LA-MOLIERE",
  "ROCHEFORT",
  "RODEZ",
  "ROGNAC",
  "ROISSY-EN-BRIE",
  "ROMAINVILLE",
  "ROMANS-SUR-ISERE",
  "ROMBAS",
  "ROMILLY-SUR-SEINE",
  "RONCHIN",
  "RONCQ",
  "ROQUEBRUNE-SUR-ARGENS",
  "ROQUEVAIRE",
  "ROSENDAEL",
  "ROSNY-SOUS-BOIS",
  "ROUBAIX",
  "ROUEN",
  "ROUSSILLON",
  "ROUVROY",
  "ROYAN",
  "RUEIL-MALMAISON",
  "RUMILLY",
  "SABLE-SUR-SARTHE",
  "SAINT-AMAND-LES-EAUX",
  "SAINT-AMAND-MONTROND",
  "SAINT-ANDRE",
  "SAINT-ANDRE-DE-CUBZAC",
  "SAINT-ANDRE-LES-VERGERS",
  "SAINT-AVE",
  "SAINT-AVERTIN",
  "SAINT-AVOLD",
  "SAINT-BARTHELEMY-D'ANJOU",
  "SAINT-BREVIN-LES-PINS",
  "SAINT-BRICE-SOUS-FORET",
  "SAINT-BRIEUC",
  "SAINT-CHAMAS",
  "SAINT-CHAMOND",
  "SAINT-CLAUDE",
  "SAINT-CLOUD",
  "SAINT-CYPRIEN",
  "SAINT-CYR-L'ECOLE",
  "SAINT-CYR-SUR-LOIRE",
  "SAINT-CYR-SUR-MER",
  "SAINT-DENIS",
  "SAINT-DIE-DES-VOSGES",
  "SAINT-DIZIER",
  "SAINT-DOULCHARD",
  "SAINT-EGREVE",
  "SAINT-ESTEVE",
  "SAINT-ETIENNE",
  "SAINT-ETIENNE-DU-ROUVRAY",
  "SAINT-FARGEAU",
  "SAINT-FONS",
  "SAINT-GAUDENS",
  "SAINT-GELY-DU-FESC",
  "SAINT-GENIS-LAVAL",
  "SAINT-GENIS-POUILLY",
  "SAINT-GERMAIN-EN-LAYE",
  "SAINT-GERMAIN-LES-ARPAJON",
  "SAINT-GILLES",
  "SAINT-GRATIEN",
  "SAINT-GREGOIRE",
  "SAINT-HERBLAIN",
  "SAINT-HILAIRE-DE-RIEZ",
  "SAINT-JACQUES-DE-LA-LANDE",
  "SAINT-JEAN",
  "SAINT-JEAN-D'ILLAC",
  "SAINT-JEAN-DE-BRAYE",
  "SAINT-JEAN-DE-LA-RUELLE",
  "SAINT-JEAN-DE-LUZ",
  "SAINT-JEAN-DE-MONTS",
  "SAINT-JEAN-DE-VEDAS",
  "SAINT-JEAN-LE-BLANC",
  "SAINT-JULIEN-EN-GENEVOIS",
  "SAINT-JUNIEN",
  "SAINT-LAURENT-DE-LA-SALANQUE",
  "SAINT-LAURENT-DU-VAR",
  "SAINT-LEU-LA-FORET",
  "SAINT-LO",
  "SAINT-LOUBES",
  "SAINT-LOUIS",
  "SAINT-LYS",
  "SAINT-MALO",
  "SAINT-MANDE",
  "SAINT-MARTIN-BOULOGNE",
  "SAINT-MARTIN-D'HERES",
  "SAINT-MARTIN-DE-CRAU",
  "SAINT-MAUR-DES-FOSSES",
  "SAINT-MAURICE",
  "SAINT-MAX",
  "SAINT-MAXIMIN-LA-SAINTE-BAUME",
  "SAINT-MEDARD-EN-JALLES",
  "SAINT-MICHEL-SUR-ORGE",
  "SAINT-NAZAIRE",
  "SAINT-OMER",
  "SAINT-ORENS-DE-GAMEVILLE",
  "SAINT-OUEN",
  "SAINT-OUEN-L'AUMONE",
  "SAINT-PAUL-LES-DAX",
  "SAINT-PAUL-TROIS-CHATEAUX",
  "SAINT-PHILBERT-DE-GRAND-LIEU",
  "SAINT-PIERRE-DES-CORPS",
  "SAINT-PIERRE-DU-MONT",
  "SAINT-PIERRE-DU-PERRAY",
  "SAINT-POL-SUR-MER",
  "SAINT-PRIEST",
  "SAINT-QUENTIN",
  "SAINT-RAMBERT",
  "SAINT-RAPHAEL",
  "SAINT-REMY-DE-PROVENCE",
  "SAINT-SAULVE",
  "SAINT-SEBASTIEN-SUR-LOIRE",
  "SAINT-SERVAN-SUR-MER",
  "SAINT-SULPICE-LA-POINTE",
  "SAINT-VALLIER",
  "SAINTE-FOY-LES-LYON",
  "SAINTE-GENEVIEVE-DES-BOIS",
  "SAINTE-LUCE-SUR-LOIRE",
  "SAINTE-MAXIME",
  "SAINTE-SAVINE",
  "SAINTES",
  "SALLANCHES",
  "SALLAUMINES",
  "SALON-DE-PROVENCE",
  "SANARY-SUR-MER",
  "SANNOIS",
  "SARAN",
  "SARCELLES",
  "SARLAT-LA-CANEDA",
  "SARREBOURG",
  "SARREGUEMINES",
  "SARTROUVILLE",
  "SARZEAU",
  "SASSENAGE",
  "SAUMUR",
  "SAUTRON",
  "SAVENAY",
  "SAVERNE",
  "SAVIGNY-LE-TEMPLE",
  "SAVIGNY-SUR-ORGE",
  "SCEAUX",
  "SCHILTIGHEIM",
  "SCIONZIER",
  "SECLIN",
  "SEDAN",
  "SELESTAT",
  "SENE",
  "SENLIS",
  "SENS",
  "SEPTEMES-LES-VALLONS",
  "SERRIS",
  "SETE",
  "SEVRAN",
  "SEVRES",
  "SEYNOD",
  "SEYSSES",
  "SIN-LE-NOBLE",
  "SIX-FOURS-LES-PLAGES",
  "SOISSONS",
  "SOISY-SOUS-MONTMORENCY",
  "SOLLIES-PONT",
  "SOMAIN",
  "SORGUES",
  "SOTTEVILLE-LES-ROUEN",
  "SOYAUX",
  "STAINS",
  "STIRING-WENDEL",
  "STRASBOURG",
  "SUCY-EN-BRIE",
  "SURESNES",
  "TALANT",
  "TALENCE",
  "TARARE",
  "TARASCON",
  "TARBES",
  "TARNOS",
  "TASSIN-LA-DEMI-LUNE",
  "TAVERNY",
  "TERGNIER",
  "THAON-LES-VOSGES",
  "THIAIS",
  "THIERS",
  "THIONVILLE",
  "THONON-LES-BAINS",
  "THORIGNE-FOUILLARD",
  "THORIGNY-SUR-MARNE",
  "THOUARE-SUR-LOIRE",
  "THOUARS",
  "TINQUEUX",
  "TOMBLAINE",
  "TONNEINS",
  "TORCY",
  "TOUL",
  "TOULON",
  "TOULOUSE",
  "TOURCOING",
  "TOURLAVILLE",
  "TOURNEFEUILLE",
  "TOURNON-SUR-RHONE",
  "TOURS",
  "TRAPPES",
  "TREILLIERES",
  "TRELAZE",
  "TRETS",
  "TRIEL-SUR-SEINE",
  "TROYES",
  "TULLE",
  "URRUGNE",
  "USSEL",
  "VAIRES-SUR-MARNE",
  "VALBONNE",
  "VALENCE",
  "VALENCIENNES",
  "VALENTIGNEY",
  "VALENTON",
  "VALLAURIS",
  "VALLET",
  "VALREAS",
  "VANDOEUVRE-LES-NANCY",
  "VANNES",
  "VANVES",
  "VAUCRESSON",
  "VAULX-EN-VELIN",
  "VAUREAL",
  "VAUVERT",
  "VAUX-LE-PENIL",
  "VEAUCHE",
  "VEDENE",
  "VELAUX",
  "VELIZY-VILLACOUBLAY",
  "VENCE",
  "VENDOME",
  "VENISSIEUX",
  "VERDUN",
  "VERNEUIL-SUR-SEINE",
  "VERNON",
  "VERNOUILLET",
  "VERRIERES-LE-BUISSON",
  "VERSAILLES",
  "VERT-SAINT-DENIS",
  "VERTOU",
  "VESOUL",
  "VETRAZ-MONTHOUX",
  "VICHY",
  "VIDAUBAN",
  "VIENNE",
  "VIERZON",
  "VIEUX-CONDE",
  "VIF",
  "VIGNEUX-SUR-SEINE",
  "VILLE-D'AVRAY",
  "VILLE-LA-GRAND",
  "VILLEBON-SUR-YVETTE",
  "VILLECRESNES",
  "VILLEFONTAINE",
  "VILLEFRANCHE-DE-ROUERGUE",
  "VILLEFRANCHE-SUR-SAONE",
  "VILLEJUIF",
  "VILLEMOMBLE",
  "VILLENAVE-D'ORNON",
  "VILLENEUVE-LA-GARENNE",
  "VILLENEUVE-LE-ROI",
  "VILLENEUVE-LES-AVIGNON",
  "VILLENEUVE-LES-MAGUELONE",
  "VILLENEUVE-LOUBET",
  "VILLENEUVE-SAINT-GEORGES",
  "VILLENEUVE-SUR-LOT",
  "VILLENEUVE-TOLOSANE",
  "VILLEPARISIS",
  "VILLEPINTE",
  "VILLEPREUX",
  "VILLERS-COTTERETS",
  "VILLERS-LES-NANCY",
  "VILLERUPT",
  "VILLEURBANNE",
  "VILLIERS-LE-BEL",
  "VILLIERS-SUR-MARNE",
  "VINCENNES",
  "VIRE",
  "VIROFLAY",
  "VIRY-CHATILLON",
  "VITRE",
  "VITROLLES",
  "VITRY-LE-FRANCOIS",
  "VITRY-SUR-SEINE",
  "VOIRON",
  "VOISINS-LE-BRETONNEUX",
  "VOREPPE",
  "WAMBRECHIES",
  "WASQUEHAL",
  "WATTIGNIES",
  "WATTRELOS",
  "WINGLES",
  "WITTELSHEIM",
  "WITTENHEIM",
  "WOIPPY",
  "YERRES",
  "YUTZ",
  "YVETOT",
  "YZEURE",
];

export default franceCitiesDict;