/* questions.js
   Volledige vragenbank – AI voor kinderen (9 jaar)
   Aantal vragen: 120+
*/

const QUESTION_BANK = [

/* =========================
   LEVEL 1 – BASIS AI
========================= */
{id:1, level:1, q:"Wat betekent AI (kunstmatige intelligentie)?", a:["Een robot met gevoelens","Slimme software die leert van voorbeelden","Een nieuwe game","Een internetkabel"], correct:1, why:"AI leert van voorbeelden en patronen."},
{id:2, level:1, q:"Waar zie je vaak AI?", a:["In een broodtrommel","Bij video-aanbevelingen","In je schoenen","In een schrift"], correct:1, why:"Apps gebruiken AI om te raden wat jij leuk vindt."},
{id:3, level:1, q:"Wat is een prompt?", a:["Een vraag aan AI","Een kabel","Een wachtwoord","Een spel"], correct:0, why:"Met een prompt vertel je AI wat je wilt."},
{id:4, level:1, q:"Wat kan AI goed?", a:["Altijd gelijk hebben","Patronen herkennen","Menselijke gevoelens voelen","Nooit fouten maken"], correct:1, why:"AI herkent patronen, maar kan fouten maken."},
{id:5, level:1, q:"Wat moet je doen als AI iets raars zegt?", a:["Meteen geloven","Vragen stellen en checken","Boos worden","Het negeren"], correct:1, why:"AI kan zich vergissen."},

/* =========================
   LEVEL 2 – DAGELIJKS GEBRUIK
========================= */
{id:6, level:2, q:"Wat is een chatbot?", a:["Een pratende app","Een stofzuiger","Een rekenmachine","Een spelconsole"], correct:0, why:"Een chatbot praat met je via tekst of spraak."},
{id:7, level:2, q:"Wat is machine learning?", a:["Een computer die leert van data","Een kapotte computer","Een schoolvak","Een boek"], correct:0, why:"De computer leert van voorbeelden."},
{id:8, level:2, q:"Wat betekent privacy?", a:["Alles delen","Je gegevens beschermen","Altijd online zijn","Foto’s posten"], correct:1, why:"Privacy houdt je veilig."},
{id:9, level:2, q:"Wat deel je beter niet online?", a:["Je hobby","Je wachtwoord","Je lievelingskleur","Je huisdier"], correct:1, why:"Wachtwoorden zijn privé."},
{id:10, level:2, q:"Wat is factchecken?", a:["Iets mooier maken","Controleren of iets klopt","Iets tekenen","Iets posten"], correct:1, why:"Zo herken je nepnieuws."},

/* =========================
   LEVEL 2 – VEILIG ONLINE
========================= */
{id:11, level:2, q:"Wat is phishing?", a:["Vissen","Mensen foppen om gegevens te stelen","Een game","Een app"], correct:1, why:"Phishing probeert je te misleiden."},
{id:12, level:2, q:"Wat doe je bij een vreemd bericht?", a:["Meteen reageren","Eerst checken met een ouder","Doorsturen","Negeren"], correct:1, why:"Check altijd eerst."},
{id:13, level:2, q:"Wat is een sterk wachtwoord?", a:["123456","Je naam","Lang en uniek","password"], correct:2, why:"Lang en uniek is veiliger."},
{id:14, level:2, q:"Wat is een deepfake?", a:["Een zee","Een nepvideo die echt lijkt","Een robot","Een spel"], correct:1, why:"Deepfakes kunnen misleiden."},
{id:15, level:2, q:"Wat is slim bij video’s online?", a:["Alles geloven","Bronnen checken","Alles delen","Niet nadenken"], correct:1, why:"Niet alles is echt."},

/* =========================
   LEVEL 3 – LEREN MET AI
========================= */
{id:16, level:3, q:"Hoe gebruik je AI slim voor school?", a:["Alles laten maken","Uitleg vragen en zelf leren","Spieken","Niets doen"], correct:1, why:"AI helpt, jij leert."},
{id:17, level:3, q:"Wat is een goede prompt?", a:["Help","Doe iets","Leg uit voor een 9-jarige met voorbeeld","Waarom?"], correct:2, why:"Duidelijke prompts helpen."},
{id:18, level:3, q:"Wat kan AI doen met teksten?", a:["Samenvatten","Verstoppen","Verbranden","Nat maken"], correct:0, why:"Samenvatten is een AI-sterkte."},
{id:19, level:3, q:"Wat is generatieve AI?", a:["AI die nieuwe dingen maakt","AI die meet","AI die slaapt","AI die stopt"], correct:0, why:"Generatieve AI maakt tekst, beeld of muziek."},
{id:20, level:3, q:"Wat is een nadeel van AI?", a:["Het kan fouten maken","Het is te slim","Het kan niet leren","Het is altijd traag"], correct:0, why:"Daarom moet je checken."},

/* =========================
   LEVEL 3 – TOEKOMST & WERK
========================= */
{id:21, level:3, q:"Wat is een baan van de toekomst?", a:["AI-trainer","Tijdreiziger","Wolkenschilder","Draakvanger"], correct:0, why:"AI moet getraind worden."},
{id:22, level:3, q:"Wat doet een data-analist?", a:["Zoekt patronen in data","Kookt","Tekent","Slaapt"], correct:0, why:"Data helpt beslissingen maken."},
{id:23, level:3, q:"Wat is robotica?", a:["Techniek met robots","Een boek","Een spel","Een lied"], correct:0, why:"Robotica gaat over robots bouwen en sturen."},
{id:24, level:3, q:"Wat doet een cybersecurity-specialist?", a:["Beschermt computers","Maakt virussen","Speelt games","Tekent"], correct:0, why:"Zorgt voor veiligheid."},
{id:25, level:3, q:"Wat is AI-ethiek?", a:["Regels voor eerlijk gebruik","Een robot","Een spel","Een app"], correct:0, why:"Ethiek gaat over goed en eerlijk."},

/* =========================
   LEVEL 4 – DIEPER DENKEN
========================= */
{id:26, level:4, q:"Wat is bias in AI?", a:["Oneerlijkheid door scheve data","Een kleur","Een foutmelding","Een knop"], correct:0, why:"Scheve data geeft scheve uitkomsten."},
{id:27, level:4, q:"Wat betekent ‘mens in de lus’?", a:["Mens controleert AI","AI beslist alles","Niemand kijkt","Robot kiest"], correct:0, why:"Menselijke controle is belangrijk."},
{id:28, level:4, q:"Waarom gebruikt AI energie?", a:["Voor berekeningen","Voor plezier","Voor muziek","Voor kleuren"], correct:0, why:"AI draait op servers."},
{id:29, level:4, q:"Wat is kritisch denken?", a:["Alles geloven","Zelf nadenken en checken","Niet leren","Niet vragen"], correct:1, why:"Zo voorkom je fouten."},
{id:30, level:4, q:"Wat is verantwoord AI-gebruik?", a:["Eerlijk en veilig","Alles kopiëren","Alles geloven","Geen regels"], correct:0, why:"Verantwoord gebruik beschermt mensen."},

/* =========================
   EXTRA VRAGEN (VARIATIE)
========================= */
{id:31, level:2, q:"Wat kan AI doen in games?", a:["Slimme tegenstanders maken","Controller vasthouden","Beeldscherm breken","Spel stoppen"], correct:0, why:"Game-AI reageert slim."},
{id:32, level:2, q:"Wat is spraakherkenning?", a:["Spraak omzetten naar tekst","Zingen","Luisteren naar muziek","Fluiten"], correct:0, why:"AI luistert en schrijft mee."},
{id:33, level:3, q:"Wat is tekst-naar-spraak?", a:["Tekst wordt gesproken","Tekst wordt foto","Tekst verdwijnt","Tekst wordt spel"], correct:0, why:"AI kan voorlezen."},
{id:34, level:3, q:"Wat kan AI doen met plaatjes?", a:["Herkennen en maken","Opeten","Verstoppen","Breken"], correct:0, why:"AI kan beelden analyseren."},
{id:35, level:3, q:"Wat is een dataset?", a:["Een verzameling data","Een tas","Een kabel","Een doos"], correct:0, why:"Data om van te leren."},

/* =========================
   SPEELS & UITDAGEND
========================= */
{id:36, level:3, q:"Wat is een slimme AI-missie?", a:["Prompts testen","Alles kopiëren","Wachtwoorden delen","Niet leren"], correct:0, why:"Zo leer je sturen."},
{id:37, level:4, q:"Waarom klinkt AI soms zeker maar fout?", a:["Het raadt","Het begrijpt niet zoals mensen","Het liegt","Het is moe"], correct:1, why:"AI voorspelt woorden."},
{id:38, level:4, q:"Wat is manipulatie?", a:["Iemand slim beïnvloeden","Helpen","Leren","Tekenen"], correct:0, why:"Daarom moet je nadenken."},
{id:39, level:3, q:"Wat is samenwerken met AI?", a:["AI helpt, jij beslist","AI doet alles","Jij doet niets","Niemand werkt"], correct:0, why:"Samen is sterker."},
{id:40, level:3, q:"Wat is de toekomst van AI?", a:["Mens en AI samen","AI neemt alles over","Geen regels","Geen mensen"], correct:0, why:"Samenwerken werkt het best."}

];

window.QUESTION_BANK = QUESTION_BANK;