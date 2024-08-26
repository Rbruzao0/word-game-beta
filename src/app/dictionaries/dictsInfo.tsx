// Nahuatl and Miscellaneous
import jklmWordsDict from "./misc/jklmWordsDict";
import koreanWordsDict from "./misc/koreanWordsDict";
import leagueOfLegendsDict from "./misc/leagueOfLegendsDict";
import nahuatlSnWordsDict from "./misc/nahuatlSnWordsDict";
import pokemonDict from "./misc/pokemonDict";

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


const dictionaries = [
  {
    id: 0,
    name: "ALL JKLM WORDS DICT",
    dict: jklmWordsDict,
    price: 0,
    bought: true,
  },
  {
    id: 1,
    name: "ENGLISH ADJECTIVES DICT",
    dict: englishAdjectivesDict,
    price: 100,
    bought: false,
  },
  {
    id: 2,
    name: "ENGLISH ALL WORDS DICT",
    dict: englishAllWordsDict,
    price: 100,
    bought: false,
  },
  {
    id: 3,
    name: "ENGLISH ANIMALS DICT",
    dict: englishAnimalsDict,
    price: 100,
    bought: false,
  },
  {
    id: 4,
    name: "ENGLISH APOSTROPHIZEDS DICT",
    dict: englishApostrophizedWordsDict,
    price: 100,
    bought: false,
  },
  {
    id: 5,
    name: "ENGLISH COMPOUND WORDS DICT",
    dict: englishCompoundWordsDict,
    price: 100,
    bought: false,
  },
  {
    id: 6,
    name: "ENGLISH DIFFICULT WORDS DICT",
    dict: englishDifficultWordsDict,
    price: 100,
    bought: false,
  },
  {
    id: 7,
    name: "ENGLISH HYPHENATEDS DICT",
    dict: englishHyphenatedWordsDict,
    price: 100,
    bought: false,
  },
  {
    id: 8,
    name: "ENGLISH LONGS DICT",
    dict: englishLongWordsDict,
    price: 100,
    bought: false,
  },
  {
    id: 9,
    name: "ENGLISH MATH WORDS DICT",
    dict: englishMathWordsDict,
    price: 100,
    bought: false,
  },
  {
    id: 10,
    name: "ENGLISH NONSENSE WORDS DICT",
    dict: englishNonsenseWordsDict,
    price: 100,
    bought: false,
  },
  {
    id: 11,
    name: "ENGLISH PLANTS DICT",
    dict: englishPlantsDict,
    price: 100,
    bought: false,
  },
  {
    id: 12,
    name: "ENGLISH PROFISSIONS DICT",
    dict: englishProfissionsDict,
    price: 100,
    bought: false,
  },
  {
    id: 13,
    name: "ENGLISH SN'S DICT",
    dict: englishSnWordsDict,
    price: 100,
    bought: false,
  },
  {
    id: 14,
    name: "PORTUGUESE ALIMENTS DICT",
    dict: portugueseAlimentsDict,
    price: 100,
    bought: false,
  },
  {
    id: 15,
    name: "PORTUGUESE ANIMALS DICT",
    dict: portugueseAnimalsDict,
    price: 100,
    bought: false,
  },
  {
    id: 16,
    name: "PORTUGUESE APOSTROPHS DICT",
    dict: portugueseApostrophsDict,
    price: 100,
    bought: false,
  },
  {
    id: 17,
    name: "PORTUGUESE HYPHENS DICT",
    dict: portugueseHyphensDict,
    price: 100,
    bought: false,
  },
  {
    id: 18,
    name: "PORTUGUESE LOCAL DICTS",
    dict: portugueseLocalsDict,
    price: 100,
    bought: false,
  },
  {
    id: 19,
    name: "PORTUGUESE LONG HYPHENS DICT",
    dict: portugueseLongHyphensDict,
    price: 100,
    bought: false,
  },
  {
    id: 20,
    name: "PORTUGUESE LONGS DICT",
    dict: portugueseLongsDict,
    price: 100,
    bought: false,
  },
  {
    id: 21,
    name: "PORTUGUESE PLANTS DICT",
    dict: portuguesePlantsDict,
    price: 100,
    bought: false,
  },
  {
    id: 22,
    name: "PORTUGUESE PROFISSIONS DICT",
    dict: portugueseProfissionsDict,
    price: 100,
    bought: false,
  },
  {
    id: 23,
    name: "POKEMONS DICT",
    dict: pokemonDict,
    price: 500,
    bought: false,
  },
  {
    id: 24,
    name: "SPANISH LONGS DICT",
    dict: spanishLongWordsDict,
    price: 100,
    bought: false,
  },
  {
    id: 25,
    name: "SPANISH SN'S DICT",
    dict: spanishSnWordsDict,
    price: 100,
    bought: false,
  },
  {
    id: 26,
    name: "KOREAN COMMON WORDS DICT",
    dict: koreanWordsDict,
    price: 100,
    bought: false,
  },
  {
    id: 27,
    name: "NAHUATL SN'S DICT",
    dict: nahuatlSnWordsDict,
    price: 300,
    bought: false,
  },
  {
    id: 28,
    name: "LEAGUE OF LEGENDS DICT",
    dict: leagueOfLegendsDict,
    price: 300,
    bought: false,
  },
];


export default dictionaries