const iranCitiesDict = [
  "AB-PAKHSH",
  "ABARKUH",
  "ABHAR",
  "ABRANDABAD-E-SHAHEDIYEH",
  "ABRISHAM",
  "ABUZAR-E-GHAFFARI",
  "ABYEK",
  "AHAR",
  "AHRAM",
  "AHVAZ",
  "AJAB-SHIR",
  "ALESHTAR",
  "ALI-SHAHR",
  "ALIABAD-E-KATUL",
  "ALIGUDARZ",
  "ALVAND",
  "AMLASH",
  "AMOL",
  "ANAR",
  "ANBARABAD",
  "ANDIMESHK",
  "ARAK",
  "ARAKVAZ-E-MALEKSHAHI",
  "ARAN-BIDGOL",
  "ARDABIL",
  "ARDAKAN",
  "ARDAL",
  "ARDESTAN",
  "ARSANJAN",
  "ARVAND-KENAR",
  "ARVAND-KENAR",
  "ASADABAD",
  "ASALEM",
  "ASFARVARIN",
  "ASHKEZAR",
  "ASHKHANEH",
  "ASHTIAN",
  "ASTANEH-YE-ASHRAFIYEH",
  "AZADSHAHR",
  "AZANDARIAN",
  "AZARSHAHR",
  "AZNA",
  "BABOL",
  "BABOLSAR",
  "BAFQ",
  "BAFT",
  "BAGH-E-BAHADORAN",
  "BAGH-E-MALEK",
  "BAGHIN",
  "BAHABAD",
  "BAHAR",
  "BAHARESTAN",
  "BAJESTAN",
  "BAM",
  "BAMPUR",
  "BANAK",
  "BANARUYEH",
  "BANDAR-ABBAS",
  "BANDAR-E-ANZALI",
  "BANDAR-E-ASALUYEH",
  "BANDAR-E-BUSHEHR",
  "BANDAR-E-DEYLAM",
  "BANDAR-E-GAZ",
  "BANDAR-E-GENAVEH",
  "BANDAR-E-KHAMIR",
  "BANDAR-E-KONG",
  "BANDAR-E-LENGEH",
  "BANDAR-E-MAHSHAHR",
  "BANDAR-E-TORKAMAN",
  "BANDAR-EMAM",
  "BANEH",
  "BAQERSHAHR",
  "BARAVAT",
  "BARDASKAN",
  "BARDSIR",
  "BASHT",
  "BASMENJ",
  "BASTAK",
  "BAVANAT",
  "BAZEH-KALAGH",
  "BEHBAHAN",
  "BEHSHAHR",
  "BEN",
  "BIDESTAN",
  "BIDKHUN",
  "BIJAR",
  "BILEH-SAVAR",
  "BIRJAND",
  "BOJNURD",
  "BOLDAJI",
  "BONAB",
  "BORAZJAN",
  "BORUJEN",
  "BORUJERD",
  "BORVAYEH-YE-AL-BU-AZIZ",
  "BOSHRUYEH",
  "BOZMARGI",
  "BUKAN",
  "BUMAHEN",
  "CHABAHAR",
  "CHAHAR-BORJ-E-QADIM",
  "CHAHAR-DANGEH",
  "CHAHCHAHEH",
  "CHAMESTAN",
  "CHAMGARDAN",
  "CHARAM",
  "CHARMAHIN",
  "CHOGHADAK",
  "DAKHAN",
  "DALGAN",
  "DAMAVAND",
  "DAMGHAN",
  "DANESFAHAN",
  "DARB-E-BEHESHT",
  "DARCHEH",
  "DARGAHAN",
  "DARGAZ",
  "DARREH-SHAHR",
  "DASTGERD",
  "DEH-BAKRI",
  "DEHAQAN",
  "DEHDASHT",
  "DEHGOLAN",
  "DEHLORAN",
  "DELIJAN",
  "DEYR",
  "DEZFUL",
  "DIVANDARREH",
  "DIZICHEH",
  "DO-GONBADAN",
  "DORUD",
  "DOWBARAN",
  "DOWLATABAD",
  "DOWLATABAD",
  "EQBALIYEH",
  "EQLID",
  "ESFAHAN",
  "ESFARAYEN",
  "ESHKANAN",
  "ESHTEHARD",
  "ESLAMABAD-E-GHARB",
  "ESLAMSHAHR",
  "ESTAHBAN",
  "EVAZ",
  "EYVAN",
  "EYVANEKEY",
  "FALAVARJAN",
  "FAMENIN",
  "FANNUJ",
  "FARADONBEH",
  "FARASHBAND",
  "FARDIS",
  "FARIMAN",
  "FARROKH-SHAHR",
  "FARSAN",
  "FASA",
  "FERDOWS",
  "FEREYDUN-KENAR",
  "FEREYDUNSHAHR",
  "FEYZABAD",
  "FUMAN",
  "GALIKESH",
  "GALLEH-DAR",
  "GALUGAH",
  "GARMDARREH",
  "GARMEH",
  "GARMSAR",
  "GAZ",
  "GERASH",
  "GERD-FARAMARZ-SHAHEDIYEH",
  "GERMI",
  "GILAN-E-GHARB",
  "GOL-TAPPEH",
  "GOLBAF",
  "GOLDASHT",
  "GOLPAYEGAN",
  "GOMISHAN",
  "GONABAD",
  "GONBAD-E-KAVUS",
  "GORGAB",
  "GORGAN",
  "GOTVAND",
  "HACHIRUD",
  "HAFSHEJAN",
  "HAFTKEL",
  "HAMADAN",
  "HAMADANAK",
  "HAMIDIYEH",
  "HARSIN",
  "HASHTGERD",
  "HASHTPAR",
  "HASHTRUD",
  "HASSEH",
  "HENDIJAN",
  "HERIS",
  "HIDAJ",
  "HORR-E-RIAHI",
  "HOVEYZEH",
  "ILAM",
  "ILKHCHI",
  "ILKHECHI",
  "IRANSHAHR",
  "JAFARIYEH",
  "JAHROM",
  "JAJARM",
  "JAM",
  "JANNAT-SHAHR",
  "JASK",
  "JAVANRUD",
  "JIROFT",
  "JOGHTAY",
  "JOLFA",
  "JURAQAN",
  "KABUDARAHANG",
  "KAHNUJ",
  "KAHRIZAK",
  "KALALEH",
  "KALARDASHT",
  "KALATEH-YE-MIR-AB",
  "KALEYBAR",
  "KAMALSHAHR",
  "KANGAN",
  "KARAHRUD",
  "KARAJ",
  "KARIZ",
  "KASHAF",
  "KASHAN",
  "KASHMAR",
  "KAVAR",
  "KAZERUN",
  "KELISHAD-VA-SUDARJAN",
  "KERMAN",
  "KERMANSHAH",
  "KHALKHAL",
  "KHAN-BEBIN",
  "KHARV-E-SOFLA",
  "KHASH",
  "KHERAMEH",
  "KHESHT",
  "KHODABANDEH",
  "KHOMAM",
  "KHOMEYN",
  "KHOMEYNI-SHAHR",
  "KHONJ",
  "KHORRAMABAD",
  "KHORRAMABAD",
  "KHORRAMDARREH",
  "KHORRAMSHAHR",
  "KHOSROWSHAHR",
  "KHOWRASGAN",
  "KHOWRHESHT",
  "KHOWRMUJ",
  "KHOWRZUQ",
  "KHOWY",
  "KHVAF",
  "KHVANSAR",
  "KIASHAHR",
  "KISH",
  "KOMIJAN",
  "KONARAK",
  "KOND-RUD",
  "KUCHESFAHAN",
  "KUHBANAN",
  "KUHDASHT",
  "KUSHK",
  "KUT-E-ABDOLLAH",
  "LALEJIN",
  "LAMERD",
  "LANDEH",
  "LANGARUD",
  "LASHT-E-NESHA",
  "LAVANDEVIL",
  "LAVASAN",
  "LIKAK",
  "LORDEGAN",
  "LOWSHAN",
  "MA'MUNIYEH",
  "MADAN",
  "MAHABAD",
  "MAHAJERAN-E-KAMAR",
  "MAHALLAT",
  "MAHALLEH-YE-SHIRINU",
  "MAHDASHT",
  "MAHDISHAHR",
  "MAHMUDABAD-NEMUNEH",
  "MALARD",
  "MALAYER",
  "MALEKAN",
  "MAMQAN",
  "MANJIL",
  "MANUJAN",
  "MARAGHEH",
  "MARAND",
  "MARAVEH-TAPPEH",
  "MARIVAN",
  "MARVAST",
  "MARVDASHT",
  "MARYANAJ",
  "MASHHAD",
  "MASHHAD-RIZEH",
  "MASJED-SOLEYMAN",
  "MEHRAN",
  "MESHGIN-SHAHR",
  "MESHKIN-DASHT",
  "MEYBOD",
  "MEYMAND",
  "MIANDASHT",
  "MIANEH",
  "MILAJERD",
  "MINUDASHT",
  "MIRJAVEH",
  "MOBARAKEH",
  "MOHAMMAD-SHAHR",
  "MOHAMMAD-YAR",
  "MOHAMMADABAD",
  "MORTEZA-GERD",
  "MOSLEM-EBN-E-AQIL",
  "NAHAVAND",
  "NAJAFABAD",
  "NAKHL-E-TAQI",
  "NALAS",
  "NAMIN",
  "NAQADEH",
  "NASHTIFAN",
  "NASIM-SHAHR",
  "NATANZ",
  "NAYSAR",
  "NAZARABAD",
  "NAZERABAD",
  "NEHBANDAN",
  "NEKA",
  "NEQAB",
  "NEYRIZ",
  "NEYSHABUR",
  "NIAR",
  "NIKSHAHR",
  "NOWSHAHR",
  "NUKAN",
  "OMIDIYEH",
  "ORUMIYEH",
  "OSHNAVIYEH",
  "OSKU",
  "PA'IN-CHAF",
  "PAKDASHT",
  "PARDANJAN",
  "PAVEH",
  "PIR-BAKRAN",
  "PIRANSHAHR",
  "PISHBAR",
  "POLDASHT",
  "POLDOKHTAR",
  "QA'EM-SHAHR",
  "QA'EMIYEH",
  "QA'EN",
  "QAHDERIJAN",
  "QAHJAVARESTAN",
  "QALEH-CHANAN",
  "QALEH-GANJ",
  "QALEH-TALL",
  "QARAH-ZIA'-OD-DIN",
  "QARCHAK",
  "QARI-KOLA-YE-ARATEH",
  "QASR-E-QAND",
  "QASR-E-QOMSHEH",
  "QASR-E-SHIRIN",
  "QAZVIN",
  "QESHM",
  "QOM",
  "QORVEH",
  "QUCHAN",
  "RABOR",
  "RAFSANJAN",
  "RAMHORMOZ",
  "RAMSAR",
  "RAMSHIR",
  "RASAK",
  "RASHT",
  "RAVANSAR",
  "RAVAR",
  "RAYEN",
  "RAZAN",
  "REZVANSHAHR",
  "ROBAT-KARIM",
  "ROSTAM-KOLA",
  "ROSTAMABAD",
  "RUDEHEN",
  "RUDSAR",
  "SA'IN-QALEH",
  "SAADAT-SHAHR",
  "SABBASHAHR",
  "SABZEVAR",
  "SAFASHAHR",
  "SAHNEH",
  "SAIDI",
  "SALMANSHAHR",
  "SALMAS",
  "SANANDAJ",
  "SANGAN",
  "SANGAR",
  "SAQQEZ",
  "SARAB",
  "SARAB-E-TAVEH-YE-OLYA",
  "SARABLEH",
  "SARAKHS",
  "SARAVAN",
  "SARAYAN",
  "SARBISHEH",
  "SARDASHT",
  "SARDRUD",
  "SARI",
  "SARPOL-E-ZAHAB",
  "SARTA",
  "SARVESTAN",
  "SAVEH",
  "SEDEH-LANJAN",
  "SEMIROM",
  "SEMNAN",
  "SENJAN",
  "SEPIDAN",
  "SEYAH-CHESHMEH",
  "SEYYEDAN",
  "SHABESTAR",
  "SHADEGAN",
  "SHAHEDSHAHR",
  "SHAHIN-DEZH",
  "SHAHIN-SHAHR",
  "SHAHMIRZAD",
  "SHAHR-E-BABAK",
  "SHAHR-E-HERAT",
  "SHAHR-E-KORD",
  "SHAHR-E-MAJLESI",
  "SHAHR-E-PIR",
  "SHAHR-E-QODS",
  "SHAHRAK-E-ENQELAB",
  "SHAHRAK-E-JAFARIYEH",
  "SHAHRAK-E-PARS",
  "SHAHREZA",
  "SHAHRIAR",
  "SHAHRUD",
  "SHAL",
  "SHAMSABAD",
  "SHANDIZ",
  "SHAZAND",
  "SHEYBAN",
  "SHIRAZ",
  "SHIRVAN",
  "SHOWT",
  "SHUSH",
  "SHUSHTAR",
  "SIAHKAL",
  "SIRJAN",
  "SONQOR",
  "SORKHEH",
  "SOWMEEH-SARA",
  "SUFIAN",
  "SURAK",
  "SURAN",
  "SURESHJAN",
  "SUSANGERD",
  "TABAS",
  "TABRIZ",
  "TAFRESH",
  "TAFT",
  "TAKAB",
  "TAKESTAN",
  "TALKHVONCHEH",
  "TAYBAD",
  "TEHRAN",
  "TIRAN",
  "TONEKABON",
  "TORBAT-E-HEYDARIYEH",
  "TORBAT-E-JAM",
  "TORQABEH",
  "TUYSERKAN",
  "VAHDATTIYEH",
  "VARAMIN",
  "VARZANEH",
  "VEYS",
  "YASUJ",
  "YAZD",
  "ZABOL",
  "ZABOLI",
  "ZAHED-SHAHR",
  "ZAHEDAN",
  "ZANJAN",
  "ZARACH",
  "ZARAND",
  "ZARQAN",
  "ZARRIN-SHAHR",
  "ZEHAK",
  "ZEYDABAD",
];

export default iranCitiesDict;
