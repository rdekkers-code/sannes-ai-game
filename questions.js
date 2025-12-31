<script>
/* Sanne's AI vragenkist: 120 vragen
   Structuur: { id, q, a: [..], correct, why, level }
*/
const QUESTION_BANK = [
  // Level Starter (1)
  {id:1, level:1, q:"Wat betekent AI (kunstmatige intelligentie) het beste?", a:["Een robot met gevoelens","Slimme software die patronen leert","Een nieuwe soort batterij","Een internetkabel"], correct:1, why:"AI is software die leert van voorbeelden en patronen herkent."},
  {id:2, level:1, q:"Welke is een voorbeeld van AI die je vaak gebruikt?", a:["Een papieren kaart","Een rekenmachine uit 1990","Aanbevelingen op YouTube of Netflix","Een broodrooster"], correct:2, why:"Aanbevelingen worden vaak gemaakt met modellen die leren wat jij leuk vindt."},
  {id:3, level:1, q:"Wat is een 'prompt' bij AI?", a:["Een soort stekker","Een vraag of opdracht aan AI","Een geheime code om te hacken","Een videogame cheat"], correct:1, why:"Een prompt is wat jij intypt of zegt om AI te laten helpen."},
  {id:4, level:1, q:"Wat is meestal slimmer om te doen als je AI iets vraagt?", a:["Zeg zo weinig mogelijk","Heel vaag blijven","Duidelijk vertellen wat je wil en voor wie","Alleen hoofdletters gebruiken"], correct:2, why:"Hoe duidelijker jij bent, hoe beter de output meestal wordt."},
  {id:5, level:1, q:"Wat kan AI goed?", a:["Altijd de toekomst voorspellen","Patronen herkennen in tekst, beeld of geluid","Altijd eerlijk zijn","Nooit fouten maken"], correct:1, why:"AI is goed in herkennen en maken op basis van patronen, maar kan fouten maken."},
  {id:6, level:1, q:"Wat kan AI niet betrouwbaar?", a:["Sommen controleren","Verhalen verzinnen","100% zeker weten wat waar is zonder bron","Een foto beschrijven"], correct:2, why:"AI kan zich vergissen en soms dingen verzinnen. Controleer belangrijke info."},
  {id:7, level:1, q:"Wat is privacy?", a:["Je wachtwoord met iedereen delen","Jouw persoonlijke informatie beschermen","Altijd alles filmen","Alles online zetten"], correct:1, why:"Privacy gaat over jouw gegevens en wie die mag zien."},
  {id:8, level:1, q:"Welke info deel je beter NIET met een chatbot?", a:["Je favoriete kleur","Je adres en wachtwoorden","Je lievelingsdier","Je hobby"], correct:1, why:"Adres en wachtwoorden zijn privé en horen niet in chats."},
  {id:9, level:1, q:"Wat is een algoritme?", a:["Een soort pizza","Een stappenplan dat iets uitrekent","Een robotarm","Een gamelevel"], correct:1, why:"Een algoritme is een reeks stappen om een taak uit te voeren."},
  {id:10, level:1, q:"Wat is machine learning?", a:["Een computer die leert van voorbeelden","Een printer die sneller wordt","Een muis die kan praten","Een telefoon die nat mag worden"], correct:0, why:"Machine learning leert van data om beter te worden in een taak."},

  // Bekende AI en tools (level 2)
  {id:11, level:2, q:"Welke taak past het meest bij een tekst-AI?", a:["Boterham smeren","Tekst samenvatten","Auto wassen","Een plant water geven"], correct:1, why:"Tekst-AI is goed in taal: samenvatten, uitleggen, schrijven."},
  {id:12, level:2, q:"Wat doet beeldherkenning-AI?", a:["Zet muziek harder","Herken objecten op foto’s","Maakt je huis schoon","Maakt popcorn"], correct:1, why:"Beeldherkenning kan bijvoorbeeld katten, gezichten of verkeersborden herkennen."},
  {id:13, level:2, q:"Wat is een deepfake?", a:["Een superdiepe zee","Een nepvideo die echt lijkt","Een extra sterke batterij","Een nieuwe sport"], correct:1, why:"Deepfakes kunnen gezichten en stemmen namaken. Oppassen met wat je gelooft."},
  {id:14, level:2, q:"Wat is slim als je een deepfake vermoedt?", a:["Meteen doorsturen","Bron controleren en meerdere sites checken","Gelijk geloven","Je wachtwoord posten"], correct:1, why:"Check betrouwbare bronnen en zoek of anderen het ook melden."},
  {id:15, level:2, q:"Waarom gebruiken sommige scholen AI met regels?", a:["Omdat AI altijd gelijk heeft","Omdat leerlingen dan niet meer hoeven leren","Om eerlijkheid en leren te beschermen","Omdat AI verboden is op internet"], correct:2, why:"AI kan helpen, maar je moet zelf blijven begrijpen en eerlijk werken."},
  {id:16, level:2, q:"Wat is het verschil tussen 'data' en 'informatie'?", a:["Geen verschil","Data zijn losse feiten, info is uitgelegd en betekenisvol","Info is altijd geheim","Data zijn alleen foto’s"], correct:1, why:"Data is ruwe input. Informatie is data met betekenis."},
  {id:17, level:2, q:"Welke is een goede prompt?", a:["Maak iets","Schrijf een grappig verhaaltje","Schrijf een grappig verhaaltje van 200 woorden over een kat die naar de maan gaat, voor 9 jaar","Kat maan"], correct:2, why:"Duidelijk: lengte, onderwerp en doelgroep helpen."},
  {id:18, level:2, q:"Wat betekent 'hallucinatie' bij AI?", a:["AI ziet spoken","AI verzint soms overtuigend iets dat niet klopt","AI wordt ziek","AI wordt sneller"], correct:1, why:"AI kan foutief maar zelfverzekerd antwoorden. Daarom controleren."},
  {id:19, level:2, q:"Wat is een chatbot?", a:["Een praatrobot in tekst of spraak","Een soort skateboard","Een vaatwasser","Een schooltas"], correct:0, why:"Chatbots praten met je via tekst of spraak."},
  {id:20, level:2, q:"Wat is een goed voorbeeld van AI in een telefoon?", a:["Trilfunctie","Camera die gezichten herkent","Zaklamp","Koptelefoon"], correct:1, why:"Gezichtsherkenning en slimme fotoverbetering gebruiken vaak AI."},

  // Veiligheid en slim gebruik (level 2)
  {id:21, level:2, q:"Je krijgt een bericht: 'Ik ben je juf, stuur je wachtwoord'. Wat doe je?", a:["Wachtwoord sturen","Niet sturen, eerst met ouder/juf checken","Iedereen taggen","Nog een wachtwoord bedenken en sturen"], correct:1, why:"Nooit wachtwoorden delen. Check altijd via een veilige manier."},
  {id:22, level:2, q:"Wat is phishing?", a:["Vissen met een hengel","Iemand probeert je te foppen om info te stelen","Een soort app om te tekenen","Een energiedrank"], correct:1, why:"Phishing probeert je te lokken naar nepwebsites of berichten."},
  {id:23, level:2, q:"Wat is een sterk wachtwoord?", a:["sanne123","123456","Lang, uniek, met woorden of tekens","Je voornaam"], correct:2, why:"Sterk is lang en uniek. Gebruik het liefst een wachtwoordmanager."},
  {id:24, level:2, q:"Wat doe je met privéfoto’s?", a:["Altijd openbaar zetten","Alleen delen met mensen die je vertrouwt","Op elk forum posten","Naar vreemden sturen"], correct:1, why:"Denk na: eenmaal online kan het blijven rondgaan."},
  {id:25, level:2, q:"Wat is 'bronvermelding'?", a:["Een waterbron","Zeggen waar je info vandaan komt","Een geheime code","Een sticker op je laptop"], correct:1, why:"Je noemt de bron zodat anderen kunnen controleren."},

  // Toekomst en werk (level 3)
  {id:26, level:3, q:"Welke baan kan door AI veranderen?", a:["Alleen astronaut","Bijna alle banen een beetje","Alleen bakker","Geen enkele baan"], correct:1, why:"AI kan veel taken ondersteunen. Mensen blijven nodig, maar werk verandert."},
  {id:27, level:3, q:"Wat is een baan van de toekomst?", a:["AI-trainer die AI leert met voorbeelden","Wolkenblaas-specialist","Luchtkasteelbouwer","Tijdreiziger"], correct:0, why:"AI-trainers en data-rollen bestaan nu al en groeien."},
  {id:28, level:3, q:"Wat doet een data-analist?", a:["Speelt alleen games","Kijkt naar data en vindt patronen","Maakt pannenkoeken","Schrijft sprookjes per se"], correct:1, why:"Data-analisten helpen beslissen door data te begrijpen."},
  {id:29, level:3, q:"Wat doet een AI-ethicus?", a:["Bepaalt of AI eerlijk en veilig is","Maakt AI sneller","Verkoopt robots","Test snoep"], correct:0, why:"Ethiek gaat over wat goed en eerlijk is voor mensen."},
  {id:30, level:3, q:"Wat betekent 'bias' bij AI?", a:["AI heeft dorst","AI kan oneerlijk worden door scheve data","AI wordt blauw","AI gaat stuk"], correct:1, why:"Als de data niet eerlijk verdeeld is, kan AI oneerlijke uitkomsten geven."},

  // Creatief met AI (level 3)
  {id:31, level:3, q:"Hoe kan Sanne AI gebruiken voor school?", a:["Huiswerk overschrijven zonder lezen","Uitleg vragen met voorbeelden en zelf controleren","Antwoorden stelen","Cijfers veranderen"], correct:1, why:"AI is een tutor, maar jij blijft de leerling die het snapt."},
  {id:32, level:3, q:"Wat is een slimme manier om te leren met AI?", a:["Vraag om 3 voorbeelden en 1 oefenvraag","Vraag alleen het eindantwoord","Vraag om iets in geheimtaal","Vraag om vals te spelen"], correct:0, why:"Voorbeelden en oefenvragen helpen je echt leren."},
  {id:33, level:3, q:"Welke prompt helpt bij een presentatie?", a:["Maak presentatie","Geef 5 slide-titels over AI voor kinderen met 2 bullets per slide","AI slides nu","Help"], correct:1, why:"Specifiek vragen geeft bruikbare structuur."},
  {id:34, level:3, q:"Wat is generatieve AI?", a:["AI die dingen maakt zoals tekst of plaatjes","AI die alleen meet","AI die alleen klok kan kijken","AI die alleen stil is"], correct:0, why:"Generatief betekent dat het nieuwe content kan maken."},
  {id:35, level:3, q:"Wat is een risico van generatieve AI?", a:["Dat het altijd perfect is","Dat het soms overtuigend onzin kan maken","Dat het nooit creatief is","Dat het niet kan tellen"], correct:1, why:"Soms klinkt het logisch maar klopt het niet. Check bronnen."},

  // AI in het dagelijks leven (level 2-3)
  {id:36, level:2, q:"Waar zit AI in games?", a:["Nooit","In tegenstanders die slimmer reageren","Alleen in menu’s","Alleen in stickers"], correct:1, why:"Game-AI bepaalt gedrag van vijanden en helpers."},
  {id:37, level:2, q:"Wat doet AI bij verkeersapps?", a:["Maakt wegen langer","Schattet file en beste route","Zet stoplichten uit","Maakt regen"], correct:1, why:"AI kan voorspellen waar drukte is met data van verkeer."},
  {id:38, level:2, q:"Wat is spraakherkenning?", a:["Je hond begrijpt je","Software zet spraak om in tekst","Een microfoon die licht geeft","Een papegaai"], correct:1, why:"Spraakherkenning luistert en zet woorden om naar tekst."},
  {id:39, level:2, q:"Wat is tekst naar spraak (TTS)?", a:["Tekst wordt muziek","Tekst wordt gesproken stemgeluid","Tekst wordt foto","Tekst wordt rekenmachine"], correct:1, why:"TTS leest tekst voor met een stem."},
  {id:40, level:3, q:"Wat is het voordeel van AI als leermaatje?", a:["Je hoeft niets meer te doen","Je krijgt uitleg op jouw niveau","Je wordt automatisch dokter","Je kunt nooit fout zitten"], correct:1, why:"AI kan uitleg aanpassen aan jou, maar jij doet het denkwerk."},

  // Werk en toekomst (meer) (level 3)
  {id:41, level:3, q:"Welke baan klinkt echt als toekomst?", a:["Robot-verzorger (robots onderhouden)","Snoepkoningin","Onzichtbaarheidscoach","Wolkenschilder"], correct:0, why:"Robots en systemen moeten ook onderhouden worden."},
  {id:42, level:3, q:"Wat doet een cybersecurity-specialist?", a:["Maakt virussen","Beschermt computers tegen hackers","Verkoopt ijs","Maakt huiswerk"], correct:1, why:"Cybersecurity is digitale beveiliging."},
  {id:43, level:3, q:"Wat doet een prompt engineer (simpel gezegd)?", a:["Schrijft slimme opdrachten voor AI","Bouwt bruggen","Maakt pizza’s","Leert vissen"], correct:0, why:"Goede prompts geven betere resultaten."},
  {id:44, level:3, q:"Wat is 'robotica'?", a:["Koken met robots","Techniek over robots bouwen en besturen","Een nieuwe taal","Een spelcomputer"], correct:1, why:"Robotica gaat over robots: sensoren, motoren, software."},
  {id:45, level:3, q:"Welke skill is handig voor de toekomst?", a:["Nieuwsgierig zijn en vragen stellen","Nooit leren","Alles meteen geloven","Altijd zwijgen"], correct:0, why:"Nieuwsgierigheid helpt je met nieuwe technologie omgaan."},

  // Verantwoordelijkheid en eerlijkheid (level 3)
  {id:46, level:3, q:"Als AI een antwoord geeft, wat doe je bij twijfel?", a:["Check met een boek of betrouwbare site","Gelijk doorsturen","Boos worden op je tablet","Het vergeten"], correct:0, why:"Controleren is slim, vooral bij belangrijke dingen."},
  {id:47, level:3, q:"Waarom is het belangrijk dat AI eerlijk is?", a:["Omdat anders sommige mensen benadeeld worden","Omdat anders wifi stopt","Omdat dan regen komt","Omdat je dan geen ijs krijgt"], correct:0, why:"Oneerlijke AI kan echte schade doen, bijvoorbeeld bij keuzes over mensen."},
  {id:48, level:3, q:"Wat is een 'model' in AI?", a:["Een fotomodel","Een slim rekensysteem dat patronen heeft geleerd","Een speelgoedauto","Een radio"], correct:1, why:"Een model is de kern die geleerd heeft van voorbeelden."},
  {id:49, level:3, q:"Wat is trainingdata?", a:["Snoepjes voor robots","Voorbeelden waarmee AI leert","Een soort batterij","Een gamekaart"], correct:1, why:"AI leert van voorbeelden en data uit het verleden."},
  {id:50, level:3, q:"Wat is een goede regel bij AI en school?", a:["Alles kopiëren","AI gebruiken om te begrijpen en eigen woorden te maken","AI verstoppen voor iedereen","Nooit oefenen"], correct:1, why:"Leren is snappen en zelf kunnen uitleggen."},

  // Vanaf hier: meer vragen, mix van level 2-4
  {id:51, level:2, q:"Wat betekent 'automatiseren'?", a:["Iets steeds opnieuw met de hand doen","Iets laten doen door een systeem","Iets vergeten","Iets tekenen"], correct:1, why:"Automatiseren betekent dat techniek herhaaltaken doet."},
  {id:52, level:3, q:"Wat is een voordeel van AI bij artsen?", a:["Altijd dezelfde diagnose","Helpen patronen zien in scans","Medicijnen vervangen door stickers","Nooit meer dokters"], correct:1, why:"AI kan helpen bij het herkennen van patronen, artsen beslissen."},
  {id:53, level:3, q:"Wat kan een nadeel zijn van AI in social media?", a:["Meer buiten spelen","Dat je in een bubbel komt met steeds dezelfde video’s","Dat je minder internet hebt","Dat je telefoon groeit"], correct:1, why:"Aanbevelingen kunnen je alleen nog laten zien wat je al leuk vindt."},
  {id:54, level:3, q:"Wat is een 'filterbubbel'?", a:["Een bubbelbad","Als je vooral info ziet die bij jou past","Een nieuwe zonnebril","Een kaasfilter"], correct:1, why:"