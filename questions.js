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
   
{id:41,level:2,q:"Wat is een AI-assistent?",a:["Een digitale helper","Een fiets","Een boek","Een broodje"],correct:0,why:"Een AI-assistent helpt met taken zoals plannen of uitleg."},
{id:42,level:2,q:"Wat is een algoritme?",a:["Een stappenplan voor de computer","Een boterham","Een game","Een batterij"],correct:0,why:"Een algoritme is een reeks stappen die een computer volgt."},
{id:43,level:2,q:"Wat is een goede reden om AI te gebruiken?",a:["Om te leren met uitleg","Om te spieken","Om niks te doen","Om te liegen"],correct:0,why:"AI is handig als het je helpt beter te begrijpen."},
{id:44,level:2,q:"Wat kan AI doen in een vertaal-app?",a:["Talen vertalen","Je schoenen strikken","Je huis schilderen","Je bed opmaken"],correct:0,why:"AI kan zinnen vertalen en soms context begrijpen."},
{id:45,level:2,q:"Wat is een veilige keuze online?",a:["Je adres delen","Je wachtwoord delen","Met een ouder overleggen","Alles accepteren"],correct:2,why:"Als je twijfelt, vraag hulp aan een ouder."},

{id:46,level:3,q:"Wat is een deepfake vooral?",a:["Een nepvideo die echt lijkt","Een echte video","Een spel","Een soort muziek"],correct:0,why:"Deepfakes kunnen mensen misleiden."},
{id:47,level:3,q:"Wat is een slim antwoord als iemand online om je wachtwoord vraagt?",a:["Sturen","Niet geven","Op social zetten","Aan iedereen vertellen"],correct:1,why:"Wachtwoorden zijn privé en deel je nooit."},
{id:48,level:3,q:"Wat kan AI doen met een lange tekst?",a:["Samenvatten","Verbranden","Verstoppen","Nat maken"],correct:0,why:"Samenvatten is een bekende AI-taak."},
{id:49,level:3,q:"Wat is een goede manier om AI te gebruiken voor een werkstuk?",a:["Eerst een opzet maken en zelf schrijven","Alles kopiëren en plakken","Niks lezen","Alleen plaatjes zoeken"],correct:0,why:"Zo blijft het jouw werk en leer je echt."},
{id:50,level:3,q:"Wat is een dataset?",a:["Een verzameling voorbeelden/data","Een tas met boeken","Een gamelevel","Een wachtwoord"],correct:0,why:"AI leert vaak van veel voorbeelden samen."},

{id:51,level:2,q:"Wat betekent privacy?",a:["Je gegevens beschermen","Alles posten","Altijd chatten","Nooit lachen"],correct:0,why:"Privacy houdt je persoonlijke info veilig."},
{id:52,level:2,q:"Wat is een goede gewoonte bij nieuws online?",a:["Alles geloven","Bronnen checken","Meteen delen","Niet nadenken"],correct:1,why:"Checken helpt nepnieuws voorkomen."},
{id:53,level:2,q:"Wat is ‘aanbevelen’ op YouTube of TikTok?",a:["AI kiest wat jij misschien leuk vindt","Een vriend kiest","Niemand kiest","Je tv kiest"],correct:0,why:"Aanbevelingen gebruiken vaak AI."},
{id:54,level:3,q:"Waarom kan AI soms fouten maken?",a:["Omdat het voorspelt op basis van voorbeelden","Omdat het altijd liegt","Omdat het nooit leert","Omdat het emoties heeft"],correct:0,why:"AI voorspelt, het begrijpt niet zoals mensen."},
{id:55,level:3,q:"Wat is een goede vraag aan AI als je iets niet snapt?",a:["Leg het stap voor stap uit","Zeg alleen ja","Doe alsof het niet bestaat","Geef alleen het antwoord"],correct:0,why:"Stap voor stap helpt je leren."},

{id:56,level:3,q:"Wat is een baan waarbij je AI helpt eerlijk te blijven?",a:["AI-ethicus","Taartproever","Kleurenfluisteraar","Wolkenteller"],correct:0,why:"AI-ethiek gaat over eerlijk en veilig gebruik."},
{id:57,level:3,q:"Wat doet een cybersecurity-specialist?",a:["Beschermt tegen hackers en scams","Maakt virussen","Kijkt alleen films","Tekent plaatjes"],correct:0,why:"Cybersecurity gaat over veiligheid online."},
{id:58,level:3,q:"Wat is een goede manier om met AI te tekenen?",a:["AI geeft ideeën, jij kiest en tekent verder","AI tekent alles en jij doet niks","Alles kopiëren","Geen fantasie gebruiken"],correct:0,why:"Jij blijft de maker."},
{id:59,level:2,q:"Wat is een ‘AI-model’ simpel gezegd?",a:["Een getraind programma dat voorspelt","Een speelgoedauto","Een knuffel","Een boekenkast"],correct:0,why:"Een model maakt voorspellingen op basis van training."},
{id:60,level:4,q:"Waarom is ‘kritisch denken’ belangrijk met AI?",a:["Omdat je controleert of iets klopt","Omdat AI altijd gelijk heeft","Omdat je nooit hoeft te leren","Omdat AI boos wordt"],correct:0,why:"AI kan overtuigend klinken en toch fout zijn."},

{id:61,level:2,q:"Wat kan AI doen in een fotocamera-app?",a:["Gezichten of objecten herkennen","Je telefoon opladen","Je kleren wassen","Je huis bouwen"],correct:0,why:"AI kan helpen herkennen wat er in beeld is."},
{id:62,level:3,q:"Wat is eerlijk als je AI gebruikt voor school?",a:["Zeggen dat je AI gebruikte","Doen alsof jij alles bedacht","Alles kopiëren","Niet oefenen"],correct:0,why:"Eerlijkheid is belangrijk."},
{id:63,level:2,q:"Wat is een goede regel voor privéfoto’s?",a:["Altijd delen","Alleen met toestemming en veilig","Naar iedereen sturen","Op straat uitdelen"],correct:1,why:"Vraag toestemming en deel voorzichtig."},
{id:64,level:3,q:"Wat is ‘bias’ in kindertaal?",a:["Als AI oneerlijk is door scheve voorbeelden","Als AI sneller is","Als AI lacht","Als AI slaapt"],correct:0,why:"Scheve data kan oneerlijke AI maken."},
{id:65,level:2,q:"Wat betekent ‘data’?",a:["Informatie zoals woorden, cijfers of foto’s","Een deur","Een laptop","Een koekje"],correct:0,why:"AI leert van informatie (data)."},

{id:66,level:3,q:"Wat is een slimme keuze als AI een antwoord geeft op een belangrijke vraag?",a:["Nog een bron checken","Meteen geloven","Meteen posten","Nooit nadenken"],correct:0,why:"Belangrijke dingen controleer je extra."},
{id:67,level:2,q:"Wat is een ‘slimme robot’?",a:["Een robot die met sensoren en AI taken doet","Een pop","Een boek","Een stoel"],correct:0,why:"Robots kunnen AI gebruiken om zelfstandig te werken."},
{id:68,level:3,q:"Wat kan AI doen met muziek?",a:["Nieuwe melodieën maken","Je gitaar vasthouden","Je kamer opruimen","Je fiets repareren"],correct:0,why:"AI kan patronen in muziek gebruiken om iets nieuws te maken."},
{id:69,level:2,q:"Wat is een veilig antwoord op ‘stuur je adres’ online?",a:["Hier is het","Nee, dat deel ik niet","Zet het op TikTok","Vraag het aan mijn vrienden"],correct:1,why:"Je adres is privé."},
{id:70,level:4,q:"Wat betekent transparantie bij AI?",a:["Dat je kunt uitleggen hoe iets tot stand komt","Dat alles geheim is","Dat AI altijd gelijk heeft","Dat je nooit checkt"],correct:0,why:"Uitleg geeft vertrouwen."},

{id:71,level:3,q:"Wat is een goede manier om AI te gebruiken bij plannen?",a:["Taken en pauzes laten voorstellen","Alles laten beslissen","Nooit plannen","Alles vergeten"],correct:0,why:"AI kan helpen structuur te maken."},
{id:72,level:2,q:"Wat is een ‘recommendation’ (aanbeveling) in apps?",a:["Een tip gekozen door AI","Een koekje","Een sticker","Een lamp"],correct:0,why:"AI raadt content aan op basis van gedrag."},
{id:73,level:3,q:"Wat is een goede vraag aan AI voor een spreekbeurt?",a:["Geef een opzet met 5 punten en voorbeelden","Schrijf alles zonder dat ik lees","Doe maar wat","Zeg alleen het antwoord"],correct:0,why:"Een opzet helpt jou zelf te maken."},
{id:74,level:2,q:"Wat is een ‘virtuele assistent’?",a:["Een digitale helper die praat","Een huisdier","Een tv","Een fiets"],correct:0,why:"Voorbeelden zijn spraakassistenten en chatbots."},
{id:75,level:2,q:"Wat is een ‘scam’?",a:["Een truc om je te foppen","Een spelletje","Een schoolvak","Een tekenfilm"],correct:0,why:"Scams proberen je te misleiden voor geld of info."},

{id:76,level:3,q:"Wat doe je als iemand online je onder druk zet om iets te sturen?",a:["Sturen","Stoppen en hulp vragen","Alles openbaar maken","Meedoen"],correct:1,why:"Stop en vraag hulp aan een volwassene."},
{id:77,level:3,q:"Wat kan AI doen met plaatjes?",a:["Nieuwe plaatjes maken of herkennen","Papier scheuren","Kleurpotloden opeten","Je tv kapot maken"],correct:0,why:"AI kan beelden genereren en analyseren."},
{id:78,level:4,q:"Waarom is privacy belangrijk?",a:["Omdat je jezelf beschermt","Omdat het grappig is","Omdat AI dat wil","Omdat iedereen alles moet weten"],correct:0,why:"Privacy voorkomt misbruik."},
{id:79,level:2,q:"Wat is een ‘update’ in een app?",a:["Een nieuwe versie met verbeteringen","Een appel","Een sticker","Een jas"],correct:0,why:"Updates kunnen fouten fixen en beveiliging verbeteren."},
{id:80,level:3,q:"Wat is een goede regel voor apparaten?",a:["Updates installeren","Nooit updaten","Wachtwoorden delen","Alles uitzetten"],correct:0,why:"Updates maken het vaak veiliger."},

{id:81,level:3,q:"Wat kan AI doen in de zorg?",a:["Helpen met plannen en meten","Alles vervangen","Mensen ziek maken","Stoppen met werken"],correct:0,why:"AI ondersteunt mensen, vervangt ze niet zomaar."},
{id:82,level:2,q:"Wat betekent ‘persoonlijke gegevens’?",a:["Je naam, adres, school, telefoon","Je favoriete film","Een tekening","Een grap"],correct:0,why:"Persoonlijke info moet je beschermen."},
{id:83,level:3,q:"Wat is een goede manier om met AI te leren rekenen?",a:["Stap voor stap uitleg vragen","Alles laten maken zonder leren","Alleen gokken","Nooit oefenen"],correct:0,why:"Stap voor stap helpt echt leren."},
{id:84,level:2,q:"Wat is een ‘filter’ op foto’s?",a:["Een effect dat je foto verandert","Een fietsbel","Een boek","Een brood"],correct:0,why:"Filters kunnen AI gebruiken om beelden te veranderen."},
{id:85,level:3,q:"Wat is het risico van deepfakes?",a:["Dat je wordt misleid","Dat je sneller leert","Dat je beter tekent","Dat je tv groter wordt"],correct:0,why:"Deepfakes kunnen nepnieuws maken."},

{id:86,level:3,q:"Wat is een slimme gewoonte bij AI-antwoorden?",a:["Vragen: waarom? en hoe weet je dat?","Meteen geloven","Meteen posten","Nooit lezen"],correct:0,why:"Doorvragen helpt controleren."},
{id:87,level:2,q:"Wat is een ‘emoji’?",a:["Een klein plaatje dat gevoel toont","Een virus","Een wachtwoord","Een kabel"],correct:0,why:"Emoji’s zijn symbooltjes."},
{id:88,level:3,q:"Wat kan AI doen met taal?",a:["Vertalen en samenvatten","Koffie zetten","Schoenen maken","De deur openen"],correct:0,why:"AI kan taal verwerken."},
{id:89,level:4,q:"Waarom moet je AI niet alles laten beslissen?",a:["Omdat jij verantwoordelijk bent","Omdat AI altijd fout is","Omdat AI slaapt","Omdat regels niet bestaan"],correct:0,why:"Jij blijft verantwoordelijk."},
{id:90,level:2,q:"Wat is een ‘app’?",a:["Een programma op je telefoon","Een sok","Een stoel","Een jas"],correct:0,why:"Apps doen taken op je telefoon."},

{id:91,level:3,q:"Wat kan AI doen bij een routeplanner?",a:["Snelle route kiezen","Je fiets repareren","Je schoenen poetsen","Je raam wassen"],correct:0,why:"AI kan verkeer voorspellen."},
{id:92,level:2,q:"Wat is een ‘bot’ online?",a:["Automatisch account","Een vogel","Een boek","Een lamp"],correct:0,why:"Bots kunnen automatisch reageren."},
{id:93,level:3,q:"Wat is een goede actie als je denkt dat een account gehackt is?",a:["Wachtwoord veranderen","Alles delen","Niks doen","Wachtwoord doorsturen"],correct:0,why:"Verander wachtwoord en vraag hulp."},
{id:94,level:3,q:"Wat kan AI doen bij spelling?",a:["Helpen verbeteren","Je pen vasthouden","Je boek verscheuren","Je tafel verplaatsen"],correct:0,why:"AI kan spelling en grammatica checken."},
{id:95,level:2,q:"Wat is een ‘link’?",a:["Een klikbare verwijzing","Een koekje","Een potlood","Een jas"],correct:0,why:"Links brengen je naar een website."},

{id:96,level:4,q:"Waarom is het belangrijk dat AI eerlijk is?",a:["Omdat oneerlijke AI mensen kan benadelen","Omdat het sneller is","Omdat het mooier is","Omdat het grappig is"],correct:0,why:"Eerlijkheid beschermt mensen."},
{id:97,level:3,q:"Wat is een goede manier om AI te gebruiken bij creatief schrijven?",a:["Ideeën vragen en zelf schrijven","Alles kopiëren","Niks lezen","Alleen titels"],correct:0,why:"Jij bent de schrijver."},
{id:98,level:2,q:"Wat is een ‘instelling’ in een app?",a:["Een optie die je kunt aanpassen","Een koekje","Een schoen","Een deur"],correct:0,why:"Instellingen bepalen hoe iets werkt."},
{id:99,level:3,q:"Wat is een ‘AI-trainer’?",a:["Iemand die AI helpt leren","Iemand die voetbalt","Een robot","Een filmster"],correct:0,why:"Trainers geven goede voorbeelden."},
{id:100,level:4,q:"Wat betekent ‘controle’ bij AI?",a:["Checken of het klopt","Nooit kijken","Alles geloven","Alles delen"],correct:0,why:"Controle voorkomt fouten."},

{id:101,level:3,q:"Wat kan AI doen met een foto van een hond?",a:["Zeggen dat het een hond is","Het laten blaffen","Het voeren","Het wassen"],correct:0,why:"AI kan objecten herkennen."},
{id:102,level:2,q:"Wat betekent ‘online’?",a:["Verbonden met internet","In je broekzak","In de kast","Op papier"],correct:0,why:"Online = op internet."},
{id:103,level:3,q:"Wat is een goede regel voor social media?",a:["Denk na voordat je post","Post alles","Deel je adres","Deel wachtwoorden"],correct:0,why:"Posts kunnen lang blijven bestaan."},
{id:104,level:3,q:"Wat doe je als je een nepaccount ziet dat doet alsof jij het bent?",a:["Een volwassene vertellen en rapporteren","Niks doen","Het account betalen","Je wachtwoord sturen"],correct:0,why:"Meld het en vraag hulp."},
{id:105,level:2,q:"Wat is een ‘melding’ op je telefoon?",a:["Een berichtje of waarschuwing","Een boterham","Een potlood","Een jas"],correct:0,why:"Meldingen geven info."},

{id:106,level:4,q:"Waarom moet je opletten met AI-plaatjes die ‘echt’ lijken?",a:["Omdat het nep kan zijn","Omdat het altijd echt is","Omdat het je telefoon breekt","Omdat het lawaai maakt"],correct:0,why:"AI kan nepbeelden maken."},
{id:107,level:3,q:"Wat is een goede vraag aan AI als je iets wilt leren?",a:["Leg uit alsof ik 9 ben","Zeg alleen ja","Maak het moeilijk","Doe alsof"],correct:0,why:"Uitleg op niveau helpt."},
{id:108,level:2,q:"Wat is een ‘vriendenlijst’?",a:["Lijst met contacten","Een boodschappenlijst","Een lijst met sokken","Een lijst met stoelen"],correct:0,why:"Een lijst met mensen die jij kent online."},
{id:109,level:3,q:"Wat is een veilige reactie als iemand je online pest?",a:["Bewijs bewaren en hulp vragen","Terugpesten","Alles openbaar zetten","Alles geloven"],correct:0,why:"Vraag hulp en meld het."},
{id:110,level:4,q:"Waarom is het belangrijk om AI niet te gebruiken om te pesten?",a:["Omdat dat anderen pijn doet en fout is","Omdat het sneller gaat","Omdat het leuk is","Omdat niemand het merkt"],correct:0,why:"Pesten is nooit oké."},

{id:111,level:3,q:"Wat is een ‘AI-ontwikkelaar’?",a:["Iemand die AI bouwt","Iemand die alleen games speelt","Een robot","Een acteur"],correct:0,why:"Ontwikkelaars maken AI-systemen."},
{id:112,level:2,q:"Wat kan AI doen bij foto’s van gezichten?",a:["Gezichten herkennen","Mensen voelen","Mensen ouder maken echt","Mensen laten vliegen"],correct:0,why:"AI kan gezichten herkennen (met regels!)."},
{id:113,level:3,q:"Wat is een goede regel bij foto’s van anderen?",a:["Vraag toestemming","Post meteen","Stuur naar iedereen","Verkoop ze"],correct:0,why:"Toestemming is belangrijk."},
{id:114,level:4,q:"Wat betekent ‘verantwoordelijkheid’?",a:["Jij bent verantwoordelijk voor je keuzes","Altijd winnen","Nooit nadenken","Alles kopiëren"],correct:0,why:"Jij kiest wat je doet."},
{id:115,level:3,q:"Wat kan AI doen met taal in een spel?",a:["Verhalen en dialogen maken","Je controller opladen","Je stoel tillen","Je tv wassen"],correct:0,why:"AI kan teksten genereren."},

{id:116,level:2,q:"Wat is een ‘bug’?",a:["Een fout in software","Een insect","Een fiets","Een koekje"],correct:0,why:"Een bug is een foutje in code."},
{id:117,level:3,q:"Wat is een goede manier om AI te gebruiken bij rekenen?",a:["Laat stappen uitleggen","Laat alleen het antwoord geven","Stop met oefenen","Kopieer alles"],correct:0,why:"Stappen leren is belangrijk."},
{id:118,level:4,q:"Waarom is ‘uitleg’ bij AI belangrijk?",a:["Omdat je dan kunt begrijpen en checken","Omdat het sneller is","Omdat het saai is","Omdat het geheim is"],correct:0,why:"Uitleg helpt vertrouwen."},
{id:119,level:3,q:"Wat is een goede gewoonte voor je telefoon?",a:["Updates installeren","Wachtwoorden delen","Alles posten","Nooit updaten"],correct:0,why:"Updates maken veiliger."},
{id:120,level:4,q:"Wat is de beste regel voor AI en internet?",a:["Gebruik het slim, eerlijk en veilig","Geloof alles","Deel alles","Laat AI beslissen"],correct:0,why:"Slim, eerlijk en veilig is het beste."},



];

window.QUESTION_BANK = QUESTION_BANK;
