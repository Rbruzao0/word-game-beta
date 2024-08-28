// Nahuatl and Miscellaneous
import jklmWordsDict from "./misc/jklmWordsDict";
import koreanWordsDict from "./misc/koreanWordsDict";
import leagueOfLegendsDict from "./misc/leagueOfLegendsDict";
import nahuatlSnWordsDict from "./misc/nahuatlSnWordsDict";
import pokemonDict from "./misc/pokemonDict";
import mythologicalDict from "./misc/mythologicalDict";
import worldCitiesDict from "./misc/CEPs/worldCitiesDict";
import worldCountriesDict from "./misc/CEPs/worldCountriesDict";

// English
import englishAdjectivesDict from "./english/englishAdjectivesDict";
import englishAllWordsDict from "./english/englishAllWordsDict";
import englishAnimalsDict from "./english/englishAnimalsDict";
import englishApostrophizedWordsDict from "./english/englishApostrophizedWordsDict";
import englishCompoundWordsDict from "./english/englishCompoundWordsDict";
import englishDifficultWordsDict from "./english/englishDifficultWordsDict";
import englishHyphenatedWordsDict from "./english/englishHyphenatedWordsDict";
import englishLongWordsDict from "./english/englishLongWordsDict";
import englishMathWordsDict from "./english/englishMathWordsDict";
import englishNonsenseWordsDict from "./english/englishNonsenseWordsDict";
import englishPlantsDict from "./english/englishPlantsDict";
import englishProfissionsDict from "./english/englishProfissionsDict";
import englishSnWordsDict from "./english/englishSnWordsDict";

// Spanish
import spanishSnWordsDict from "./spanish/spanishSnWordsDict";
import spanishLongWordsDict from "./spanish/spanishLongWordsDict";

// Portuguese
import portugueseProfissionsDict from "./portuguese/portugueseProfissionsDict";
import portuguesePlantsDict from "./portuguese/portuguesePlantsDict";
import portugueseLocalsDict from "./portuguese/portugueseLocalsDict";
import portugueseAnimalsDict from "./portuguese/portugueseAnimalsDict";
import portugueseLongHyphensDict from "./portuguese/portugueseLongHyphensDict";
import portugueseLongsDict from "./portuguese/portugueseLongsDict";
import portugueseAlimentsDict from "./portuguese/portugueseAlimentsDict";
import portugueseHyphensDict from "./portuguese/portugueseHyphensDict";
import portugueseApostrophsDict from "./portuguese/portugueseApostrophsDict";

const wordsLists = [
  {
    category: "English",
    dicts: [
      {
        id: 101,
        name: "ENGLISH ADJECTIVES DICT",
        dict: englishAdjectivesDict,
        price: 100,
        bought: false,
      },
      {
        id: 102,
        name: "ENGLISH ALL WORDS DICT",
        dict: englishAllWordsDict,
        price: 100,
        bought: false,
      },
      {
        id: 103,
        name: "ENGLISH ANIMALS DICT",
        dict: englishAnimalsDict,
        price: 100,
        bought: false,
      },
      {
        id: 104,
        name: "ENGLISH APOSTROPHIZEDS DICT",
        dict: englishApostrophizedWordsDict,
        price: 100,
        bought: false,
      },
      {
        id: 105,
        name: "ENGLISH COMPOUND WORDS DICT",
        dict: englishCompoundWordsDict,
        price: 100,
        bought: false,
      },
      {
        id: 106,
        name: "ENGLISH DIFFICULT WORDS DICT",
        dict: englishDifficultWordsDict,
        price: 100,
        bought: false,
      },
      {
        id: 107,
        name: "ENGLISH HYPHENATEDS DICT",
        dict: englishHyphenatedWordsDict,
        price: 100,
        bought: false,
      },
      {
        id: 108,
        name: "ENGLISH LONGS DICT",
        dict: englishLongWordsDict,
        price: 100,
        bought: false,
      },
      {
        id: 109,
        name: "ENGLISH MATH WORDS DICT",
        dict: englishMathWordsDict,
        price: 100,
        bought: false,
      },
      {
        id: 110,
        name: "ENGLISH NONSENSE WORDS DICT",
        dict: englishNonsenseWordsDict,
        price: 100,
        bought: false,
      },
      {
        id: 111,
        name: "ENGLISH PLANTS DICT",
        dict: englishPlantsDict,
        price: 100,
        bought: false,
      },
      {
        id: 112,
        name: "ENGLISH PROFISSIONS DICT",
        dict: englishProfissionsDict,
        price: 100,
        bought: false,
      },
      {
        id: 113,
        name: "ENGLISH SN'S DICT",
        dict: englishSnWordsDict,
        price: 100,
        bought: false,
      },
    ],
  },
  {
    category: "Spanish",
    dicts: [
      {
        id: 201,
        name: "SPANISH LONGS DICT",
        dict: spanishLongWordsDict,
        price: 100,
        bought: false,
      },
      {
        id: 202,
        name: "SPANISH SN'S DICT",
        dict: spanishSnWordsDict,
        price: 100,
        bought: false,
      },
    ],
  },
  {
    category: "Portuguese",
    dicts: [
      {
        id: 301,
        name: "PORTUGUESE ALIMENTS DICT",
        dict: portugueseAlimentsDict,
        price: 100,
        bought: false,
      },
      {
        id: 302,
        name: "PORTUGUESE ANIMALS DICT",
        dict: portugueseAnimalsDict,
        price: 100,
        bought: false,
      },
      {
        id: 303,
        name: "PORTUGUESE APOSTROPHS DICT",
        dict: portugueseApostrophsDict,
        price: 100,
        bought: false,
      },
      {
        id: 304,
        name: "PORTUGUESE HYPHENS DICT",
        dict: portugueseHyphensDict,
        price: 100,
        bought: false,
      },
      {
        id: 305,
        name: "PORTUGUESE LOCAL DICTS",
        dict: portugueseLocalsDict,
        price: 100,
        bought: false,
      },
      {
        id: 306,
        name: "PORTUGUESE LONG HYPHENS DICT",
        dict: portugueseLongHyphensDict,
        price: 100,
        bought: false,
      },
      {
        id: 307,
        name: "PORTUGUESE LONGS DICT",
        dict: portugueseLongsDict,
        price: 100,
        bought: false,
      },
      {
        id: 308,
        name: "PORTUGUESE PLANTS DICT",
        dict: portuguesePlantsDict,
        price: 100,
        bought: false,
      },
      {
        id: 309,
        name: "PORTUGUESE PROFISSIONS DICT",
        dict: portugueseProfissionsDict,
        price: 100,
        bought: false,
      },
    ],
  },
  {
    category: "Miscellaneous",
    dicts: [
      {
        id: 401,
        name: "ALL JKLM WORDS DICT",
        dict: jklmWordsDict,
        price: 0,
        bought: true,
      },
      {
        id: 402,
        name: "KOREAN COMMON WORDS DICT",
        dict: koreanWordsDict,
        price: 300,
        bought: false,
      },
      {
        id: 403,
        name: "LEAGUE OF LEGENDS DICT",
        dict: leagueOfLegendsDict,
        price: 300,
        bought: false,
      },
      {
        id: 404,
        name: "NAHUATL SN'S DICT",
        dict: nahuatlSnWordsDict,
        price: 300,
        bought: false,
      },
      {
        id: 405,
        name: "POKEMONS DICT",
        dict: pokemonDict,
        price: 500,
        bought: false,
      },
      {
        id: 406,
        name: "MYTHOLOGICAL DICT",
        dict: mythologicalDict,
        price: 500,
        bought: false,
      },
      {
        id: 407,
        name: "WORLD COUNTRIES DICT",
        dict: worldCountriesDict,
        price: 500,
        bought: false,
      },
      {
        id: 408,
        name: "WORLD CITIES DICT",
        dict: worldCitiesDict,
        price: 1000,
        bought: false,
      },
    ],
  },
];

export default wordsLists;
