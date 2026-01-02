/* script.js
   Sanne's AI Avonturen Quiz
   Vereist: questions.js met const QUESTION_BANK = [...]
*/

(function () {
  "use strict";

  // ---------- Helpers ----------
  function $(id) { return document.getElementById(id); }

  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function clamp(n, min, max) {
    return Math.max(min, Math.min(max, n));
  }

  function safeText(el, txt) {
    el.textContent = txt;
  }

  // ---------- Story (ongeveer 5 min) ----------
  // Verhaal wordt opgebouwd uit stukjes zodat het "nieuw" voelt.
  const STORY_PARTS = {
    intro: [
      "Sanne zat op de bank met een glas water en keek naar het scherm alsof het een geheime deur was. Niet zo’n deur met een sleutel, maar eentje die open gaat met nieuwsgierigheid.",
      "In de stad waren ineens overal slimme dingen. Een camera die een glimlach herkent. Een app die weet welke route het snelst is. En zelfs een spel dat merkt welke levels jij lastig vindt.",
      "Maar vandaag was het extra bijzonder, want Sanne kreeg een nieuwe missie. Niet om een draak te verslaan, maar om iets te begrijpen wat vaak onzichtbaar is: kunstmatige intelligentie."
    ],
    scene1: [
      "In haar fantasie stond ze voor een groot gebouw met een knipperend bord: Het AI-Lab. Binnenin stonden geen enge robots, maar vooral schermen, knoppen en heel veel post-its met woorden als ‘data’, ‘patronen’ en ‘veilig’.",
      "Een vriendelijke robot met een sticker op z’n borst kwam aanrollen. Op de sticker stond: LEX-9000. De robot sprak met een rustige stem: “Welkom, Sanne. Ik ben geen mens. Ik voel niets. Maar ik kan wel leren van voorbeelden.”",
      "Sanne kneep haar ogen een beetje samen. “Hoe dan?” vroeg ze. LEX-9000 wees naar een tafel vol kaartjes: katten, honden, fietsen en verkeersborden."
    ],
    scene2: [
      "“Stel je voor,” zei LEX-9000, “dat jij mij duizend foto’s geeft. Op elke foto staat wat het is. Dat noem je labels. Dan ga ik patronen herkennen.”",
      "“Dus jij onthoudt het?” vroeg Sanne. “Ik leer patronen,” antwoordde LEX-9000. “Maar ik begrijp het niet zoals jij. Soms kan ik ook heel zelfverzekerd iets fout zeggen. Dan moet jij slim genoeg zijn om te checken.”",
      "Sanne moest lachen. “Dus jij kunt stoer praten en toch ongelijk hebben. Dat kan mijn kleine nichtje ook.”"
    ],
    scene3: [
      "LEX-9000 reed naar een groot scherm. Daar verschenen drie knoppen: Leren, Maken, Controleren. “Dit zijn de drie superkrachten,” zei hij.",
      "“Leren: uitleg krijgen op jouw niveau. Maken: ideeën voor verhalen, plaatjes of plannen. Controleren: altijd nadenken of het klopt, vooral bij belangrijke dingen.”",
      "Sanne tikte op Controleren. Het scherm liet een nepbericht zien dat heel echt leek. “Deepfake,” zei LEX-9000. “Soms is iets nep, maar ziet het er echt uit. Daarom check je bronnen.”"
    ],
    scene4: [
      "Toen kwamen er nieuwe deuren in beeld met beroepen erop. ‘AI-trainer’, ‘Cybersecurity-specialist’, ‘Data-analist’, ‘AI-ethicus’, ‘Robot-onderhoud’.",
      "“Dat zijn banen die nu al bestaan,” zei LEX-9000. “En er komen er meer. De toekomst is niet: mens of AI. De toekomst is: mens met AI.”",
      "Sanne dacht even na. “Dus ik kan later iets doen met mensen helpen, én met slimme techniek?” LEX-9000 knikte. “Exact.”"
    ],
    scene5: [
      "Maar toen werd LEX-9000 ineens streng. “Eén regel is heilig: privacy.” Op het scherm verschenen drie rode woorden: wachtwoorden, adressen, privéfoto’s.",
      "“Die deel je nooit zomaar,” zei hij. “Ook niet met een chatbot. En als iemand je probeert te foppen, bijvoorbeeld met een nepbericht, dan vraag je hulp aan je ouders.”",
      "Sanne stak haar hand uit alsof ze een eed aflegde. “Ik beloof het. Geen wachtwoorden delen. Niet op straat en niet online.”"
    ],
    outro: [
      "LEX-9000 reed naar een laatste scherm. Daar stond: De Quiz Poort. “Als jij 10 vragen beantwoordt, krijg je een badge,” zei hij.",
      "Sanne ging rechtop zitten. “Kom maar op,” zei ze. “Maar wel eerlijk hoor. Als jij iets verzint, dan ga ik factchecken.”",
      "De robot maakte een piepgeluid dat bijna klonk als lachen. “Dat is precies de juiste instelling, Sanne. Start de missie.”"
    ]
  };

  function buildStory() {
    // Pak 1 intro, 3 scenes, 1 outro (mix) zodat het ongeveer 5 min blijft.
    const intro =
  STORY_PARTS.intro[
    Math.floor(Math.random() * STORY_PARTS.intro.length)
  ]; // vaste start voor herkenning
    const scenes = shuffle([
      ...STORY_PARTS.scene1,
      ...STORY_PARTS.scene2,
      ...STORY_PARTS.scene3,
      ...STORY_PARTS.scene4,
      ...STORY_PARTS.scene5
    ]).slice(0, 6); // 6 alinea’s uit scenes
    const outro = STORY_PARTS.outro[Math.floor(Math.random() * STORY_PARTS.outro.length)];

    const paragraphs = [intro, ...scenes, outro];

    return paragraphs.map(p => `<p>${escapeHtml(p)}</p>`).join("");
  }

  function escapeHtml(str) {
    return String(str)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;");
  }

  // ---------- Quiz state ----------
  const QUIZ_SIZE = 10;

  let quizQuestions = [];
  let currentIndex = 0;
  let score = 0;
  let locked = false;
  let userAnswers = []; // {id, chosen, correct, q, correctText, chosenText, why}

  // ---------- UI elements ----------
  const storyView = $("storyView");
  const quizView = $("quizView");
  const resultView = $("resultView");

  const storyText = $("storyText");

  const pillLevel = $("pill-level");
  const pillScore = $("pill-score");
  const pillQ = $("pill-q");

  const qTitle = $("qTitle");
  const qText = $("qText");
  const answersWrap = $("answers");
  const feedback = $("feedback");
  const progressBar = $("progressBar");

  const btnStart = $("btnStart");
  const btnShuffle = $("btnShuffle");
  const btnBackToStory = $("btnBackToStory");
  const btnNext = $("btnNext");

  const resultLine = $("resultLine");
  const badges = $("badges");
  const btnPlayAgain = $("btnPlayAgain");
  const btnShowAnswers = $("btnShowAnswers");
  const answerReview = $("answerReview");

  // ---------- Init ----------
  function init() {
    // Basis checks
    if (!Array.isArray(window.QUESTION_BANK) || window.QUESTION_BANK.length < 100) {
      storyText.innerHTML = `<p>Oeps. Ik mis de vragenlijst (QUESTION_BANK) of hij is te klein.</p>`;
      btnStart.disabled = true;
      return;
    }

    // Story
    renderStory();

    // New quiz selection each load
    newQuiz();

    // Bind events
    btnStart.addEventListener("click", () => {
      showView("quiz");
      renderQuestion();
    });

    btnShuffle.addEventListener("click", () => {
      renderStory();
    });

    btnBackToStory.addEventListener("click", () => {
      showView("story");
    });

    btnNext.addEventListener("click", () => {
      if (locked) {
        nextStep();
      }
    });

    btnPlayAgain.addEventListener("click", () => {
      newQuiz();
      renderStory();
      showView("story");
      // Extra: meteen opnieuw naar quiz kan ook, maar story eerst is de bedoeling.
    });

    btnShowAnswers.addEventListener("click", () => {
      answerReview.classList.toggle("hidden");
      if (!answerReview.classList.contains("hidden")) {
        renderReview();
        btnShowAnswers.textContent = "Verberg jouw antwoorden";
      } else {
        btnShowAnswers.textContent = "Bekijk jouw antwoorden";
      }
    });

    // Start op story
    showView("story");
    updatePills();
  }

  function renderStory() {
    storyText.innerHTML = buildStory();
  }

  function showView(which) {
    storyView.classList.add("hidden");
    quizView.classList.add("hidden");
    resultView.classList.add("hidden");

    if (which === "story") storyView.classList.remove("hidden");
    if (which === "quiz") quizView.classList.remove("hidden");
    if (which === "result") resultView.classList.remove("hidden");
  }

  // ---------- Quiz selection ----------
  function newQuiz() {
    // Shuffle whole bank and pick 10
    const pick = shuffle(window.QUESTION_BANK).slice(0, QUIZ_SIZE);

    // Ensure unique ids (bank should be unique anyway)
    const seen = new Set();
    quizQuestions = [];
    for (const q of pick) {
      if (!seen.has(q.id)) {
        quizQuestions.push(q);
        seen.add(q.id);
      }
    }
    // If for any reason duplicates reduced it, top up from the bank
    if (quizQuestions.length < QUIZ_SIZE) {
      for (const q of shuffle(window.QUESTION_BANK)) {
        if (quizQuestions.length >= QUIZ_SIZE) break;
        if (!seen.has(q.id)) {
          quizQuestions.push(q);
          seen.add(q.id);
        }
      }
    }

    currentIndex = 0;
    score = 0;
    locked = false;
    userAnswers = [];
    btnNext.disabled = true;
    feedback.classList.add("hidden");
    answerReview.classList.add("hidden");
    btnShowAnswers.textContent = "Bekijk jouw antwoorden";
    updatePills();
    updateProgress();
  }

  // ---------- Render question ----------
  function renderQuestion() {
    locked = false;
    btnNext.disabled = true;
    feedback.classList.add("hidden");
    feedback.classList.remove("good", "bad");

    const q = quizQuestions[currentIndex];

    safeText(qTitle, `Vraag ${currentIndex + 1} van ${QUIZ_SIZE}`);
    safeText(qText, q.q);

    answersWrap.innerHTML = "";

    q.a.forEach((opt, idx) => {
      const btn = document.createElement("button");
      btn.className = "answerBtn";
      btn.type = "button";
      btn.textContent = opt;
      btn.addEventListener("click", () => onAnswer(idx));
      answersWrap.appendChild(btn);
    });

    updatePills();
    updateProgress();
  }

  function onAnswer(chosenIdx) {
    if (locked) return;

    const q = quizQuestions[currentIndex];
    const isCorrect = chosenIdx === q.correct;

    locked = true;

    const buttons = Array.from(answersWrap.querySelectorAll(".answerBtn"));
    buttons.forEach((b, idx) => {
      b.classList.add("locked");
      if (idx === q.correct) b.classList.add("correct");
      if (idx === chosenIdx && !isCorrect) b.classList.add("wrong");
    });

    if (isCorrect) score += 1;

    // Store for review
    userAnswers.push({
      id: q.id,
      chosen: chosenIdx,
      correct: q.correct,
      q: q.q,
      chosenText: q.a[chosenIdx],
      correctText: q.a[q.correct],
      why: q.why || ""
    });

    // Feedback
    feedback.classList.remove("hidden");
    feedback.classList.toggle("good", isCorrect);
    feedback.classList.toggle("bad", !isCorrect);

    const title = isCorrect ? "Goed zo!" : "Bijna!";

    feedback.innerHTML = `
      <div><strong>${title}</strong> ${isCorrect ? "Dat is correct." : "Het goede antwoord staat groen."}</div>
      <div class="why">${escapeHtml(q.why || "Slim gekozen. Wil je de uitleg nog eens? Vraag het gerust aan de AI-tutor.")}</div>
    `;

    btnNext.disabled = false;
    updatePills();
  }

  function nextStep() {
    if (currentIndex < QUIZ_SIZE - 1) {
      currentIndex += 1;
      renderQuestion();
      return;
    }

    // Finish
    renderResults();
    showView("result");
  }

  // ---------- Progress and Pills ----------
  function updateProgress() {
    const pct = ((currentIndex) / QUIZ_SIZE) * 100;
    progressBar.style.width = `${clamp(pct, 0, 100)}%`;
  }

  function computeLevelName() {
    // Level op basis van score tot nu toe
    const answered = userAnswers.length;
    if (answered === 0) return "Starter";
    const ratio = score / answered;

    if (ratio >= 0.9) return "AI Ninja";
    if (ratio >= 0.7) return "AI Verkenner";
    if (ratio >= 0.5) return "AI Scout";
    return "Starter";
  }

  function updatePills() {
    safeText(pillLevel, `Level: ${computeLevelName()}`);
    safeText(pillScore, `Score: ${score}`);
    safeText(pillQ, `Vraag: ${Math.min(currentIndex + 1, QUIZ_SIZE)}/${QUIZ_SIZE}`);
  }

  // ---------- Results ----------
  function renderResults() {
    progressBar.style.width = "100%";

    const total = QUIZ_SIZE;
    const line = `Jij hebt ${score} van de ${total} goed.`;
    safeText(resultLine, line);

    renderBadges();
    renderReview(); // alvast vullen, blijft verborgen tot klik
  }

  function renderBadges() {
    badges.innerHTML = "";

    const total = QUIZ_SIZE;
    const ratio = score / total;

    const list = [];

    // Badge based on score
    if (score === 10) list.push("🏆 Perfecte Score");
    if (score >= 8) list.push("🧠 Super Slim");
    if (score >= 6 && score < 8) list.push("🚀 Goede Start");
    if (score < 6) list.push("💪 Doorzetten");

    // Fun thematic badges
    list.push("🛡️ Privacy Bewaker");
    if (ratio >= 0.7) list.push("🔎 Factcheck Held");
    if (ratio < 0.7) list.push("🧩 Patroonzoeker");

    // Make unique
    const unique = Array.from(new Set(list));

    unique.forEach(txt => {
      const b = document.createElement("span");
      b.className = "badge";
      b.textContent = txt;
      badges.appendChild(b);
    });
  }

  function renderReview() {
    answerReview.innerHTML = "";

    userAnswers.forEach((it, i) => {
      const wrap = document.createElement("div");
      wrap.className = "reviewItem";

      const ok = it.chosen === it.correct;

      wrap.innerHTML = `
        <div class="reviewQ">${i + 1}. ${escapeHtml(it.q)}</div>
        <div class="reviewA">
          Jouw antwoord: <strong>${escapeHtml(it.chosenText)}</strong>
          ${ok ? `<span class="reviewOk"> (goed)</span>` : `<span class="reviewNo"> (fout)</span>`}
        </div>
        ${ok ? "" : `<div class="reviewA">Goed antwoord: <strong>${escapeHtml(it.correctText)}</strong></div>`}
        <div class="reviewA">${escapeHtml(it.why || "")}</div>
      `;
      answerReview.appendChild(wrap);
    });
  }

  // Start
  document.addEventListener("DOMContentLoaded", init);
})();
