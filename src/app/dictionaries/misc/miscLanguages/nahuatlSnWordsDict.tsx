const nahuatlSnWordsDict = [
  "AAZTITLAN",
  "AAZTLI",
  "ACAHZOYEMO",
  "ACAOXITL",
  "ACATEPOZZOTL",
  "ACATZANAICXITL",
  "ACHIOTL",
  "ACHIYOAQUIA",
  "ACOCILIHCEQUI",
  "AHAXCATIA",
  "AHAZEH",
  "AHAZTITLAN",
  "AHAZTLI",
  "AHAZYOH",
  "AHCAZOCMO",
  "AHCECEIHYAC",
  "AHCECEIYAC",
  "AHCOCQUI",
  "AHHUELITILLZTLI",
  "AHHUELITILLZZOTL",
  "AHHUICMICHIN",
  "AHHUICYAUH",
  "AHIEL",
  "AHIELLACAQUI",
  "AHIELLAHTOA",
  "AHIIYOQUIZANI",
  "AHITLOCMONEQUI",
  "AHIXCOEHUALIZTLI",
  "AHMEUHCAPOL",
  "AHMOHOZCALIA",
  "AHNENAMICTLLIZTLI",
  "AHNYEH",
  "AHOMMOTHUA",
  "AHOMMOTTA",
  "AHOMTEMEQUIANI",
  "AHONNEAQUILO",
  "AHONNETHUALIZTLI",
  "AHONTEAQUIANI",
  "AHONTLAECOANI",
  "AHOOMPA",
  "AHTZONIPILHUAZEH",
  "AHUICMICHIN",
  "AHYECYOTICA",
  "AHYECYOTL",
  "AITZCIHUACUAUHTLI",
  "AIUH",
  "AIUHCAYOTL",
  "ALAHUAOXIPAHUAZTLI",
  "ALTEPEITTA",
  "ALTEPEONOC",
  "ALTEPEQUIXOHUAYAN",
  "AMAAHAZTLI",
  "AMAOZTOMECATL",
  "AMOXEH",
  "AMOXMATINI",
  "AMOXXOTOCA",
  "ANECUYOTL",
  "AOCMO",
  "AOZTOC",
  "AOZTOTL",
  "ATECUIIXTLI",
  "ATLAUHTONLI",
  "ATLHUELIC",
  "ATLPOYECCAN",
  "ATOYAATL",
  "ATOYAIXNAMIQUI",
  "ATZITZIOXIHUITL",
  "AXYOH",
  "AYACACHETL",
  "AYAIC",
  "AYCOXOCHTINEMI",
  "AYHUIANYOH",
  "AYIHUA",
  "AYOCHICAHUAZEH",
  "AYOCMO",
  "AYOHHUACHIHCEQUI",
  "AYOHXOCHIAPAN",
  "AZTAAPAN",
  "AZTAEHCACEHUAZTLI",
  "AZTAEHUATL",
  "AZTAIHHUITICA",
  "AZTAIHHUITL",
  "AZTAIMAXTLI",
  "AZTAXELLI",
  "AZTAXOCHITL",
  "CACAPXON",
  "CACAXYOH",
  "CACTZINHUETZI",
  "CALPOLHUEHUETQUEH",
  "CAMAXOCHIEHCACAL",
  "CANYEPA",
  "CAOCMO",
  "CATYAN",
  "CAXZOLLI",
  "CEA",
  "CEALIZTICA",
  "CEALIZTLI",
  "CEALTIA",
  "CEANI",
  "CEAYOH",
  "CECECNIQUIXTIA",
  "CECEPOQUITIA",
  "CEMILHUIELIMICTLI",
  "CEMPOHPOLIOHUA",
  "CENNOHNOTZA",
  "CENNONOTZA",
  "CENNOTZA",
  "CENTETTICAH",
  "CENTETTIHUITZ",
  "CENTETTIUH",
  "CENTLATHUI",
  "CENTZONMECATL",
  "CEOLINTZIN",
  "CEPANAXCAITL",
  "CEQUI",
  "CEQUIMILLI",
  "CETCAYOTL",
  "CEZCIYACATL",
  "CHACHANMEH",
  "CHANNONOTZA",
  "CHANYEOANI",
  "CHIAPAN",
  "CHIAUHCOATL",
  "CHIAUHTLAH",
  "CHICHICTLAPALEZCUAHUITL",
  "CHICHIENTIC",
  "CHICHIHUALNANATZIHUILIZLI",
  "CHICOAPALNACAZMINQUI",
  "CHICOILHUIA",
  "CHICUEYIPILLI",
  "CHIEN",
  "CHIENNAMACAC",
  "CHIENTZOTZOLNAMACAC",
  "CHIHCHICOEHUA",
  "CHIHCHICOIUCCI",
  "CHILAZMOLLI",
  "CHILTECPIMMOLLI",
  "CHILTECPIMMOLLOH",
  "CHILTECPIMPANI",
  "CHILTECPINMOLLI",
  "CHILTECPINMOLLOH",
  "CHIMOUHCAYOTL",
  "CHIMOUHQUI",
  "CHIPAUHCAYOTL",
  "CHIQUIPPECHTLI",
  "CHIYANAXIHUITL",
  "CHIYEMEH",
  "CHOQUIZNONOTZA",
  "CHOQUIZXAHUALLI",
  "CICIYOTQUI",
  "CIHNACAETZALLI",
  "CIHUAIHNI",
  "CINHUECHTLI",
  "CINMELACTIC",
  "CINUATLANTLI",
  "COAAPAN",
  "COAATL",
  "COAEHUATL",
  "COAHUITZXOCHITL",
  "COAQUILTIC",
  "COATLXOXOUHCAN",
  "COATLYAYAUHCAN",
  "COAZACATZIN",
  "COCHAANA",
  "COCHIOCTLI",
  "COCHOEHUATL",
  "COCHOIHHUITL",
  "COCOCQUILITL",
  "COCOZXOCHIPAHTLI",
  "COHUAONOQUEH",
  "COLELECYOH",
  "CONETCATZIN",
  "CONZOLCO",
  "CONZOLLI",
  "COTOTZYETIUH",
  "COTZNOHNOLIUHCAYOTL",
  "COTZNOLIUHCAYOTL",
  "COTZXIPETZCO",
  "COXOLIHECACEHUAZTLI",
  "COXOLIHEHCACEHUAZTLI",
  "COYAMEELTZOTZOLLI",
  "COYOEHUAICPALLI",
  "COYOEHUAPEHPECHTLI",
  "COYOEHUATILMAHTLI",
  "COYOEHUATL",
  "COZNOCHNOHPALLI",
  "COZNOCHTLI",
  "COZOEHUATL",
  "COZTICMECAPAHTLI",
  "COZZOQUITL",
  "CUACHPEPECHZOUHQUI",
  "CUAHUILACAPITZLI",
  "CUANHUEHUETQUEH",
  "CUAOCHPANMEH",
  "CUAPPETLACALLI",
  "CUAPPETLAPAN",
  "CUAPPETLATL",
  "CUATAIHTOA",
  "CUAUHAHAZTLI",
  "CUAUHAZCATL",
  "CUAUHETL",
  "CUAUHEXOTL",
  "CUAUHMECAEXOTL",
  "CUAUHMETZLI",
  "CUAUHOXITL",
  "CUAUHOZTOC",
  "CUAUHTLIQUETZQUI",
  "CUAUHXELOA",
  "CUAUHXELOLONI",
  "CUAUNHUITZCOLOTL",
  "CUAUTZONTAPAYOLLI",
  "CUAUYOCOPALLI",
  "CUAYOLCUEPTOC",
  "CUEACXOLHUIA",
  "CUECUENOTQUI",
  "CUEHZOA",
  "CUEOLOLOA",
  "CUEPTZINOA",
  "CUETLAXNACOCHEH",
  "CUETLAXNACOCHTLI",
  "CUETLAXYAMANIA",
  "CUICANIMEH",
  "CUILLOTQUI",
  "CUITCOATL",
  "CUITIHUETZIZNEQUI",
  "CUITLAAZCATL",
  "CUITLACPEHUA",
  "CUITLAPANAATETL",
  "CUITLAPILXEXELTIC",
  "CUITLATEXOHEHUATL",
  "EETZALCOMITL",
  "EEZCUIHCUILOA",
  "EEZTENTLI",
  "EHETZAPOTL",
  "EHEXPA",
  "EHEYI",
  "EHEYOH",
  "EHEYOTIA",
  "EHEYOTZAPOTL",
  "EHEZYOH",
  "ELCICIOHUAYAN",
  "ELCIHCIOHUA",
  "ELCIHCIOHUAYAN",
  "ELOIZHUATL",
  "ELOOCUILIN",
  "EPNEPANIUHCAYOH",
  "EPNEPANIUHQUI",
  "EPYOLLOHTLI",
  "ESMELIR",
  "EZAXIXTLI",
  "EZMAITL",
  "EZMEYA",
  "EZMOLONI",
  "EZMOLONILIZTLI",
  "EZYOH",
  "EZYOHUA",
  "EZYOTIA",
  "HUACCATLATLAXIZTLI",
  "HUALLATHUI",
  "HUAXNAMACA",
  "HUAXYACAC",
  "HUEHHUEYIPOPOL",
  "HUEHHUEYIYA",
  "HUEHUETQUEH",
  "HUEHUEYIPOL",
  "HUEHUEYIPOPOL",
  "HUEHXOLOELTZOTZOLLI",
  "HUELIPANTILIA",
  "HUELYOLLOTIA",
  "HUEPANMECATL",
  "HUEYIA",
  "HUEYIAPAN",
  "HUEYIILHUITL",
  "HUEYIMAHPILLI",
  "HUEYIMATI",
  "HUEYIPOCHTLAN",
  "HUEYIPOL",
  "HUEYIXOPILLI",
  "HUEYIYA",
  "HUEYIYOTL",
  "HUIHHUIPTATICA",
  "HUIHUITOLIUI",
  "HUINAXCATL",
  "HUITZXOCHITL",
  "HUITZYECOLO",
  "HUIXTOICHIHUA",
  "HULXALIUHQUI",
  "ICCEMMANIYAN",
  "ICCEN",
  "ICNOILAMAH",
  "ICNOILAMAHYOTL",
  "ICNOOCELOTL",
  "ICNOOQUICHTLI",
  "ICOAUH",
  "ICPAOMICICUILEH",
  "ICXEH",
  "ICXIOHQUETZA",
  "ICXIOHTEMOA",
  "ICXIOHTLI",
  "ICXIOXIHUIA",
  "ICZOXOCHITL",
  "IELLELAHCIC",
  "IELLELEH",
  "IELLELLAHCIC",
  "IHCEQUI",
  "IHCIOHUA",
  "IHCIQUIZTLI",
  "IHCOPTICAH",
  "IHHUIAQUILIA",
  "IHHUIOMITL",
  "IHICXEH",
  "IHIHELO",
  "IHINAXTINEMI",
  "IHIYOILOCHTIA",
  "IHNI",
  "IHPOTOCQUIZA",
  "IHQUITCACALLI",
  "IHQUITCALLI",
  "IHTIEHUATL",
  "IHTIILACATZIUHQUI",
  "IHTIILACATZTIC",
  "IHTIOCOTZOHUIA",
  "IHTIOXYOH",
  "IHUINCAYOYL",
  "IIXCUAUHTI",
  "ILIHUIZCIHUATL",
  "ILOTTINEMI",
  "IMACAXYOH",
  "IMMANELYEH",
  "INAILIA",
  "IOPOCH",
  "IQUITCACALLI",
  "ITCONI",
  "ITZCIHUACUAUHTLI",
  "ITZCUINXOCH",
  "ITZTIOHUA",
  "IXAAPALLEHUALIZPAHTLI",
  "IXAQUIA",
  "IXCATZIOHUA",
  "IXCECEPOHUA",
  "IXCEHUIA",
  "IXCEPOCPOL",
  "IXCEUHTIUH",
  "IXCITLALCHIHUA",
  "IXCITLALHUIA",
  "IXCITLALHUIHTIHCAC",
  "IXCITLALICHIHUA",
  "IXCITLALICHIHUALEH",
  "IXCITLALIHCIHUIZTLI",
  "IXCOEHUALIZTLI",
  "IXCUAETICIHUI",
  "IXCUAETICIHUILIZTLI",
  "IXHUEYIYAC",
  "IXIZTAC",
  "IXIZTACAYOTL",
  "IXNECUILIOHUA",
  "IXNOPALQUIZA",
  "IXNOPALQUIZALIZTLI",
  "IXNOPALQUIZQUI",
  "IXNOTZA",
  "IXTETLATZIA",
  "IXTLEYOH",
  "IXTLEYOTIA",
  "IXTOMYOH",
  "IXTZAUCPEHPECHOA",
  "IXZAHUA",
  "IXZAHUATI",
  "IXZAHUATL",
  "IXZAHUAYOH",
  "IXZALOA",
  "IXZOQUIPEPECHILHUIA",
  "IXZOQUIPEPECHOA",
  "IYEMACA",
  "IYEMACO",
  "IYEPAN",
  "IZCAHUIHANA",
  "IZCELTIN",
  "IZCITLALCHIHUA",
  "IZQUIEPATL",
  "IZTAOCTLI",
  "IZTAXALLI",
  "IZTAXONOTL",
  "IZTAXOPILLI",
  "IZTLACMEALTIA",
  "MACHIOTL",
  "MAHCOCQUI",
  "MAHPILTECUTLI",
  "MAHUIZNOTZA",
  "MATEMEQUEH",
  "MATTEHUA",
  "MAUHCATLAYEZOA",
  "MAZAAPAN",
  "MAZAATEMITL",
  "MAZAEHUATILMAHTLI",
  "MAZAEHUATL",
  "MAZAOHTLI",
  "MAZAXOCOCUAHUITL",
  "MAZAXOCOTL",
  "MAZAYEIYO",
  "MAZAYEIYOH",
  "MEALTIA",
  "MEAQUIA",
  "MEOCUILIN",
  "MEQUIYOTL",
  "MEUHQUI",
  "MEZCAL",
  "MEZOTL",
  "MEZOYOH",
  "MEZTALLOTL",
  "MEZTITLAN",
  "MICHTLAXQUITL",
  "MICHZACUAN",
  "MIHMATTZINTLI",
  "MIQUIZIXNAHUATIA",
  "MIXAEHECATL",
  "MIXCUEPQUI",
  "MIZCITLALCHIUH",
  "MOCOCHAANANI",
  "MOCOCHAANQUI",
  "MOCUEOLOLOH",
  "MOCZANI",
  "MOHUAPAUHQUI",
  "MOHUEYIMATINI",
  "MOIYOHCATIH",
  "MOIYOLIC",
  "MOMANALIZTLL",
  "MOMOCHIIHTOTIA",
  "MONAMICYAN",
  "MOTEELEHUTLTIANI",
  "MOTLAECOLTIANI",
  "MOTQUITICA",
  "MOTQUITICAH",
  "MOXELOANI",
  "MOYOLAHCOCQUI",
  "MOYOLCUEPQUI",
  "NACAETZALCHIHUA",
  "NACAETZALLI",
  "NACAZCELICAYOTL",
  "NACAZCUEHZOA",
  "NACAZEH",
  "NACAZEHCATOCA",
  "NACAZMAHUI",
  "NACAZMAMALI",
  "NACAZMINQUI",
  "NACAZTZATZANEHENEQUI",
  "NACAZXAPOTLA",
  "NACAZXOC",
  "NAHUALTZECOA",
  "NAHUATILXELOA",
  "NAHUATILXELOLIZTLI",
  "NAOLIN",
  "NAOLOTL",
  "NECOCYAOTZIN",
  "NECUAINI",
  "NECUEOLOLOLIZTLI",
  "NECUEPYAN",
  "NEEUHCAYOTL",
  "NEHUELYOLLOTILIZTLI",
  "NEHUELYOLLOTILONI",
  "NEHZOLLI",
  "NEHZOTLALIZTLI",
  "NEHZOTLALO",
  "NEIIXQUEZALO",
  "NELYOLCOCOLIZTLI",
  "NENACAZMALALIHUANI",
  "NENACAZXAPOTLALIZTLI",
  "NENACAZYECTILONI",
  "NENAMICTILIZYEYANTLI",
  "NENEXECTON",
  "NEOOUICHHUATILIZTLI",
  "NEOZCOLIZTLI",
  "NEPANTLAHXELOA",
  "NEPICYANTLI",
  "NETECHHAMICTIA",
  "NETECHZALOA",
  "NETENAXHUILO",
  "NETTALIZTLI",
  "NETTONI",
  "NEXAQUIA",
  "NEXECTIC",
  "NEXZOQUITL",
  "NEZOQUIAQUILIZTLI",
  "NIMAN",
  "NOCHEZNOHPALLI",
  "NOCHEZYOH",
  "OCCE",
  "OCCENTETL",
  "OCCEPPA",
  "OCELOEHUAICPALLI",
  "OCELOEHUAPEHPECHTLI",
  "OCELOEHUAPETLATL",
  "OCELOEHUATEPOTZOHICPALLI",
  "OCELOEHUATL",
  "OCHPANZOLLI",
  "OCIXOCHITL",
  "OCOPIAZTLI",
  "OCXAYACATL",
  "OCXAYOTL",
  "OHOXYOH",
  "OHOZOMAHTZITZQUIA",
  "OHOZTOYOCAN",
  "OHOZTOYOH",
  "OHTLIPAN",
  "OHXYOH",
  "OMEACAC",
  "OMEQUILITL",
  "OMPETTICATIUH",
  "OMPETTIUH",
  "ONTEMANTTNEMI",
  "OOHUIHCANAQUIA",
  "OOLLAMA",
  "OOLPEYAHUAC",
  "OOMIYOTL",
  "OOMIZAHUI",
  "OOMIZAHUILIZTLI",
  "OOTZTI",
  "OQUICHOZOMAHTLI",
  "OXYOH",
  "OYILIA",
  "OZTOEHUATL",
  "OZTOEHUATZINTLI",
  "PACXANOA",
  "PACXANTZIN",
  "PALAXYOHYOPEHUIH",
  "PALAXYOHYOPEHUILIZTLI",
  "PALAXYOPEHUILIZTLI",
  "PATIOTIA",
  "PETTICAYOTL",
  "PICIYEPOHUA",
  "PILIHHUIEHUATL",
  "PIOCHEHQUI",
  "PIOCHTLI",
  "PIPILNEQUL",
  "PIPTONTLI",
  "PITZOEHECATL",
  "PITZOILAMAH",
  "POCHTECAHUEHUETQUEH",
  "POCMICTIA",
  "POCMIMILCA",
  "POEC",
  "POELPAHTIC",
  "POHPOCALES",
  "POQUIHYALIA",
  "POQUIYETL",
  "POTZAZEH",
  "POXNACAZTLAN",
  "QUELYECOA",
  "QUETZALITZEPYOLLOHTLI",
  "QUETZALTOTOEHCACEHUAZTLI",
  "QUETZALXICALCOLIUQUI",
  "QUEZEHUATL",
  "QUEZICZATOC",
  "QUILTIZAAQUIA",
  "QUIMICHETL",
  "QUIMOTHUICAYETOCAC",
  "QUIMOTHUICAYETOCANI",
  "QUIMOTHUITOCANI",
  "QUIYOTQUI",
  "TAMUOC",
  "TANAXIMA",
  "TEAACHTILMAHTLI",
  "TECALLOTQUI",
  "TECHALOEHUATL",
  "TECHIPAUH",
  "TECOLLIQUENQUI",
  "TECOYOUHTINEMI",
  "TEECAH",
  "TEECHICHINQUI",
  "TEETICIHUILIZTLI",
  "TEETICIHUITILIZTLI",
  "TEEZCHICHINQUI",
  "TEHTENACAZZOH",
  "TEHTEPONMEHMECATIC",
  "TEHUIEH",
  "TEIMACACINI",
  "TEIMACAXILIZTICA",
  "TEIMACAXILIZTLI",
  "TEIMACAZQUI",
  "TEIPITZANI",
  "TEIUC",
  "TEIXCEHUILIZTICA",
  "TEIXCEHUILIZTLI",
  "TEIXCOEHUANI",
  "TEIXPAMPAEHUANI",
  "TEIYEMACO",
  "TELPOCHCHIHCHIHHA",
  "TEMPATZIOHUA",
  "TEMPOTZOHTMOTLALIHQUI",
  "TENAANA",
  "TENAXHUIA",
  "TENEMILIZCUEPQUI",
  "TENETECHEUH",
  "TENEXZALOLONI",
  "TENEXZOQUITL",
  "TENIMACACI",
  "TENIMEH",
  "TENMELAHUA",
  "TENNONOTZA",
  "TENTZAPTIC",
  "TENTZICUEUHQUI",
  "TENTZITZIPI",
  "TENTZITZIPITIC",
  "TENTZITZIPITLAHTOA",
  "TENTZITZIPITLAHTOANI",
  "TENTZITZIPITLAHTOLIZTLI",
  "TENXIPALCUEPQUI",
  "TEOAUHTOTOTL",
  "TEOAZTATL",
  "TEOCINXOCATL",
  "TEOCIOHUA",
  "TEOCIOHUAYAN",
  "TEOCUITLAEPCOLOLLI",
  "TEOHCIOHUA",
  "TEOHCIOHUAYAN",
  "TEOIMACACI",
  "TEOIMACACINI",
  "TEOIZQUIXOCHITL",
  "TEOIZQUIXOCHYOH",
  "TEOIZTAQUILITL",
  "TEONACAZZOH",
  "TEOOCTLI",
  "TEOPANCALCHIIUHQUI",
  "TEOPANZOLCO",
  "TEOUH",
  "TEOZACOALCO",
  "TEOZATZIN",
  "TEOZTOC",
  "TEPANMELAHUAC",
  "TEPANZOLLI",
  "TEPEACA",
  "TEPEACATL",
  "TEPEACAXOCHITL",
  "TEPEACOCOHXOCHITL",
  "TEPEACXOYATL",
  "TEPEAMALACOTL",
  "TEPEAMATL",
  "TEPEEHECATL",
  "TEPEIHTIC",
  "TEPEIHTICTLI",
  "TEPEILHUITL",
  "TEPEITZCUINTLI",
  "TEPEIXCO",
  "TEPEIYAUHTLI",
  "TEPEIZQUIXOCHITL",
  "TEPEOHUIHCAN",
  "TEPEOLOLLI",
  "TEPETLAOZTOC",
  "TEPETLAOZTOTL",
  "TEPICMEH",
  "TEPILEZTLI",
  "TEPITZZO",
  "TEPOMECATL",
  "TEPOTZOICPALLI",
  "TEPOTZOIHUI",
  "TEPOZCUAUHXEHXELOLONI",
  "TEPOZCUAUHXELOLONI",
  "TEPOZICHICONI",
  "TEPOZICPATL",
  "TEPOZIHCHICONI",
  "TEPOZILPIA",
  "TEPOZXIMA",
  "TEPOZXOMAHTLI",
  "TEPOZXOQUIYALLOTL",
  "TEPOZZALOA",
  "TEPOZZOH",
  "TEPZOLAC",
  "TEPZOLATL",
  "TEPZOLCO",
  "TEQUIHAHANA",
  "TEQUIHATLI",
  "TEQUIHATLINI",
  "TEQUIXQUIAPAN",
  "TEQUIXQUIOLOLOANI",
  "TEQUIYAUI",
  "TETEPONHUIHUUIYAC",
  "TETEPOZMACCAUAHUILIZTLI",
  "TETLAMAHCEHHALTILIZTLI",
  "TETLANCECEPOUH",
  "TETLATZACUILIZLI",
  "TETLNEPANIUHCAN",
  "TETZOPQUI",
  "TETZOTQUI",
  "TEXIOCHILLI",
  "TEZATZAYANALIZLI",
  "TEZCATLIPOCA",
  "TEZILQUIZA",
  "TEZOOMI",
  "TEZOOMITI",
  "TEZOQUIAQUIANI",
  "TEZOQUIAQUILIZTLI",
  "TEZZACAPIAZTLI",
  "TILANTONGO",
  "TIYANQULZTLACUALLI",
  "TIZAAHPANQUI",
  "TIZAAPAN",
  "TIZAAPANQUI",
  "TIZAATZIN",
  "TIZAAYOTL",
  "TIZAOCTLI",
  "TIZAXAHUALLI",
  "TIZAXOCHITL",
  "TLAAHCOUCTLI",
  "TLAAHTLETLLILLI",
  "TLAAHUAQUL",
  "TLAAHUIAXTOC",
  "TLAAIHCUILOLLI",
  "TLAATCAIQUITTLI",
  "TLAAXNELOLLI",
  "TLAAXNELOLTICA",
  "TLAAXQUI",
  "TLACAAZTATL",
  "TLACAHUAPAUHQUI",
  "TLACAHUEYIYAC",
  "TLACAICXEH",
  "TLACAIPOTOCTLI",
  "TLACAOZOMAHTLI",
  "TLACATECOLOOQUICHTLI",
  "TLACEALTILLI",
  "TLACECECNIQUIXTIANI",
  "TLACECECNIQUIXTILIZTLI",
  "TLACECECNIQUIXTILLI",
  "TLACEMNELOLIZTLI",
  "TLACIYACAUUIANI",
  "TLACOEHUA",
  "TLACOHCOUHQUI",
  "TLACOHCOUHTLI",
  "TLACOIZQUIXOCHITL",
  "TLACOOCELOTL",
  "TLACOUHQUI",
  "TLACOUHTLI",
  "TLACPEHUA",
  "TLACPEHUALIZTLI",
  "TLACPEHUALLI",
  "TLACPEHUANI",
  "TLACPEUHTLI",
  "TLACUATEPOZZOTILIZTLI",
  "TLACUEHZOLIZTLI",
  "TLACUEOLOLOLLI",
  "TLAECAHUILHUIA",
  "TLAECAHUILLOTL",
  "TLAECAQUETZALONI",
  "TLAECOLTIA",
  "TLAEEZTEMALLI",
  "TLAEPANTILILLI",
  "TLAETICIHUITILLI",
  "TLAETILIANI",
  "TLAETILILLI",
  "TLAEXITOCANI",
  "TLAEYECALHUIA",
  "TLAEZHUILLI",
  "TLAEZIHCUILOLLI",
  "TLAEZNELOLLI",
  "TLAEZOTILLI",
  "TLAEZTEMALLI",
  "TLAEZTEMITILLI",
  "TLAEZYOTILLI",
  "TLAEZZOTILLI",
  "TLAHCALHUAZLYETL",
  "TLAHCOAANA",
  "TLAHCOEHUA",
  "TLAHCOILPICA",
  "TLAHCOILPILONI",
  "TLAHCOIZQUIXOCHITL",
  "TLAHCOOCELOTL",
  "TLAHCOXELIUHTOC",
  "TLAHCOXELOA",
  "TLAHELHUEHUETQUEH",
  "TLAHILPAQUILIZLI",
  "TLAHTLACOEHUATL",
  "TLAHTLACOLCEHUAPAHUALIZLI",
  "TLAHTLAHCUIOANI",
  "TLAHTLALNANIQUILIZTLI",
  "TLAHTLANELAULCACHIHUALIZTLI",
  "TLAHUAPAUHTLI",
  "TLAHUELCULTILIZTLI",
  "TLAHUELLLOTL",
  "TLAHUELYOLLOTILIZTLI",
  "TLAHZOLTEOZACATL",
  "TLAIHIYOILOCHTILLI",
  "TLAIHTIOCOTZOHUILLI",
  "TLAIIHYANI",
  "TLAIIYOHUIHTINEMI",
  "TLAINAXTLI",
  "TLAINAYALIZTLI",
  "TLAINAYALLI",
  "TLAINAYANI",
  "TLAINI",
  "TLAIPANTILIA",
  "TLAIPANTILIANI",
  "TLAIPANTILILIZTICA",
  "TLAIPANTILILIZTLI",
  "TLAIPANTILILLI",
  "TLAIUHCAN",
  "TLAIXAQUIH",
  "TLAIXAQUILLI",
  "TLAIXCEHUILLI",
  "TLAIXTEZNOANI",
  "TLAIXTLATHUILTILLI",
  "TLAIXZOQUIPEPECHILLOTL",
  "TLAIXZOQUIPEPECHOLLI",
  "TLALAYOHEHUA",
  "TLALHUAPLTZACTLI",
  "TLALOCAHUEHUETQUEH",
  "TLALTICPACAYOELEHUIA",
  "TLALTICPACAYOELEHUIANI",
  "TLALTICPACAYOELEHUILIZTLI",
  "TLALTICPAOUEHCATZINTLI",
  "TLALTZAUCXACUALOA",
  "TLALZAZALLCACUIHUAYAN",
  "TLAMACOUHQUI",
  "TLAMIMLLOLLOH",
  "TLAMLYAQUILIZTLI",
  "TLANACAHUAPAUHTLI",
  "TLANCECEPOHUA",
  "TLANCECEPOHUALIZTLI",
  "TLANCECEPOHUI",
  "TLANECOCITZTENTILLZTLI",
  "TLANEMATCACHLHUALIZTICA",
  "TLANETECHHUITEOUILIZTLI",
  "TLANETECHZALOLIZTLI",
  "TLANEXNOCHTLI",
  "TLANEXNOHPALLI",
  "TLANIEHUAYOTL",
  "TLANIICZA",
  "TLANITLCOYOYANTLI",
  "TLANNOCHEZHUIA",
  "TLANONONCUAMQUIXTILIZTICA",
  "TLANPEPLTLA",
  "TLAONCAYOTIA",
  "TLAONOC",
  "TLAONTLAMANTILILLI",
  "TLAOOLXAHUALLI",
  "TLAOXTLI",
  "TLAOZALLI",
  "TLAOZALONI",
  "TLAPACHIHUAZMATLAHUIA",
  "TLAPALEZCUAHUITL",
  "TLAPALEZPAHTLI",
  "TLAPALEZZO",
  "TLAPALIHHUIEHUATL",
  "TLAPCO",
  "TLAPCOPA",
  "TLAPOCHEUHQUI",
  "TLAPOCHEUHTLI",
  "TLAQUELYECOA",
  "TLATCILHUIA",
  "TLATCONI",
  "TLATENNONOTZANI",
  "TLATEPITZZOTL",
  "TLATEPOZIHCUILOLLI",
  "TLATEPOZILPIANI",
  "TLATETEUHTZLTZQUILIZTLI",
  "TLATETZOPQUI",
  "TLATEUHYOTLLIZTLI",
  "TLATHUI",
  "TLATHUILIA",
  "TLATHUILTIA",
  "TLATHUINAHUAC",
  "TLATHUIZTLI",
  "TLATLAPEUHCAINI",
  "TLATLAPIQUILHZONTLI",
  "TLATLAXIZTLI",
  "TLATZAUCHUAPAUHQUI",
  "TLATZAUCHUAPAUHTLI",
  "TLATZICUEUHTLI",
  "TLATZINQUIMILOLLL",
  "TLATZINTEPOZZOTILLI",
  "TLATZITZITZLI",
  "TLAUHOZA",
  "TLAXCECECNIQUIXTILIZTICA",
  "TLAXOCHIIHCUILOLLI",
  "TLAXQUIA",
  "TLAXQUITL",
  "TLAYOLLOHTLAHULLILOCATILILLI",
  "TLAZOHETL",
  "TLEAMANALLI",
  "TLEATOYATL",
  "TLECOAQUIA",
  "TLEIPAMPAN",
  "TLEOCO",
  "TLEOCUILIN",
  "TLEYOCUILIA",
  "TLEYOH",
  "TLEYOHUA",
  "TLEYOTIA",
  "TOCIHHIUITICA",
  "TOCZACATL",
  "TOLECYOH",
  "TOLEZYOH",
  "TOMPOXXOTL",
  "TOMYOLIN",
  "TONALIIXCOPA",
  "TOPCO",
  "TOPTANAHTLI",
  "TOPTEMA",
  "TOPTEMALONI",
  "TOPTEMILIA",
  "TOPTIA",
  "TOPTLI",
  "TOTOCULTLATL",
  "TOTOICXITL",
  "TOTOIHHUITL",
  "TOTOIXTLI",
  "TOXONTLNEMI",
  "TOZANMOLLI",
  "TOZCAOXIHUIA",
  "TZAHTZAPYOH",
  "TZAHTZIZTLEHUA",
  "TZAHUANITTZIN",
  "TZANAICXITL",
  "TZANAIHHUITL",
  "TZAPOICPALLI",
  "TZAPOICPALPAN",
  "TZAPTIC",
  "TZAPTLI",
  "TZAPTOPILLI",
  "TZECUINI",
  "TZICUEUHCA",
  "TZICUEUHCAYOTL",
  "TZICUILICXEH",
  "TZIHUACPETLATL",
  "TZINHUITZTIC",
  "TZINTEPOZZOTIA",
  "TZIPIPAHTLI",
  "TZIPITI",
  "TZIPITL",
  "TZOHCUILICXEHQUEH",
  "TZOIYAC",
  "TZOIYALILTLI",
  "TZOIYAYA",
  "TZOMOCQUIZA",
  "TZOMOCYEHYECOA",
  "TZONHUEYIYAQUILIA",
  "TZONMOLCATL",
  "TZONMOLCO",
  "TZOPELXIHUITL",
  "XAPOTTIHCAC",
  "XAQUIN",
  "XAQUINTZIN",
  "XECAN",
  "XEHXELOA",
  "XICMECAYOTL",
  "XICYECTOCA",
  "XIHUITLTEMOCTZIN",
  "XITTECOMATL",
  "XIUHQUILIPITZAHUAC",
  "XIUHTECZACATLAN",
  "XIUHTLALPILNACAZMINQUI",
  "XIUHTOTOEHUATL",
  "XIXITTEMOMOLOCA",
  "XIZO",
  "XOCHIAPANA",
  "XOCHIAQUIA",
  "XOCHIOCOTZOCUAHUITL",
  "XOCHIOCOTZONAMACAC",
  "XOCHIOCOTZOTL",
  "XOCHIOCUILIN",
  "XOCHIOLOLTZIN",
  "XOCHITEYYOH",
  "XOCOOCTLI",
  "XOCPALTZONTLL",
  "XOCUECUEPQUI",
  "XOHXOHLOYOH",
  "XOIHIYAUHTIC",
  "XOMALTANAHTLL",
  "XOMOIHHUIHUIPILLI",
  "XOMOIHHUITENTLAPALLOH",
  "XOMOIHHUITILMAHTLI",
  "XOMOIHHUITL",
  "XOPANZACAMOA",
  "XOQUIPOTOIHUI",
  "XOQUIXLIZTLI",
  "YACAHUITZXOCHITL",
  "YACATZAPTIA",
  "YACATZAPTIC",
  "YACATZAPTILIA",
  "YAOACALLI",
  "YAOANA",
  "YAOITACATL",
  "YAONAHUAC",
  "YAOOHTLI",
  "YAOXACALLI",
  "YECTLOOQUICHLI",
  "YECYOLLOH",
  "YECYOTICA",
  "YECYOTL",
  "YEHICA",
  "YEOLOTL",
  "YEPPA",
  "YEUCXOTON",
  "YEZQUIA",
  "YEZTLAQUENQUI",
  "YOHUALLAHTOANL",
  "YOLCUECUEPQUI",
  "YOLLOHXELOA",
  "YOTTOHUIA",
  "ZACIQUIN",
  "ZAZAHUANL",
  "ZEMPOALA",
  "ZIACATL",
  "ZOQUIAQUI",
  "ZOQUIAQUIA",
  "ZOQUIAZOLIN",
  "ZOQUITILIZTLL",
];

export default nahuatlSnWordsDict;
