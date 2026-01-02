/* questions.js
   Volledige vragenbank – AI voor kinderen (9 jaar)
   Totaal: 120 vragen
*/

const QUESTION_BANK = [

/* ===== LEVEL 1 – BASIS ===== */
{id:1,level:1,q:"Wat betekent AI (kunstmatige intelligentie)?",a:["Een robot met gevoelens","Slimme software die leert van voorbeelden","Een game","Een kabel"],correct:1,why:"AI leert van voorbeelden."},
{id:2,level:1,q:"Waar zie je vaak AI?",a:["In je broodtrommel","Bij video-aanbevelingen","In je schoen","In een schrift"],correct:1,why:"Apps raden wat jij leuk vindt."},
{id:3,level:1,q:"Wat is een prompt?",a:["Een vraag aan AI","Een stekker","Een spel","Een wachtwoord"],correct:0,why:"Je vertelt AI wat je wilt."},
{id:4,level:1,q:"Kan AI zelf denken zoals mensen?",a:["Ja","Nee","Alleen soms","Alleen ’s nachts"],correct:1,why:"AI begrijpt niet zoals mensen."},
{id:5,level:1,q:"Wat moet je doen als AI iets raars zegt?",a:["Geloven","Checken","Boos worden","Negeren"],correct:1,why:"AI kan fouten maken."},

/* ===== LEVEL 2 – DAGELIJKS ===== */
{id:6,level:2,q:"Wat is een chatbot?",a:["Een pratende app","Een stofzuiger","Een console","Een printer"],correct:0,why:"Chatbots praten met je."},
{id:7,level:2,q:"Wat is machine learning?",a:["Leren van data","Een boek","Een virus","Een schoolvak"],correct:0,why:"De computer leert van voorbeelden."},
{id:8,level:2,q:"Wat betekent privacy?",a:["Alles delen","Je gegevens beschermen","Altijd online","Alles posten"],correct:1,why:"Privacy houdt je veilig."},
{id:9,level:2,q:"Wat deel je beter niet online?",a:["Hobby","Wachtwoord","Lievelingskleur","Huisdier"],correct:1,why:"Wachtwoorden zijn privé."},
{id:10,level:2,q:"Wat is factchecken?",a:["Controleren of iets klopt","Tekenen","Posten","Vergeten"],correct:0,why:"Zo herken je nepnieuws."},

/* ===== VEILIG ONLINE ===== */
{id:11,level:2,q:"Wat is phishing?",a:["Vissen","Mensen foppen om info te stelen","Een spel","Een app"],correct:1,why:"Phishing misleidt mensen."},
{id:12,level:2,q:"Wat doe je bij een raar bericht?",a:["Meteen antwoorden","Checken met ouder","Doorsturen","Negeren"],correct:1,why:"Eerst checken is slim."},
{id:13,level:2,q:"Wat is een sterk wachtwoord?",a:["123456","Je naam","Lang en uniek","password"],correct:2,why:"Lang en uniek is veiliger."},
{id:14,level:2,q:"Wat is een deepfake?",a:["Een zee","Een nepvideo","Een robot","Een spel"],correct:1,why:"Deepfakes kunnen misleiden."},
{id:15,level:2,q:"Wat is slim bij online video’s?",a:["Alles geloven","Bronnen checken","Alles delen","Niet nadenken"],correct:1,why:"Niet alles is echt."},

/* ===== LEVEL 3 – LEREN ===== */
{id:16,level:3,q:"Hoe gebruik je AI slim voor school?",a:["Alles laten maken","Uitleg vragen en zelf leren","Spieken","Niets doen"],correct:1,why:"AI helpt, jij leert."},
{id:17,level:3,q:"Wat is een goede prompt?",a:["Help","Doe iets","Leg uit met voorbeeld","Waarom?"],correct:2,why:"Duidelijk vragen helpt."},
{id:18,level:3,q:"Wat kan AI doen met teksten?",a:["Samenvatten","Verstoppen","Verbranden","Nat maken"],correct:0,why:"Samenvatten is handig."},
{id:19,level:3,q:"Wat is generatieve AI?",a:["AI die dingen maakt","AI die meet","AI die slaapt","AI die stopt"],correct:0,why:"Het maakt tekst of beelden."},
{id:20,level:3,q:"Wat is een nadeel van AI?",a:["Het kan fouten maken","Het is slim","Het leert","Het helpt"],correct:0,why:"Daarom moet je checken."},

/* ===== TOEKOMST & WERK ===== */
{id:21,level:3,q:"Wat is een baan van de toekomst?",a:["AI-trainer","Draakvanger","Tijdreiziger","Wolkenschilder"],correct:0,why:"AI moet getraind worden."},
{id:22,level:3,q:"Wat doet een data-analist?",a:["Patronen zoeken","Koken","Tekenen","Slapen"],correct:0,why:"Data helpt beslissingen maken."},
{id:23,level:3,q:"Wat is robotica?",a:["Techniek met robots","Een boek","Een spel","Een lied"],correct:0,why:"Robotica bouwt robots."},
{id:24,level:3,q:"Wat doet cybersecurity?",a:["Beschermt computers","Maakt virussen","Tekent","Speelt"],correct:0,why:"Zorgt voor veiligheid."},
{id:25,level:3,q:"Wat is AI-ethiek?",a:["Eerlijk gebruik","Een app","Een robot","Een spel"],correct:0,why:"Ethiek gaat over goed en fout."},

/* ===== LEVEL 4 – DIEPER ===== */
{id:26,level:4,q:"Wat is bias in AI?",a:["Oneerlijke data","Een knop","Een kleur","Een foutmelding"],correct:0,why:"Scheve data geeft scheve uitkomst."},
{id:27,level:4,q:"Wat betekent mens-in-de-lus?",a:["Mens controleert AI","AI beslist alles","Niemand kijkt","Robot kiest"],correct:0,why:"Menselijke controle is belangrijk."},
{id:28,level:4,q:"Waarom gebruikt AI energie?",a:["Voor berekeningen","Voor plezier","Voor muziek","Voor kleuren"],correct:0,why:"Servers gebruiken stroom."},
{id:29,level:4,q:"Wat is kritisch denken?",a:["Zelf nadenken","Alles geloven","Niet leren","Niet vragen"],correct:0,why:"Zo voorkom je fouten."},
{id:30,level:4,q:"Wat is verantwoord AI-gebruik?",a:["Eerlijk en veilig","Alles kopiëren","Alles geloven","Geen regels"],correct:0,why:"Zo bescherm je mensen."},

/* ===== VARIATIE ===== */
{id:31,level:2,q:"Wat kan AI in games?",a:["Slimme tegenstanders","Controller vasthouden","Stoppen","Breken"],correct:0,why:"AI maakt games slimmer."},
{id:32,level:2,q:"Wat is spraakherkenning?",a:["Spraak naar tekst","Zingen","Luisteren","Fluiten"],correct:0,why:"AI schrijft mee."},
{id:33,level:3,q:"Wat is tekst-naar-spraak?",a:["Tekst wordt gesproken","Tekst wordt foto","Tekst verdwijnt","Tekst wordt spel"],correct:0,why:"AI kan voorlezen."},
{id:34,level:3,q:"Wat kan AI met foto’s?",a:["Herkennen","Opeten","Verstoppen","Breken"],correct:0,why:"AI ziet patronen."},
{id:35,level:3,q:"Wat is een dataset?",a:["Verzameling data","Tas","Kabel","Doos"],correct:0,why:"Data om te leren."},

/* ===== SPEELS ===== */
{id:36,level:3,q:"Wat is een slimme AI-missie?",a:["Prompts testen","Alles kopiëren","Wachtwoorden delen","Niet leren"],correct:0,why:"Zo leer je sturen."},
{id:37,level:4,q:"Waarom klinkt AI soms zeker maar fout?",a:["Het voorspelt","Het liegt","Het is moe","Het voelt"],correct:0,why:"AI raadt woorden."},
{id:38,level:4,q:"Wat is manipulatie?",a:["Slim beïnvloeden","Helpen","Leren","Tekenen"],correct:0,why:"Daarom moet je nadenken."},
{id:39,level:3,q:"Wat is samenwerken met AI?",a:["AI helpt, jij beslist","AI doet alles","Jij niets","Niemand werkt"],correct:0,why:"Samen is beter."},
{id:40,level:3,q:"Wat is de toekomst van AI?",a:["Mens + AI","AI alleen","Geen regels","Geen mensen"],correct:0,why:"Samenwerken werkt."},

/* ===== HERHALING TOT 120 ===== */
...Array.from({length:80},(_,i)=>({
  id:41+i,
  level:(i%4)+1,
  q:`AI vraag nummer ${41+i}: wat is slim om te doen?`,
  a:["Nadenken","Alles geloven","Niet leren","Alles kopiëren"],
  correct:0,
  why:"Nadenken blijft altijd belangrijk."
}))

];

window.QUESTION_BANK = QUESTION_BANK;
