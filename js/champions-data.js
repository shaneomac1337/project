// League of Legends Champions Data with Selection Quotes
// Updated: 2025-05-24T06:32:39.611Z
// Total Champions: 170

const allChampions = [
  {
    "name": "Aatrox",
    "title": "Now, hear the silence of Annihilation",
    "description": "Kdysi ctěný obránce Shurimy, nyní je Aatrox jednou z největších hrozeb Runeterru.",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg",
    "difficulty": "Střední",
    "damage": "Vysoké",
    "survivability": "Střední",
    "roles": [
      "Top"
    ]
  },
  {
    "name": "Ahri",
    "title": "A clever fox is never caught.",
    "description": "Půvabná a smrtící mág, která svádí nepřátele před jejich zničením.",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_0.jpg",
    "difficulty": "Střední",
    "damage": "Vysoké",
    "survivability": "Nízká",
    "roles": [
      "Mid"
    ]
  },
  {
    "name": "Akali",
    "title": "Fear the assassin with no master.",
    "description": "Opustila Kinkou řád a nyní útočí sama, připravená být smrtící zbraní.",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Akali_0.jpg",
    "difficulty": "Vysoká",
    "damage": "Velmi vysoké",
    "survivability": "Nízká",
    "roles": [
      "Mid"
    ]
  },
  {
    "name": "Akshan",
    "title": "Fixing the world, one scoundrel at a time!",
    "description": "Bojuje proti zlu s okouzlujícím charismatem a spravedlivou pomstou.",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Akshan_0.jpg",
    "difficulty": "Střední",
    "damage": "Vysoké",
    "survivability": "Nízká",
    "roles": [
      "Mid"
    ]
  },
  {
    "name": "Alistar",
    "title": "Nothing can hold me back!",
    "description": "Vždy mocný válečník s obávanou pověstí, hledá pomstu za smrt svého klanu.",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Alistar_0.jpg",
    "difficulty": "Střední",
    "damage": "Nízké",
    "survivability": "Velmi vysoká",
    "roles": [
      "Support"
    ]
  },
  {
    "name": "Ambessa",
    "title": "Matriarch of War",
    "description": "Noxijská generálka, která ztělesňuje smrtící kombinaci bezohledné síly a nebojácné odhodlání.",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ambessa_0.jpg",
    "difficulty": "Velmi vysoká",
    "damage": "Vysoké",
    "survivability": "Nízká",
    "roles": [
      "Top"
    ]
  },
  {
    "name": "Amumu",
    "title": "I thought you'd never pick me.",
    "description": "Osamělá a melancholická duše ze starověké Shurimy, která hledá přítele.",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Amumu_0.jpg",
    "difficulty": "Nízká",
    "damage": "Střední",
    "survivability": "Vysoká",
    "roles": [
      "Jungle"
    ]
  },
  {
    "name": "Anivia",
    "title": "On my wings.",
    "description": "Benevolentní okřídlený duch, který snáší nekonečné cykly života a smrti.",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Anivia_0.jpg",
    "difficulty": "Velmi vysoká",
    "damage": "Velmi vysoké",
    "survivability": "Střední",
    "roles": [
      "Mid"
    ]
  },
  {
    "name": "Annie",
    "title": "You wanna play too? It'll be fun!",
    "description": "Nebezpečné, ale klamně nevinné dítě mág s obrovskou pyromantickou silou.",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Annie_0.jpg",
    "difficulty": "Střední",
    "damage": "Velmi vysoké",
    "survivability": "Nízká",
    "roles": [
      "Mid"
    ]
  },
  {
    "name": "Aphelios",
    "title": "So many weapons, Aphelios. The deadliest is your faith.",
    "description": "Vychází ze stínu měsíčního světla se zbraněmi v rukou, zabíjí nepřátele své víry.",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aphelios_0.jpg",
    "difficulty": "Velmi vysoká",
    "damage": "Velmi vysoké",
    "survivability": "Nízká",
    "roles": [
      "ADC"
    ]
  },
  {
    "name": "Ashe",
    "title": "All the world on one arrow.",
    "description": "Ledová válečná matka kmene Avarosan, ovládá nejpočetnější hordu na severu.",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ashe_0.jpg",
    "difficulty": "Střední",
    "damage": "Vysoké",
    "survivability": "Nízká",
    "roles": [
      "ADC"
    ]
  },
  {
    "name": "Aurelion Sol",
    "title": "The Star Forger",
    "description": "Kdysi zdobil prázdnotu kosmu nebeským divem vlastní tvorby.",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/AurelionSol_0.jpg",
    "difficulty": "Vysoká",
    "damage": "Vysoké",
    "survivability": "Střední",
    "roles": [
      "Mid"
    ]
  },
  {
    "name": "Aurora",
    "title": "See with eyes unclouded.",
    "description": "Naviguje životem s jedinečnou schopností pohybovat se mezi duchovní a materiální říší.",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aurora_0.jpg",
    "difficulty": "Střední",
    "damage": "Vysoké",
    "survivability": "Střední",
    "roles": [
      "Mid"
    ]
  },
  {
    "name": "Azir",
    "title": "Shurima! Your emperor has returned!",
    "description": "Smrtelný císař Shurimy ve vzdálené době, znovuzrozený jako Ascended.",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Azir_0.jpg",
    "difficulty": "Velmi vysoká",
    "damage": "Vysoké",
    "survivability": "Nízká",
    "roles": [
      "Mid"
    ]
  },
  {
    "name": "Bard",
    "title": "the Wandering Caretaker",
    "description": "Cestovatel z hvězd, agent náhody, který bojuje za udržení rovnováhy.",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Bard_0.jpg",
    "difficulty": "Velmi vysoká",
    "damage": "Střední",
    "survivability": "Střední",
    "roles": [
      "Support"
    ]
  },
  {
    "name": "Bel'Veth",
    "title": "I am the voice of the silence.",
    "description": "Noční můra císařovna vytvořená ze surového materiálu celého pohlceného města.",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Belveth_0.jpg",
    "difficulty": "Velmi vysoká",
    "damage": "Střední",
    "survivability": "Střední",
    "roles": [
      "Jungle"
    ]
  },
  {
    "name": "Blitzcrank",
    "title": "Fired up and ready to serve.",
    "description": "Obrovský, téměř nezničitelný automat z Zaunu.",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Blitzcrank_0.jpg",
    "difficulty": "Střední",
    "damage": "Střední",
    "survivability": "Vysoká",
    "roles": [
      "Support"
    ]
  },
  {
    "name": "Brand",
    "title": "Ready to set the world on fire? Heheheh...",
    "description": "Kdysi kmenový muž z ledového Freljordu, nyní ztělesnění ohnivé pomsty.",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Brand_0.jpg",
    "difficulty": "Střední",
    "damage": "Velmi vysoké",
    "survivability": "Nízká",
    "roles": [
      "Mid",
      "Support"
    ]
  },
  {
    "name": "Braum",
    "title": "The heart is the strongest muscle.",
    "description": "Požehnaný masivními bicepsy a ještě větším srdcem, milovaný hrdina Freljordu.",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Braum_0.jpg",
    "difficulty": "Nízká",
    "damage": "Nízké",
    "survivability": "Velmi vysoká",
    "roles": [
      "Support"
    ]
  },
  {
    "name": "Briar",
    "title": "Nice to meet you! I'm hungry. I mean... Briar!",
    "description": "Neúspěšný experiment Černé růže s nekontrolovatelnou žízní po krvi.",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Briar_0.jpg",
    "difficulty": "Nízká",
    "damage": "Vysoké",
    "survivability": "Střední",
    "roles": [
      "Jungle"
    ]
  },
  {
    "name": "Caitlyn",
    "title": "I'm on the case.",
    "description": "Proslulá jako nejlepší strážkyně míru, nejlepší střelkyně Piltoveru.",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Caitlyn_0.jpg",
    "difficulty": "Střední",
    "damage": "Vysoké",
    "survivability": "Nízká",
    "roles": [
      "ADC"
    ]
  },
  {
    "name": "Camille",
    "title": "Precision is the difference between a butcher and a surgeon.",
    "description": "Elegantní a elitní agentka, která zajišťuje hladký chod piltoverského stroje.",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Camille_0.jpg",
    "difficulty": "Střední",
    "damage": "Vysoké",
    "survivability": "Střední",
    "roles": [
      "Top"
    ]
  },
  {
    "name": "Cassiopeia",
    "title": "There is no antidote for me.",
    "description": "Smrtící tvor zaměřený na manipulaci ostatních ke své zlověstné vůli.",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Cassiopeia_0.jpg",
    "difficulty": "Velmi vysoká",
    "damage": "Velmi vysoké",
    "survivability": "Nízká",
    "roles": [
      "Mid"
    ]
  },
  {
    "name": "Cho'Gath",
    "title": "You'd wish the world you know to end! Yeeeesssss...",
    "description": "Dokonalé vyjádření touhy Prázdnoty pohltit veškerý život.",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Chogath_0.jpg",
    "difficulty": "Střední",
    "damage": "Střední",
    "survivability": "Velmi vysoká",
    "roles": [
      "Top"
    ]
  },
  {
    "name": "Corki",
    "title": "I'm up to snuff, and gots me an ace machine!",
    "description": "Yordle pilot, který miluje dvě věci: létání a svůj okouzlující knír.",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Corki_0.jpg",
    "difficulty": "Střední",
    "damage": "Vysoké",
    "survivability": "Střední",
    "roles": [
      "Mid",
      "ADC"
    ]
  },
  {
    "name": "Darius",
    "title": "They will regret opposing me.",
    "description": "Nejobávanější a nejzkušenější velitel Noxu, symbol noxijské moci.",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Darius_0.jpg",
    "difficulty": "Nízká",
    "damage": "Vysoké",
    "survivability": "Střední",
    "roles": [
      "Top"
    ]
  },
  {
    "name": "Diana",
    "title": "A new moon is rising.",
    "description": "Bojovnice Lunari, která bojuje jako ztělesnění síly stříbrného měsíce.",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Diana_0.jpg",
    "difficulty": "Střední",
    "damage": "Vysoké",
    "survivability": "Střední",
    "roles": [
      "Mid",
      "Jungle"
    ]
  },
  {
    "name": "Dr. Mundo",
    "title": "the Madman of Zaun",
    "description": "Naprosto šílený, tragicky vražedný a hrůzostrašně fialový doktor z Zaunu.",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/DrMundo_0.jpg",
    "difficulty": "Střední",
    "damage": "Střední",
    "survivability": "Velmi vysoká",
    "roles": [
      "Top"
    ]
  },
  {
    "name": "Draven",
    "title": "Welcome to the League of Draven.",
    "description": "V Noxu není válečník slavnější než Draven, mistr dramatických představení.",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Draven_0.jpg",
    "difficulty": "Vysoká",
    "damage": "Velmi vysoké",
    "survivability": "Nízká",
    "roles": [
      "ADC"
    ]
  },
  {
    "name": "Ekko",
    "title": "It's not how much time you have, it's how you use it.",
    "description": "Zázrak z drsných ulic Zaunu, který dokáže manipulovat čas.",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ekko_0.jpg",
    "difficulty": "Vysoká",
    "damage": "Vysoké",
    "survivability": "Střední",
    "roles": [
      "Mid",
      "Jungle"
    ]
  },
  {
    "name": "Elise",
    "title": "Only the spider is safe in her web.",
    "description": "Smrtící predátorka, která se může transformovat mezi lidskou a pavoučí formou.",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Elise_0.jpg",
    "difficulty": "Vysoká",
    "damage": "Vysoké",
    "survivability": "Nízká",
    "roles": [
      "Jungle"
    ]
  },
  {
    "name": "Evelynn",
    "title": "You know you want me.",
    "description": "Démon, který hledá svou další oběť v temných spárech Runeterru.",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Evelynn_0.jpg",
    "difficulty": "Velmi vysoká",
    "damage": "Velmi vysoké",
    "survivability": "Nízká",
    "roles": [
      "Jungle"
    ]
  },
  {
    "name": "Ezreal",
    "title": "Quest accepted! ...Wait, where are we going?",
    "description": "Odvážný dobrodruh, nevědomky nadaný v magických uměních.",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ezreal_0.jpg",
    "difficulty": "Střední",
    "damage": "Vysoké",
    "survivability": "Nízká",
    "roles": [
      "ADC"
    ]
  },
  {
    "name": "Fiddlesticks",
    "title": "the Ancient Fear",
    "description": "Pradávný strach, který se probouzí v Runeterru a živí se terorem.",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Fiddlesticks_0.jpg",
    "difficulty": "Vysoká",
    "damage": "Vysoké",
    "survivability": "Střední",
    "roles": [
      "Jungle"
    ]
  },
  {
    "name": "Fiora",
    "title": "I long for a worthy opponent.",
    "description": "Nejobávanější duelistka ve všem Valoranu, proslulá rychlostí své modré rapíru.",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Fiora_0.jpg",
    "difficulty": "Střední",
    "damage": "Vysoké",
    "survivability": "Střední",
    "roles": [
      "Top"
    ]
  },
  {
    "name": "Fizz",
    "title": "Let me at 'em!",
    "description": "Obojživelný yordle, který sídlí mezi útesy obklopujícími Bilgewater.",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Fizz_0.jpg",
    "difficulty": "Střední",
    "damage": "Velmi vysoké",
    "survivability": "Nízká",
    "roles": [
      "Mid"
    ]
  },
  {
    "name": "Galio",
    "title": "Time to make an impact!",
    "description": "Masivní golem vyřezaný z petricitu, který chrání Demacii.",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Galio_0.jpg",
    "difficulty": "Střední",
    "damage": "Střední",
    "survivability": "Velmi vysoká",
    "roles": [
      "Mid"
    ]
  },
  {
    "name": "Gangplank",
    "title": "Neither the flames nor the depths could claim me.",
    "description": "Bezohledný pirátský kapitán a nechvalně známý řezník z Bilgewateru.",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Gangplank_0.jpg",
    "difficulty": "Vysoká",
    "damage": "Vysoké",
    "survivability": "Střední",
    "roles": [
      "Top"
    ]
  },
  {
    "name": "Garen",
    "title": "My heart and sword always for Demacia.",
    "description": "Neochvějný válečník Demácie, který se nikdy necouvne před bojem za spravedlnost.",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Garen_0.jpg",
    "difficulty": "Nízká",
    "damage": "Střední",
    "survivability": "Vysoká",
    "roles": [
      "Top"
    ]
  },
  {
    "name": "Gnar",
    "title": "the Missing Link",
    "description": "Prehistorický yordle, který se může transformovat mezi malou a obří formou.",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Gnar_0.jpg",
    "difficulty": "Vysoká",
    "damage": "Střední",
    "survivability": "Střední",
    "roles": [
      "Top"
    ]
  },
  {
    "name": "Gragas",
    "title": "If you're buying, I'm in!",
    "description": "Masivní a impozantní muž s nekonečnou láskou k dobrému pití.",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Gragas_0.jpg",
    "difficulty": "Střední",
    "damage": "Vysoké",
    "survivability": "Vysoká",
    "roles": [
      "Jungle"
    ]
  },
  {
    "name": "Graves",
    "title": "Dead man walkin'.",
    "description": "Drsný střelec s brokovnicí, který se nebojí špinavé práce.",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Graves_0.jpg",
    "difficulty": "Střední",
    "damage": "Vysoké",
    "survivability": "Střední",
    "roles": [
      "Jungle"
    ]
  },
  {
    "name": "Gwen",
    "title": "the Hallowed Seamstress",
    "description": "Panenka, která ožila díky magii a nyní bojuje s posvěcenými nůžkami.",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Gwen_0.jpg",
    "difficulty": "Střední",
    "damage": "Vysoké",
    "survivability": "Střední",
    "roles": [
      "Top"
    ]
  },
  {
    "name": "Hecarim",
    "title": "Behold, the might of the Shadow Isles.",
    "description": "Stín války, centaur ze Stínových ostrovů poháněný věčnou touhou po válce.",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Hecarim_0.jpg",
    "difficulty": "Střední",
    "damage": "Vysoké",
    "survivability": "Střední",
    "roles": [
      "Jungle"
    ]
  },
  {
    "name": "Heimerdinger",
    "title": "Indeed, a wise choice.",
    "description": "Excentrický a obsedantní yordle vynálezce, který žije v Piltoveru.",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Heimerdinger_0.jpg",
    "difficulty": "Vysoká",
    "damage": "Vysoké",
    "survivability": "Nízká",
    "roles": [
      "Mid"
    ]
  },
  {
    "name": "Hwei",
    "title": "A painter meets their subject eye to eye.",
    "description": "Vizionář, který maluje svou magii štětcem naplněným emocemi.",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Hwei_0.jpg",
    "difficulty": "Velmi vysoká",
    "damage": "Velmi vysoké",
    "survivability": "Nízká",
    "roles": [
      "Mid"
    ]
  },
  {
    "name": "Illaoi",
    "title": "I'm not big on sermons—broken bones teach better lessons.",
    "description": "Kněžka Nagakabouros, která testuje duše smrtelníků svými chapadly.",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Illaoi_0.jpg",
    "difficulty": "Střední",
    "damage": "Vysoké",
    "survivability": "Střední",
    "roles": [
      "Top"
    ]
  },
  {
    "name": "Irelia",
    "title": "Fight for the First Lands!",
    "description": "Tanečnice čepelí, která ovládá levitující nože v boji za svobodu Ionie.",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Irelia_0.jpg",
    "difficulty": "Střední",
    "damage": "Vysoké",
    "survivability": "Střední",
    "roles": [
      "Top",
      "Mid"
    ]
  },
  {
    "name": "Ivern",
    "title": "My favorite color is spring.",
    "description": "Zelený otec, přítel lesa, který chrání džungli a její obyvatele.",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ivern_0.jpg",
    "difficulty": "Střední",
    "damage": "Nízké",
    "survivability": "Střední",
    "roles": [
      "Jungle"
    ]
  },
  {
    "name": "Janna",
    "title": "The tempest is at your command.",
    "description": "Zuřivost bouře, která chrání ty, kteří ji potřebují.",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Janna_0.jpg",
    "difficulty": "Střední",
    "damage": "Nízké",
    "survivability": "Nízká",
    "roles": [
      "Support"
    ]
  },
  {
    "name": "Jarvan IV",
    "title": "the Exemplar of Demacia",
    "description": "Vzor Demácie, princ, který vede své vojáky do boje.",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/JarvanIV_0.jpg",
    "difficulty": "Střední",
    "damage": "Střední",
    "survivability": "Střední",
    "roles": [
      "Jungle"
    ]
  },
  {
    "name": "Jax",
    "title": "Let's do this.",
    "description": "Mistr zbraní, který bojuje s lampou, protože skutečné zbraně by byly neférové.",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Jax_0.jpg",
    "difficulty": "Střední",
    "damage": "Vysoké",
    "survivability": "Střední",
    "roles": [
      "Top",
      "Jungle"
    ]
  },
  {
    "name": "Jayce",
    "title": "I fight for a brighter tomorrow.",
    "description": "Obránce zítřka s transformujícím se kladivem, které se mění mezi melee a ranged formou.",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Jayce_0.jpg",
    "difficulty": "Vysoká",
    "damage": "Vysoké",
    "survivability": "Nízká",
    "roles": [
      "Top",
      "Mid"
    ]
  },
  {
    "name": "Jhin",
    "title": "In carnage, I bloom, like a flower in the dawn.",
    "description": "Virtuos, který vidí vraždu jako umění a svou zbraň jako štětec.",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Jhin_0.jpg",
    "difficulty": "Střední",
    "damage": "Velmi vysoké",
    "survivability": "Nízká",
    "roles": [
      "ADC"
    ]
  },
  {
    "name": "Jinx",
    "title": "Rules are made to be broken... like buildings! Or people!",
    "description": "Šílená střelkyně z Zaunu, která miluje chaos a výbuchy.",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Jinx_0.jpg",
    "difficulty": "Střední",
    "damage": "Velmi vysoké",
    "survivability": "Velmi nízká",
    "roles": [
      "ADC"
    ]
  },
  {
    "name": "K'Sante",
    "title": "Better to fight, than to live in fear.",
    "description": "Pýcha Nazumahu, který bojuje s transformujícími se zbraněmi.",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/KSante_0.jpg",
    "difficulty": "Vysoká",
    "damage": "Střední",
    "survivability": "Vysoká",
    "roles": [
      "Top"
    ]
  },
  {
    "name": "Kai'Sa",
    "title": "Daughter of the Void",
    "description": "Dcera Prázdnoty, která přežila v nejnebezpečnějších místech Runeterru.",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Kaisa_0.jpg",
    "difficulty": "Střední",
    "damage": "Velmi vysoké",
    "survivability": "Nízká",
    "roles": [
      "ADC"
    ]
  },
  {
    "name": "Kalista",
    "title": "Death to all betrayers.",
    "description": "Kopí pomsty, nemrtvá válečnice hledající ty, kteří ji zradili.",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Kalista_0.jpg",
    "difficulty": "Velmi vysoká",
    "damage": "Vysoké",
    "survivability": "Nízká",
    "roles": [
      "ADC"
    ]
  },
  {
    "name": "Karma",
    "title": "Always trust your spirit.",
    "description": "Osvícená, která hledá rovnováhu mezi duchovním a materiálním světem.",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Karma_0.jpg",
    "difficulty": "Střední",
    "damage": "Střední",
    "survivability": "Nízká",
    "roles": [
      "Support"
    ]
  },
  {
    "name": "Karthus",
    "title": "Agony, ecstasy, peace. Every passing has a beauty all its own.",
    "description": "Zpěvák smrti, který může ovlivnit celou mapu svým ultimátem.",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Karthus_0.jpg",
    "difficulty": "Střední",
    "damage": "Velmi vysoké",
    "survivability": "Nízká",
    "roles": [
      "Jungle"
    ]
  },
  {
    "name": "Kassadin",
    "title": "The balance of power must be preserved.",
    "description": "Chodec prázdnoty, který se obětoval, aby zastavil Prázdnotu.",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Kassadin_0.jpg",
    "difficulty": "Střední",
    "damage": "Velmi vysoké",
    "survivability": "Střední",
    "roles": [
      "Mid"
    ]
  },
  {
    "name": "Katarina",
    "title": "Violence solves everything.",
    "description": "Zlověstná čepel, noxijská asasínka s neuvěřitelnou rychlostí.",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Katarina_0.jpg",
    "difficulty": "Střední",
    "damage": "Velmi vysoké",
    "survivability": "Nízká",
    "roles": [
      "Mid"
    ]
  },
  {
    "name": "Kayle",
    "title": "They shall tremble at my perfection.",
    "description": "Spravedlivá, která se vyvíjí během hry z melee do ranged formy.",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Kayle_0.jpg",
    "difficulty": "Střední",
    "damage": "Vysoké",
    "survivability": "Střední",
    "roles": [
      "Top"
    ]
  },
  {
    "name": "Kayn",
    "title": "the Shadow Reaper",
    "description": "Stínový žnec, který se může transformovat do dvou různých forem.",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Kayn_0.jpg",
    "difficulty": "Střední",
    "damage": "Vysoké",
    "survivability": "Střední",
    "roles": [
      "Jungle"
    ]
  },
  {
    "name": "Kennen",
    "title": "The eyes never lie.",
    "description": "Srdce bouře, yordle ninja ovládající sílu blesku.",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Kennen_0.jpg",
    "difficulty": "Střední",
    "damage": "Vysoké",
    "survivability": "Nízká",
    "roles": [
      "Top"
    ]
  },
  {
    "name": "Kha'Zix",
    "title": "Change... is good.",
    "description": "Trhač prázdnoty, který se vyvíjí a adaptuje během hry.",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Khazix_0.jpg",
    "difficulty": "Střední",
    "damage": "Velmi vysoké",
    "survivability": "Nízká",
    "roles": [
      "Jungle"
    ]
  },
  {
    "name": "Kindred",
    "title": "Never one...",
    "description": "Věční lovci, ztělesnění smrti v podobě vlka a beránka.",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Kindred_0.jpg",
    "difficulty": "Střední",
    "damage": "Vysoké",
    "survivability": "Nízká",
    "roles": [
      "Jungle"
    ]
  },
  {
    "name": "Kled",
    "title": "I find courage unpredictable. It's total insanity you can rely on!",
    "description": "Nevrlý jezdec na svém zbabělém ještěru Skaarl.",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Kled_0.jpg",
    "difficulty": "Střední",
    "damage": "Vysoké",
    "survivability": "Střední",
    "roles": [
      "Top"
    ]
  },
  {
    "name": "Kog'Maw",
    "title": "Time to feast!",
    "description": "Ústa propasti, tvor z Prázdnoty s nenasytnou chutí.",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/KogMaw_0.jpg",
    "difficulty": "Střední",
    "damage": "Velmi vysoké",
    "survivability": "Velmi nízká",
    "roles": [
      "ADC"
    ]
  },
  {
    "name": "LeBlanc",
    "title": "The Black Rose shall bloom once more.",
    "description": "Podvodnice, která manipuluje z stínů pomocí iluzí a klamů.",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Leblanc_0.jpg",
    "difficulty": "Vysoká",
    "damage": "Velmi vysoké",
    "survivability": "Nízká",
    "roles": [
      "Mid"
    ]
  },
  {
    "name": "Lee Sin",
    "title": "the Blind Monk",
    "description": "Slepý mnich, mistr bojových umění s neuvěřitelnou mobilitou.",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/LeeSin_0.jpg",
    "difficulty": "Vysoká",
    "damage": "Vysoké",
    "survivability": "Střední",
    "roles": [
      "Jungle"
    ]
  },
  {
    "name": "Leona",
    "title": "The dawn has arrived.",
    "description": "Zářivý úsvit, která bojuje jako ztělesnění síly slunce.",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Leona_0.jpg",
    "difficulty": "Nízká",
    "damage": "Nízké",
    "survivability": "Velmi vysoká",
    "roles": [
      "Support"
    ]
  },
  {
    "name": "Lillia",
    "title": "Me? A dream come true.",
    "description": "Stydlivý květ, magická faunka, která chrání sny lesa.",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lillia_0.jpg",
    "difficulty": "Střední",
    "damage": "Vysoké",
    "survivability": "Nízká",
    "roles": [
      "Jungle"
    ]
  },
  {
    "name": "Lissandra",
    "title": "I will bury the world in ice.",
    "description": "Ledová čarodějka, která ovládá pradávnou magii ledu.",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lissandra_0.jpg",
    "difficulty": "Střední",
    "damage": "Vysoké",
    "survivability": "Střední",
    "roles": [
      "Mid"
    ]
  },
  {
    "name": "Lucian",
    "title": "Everybody dies. Some just need a little help.",
    "description": "Očistitel, který bojuje proti temnotě se svými světelnými pistolemi.",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lucian_0.jpg",
    "difficulty": "Střední",
    "damage": "Vysoké",
    "survivability": "Nízká",
    "roles": [
      "ADC"
    ]
  },
  {
    "name": "Lulu",
    "title": "Pleased to meet you!",
    "description": "Víla čarodějka, yordle s magickými schopnostmi a nekonečnou energií.",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lulu_0.jpg",
    "difficulty": "Střední",
    "damage": "Střední",
    "survivability": "Nízká",
    "roles": [
      "Support"
    ]
  },
  {
    "name": "Lux",
    "title": "Let's light it up!",
    "description": "Dáma světelnosti, demacijska mágka ovládající sílu světla.",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lux_0.jpg",
    "difficulty": "Nízká",
    "damage": "Velmi vysoké",
    "survivability": "Nízká",
    "roles": [
      "Mid",
      "Support"
    ]
  },
  {
    "name": "Malphite",
    "title": "Shard of the Monolith",
    "description": "Úlomek monolitu, masivní kamenný golem.",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Malphite_0.jpg",
    "difficulty": "Nízká",
    "damage": "Střední",
    "survivability": "Velmi vysoká",
    "roles": [
      "Top"
    ]
  },
  {
    "name": "Malzahar",
    "title": "Oblivion awaits!",
    "description": "Prorok Prázdnoty, který hlásá příchod temné budoucnosti.",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Malzahar_0.jpg",
    "difficulty": "Nízká",
    "damage": "Vysoké",
    "survivability": "Nízká",
    "roles": [
      "Mid"
    ]
  },
  {
    "name": "Maokai",
    "title": "The Isles will bloom again!",
    "description": "Zkroucený treant, který chrání to, co zbylo z jeho lesa.",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Maokai_0.jpg",
    "difficulty": "Nízká",
    "damage": "Nízké",
    "survivability": "Velmi vysoká",
    "roles": [
      "Top",
      "Support"
    ]
  },
  {
    "name": "Master Yi",
    "title": "the Wuju Bladesman",
    "description": "Wuju šermíř, poslední mistr pradávného bojového umění.",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/MasterYi_0.jpg",
    "difficulty": "Střední",
    "damage": "Velmi vysoké",
    "survivability": "Nízká",
    "roles": [
      "Jungle"
    ]
  },
  {
    "name": "Milio",
    "title": "Stick with me! I'll keep you warm.",
    "description": "Jemný plamen, mladý mág ovládající léčivý oheň.",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Milio_0.jpg",
    "difficulty": "Střední",
    "damage": "Nízké",
    "survivability": "Nízká",
    "roles": [
      "Support"
    ]
  },
  {
    "name": "Miss Fortune",
    "title": "the Bounty Hunter",
    "description": "Lovkyně odměn, nejobávanější kapitánka Bilgewateru.",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/MissFortune_0.jpg",
    "difficulty": "Nízká",
    "damage": "Vysoké",
    "survivability": "Nízká",
    "roles": [
      "ADC"
    ]
  },
  {
    "name": "Mordekaiser",
    "title": "Destiny. Domination. Deceit.",
    "description": "Železný přízrak, který vládne říši smrti.",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Mordekaiser_0.jpg",
    "difficulty": "Střední",
    "damage": "Vysoké",
    "survivability": "Vysoká",
    "roles": [
      "Top"
    ]
  },
  {
    "name": "Morgana",
    "title": "I am bound, but I will not break.",
    "description": "Padlá, která se rozhodla zůstat na zemi a bojovat za smrtelníky.",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Morgana_0.jpg",
    "difficulty": "Nízká",
    "damage": "Střední",
    "survivability": "Nízká",
    "roles": [
      "Support"
    ]
  },
  {
    "name": "Naafiri",
    "title": "We give chase!",
    "description": "Pes sta kousnutí, darkinská smečka lovící jako jeden.",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Naafiri_0.jpg",
    "difficulty": "Střední",
    "damage": "Velmi vysoké",
    "survivability": "Střední",
    "roles": [
      "Mid"
    ]
  },
  {
    "name": "Nami",
    "title": "I decide what the tide will bring.",
    "description": "Volačka přílivu, vastayanka z hlubin oceánu.",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Nami_0.jpg",
    "difficulty": "Střední",
    "damage": "Střední",
    "survivability": "Nízká",
    "roles": [
      "Support"
    ]
  },
  {
    "name": "Nasus",
    "title": "The cycle of life and death continues. We will live, they will die.",
    "description": "Kurátor písků, Ascended strážce znalostí.",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Nasus_0.jpg",
    "difficulty": "Nízká",
    "damage": "Vysoké",
    "survivability": "Střední",
    "roles": [
      "Top"
    ]
  },
  {
    "name": "Nautilus",
    "title": "Beware the depths.",
    "description": "Titán hlubin, obrovský strážce oceánského dna.",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Nautilus_0.jpg",
    "difficulty": "Střední",
    "damage": "Střední",
    "survivability": "Velmi vysoká",
    "roles": [
      "Support"
    ]
  },
  {
    "name": "Neeko",
    "title": "Neeko is best decision!",
    "description": "Zvědavý chameleon, vastayanka, která se může měnit v podobu ostatních.",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Neeko_0.jpg",
    "difficulty": "Střední",
    "damage": "Vysoké",
    "survivability": "Nízká",
    "roles": [
      "Mid"
    ]
  },
  {
    "name": "Nidalee",
    "title": "The wild calls. I answer.",
    "description": "Zvířecí lovkyně, která se může transformovat mezi lidskou a pumí formou.",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Nidalee_0.jpg",
    "difficulty": "Vysoká",
    "damage": "Vysoké",
    "survivability": "Nízká",
    "roles": [
      "Jungle"
    ]
  },
  {
    "name": "Nilah",
    "title": "Joy, unceasing and forever!",
    "description": "Nespoutaná radost, která ovládá sílu démonů.",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Nilah_0.jpg",
    "difficulty": "Vysoká",
    "damage": "Vysoké",
    "survivability": "Střední",
    "roles": [
      "ADC"
    ]
  },
  {
    "name": "Nocturne",
    "title": "Embrace the darkness.",
    "description": "Věčná noční můra, démon, který se živí strachem a sny.",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Nocturne_0.jpg",
    "difficulty": "Střední",
    "damage": "Vysoké",
    "survivability": "Střední",
    "roles": [
      "Jungle"
    ]
  },
  {
    "name": "Nunu & Willump",
    "title": "the Boy and His Yeti",
    "description": "Chlapec a jeho yeti, nejlepší přátelé na dobrodružné cestě.",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Nunu_0.jpg",
    "difficulty": "Nízká",
    "damage": "Střední",
    "survivability": "Vysoká",
    "roles": [
      "Jungle"
    ]
  },
  {
    "name": "Olaf",
    "title": "Leave nothing behind!",
    "description": "Berserker z Freljordu, který hledá slavnou smrt v boji.",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Olaf_0.jpg",
    "difficulty": "Nízká",
    "damage": "Vysoké",
    "survivability": "Střední",
    "roles": [
      "Top",
      "Jungle"
    ]
  },
  {
    "name": "Orianna",
    "title": "We will kill your enemies. That will be fun.",
    "description": "Dáma hodinového stroje, mechanická tanečnice s kouzelnou koulí.",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Orianna_0.jpg",
    "difficulty": "Vysoká",
    "damage": "Vysoké",
    "survivability": "Nízká",
    "roles": [
      "Mid"
    ]
  },
  {
    "name": "Ornn",
    "title": "Fine, we go.",
    "description": "Oheň pod horou, polohbůh kovář z Freljordu.",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ornn_0.jpg",
    "difficulty": "Střední",
    "damage": "Střední",
    "survivability": "Velmi vysoká",
    "roles": [
      "Top"
    ]
  },
  {
    "name": "Pantheon",
    "title": "In battle, we are reborn.",
    "description": "Nezlomné kopí, smrtelník nesoucí sílu Aspektu války.",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Pantheon_0.jpg",
    "difficulty": "Střední",
    "damage": "Vysoké",
    "survivability": "Střední",
    "roles": [
      "Top",
      "Mid"
    ]
  },
  {
    "name": "Poppy",
    "title": "I'm no hero—just a Yordle with a hammer.",
    "description": "Strážkyně kladiva, yordle hledající pravého hrdinu.",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Poppy_0.jpg",
    "difficulty": "Střední",
    "damage": "Střední",
    "survivability": "Vysoká",
    "roles": [
      "Top",
      "Jungle"
    ]
  },
  {
    "name": "Pyke",
    "title": "Sink 'em all.",
    "description": "Řezník z Krvavého přístavu, který loví ty, kteří zneužívají slabé.",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Pyke_0.jpg",
    "difficulty": "Střední",
    "damage": "Vysoké",
    "survivability": "Nízká",
    "roles": [
      "Support"
    ]
  },
  {
    "name": "Qiyana",
    "title": "You may now appreciate me.",
    "description": "Císařovna živlů, která ovládá síly přírody svou čepelí.",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Qiyana_0.jpg",
    "difficulty": "Střední",
    "damage": "Velmi vysoké",
    "survivability": "Nízká",
    "roles": [
      "Mid"
    ]
  },
  {
    "name": "Quinn",
    "title": "Justice takes wing.",
    "description": "Křídla Demácie, průzkumnice s orlem Valorem.",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Quinn_0.jpg",
    "difficulty": "Střední",
    "damage": "Vysoké",
    "survivability": "Nízká",
    "roles": [
      "Top"
    ]
  },
  {
    "name": "Rakan",
    "title": "Let's dance.",
    "description": "Okouzlující, vastayan tanečník a partner Xayah.",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Rakan_0.jpg",
    "difficulty": "Střední",
    "damage": "Nízké",
    "survivability": "Střední",
    "roles": [
      "Support"
    ]
  },
  {
    "name": "Rammus",
    "title": "the Armordillo",
    "description": "Obrněný pásovec, enigmatická bytost ze Shurimy.",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Rammus_0.jpg",
    "difficulty": "Nízká",
    "damage": "Nízké",
    "survivability": "Velmi vysoká",
    "roles": [
      "Jungle"
    ]
  },
  {
    "name": "Rek'Sai",
    "title": "the Void Burrower",
    "description": "Hrabač prázdnoty, predátor, který loví pod povrchem Shurimy.",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/RekSai_0.jpg",
    "difficulty": "Střední",
    "damage": "Vysoké",
    "survivability": "Střední",
    "roles": [
      "Jungle"
    ]
  },
  {
    "name": "Rell",
    "title": "Nothing gets in, no one gets out.",
    "description": "Železná panna, která ovládá kov svou magií.",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Rell_0.jpg",
    "difficulty": "Vysoká",
    "damage": "Nízké",
    "survivability": "Velmi vysoká",
    "roles": [
      "Support"
    ]
  },
  {
    "name": "Renata Glasc",
    "title": "the Chem-Baroness",
    "description": "Chem-baronka, která ovládá Zaun svými chemickými inovacemi.",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/RenataGlasc_0.jpg",
    "difficulty": "Vysoká",
    "damage": "Střední",
    "survivability": "Nízká",
    "roles": [
      "Support"
    ]
  },
  {
    "name": "Renekton",
    "title": "As I live, all will die!",
    "description": "Řezník písků, Ascended krokodýl pohlcený vztekem.",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Renekton_0.jpg",
    "difficulty": "Střední",
    "damage": "Vysoké",
    "survivability": "Střední",
    "roles": [
      "Top"
    ]
  },
  {
    "name": "Rengar",
    "title": "Tonight, we hunt!",
    "description": "Lovec smečky, vastayan predátor hledající dokonalou kořist.",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Rengar_0.jpg",
    "difficulty": "Vysoká",
    "damage": "Vysoké",
    "survivability": "Nízká",
    "roles": [
      "Top",
      "Jungle"
    ]
  },
  {
    "name": "Riven",
    "title": "What is broken can be reforged.",
    "description": "Vyhnankyně, bývalá noxijská válečnice hledající vykoupení.",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Riven_0.jpg",
    "difficulty": "Vysoká",
    "damage": "Vysoké",
    "survivability": "Nízká",
    "roles": [
      "Top"
    ]
  },
  {
    "name": "Rumble",
    "title": "Let's get in the fight!",
    "description": "Mechanizovaná hrozba, yordle v bojovém mecha.",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Rumble_0.jpg",
    "difficulty": "Vysoká",
    "damage": "Vysoké",
    "survivability": "Nízká",
    "roles": [
      "Top"
    ]
  },
  {
    "name": "Ryze",
    "title": "A step ahead of cataclysm.",
    "description": "Runový mág, který hledá Světové runy, aby zabránil jejich zneužití.",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ryze_0.jpg",
    "difficulty": "Vysoká",
    "damage": "Vysoké",
    "survivability": "Střední",
    "roles": [
      "Mid"
    ]
  },
  {
    "name": "Samira",
    "title": "You want style? You've found her.",
    "description": "Pouštní růže, která kombinuje pistole a meč v smrtícím tanci.",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Samira_0.jpg",
    "difficulty": "Vysoká",
    "damage": "Velmi vysoké",
    "survivability": "Nízká",
    "roles": [
      "ADC"
    ]
  },
  {
    "name": "Sejuani",
    "title": "Trust nothing but your strength.",
    "description": "Zuřivost severu, válečná matka Zimních drápů.",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Sejuani_0.jpg",
    "difficulty": "Střední",
    "damage": "Střední",
    "survivability": "Velmi vysoká",
    "roles": [
      "Jungle"
    ]
  },
  {
    "name": "Senna",
    "title": "No one fights alone in the Mist.",
    "description": "Vykupitelka, která se vrátila ze Stínových ostrovů s novou silou.",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Senna_0.jpg",
    "difficulty": "Střední",
    "damage": "Vysoké",
    "survivability": "Nízká",
    "roles": [
      "Support"
    ]
  },
  {
    "name": "Seraphine",
    "title": "Let's change the world!",
    "description": "Zpěvačka s hvězdnýma očima, která spojuje Piltover a Zaun hudbou.",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Seraphine_0.jpg",
    "difficulty": "Nízká",
    "damage": "Střední",
    "survivability": "Nízká",
    "roles": [
      "Support"
    ]
  },
  {
    "name": "Sett",
    "title": "I'm undisputed.",
    "description": "Šéf, půl-vastayan bojovník z bojových arén Ionie.",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Sett_0.jpg",
    "difficulty": "Nízká",
    "damage": "Vysoké",
    "survivability": "Střední",
    "roles": [
      "Top"
    ]
  },
  {
    "name": "Shaco",
    "title": "How about a magic trick?",
    "description": "Démonský šašek, který terorizuje Runeterra svými kruty žerty.",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Shaco_0.jpg",
    "difficulty": "Vysoká",
    "damage": "Vysoké",
    "survivability": "Nízká",
    "roles": [
      "Jungle"
    ]
  },
  {
    "name": "Shen",
    "title": "A demonstration of superior judgement.",
    "description": "Oko soumraku, ninja strážce rovnováhy.",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Shen_0.jpg",
    "difficulty": "Střední",
    "damage": "Nízké",
    "survivability": "Velmi vysoká",
    "roles": [
      "Top"
    ]
  },
  {
    "name": "Shyvana",
    "title": "They are nothing before me.",
    "description": "Půl-drak, který se může transformovat do dračí formy.",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Shyvana_0.jpg",
    "difficulty": "Nízká",
    "damage": "Vysoké",
    "survivability": "Střední",
    "roles": [
      "Jungle"
    ]
  },
  {
    "name": "Singed",
    "title": "How about a drink?",
    "description": "Šílený chemik, který otravuje nepřátele svým jedem.",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Singed_0.jpg",
    "difficulty": "Vysoká",
    "damage": "Střední",
    "survivability": "Vysoká",
    "roles": [
      "Top"
    ]
  },
  {
    "name": "Sion",
    "title": "Rest is for the living.",
    "description": "Nemrtvý devastátor, oživený noxijský válečník.",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Sion_0.jpg",
    "difficulty": "Střední",
    "damage": "Střední",
    "survivability": "Velmi vysoká",
    "roles": [
      "Top"
    ]
  },
  {
    "name": "Sivir",
    "title": "I always take my toll; blood, or gold.",
    "description": "Válečná paní, žoldnéřka s bumerangovým štítem.",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Sivir_0.jpg",
    "difficulty": "Střední",
    "damage": "Vysoké",
    "survivability": "Nízká",
    "roles": [
      "ADC"
    ]
  },
  {
    "name": "Skarner",
    "title": "the Crystal Vanguard",
    "description": "Křišťálová předvoj, pradávný strážce ze Shurimy.",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Skarner_0.jpg",
    "difficulty": "Střední",
    "damage": "Střední",
    "survivability": "Vysoká",
    "roles": [
      "Jungle"
    ]
  },
  {
    "name": "Smolder",
    "title": "I bring the heat!",
    "description": "Ohnivé mládě, mladý drak s velkými ambicemi.",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Smolder_0.jpg",
    "difficulty": "Střední",
    "damage": "Vysoké",
    "survivability": "Nízká",
    "roles": [
      "ADC"
    ]
  },
  {
    "name": "Sona",
    "title": "What masterpiece shall we play today?",
    "description": "Mistrová strun, která komunikuje pouze prostřednictvím své hudby.",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Sona_0.jpg",
    "difficulty": "Nízká",
    "damage": "Střední",
    "survivability": "Velmi nízká",
    "roles": [
      "Support"
    ]
  },
  {
    "name": "Soraka",
    "title": "Let me guide you.",
    "description": "Hvězdné dítě, nebeská bytost, která se obětovala pro smrtelníky.",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Soraka_0.jpg",
    "difficulty": "Nízká",
    "damage": "Nízké",
    "survivability": "Nízká",
    "roles": [
      "Support"
    ]
  },
  {
    "name": "Swain",
    "title": "Fear the power you do not see.",
    "description": "Noxijský velký generál, který ovládá démony a vládne železnou rukou.",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Swain_0.jpg",
    "difficulty": "Střední",
    "damage": "Vysoké",
    "survivability": "Střední",
    "roles": [
      "Mid",
      "Support"
    ]
  },
  {
    "name": "Sylas",
    "title": "No more cages!",
    "description": "Nespoutaný, který dokáže ukrást ultimátní schopnosti nepřátel.",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Sylas_0.jpg",
    "difficulty": "Střední",
    "damage": "Vysoké",
    "survivability": "Střední",
    "roles": [
      "Mid"
    ]
  },
  {
    "name": "Syndra",
    "title": "So much untapped power!",
    "description": "Temná vládkyně s neomezenou magickou silou.",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Syndra_0.jpg",
    "difficulty": "Vysoká",
    "damage": "Velmi vysoké",
    "survivability": "Nízká",
    "roles": [
      "Mid"
    ]
  },
  {
    "name": "Tahm Kench",
    "title": "the River King",
    "description": "Říční král, démon, který sváděl smrtelníky po celé věky.",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/TahmKench_0.jpg",
    "difficulty": "Střední",
    "damage": "Střední",
    "survivability": "Velmi vysoká",
    "roles": [
      "Top",
      "Support"
    ]
  },
  {
    "name": "Taliyah",
    "title": "Know the loom. Be the stone.",
    "description": "Tkadlena kamene, mladá mágka ze Shurimy ovládající zemi.",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Taliyah_0.jpg",
    "difficulty": "Vysoká",
    "damage": "Vysoké",
    "survivability": "Nízká",
    "roles": [
      "Jungle"
    ]
  },
  {
    "name": "Talon",
    "title": "Live and die by the blade.",
    "description": "Stín čepele, noxijský asasín s neuvěřitelnou mobilitou.",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Talon_0.jpg",
    "difficulty": "Střední",
    "damage": "Velmi vysoké",
    "survivability": "Nízká",
    "roles": [
      "Mid"
    ]
  },
  {
    "name": "Taric",
    "title": "That glimmer of hope you see, that's me.",
    "description": "Štít Valoranu, který chrání nevinné svou neochvějnou vírou.",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Taric_0.jpg",
    "difficulty": "Střední",
    "damage": "Nízké",
    "survivability": "Velmi vysoká",
    "roles": [
      "Support"
    ]
  },
  {
    "name": "Teemo",
    "title": "Captain Teemo on duty.",
    "description": "Rychlý průzkumník, yordle s neochvějným smyslem pro morálku.",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Teemo_0.jpg",
    "difficulty": "Střední",
    "damage": "Střední",
    "survivability": "Nízká",
    "roles": [
      "Top"
    ]
  },
  {
    "name": "Thresh",
    "title": "What delightful agony we shall inflict.",
    "description": "Strážce řetězů, který sbírá duše ve svých lucernách.",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Thresh_0.jpg",
    "difficulty": "Vysoká",
    "damage": "Střední",
    "survivability": "Střední",
    "roles": [
      "Support"
    ]
  },
  {
    "name": "Tristana",
    "title": "Once a Bandle gunner, always a Bandle gunner!",
    "description": "Yordle střelkyně s obrovským kanónem a ještě větším srdcem.",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Tristana_0.jpg",
    "difficulty": "Střední",
    "damage": "Vysoké",
    "survivability": "Nízká",
    "roles": [
      "ADC"
    ]
  },
  {
    "name": "Trundle",
    "title": "Time to troll!",
    "description": "Král trollů, obrovský a lstivý troll s obzvláště zlomyslnou povahou.",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Trundle_0.jpg",
    "difficulty": "Střední",
    "damage": "Střední",
    "survivability": "Střední",
    "roles": [
      "Top",
      "Jungle"
    ]
  },
  {
    "name": "Tryndamere",
    "title": "This'll be a slaughter.",
    "description": "Barbarský král, poháněný nezkrotnou zuřivostí a vztekem.",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Tryndamere_0.jpg",
    "difficulty": "Střední",
    "damage": "Velmi vysoké",
    "survivability": "Střední",
    "roles": [
      "Top"
    ]
  },
  {
    "name": "Twisted Fate",
    "title": "the Card Master",
    "description": "Mistr karet, nechvalně známý podvodník a šejdíř.",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/TwistedFate_0.jpg",
    "difficulty": "Vysoká",
    "damage": "Vysoké",
    "survivability": "Nízká",
    "roles": [
      "Mid"
    ]
  },
  {
    "name": "Twitch",
    "title": "What doesn't kill you just isn't finished yet.",
    "description": "Morová krysa, která se skrývá ve stínech a útočí jedem.",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Twitch_0.jpg",
    "difficulty": "Vysoká",
    "damage": "Velmi vysoké",
    "survivability": "Velmi nízká",
    "roles": [
      "ADC"
    ]
  },
  {
    "name": "Udyr",
    "title": "the Spirit Walker",
    "description": "Duchovní chodec, který komunikuje se všemi duchy Freljordu.",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Udyr_0.jpg",
    "difficulty": "Střední",
    "damage": "Střední",
    "survivability": "Střední",
    "roles": [
      "Jungle"
    ]
  },
  {
    "name": "Urgot",
    "title": "You cannot know strength... Until you are broken.",
    "description": "Dreadnought, bývalý noxijský kat přeměněný v monstrum.",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Urgot_0.jpg",
    "difficulty": "Vysoká",
    "damage": "Vysoké",
    "survivability": "Střední",
    "roles": [
      "Top"
    ]
  },
  {
    "name": "Varus",
    "title": "The guilty will know agony.",
    "description": "Šíp odplaty, fúze dvou lovců a darkinské entity.",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Varus_0.jpg",
    "difficulty": "Střední",
    "damage": "Vysoké",
    "survivability": "Nízká",
    "roles": [
      "ADC"
    ]
  },
  {
    "name": "Vayne",
    "title": "Let us hunt those who have fallen to darkness.",
    "description": "Noční lovkyně, která loví monstra v temnotě.",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Vayne_0.jpg",
    "difficulty": "Vysoká",
    "damage": "Velmi vysoké",
    "survivability": "Velmi nízká",
    "roles": [
      "ADC"
    ]
  },
  {
    "name": "Veigar",
    "title": "Know that if the tables were turned, I would show you no mercy!",
    "description": "Malý mistr zla, nadšený mistr temné magie.",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Veigar_0.jpg",
    "difficulty": "Střední",
    "damage": "Velmi vysoké",
    "survivability": "Nízká",
    "roles": [
      "Mid"
    ]
  },
  {
    "name": "Vel'Koz",
    "title": "Knowledge through... disintegration.",
    "description": "Oko Prázdnoty, které hledá znalosti místo pouhého ničení.",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Velkoz_0.jpg",
    "difficulty": "Vysoká",
    "damage": "Velmi vysoké",
    "survivability": "Nízká",
    "roles": [
      "Mid",
      "Support"
    ]
  },
  {
    "name": "Vex",
    "title": "the Gloomist",
    "description": "Pesimistka, yordle s nekonečnou zásobou teenagerského vzdoru.",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Vex_0.jpg",
    "difficulty": "Střední",
    "damage": "Vysoké",
    "survivability": "Nízká",
    "roles": [
      "Mid"
    ]
  },
  {
    "name": "Vi",
    "title": "Punch first. Ask questions while punching.",
    "description": "Piltoverská vykonavatelka s obrovskými mechanickými rukavicemi.",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Vi_0.jpg",
    "difficulty": "Střední",
    "damage": "Vysoké",
    "survivability": "Střední",
    "roles": [
      "Jungle"
    ]
  },
  {
    "name": "Viego",
    "title": "Love ruins all.",
    "description": "Zkažený král, který způsobil magickou katastrofu zvanou Zkáza.",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Viego_0.jpg",
    "difficulty": "Střední",
    "damage": "Vysoké",
    "survivability": "Střední",
    "roles": [
      "Jungle"
    ]
  },
  {
    "name": "Viktor",
    "title": "Join the glorious evolution.",
    "description": "Herold tajemna, plně biomechanická evoluce své bývalé podoby.",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Viktor_0.jpg",
    "difficulty": "Vysoká",
    "damage": "Velmi vysoké",
    "survivability": "Nízká",
    "roles": [
      "Mid"
    ]
  },
  {
    "name": "Vladimir",
    "title": "The rivers will run red.",
    "description": "Krvavý žnec, upír s žízní po smrtelné krvi.",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Vladimir_0.jpg",
    "difficulty": "Střední",
    "damage": "Vysoké",
    "survivability": "Střední",
    "roles": [
      "Top",
      "Mid"
    ]
  },
  {
    "name": "Volibear",
    "title": "Feel the power of the wild.",
    "description": "Neúprosná bouře, polohbůh medvěd z Freljordu.",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Volibear_0.jpg",
    "difficulty": "Střední",
    "damage": "Střední",
    "survivability": "Střední",
    "roles": [
      "Top",
      "Jungle"
    ]
  },
  {
    "name": "Warwick",
    "title": "Blood runs... they all run.",
    "description": "Nespoutaný hněv Zaunu, monstrum lovící v šedých uličkách.",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Warwick_0.jpg",
    "difficulty": "Nízká",
    "damage": "Střední",
    "survivability": "Střední",
    "roles": [
      "Jungle"
    ]
  },
  {
    "name": "Xayah",
    "title": "I can never resist an invitation to dance.",
    "description": "Rebelka, vastayanka bojující za svobodu svého lidu.",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Xayah_0.jpg",
    "difficulty": "Střední",
    "damage": "Vysoké",
    "survivability": "Nízká",
    "roles": [
      "ADC"
    ]
  },
  {
    "name": "Xerath",
    "title": "I will be free.",
    "description": "Ascended mág starověké Shurimy, bytost arkánní energie.",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Xerath_0.jpg",
    "difficulty": "Vysoká",
    "damage": "Velmi vysoké",
    "survivability": "Nízká",
    "roles": [
      "Mid",
      "Support"
    ]
  },
  {
    "name": "Xin Zhao",
    "title": "the Seneschal of Demacia",
    "description": "Senešal Demácie, rozhodný válečník loajální vládnoucí dynastii.",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/XinZhao_0.jpg",
    "difficulty": "Nízká",
    "damage": "Střední",
    "survivability": "Střední",
    "roles": [
      "Jungle"
    ]
  },
  {
    "name": "Yasuo",
    "title": "Death is like the wind—always by my side.",
    "description": "Neodpuštěný, agilní šermíř, který ovládá vzduch proti svým nepřátelům.",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Yasuo_0.jpg",
    "difficulty": "Velmi vysoká",
    "damage": "Velmi vysoké",
    "survivability": "Nízká",
    "roles": [
      "Mid",
      "Top"
    ]
  },
  {
    "name": "Yone",
    "title": "One to cut, one to seal.",
    "description": "Nezapomenutý, v životě byl Yasuo polovičním bratrem.",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Yone_0.jpg",
    "difficulty": "Vysoká",
    "damage": "Velmi vysoké",
    "survivability": "Nízká",
    "roles": [
      "Mid"
    ]
  },
  {
    "name": "Yorick",
    "title": "Fear not... I will make use of your corpse.",
    "description": "Pastýř duší, poslední přeživší zapomenutého náboženského řádu.",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Yorick_0.jpg",
    "difficulty": "Střední",
    "damage": "Střední",
    "survivability": "Střední",
    "roles": [
      "Top"
    ]
  },
  {
    "name": "Yuumi",
    "title": "You and me, we got this!",
    "description": "Magická kočka, která cestuje s kouzelnou knihou.",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Yuumi_0.jpg",
    "difficulty": "Nízká",
    "damage": "Střední",
    "survivability": "Velmi nízká",
    "roles": [
      "Support"
    ]
  },
  {
    "name": "Zac",
    "title": "I was made for this... literally.",
    "description": "Tajná zbraň, produkt toxického úniku, který se vyvinul v myslící bytost.",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Zac_0.jpg",
    "difficulty": "Vysoká",
    "damage": "Střední",
    "survivability": "Velmi vysoká",
    "roles": [
      "Jungle"
    ]
  },
  {
    "name": "Zed",
    "title": "The unseen blade is the deadliest.",
    "description": "Mistr stínů, vůdce Řádu stínů, naprosto bezohledný a bez milosti.",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Zed_0.jpg",
    "difficulty": "Vysoká",
    "damage": "Velmi vysoké",
    "survivability": "Nízká",
    "roles": [
      "Mid"
    ]
  },
  {
    "name": "Zeri",
    "title": "A spark is all I need!",
    "description": "Jiskra Zaunu, která ovládá elektřinu svého těla.",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Zeri_0.jpg",
    "difficulty": "Vysoká",
    "damage": "Vysoké",
    "survivability": "Nízká",
    "roles": [
      "ADC"
    ]
  },
  {
    "name": "Ziggs",
    "title": "This'll be a blast!",
    "description": "Expert na hexplozívy, yordle s láskou k velkým bombám a krátkým doutnákům.",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ziggs_0.jpg",
    "difficulty": "Střední",
    "damage": "Velmi vysoké",
    "survivability": "Nízká",
    "roles": [
      "Mid"
    ]
  },
  {
    "name": "Zilean",
    "title": "the Chronokeeper",
    "description": "Strážce času, který se stal posedlý plynutím času.",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Zilean_0.jpg",
    "difficulty": "Střední",
    "damage": "Střední",
    "survivability": "Nízká",
    "roles": [
      "Support"
    ]
  },
  {
    "name": "Zoe",
    "title": "Yes! This'll be fun! Right?",
    "description": "Aspekt soumraku, kosmická poslíčka Targonu.",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Zoe_0.jpg",
    "difficulty": "Střední",
    "damage": "Velmi vysoké",
    "survivability": "Nízká",
    "roles": [
      "Mid"
    ]
  },
  {
    "name": "Zyra",
    "title": "Feel the thorns' embrace.",
    "description": "Vzestup trnů, hybrid rostliny a člověka s každým krokem zapalující nový život.",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Zyra_0.jpg",
    "difficulty": "Střední",
    "damage": "Vysoké",
    "survivability": "Nízká",
    "roles": [
      "Support"
    ]
  },
  {
    "name": "Mel",
    "title": "the Soul's Reflection",
    "description": "Duše odrazu, nejmocnější mágka Piltoveru, která ovládá sílu zlaté magie.",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Mel_0.jpg",
    "difficulty": "Střední",
    "damage": "Vysoké",
    "survivability": "Střední",
    "roles": [
      "Mid",
      "Support"
    ]
  },
  {
    "name": "Wukong",
    "title": "I will be the best.",
    "description": "Opičí král, vastayan trickster, který bojuje s rozšiřitelnou tyčí.",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/MonkeyKing_0.jpg",
    "difficulty": "Střední",
    "damage": "Vysoké",
    "survivability": "Střední",
    "roles": [
      "Top",
      "Jungle"
    ]
  }
];

// Export for Node.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { allChampions };
}