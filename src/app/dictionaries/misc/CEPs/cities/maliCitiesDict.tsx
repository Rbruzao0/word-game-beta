const maliCitiesDict = [
  "AGUELHOK",
  "AIBONGO",
  "ALAHINA",
  "ANDERANBOUKAN",
  "ANSONGO",
  "ARAOUANE",
  "BAFOULABE",
  "BAGUINEDA",
  "BALANDOUGOU",
  "BAMAFELE",
  "BAMAKO",
  "BAMBA",
  "BAMBARA-MAOUNDE",
  "BANAMBA",
  "BANDIAGARA",
  "BANGASSI-NANGOU",
  "BANIKANE",
  "BANIRE-KORE",
  "BANKASS",
  "BANKOUMANA",
  "BARAMANDOUGOU",
  "BARAPIRE",
  "BAROUELI",
  "BEMA",
  "BENDOUGOUBA",
  "BLINDIO",
  "BOKI-WERE",
  "BORO",
  "BOUGARIBAYA",
  "BOUGOULA",
  "BOUGOUNI",
  "BOURA",
  "BOUREM-GUINDOU",
  "BOUREM-INALI",
  "BOUREM",
  "BOUSSE",
  "DA",
  "DABIYA",
  "DALA",
  "DANDERESSO",
  "DANDOLI",
  "DANGA",
  "DENYEKORO",
  "DIABALI",
  "DIABIGUE",
  "DIAFARABE",
  "DIAI-KOURA",
  "DIAKON",
  "DIALAFARA",
  "DIALAKOROBA",
  "DIALAKORODJI",
  "DIALLASSAGOU",
  "DIALOUBE",
  "DIAMOU",
  "DIAMOU",
  "DIANGOUTE-KAMARA",
  "DIANGUIRDE",
  "DIANKABOU",
  "DIANKE",
  "DIDIENI",
  "DIELI",
  "DIEMA",
  "DIERAMANA",
  "DIMMBAL",
  "DINANGOROU",
  "DINBELA",
  "DINDANKO",
  "DIONDIORI",
  "DIOUMANZANA",
  "DIOUNA",
  "DIOUNGANI",
  "DIRE",
  "DJENNE",
  "DJIDIAN-KENIEBA",
  "DJIDIAN",
  "DOROU",
  "DOUENTZA",
  "DOUETIRE",
  "DOUGABOUGOU",
  "DOUGOUFE",
  "DOUGOUNI",
  "DOUKOMBO",
  "DOUMANABA",
  "DYERO",
  "FAKOLA",
  "FALEA",
  "FALOU",
  "FANGASSO",
  "FARAKO",
  "FATAO",
  "FATIME",
  "FATOMA",
  "FINNKOLO",
  "FOLOMANA",
  "FOUROU",
  "GAO",
  "GARALO",
  "GAVIMANE",
  "GENDOU",
  "GOGUI",
  "GORI",
  "GOUNA",
  "GOUNDAM",
  "GOURMA-RHAROUS",
  "GUEMOUKOURABA",
  "GUIOYO",
  "GUIRE",
  "HOMBORI",
  "INEKAR",
  "KABOILA",
  "KADIANA",
  "KADIOLO",
  "KAI",
  "KAMABOUGOU",
  "KAMBILA",
  "KANGABA",
  "KANI-BONZON",
  "KANRANGANA",
  "KASSA",
  "KASSAMA",
  "KASSARO",
  "KASSOROLA",
  "KATI",
  "KATIENA",
  "KAYES",
  "KEBILA",
  "KENNDIE",
  "KIBAN",
  "KIDAL",
  "KIFOSSO",
  "KIGNAN",
  "KITA",
  "KLELA",
  "KOBIRI",
  "KOKOFATA",
  "KOKRI",
  "KOLONDIEBA",
  "KOLONGO-BOZO",
  "KONA",
  "KONINA",
  "KONOBOUGOU",
  "KONODIMINI",
  "KONSEGUELA",
  "KONTELA",
  "KOPORO-KENIE-NA",
  "KORO",
  "KOUBEL-KOUNDIA",
  "KOULA",
  "KOULIKORO",
  "KOULOUM",
  "KOUMAIRA",
  "KOUMANTOU",
  "KOUMIA",
  "KOUNDIAN",
  "KOUORO",
  "KOURI",
  "KOUROUMA",
  "KOUSSANE",
  "KOUTIALA",
  "KREMISS",
  "LAKAMANE",
  "LAMBIDOU",
  "LERE",
  "LESSOGOU",
  "LOBOUGOULA",
  "MADIAMA",
  "MADOUGOU",
  "MAFUNE",
  "MAHINA",
  "MANDIAKUI",
  "MARKALA",
  "MASSANTOLA",
  "MASSIGUI",
  "MATOMOU",
  "MENAKA",
  "MERIDIALA",
  "MIENA",
  "MINANBA",
  "MISSENI",
  "MONDORO",
  "MONINNPEBOUGOU",
  "MOPTI",
  "MORA",
  "MORIBABOUGOU",
  "MORIBILA",
  "MOUNTOUGOULA",
  "MPESSOBA",
  "NAMALA-GUIMBALA",
  "NANGOLA",
  "NANPALA",
  "NARA",
  "NGOLOBOUGOU",
  "NGOLONIANASSO",
  "NGORKOU",
  "NIAGADINA",
  "NIAMINA",
  "NIANDJILA",
  "NIASSO",
  "NIENA",
  "NIONO",
  "NIORO",
  "NKOURABA",
  "NONKON",
  "NOSSOMBOUGOU",
  "NTOROSSO",
  "NTOSSONI",
  "OUANKORO",
  "OUATAGOUNA",
  "OUOLODO",
  "OURIKELA",
  "PELENGANA",
  "PEMMPERENA",
  "PINIA",
  "SADIOLA",
  "SAFO",
  "SAGALA",
  "SAKOUEBA",
  "SAMABOURO",
  "SAME",
  "SAN",
  "SANANDO",
  "SANANKORO-DJITOUMOU",
  "SANANKOROBA",
  "SANDARE",
  "SANGAREBOUGOU",
  "SANGASSO",
  "SANSANDING",
  "SANSO",
  "SANZANA",
  "SARE-YAMOU",
  "SATADOUGOU",
  "SEBEKORO",
  "SEBEKORO",
  "SEGALA-MBA",
  "SEGOU",
  "SEGOUBOUGOU",
  "SEGUE",
  "SIBI",
  "SIBILA",
  "SIBIRILA",
  "SIDO",
  "SIKASSO",
  "SINKOLO",
  "SINSINA",
  "SIRAKORO",
  "SIRAKOROLA",
  "SIRIBALA",
  "SITAKILI",
  "SOKOLO",
  "SOKOURA",
  "SOKOURA",
  "SOMASSO",
  "SORONTONA",
  "SOUBA",
  "SOUBALA",
  "SOULEI",
  "SOUMPI",
  "SOYE",
  "TAMANI",
  "TAMBAGA",
  "TAOUDENNI",
  "TENENKOU",
  "TESSALIT",
  "TIMBUKTU",
  "TIMISSA",
  "TIORIBOUGOU",
  "TOGOU",
  "TOGUERE-KOUMBE",
  "TOMINIAN",
  "TOUBAKORO",
  "TOUGOUNI",
  "TOUKOROBA",
  "TOUKOTO",
  "TOUNA",
  "TOUROUGOUMBE",
  "TYELE",
  "WA",
  "WAKORO",
  "WALIA",
  "WOLOSSEBOUGOU",
  "YANGASSO",
  "YELIMANE",
  "YERERE",
  "YOROSSO",
  "YOUDIOU",
  "YOUWAROU",
  "ZANIENA",
  "ZANTIEBOUGOU",
  "ZEBALA",
  "ZEGOUA",
  "ZINZANA",
];

export default maliCitiesDict;
