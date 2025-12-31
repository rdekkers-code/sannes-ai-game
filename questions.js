<script>
/* Sanne's AI vragenkist: 120 vragen
   Structuur: { id, q, a: [..], correct, why, level }
*/
const QUESTION_BANK = [
// Level Starter (1)
{id:1, level:1, q:"Wat betekent AI (kunstmatige intelligentie) het beste?", a:["Een robot met gevoelens","Slimme software die patronen leert","Een nieuwe soort batterij","Een internetkabel"], correct:1},
{id:2, level:1, q:"Welke is een voorbeeld van AI die je vaak gebruikt?", a:["Een papieren kaart","Een rekenmachine uit 1990","Aanbevelingen op YouTube of Netflix","Een broodrooster"], correct:2},
{id:3, level:1, q:"Wat is een 'prompt' bij AI?", a:["Een soort stekker","Een vraag of opdracht aan AI","Een geheime code om te hacken","Een videogame cheat"], correct:1, why:"Een prompt is wat jij aan AI geeft om iets te doen."},
{id:4, level:1, q:"Wat is meestal slimmer om te doen als je AI iets vraagt?", a:["Zeg zo weinig mogelijk","Heel vaag blijven","Duidelijk vertellen wat je wil en voor wie","Alleen hoofdletters gebruiken"], correct:2, why:"Helderheid maakt dat AI je beter begrijpt."},
{id:5, level:1, q:"Wat kan AI goed?", a:["Altijd de toekomst voorspellen","Patronen herkennen in tekst, beeld of geluid","Altijd eerlijk zijn","Nooit fouten maken"], correct:1, why:"AI is goed in patronen, maar niet foutloos."},
{id:6, level:1, q:"Wat kan AI niet betrouwbaar?", a:["Sommen controleren","Verhalen verzinnen","100% zeker weten wat waar is zonder bron","Een foto beschrijven"], correct:2, why:"AI kan zich vergissen of fouten overnemen."},
{id:7, level:1, q:"Wat is privacy?", a:["Je wachtwoord met iedereen delen","Jouw persoonlijke informatie beschermen","Altijd alles filmen","Alles online zetten"], correct:1, why:"Privacy gaat over jouw data veilig houden."},
{id:8, level:1, q:"Welke info deel je beter NIET met een chatbot?", a:["Je favoriete kleur","Je adres en wachtwoorden","Je lievelingsdier","Je hobby"], correct:1, why:"Adres en wachtwoorden zijn privé."},
{id:9, level:1, q:"Wat is een algoritme?", a:["Een soort pizza","Een stappenplan dat iets uitrekent","Een robotarm","Een gamelevel"], correct:1, why:"Een algoritme is een reeks stappen om een taak op te lossen."},
{id:10, level:1, q:"Wat is machine learning?", a:["Een computer die leert van voorbeelden","Een printer die sneller wordt","Een muis die kan praten","Een telefoon die nat mag worden"], correct:0, why:"Een computer leert patronen en past die toe."},

// ... Existing Data ...

{id:119, level:4, q:"Waarom is ‘kritisch denken’ belangrijk met AI?", a:["Omdat je dan checkt wat klopt en wat niet","Omdat je dan altijd gelijk hebt","Omdat je dan nooit hoeft te leren","Omdat AI anders boos wordt"], correct:0, why:"AI kan fouten maken. Kritisch denken helpt je controleren en goede keuzes maken."},
{id:120, level:4, q:"Wat betekent het als AI ‘zelfverzekerd’ klinkt?", a:["Dat het altijd klopt","Dat het soms ook fout kan zijn, ook al klinkt het zeker","Dat het je beste vriend is","Dat het een geheim weet"], correct:1, why:"AI kan heel overtuigend klinken, maar toch mis zitten. Check bij twijfel."},
{id:121, level:2, q:"Wat is een ‘slimme aanbeveling’ op YouTube?", a:["Een video die willekeurig komt","Een video die gekozen is met jouw kijkgedrag","Een video die je zelf hebt gemaakt","Een video zonder geluid"], correct:1, why:"Aanbevelingen gebruiken vaak AI om te voorspellen wat je leuk vindt."},
{id:122, level:3, q:"Wat is een ‘AI-assistent’ meestal?", a:["Iemand die je huiswerk maakt","Software die helpt met taken zoals plannen, uitleg of ideeën","Een robot die altijd in je tas zit","Een soort magische pen"], correct:1, why:"Een AI-assistent helpt, maar jij beslist en controleert."},
{id:123, level:3, q:"Wat kan AI in een vertaal-app doen?", a:["Woord voor woord gokken zonder regels","Sneller en beter vertalen met context","Je telefoon zwaarder maken","Je batterij opladen"], correct:1, why:"AI kan rekening houden met context, niet alleen losse woorden."},
{id:124, level:3, q:"Wat is een handige vraag aan AI als je iets niet snapt?", a:["Leg het uit met een voorbeeld uit mijn leven","Zeg het nog moeilijker","Doe alsof het niet bestaat","Geef alleen het antwoord"], correct:0, why:"Voorbeelden maken het begrijpelijker."},
{id:125, level:2, q:"Wat betekent ‘persoonlijke gegevens’?", a:["Je favoriete ijs","Je naam, adres, school, telefoonnummer en foto’s","Je lievelingslied","Je sport"], correct:1, why:"Persoonlijke gegevens zeggen iets over jou en moeten beschermd worden."},
{id:126, level:4, q:"Wat is een risico van AI in chatten met onbekenden?", a:["Dat je sneller typt","Dat iemand je kan manipuleren of foppen","Dat je beter kunt tekenen","Dat je meer vrienden krijgt"], correct:1, why:"Onbekenden kunnen nep zijn of je proberen te laten delen wat je niet wil."},
{id:127, level:3, q:"Wat kan AI doen bij ‘huiswerk plannen’?", a:["Je agenda indelen met taken en pauzes","Je ouders bellen","Je bed opmaken","Je schoenen strikken"], correct:0, why:"AI kan helpen plannen, maar jij voert het uit."},
{id:128, level:3, q:"Wat is ‘AI in de klas’ het beste?", a:["AI als spiekmachine","AI als extra uitleg-tutor","AI als vervanging van docenten","AI als straf"], correct:1, why:"AI werkt het best als extra hulp bij begrijpen en oefenen."},
{id:129, level:4, q:"Welke keuze is het meest eerlijk bij een werkstuk met AI?", a:["AI gebruiken en zeggen wat je ermee deed","AI gebruiken en doen alsof het van jou is","Alles kopiëren","Niets lezen en toch inleveren"], correct:0, why:"Eerlijkheid hoort bij leren: jij laat zien wat jij deed."},
{id:130, level:2, q:"Wat is ‘stem-AI’?", a:["AI die stemmen kan herkennen of namaken","AI die alleen fluit","AI die alleen stil is","AI die alleen lacht"], correct:0, why:"Stem-AI kan spraak herkennen en soms stemmen genereren."},
// Add other new questions below...
]; 
