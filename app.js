const glands = {
  hipotalamo: {
    name: "El Hipotálamo",
    bullets: [
      ["Ubicación", "Base del cerebro, sobre la hipófisis."],
      ["Función clave", "Conecta el sistema nervioso con el endocrino."],
      ["Hormonas", "TRH, CRH, GnRH, GHRH, somatostatina y dopamina."],
      ["Importancia", "Regula hambre, sed, temperatura, sueño y estrés."],
      ["Dato", "Controla muchas señales que llegan a la hipófisis."]
    ]
  },
  hipofisis: {
    name: "La Hipófisis",
    bullets: [
      ["Ubicación", "Debajo del cerebro, en la silla turca."],
      ["Función clave", "Coordina varias glándulas endocrinas."],
      ["Hormonas", "GH, TSH, ACTH, FSH, LH, prolactina, ADH y oxitocina."],
      ["Enfermedad común", "Alteraciones de crecimiento, prolactinoma o diabetes insípida."],
      ["Dato", "Se conoce como la glándula maestra."]
    ]
  },
  pineal: {
    name: "La Pineal",
    bullets: [
      ["Ubicación", "Centro del encéfalo."],
      ["Función clave", "Participa en el ciclo sueño-vigilia."],
      ["Hormona", "Melatonina."],
      ["Importancia", "Ayuda a organizar los ritmos circadianos."],
      ["Dato", "Responde a cambios de luz y oscuridad."]
    ]
  },
  tiroides: {
    name: "La Tiroides",
    bullets: [
      ["Ubicación", "Parte frontal del cuello."],
      ["Función clave", "Regula metabolismo, energía y temperatura corporal."],
      ["Hormonas", "T3, T4 y calcitonina."],
      ["Enfermedad común", "Hipotiroidismo, hipertiroidismo y bocio."],
      ["Importancia", "Influye en el ritmo cardiaco y el desarrollo."]
    ]
  },
  paratiroides: {
    name: "Las Paratiroides",
    bullets: [
      ["Ubicación", "Detrás de la tiroides."],
      ["Función clave", "Controlan calcio y fósforo en sangre."],
      ["Hormona", "Paratohormona o PTH."],
      ["Importancia", "Protegen huesos, riñones y sistema nervioso."],
      ["Enfermedad común", "Hiperparatiroidismo o hipoparatiroidismo."]
    ]
  },
  timo: {
    name: "El Timo",
    bullets: [
      ["Ubicación", "Parte superior del pecho, detrás del esternón."],
      ["Función clave", "Ayuda a madurar linfocitos T."],
      ["Hormonas", "Timosina y señales inmunitarias."],
      ["Importancia", "Participa en la defensa del organismo."],
      ["Dato", "Es más activo durante la infancia."]
    ]
  },
  suprarrenales: {
    name: "Las Suprarrenales",
    bullets: [
      ["Ubicación", "Encima de cada riñón."],
      ["Función clave", "Controlan estrés, presión arterial y sales."],
      ["Hormonas", "Cortisol, aldosterona, adrenalina y noradrenalina."],
      ["Enfermedad común", "Addison, Cushing o hiperaldosteronismo."],
      ["Dato", "Preparan al cuerpo para reaccionar ante emergencias."]
    ]
  },
  pancreas: {
    name: "El Páncreas",
    bullets: [
      ["Ubicación", "Abdomen, detrás del estómago."],
      ["Función clave", "Controla el azúcar en sangre y ayuda a digerir alimentos."],
      ["Insulina", "Hormona que baja el azúcar en la sangre."],
      ["Glucagón", "Hormona que sube el azúcar en la sangre."],
      ["Enfermedad común", "Diabetes por falla en la producción o uso de insulina."]
    ]
  },
  gonadas: {
    name: "Las Gónadas",
    bullets: [
      ["Ubicación", "Ovarios en pelvis femenina y testículos en escroto masculino."],
      ["Función clave", "Regulan pubertad, reproducción y fertilidad."],
      ["Hormonas", "Estrógenos, progesterona, testosterona e inhibina."],
      ["Importancia", "Participan en caracteres sexuales y producción de gametos."],
      ["Alteraciones", "Hipogonadismo, SOP, infertilidad o pubertad irregular."]
    ]
  }
};

const quiz = [
  ["¿Cuál es la función general del sistema endocrino?", ["Producir hormonas que regulan funciones del cuerpo", "Transportar oxígeno por la sangre", "Producir bilis", "Mover los huesos"], 0, "El sistema endocrino produce hormonas que viajan por la sangre."],
  ["¿Qué glándula se conoce como glándula maestra?", ["Tiroides", "Hipófisis", "Páncreas", "Timo"], 1, "La hipófisis regula varias glándulas endocrinas."],
  ["¿Qué hormona disminuye la glucosa en sangre?", ["Insulina", "Glucagón", "Adrenalina", "Melatonina"], 0, "La insulina ayuda a bajar el azúcar en sangre."],
  ["¿Dónde están las glándulas suprarrenales?", ["Sobre los riñones", "En el cuello", "Detrás de la tiroides", "Dentro del estómago"], 0, "Hay una suprarrenal encima de cada riñón."],
  ["¿Qué hormona se relaciona con el sueño?", ["Melatonina", "Cortisol", "Tiroxina", "PTH"], 0, "La melatonina participa en el ciclo sueño-vigilia."],
  ["¿Qué hormonas produce la tiroides?", ["T3 y T4", "Insulina y glucagón", "Adrenalina", "Testosterona"], 0, "T3 y T4 regulan el metabolismo."],
  ["¿Qué glándulas controlan el calcio con PTH?", ["Paratiroides", "Pineal", "Timo", "Ovarios"], 0, "La PTH mantiene el calcio en equilibrio."],
  ["¿Qué órgano endocrino también ayuda a la digestión?", ["Páncreas", "Hipófisis", "Pineal", "Paratiroides"], 0, "El páncreas tiene función endocrina y digestiva."],
  ["¿Qué hormona participa en la reacción de alerta?", ["Adrenalina", "Melatonina", "FSH", "Calcitonina"], 0, "La adrenalina prepara al cuerpo para responder al estrés."],
  ["¿Qué significa homeostasis?", ["Equilibrio interno", "Crecimiento de huesos", "Destrucción hormonal", "Producción de sangre"], 0, "Homeostasis es mantener estable el ambiente interno."]
];

const gameQuestions = [
  { prompt: "¿Qué glándula produce insulina?", target: "pancreas", hint: "Pista: es una glándula mixta que también tiene funciones digestivas." },
  { prompt: "¿Qué glándula regula el metabolismo?", target: "tiroides", hint: "Pista: se encuentra en la parte frontal del cuello." },
  { prompt: "¿Qué glándulas producen adrenalina?", target: "suprarrenales", hint: "Pista: están encima de los riñones." },
  { prompt: "¿Qué glándula ayuda al sueño con melatonina?", target: "pineal", hint: "Pista visual: busca la zona del cerebro." },
  { prompt: "¿Qué órgano ayuda a madurar linfocitos T?", target: "timo", hint: "Pista: está en la parte superior del pecho." },
  { prompt: "¿Dónde se producen hormonas sexuales?", target: "gonadas", hint: "Pista: están en la zona reproductiva." },
  { prompt: "¿Qué glándula coordina a otras glándulas?", target: "hipofisis", hint: "Pista: es conocida como glándula maestra." },
  { prompt: "¿Qué glándulas regulan calcio con PTH?", target: "paratiroides", hint: "Pista visual: están muy cerca de la tiroides." },
  { prompt: "¿Dónde actúa fuerte la respuesta al estrés?", target: "suprarrenales", hint: "Pista: produce cortisol y adrenalina." },
  { prompt: "¿Qué glándula aparece en el cuello?", target: "tiroides", hint: "Pista: tiene forma parecida a mariposa." }
];

const navButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
navButton.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  navButton.setAttribute("aria-expanded", String(open));
});
nav.addEventListener("click", () => {
  nav.classList.remove("open");
  navButton.setAttribute("aria-expanded", "false");
});

const glandInfo = document.querySelector("#gland-info");
const glandControls = document.querySelectorAll("[data-gland]");

function renderGland(key) {
  const gland = glands[key];
  glandInfo.innerHTML = `
    <h3>${gland.name}</h3>
    <ul>
      ${gland.bullets.map(([label, text]) => `<li><strong>${label}:</strong> ${text}</li>`).join("")}
    </ul>
  `;
  glandControls.forEach((control) => control.classList.toggle("active", control.dataset.gland === key));
}

glandControls.forEach((control) => control.addEventListener("click", () => renderGland(control.dataset.gland)));
renderGland("pancreas");

let quizIndex = 0;
let quizScore = 0;
let answered = false;

const questionCount = document.querySelector("#question-count");
const questionText = document.querySelector("#question-text");
const answers = document.querySelector("#answers");
const feedback = document.querySelector("#feedback");
const nextQuestion = document.querySelector("#next-question");
const restartQuiz = document.querySelector("#restart-quiz");
const quizScoreEl = document.querySelector("#quiz-score");

function renderQuiz() {
  answered = false;
  const [question, options] = quiz[quizIndex];
  questionCount.textContent = `${quizIndex + 1} de ${quiz.length}`;
  questionText.textContent = question;
  feedback.textContent = "";
  answers.innerHTML = options.map((option, index) => `<button class="answer" type="button" data-answer="${index}">${option}</button>`).join("");
  nextQuestion.textContent = quizIndex === quiz.length - 1 ? "Resultado" : "Siguiente";
}

answers.addEventListener("click", (event) => {
  const button = event.target.closest(".answer");
  if (!button || answered) return;
  answered = true;
  const [, , correct, why] = quiz[quizIndex];
  const selected = Number(button.dataset.answer);
  answers.querySelectorAll(".answer").forEach((item) => {
    const value = Number(item.dataset.answer);
    item.classList.toggle("correct", value === correct);
    item.classList.toggle("wrong", value === selected && selected !== correct);
  });
  if (selected === correct) quizScore += 1;
  quizScoreEl.textContent = quizScore;
  feedback.textContent = selected === correct ? `¡Correcto! ${why}` : `Casi. ${why}`;
});

nextQuestion.addEventListener("click", () => {
  if (!answered) {
    feedback.textContent = "Selecciona una respuesta para continuar.";
    return;
  }
  if (quizIndex < quiz.length - 1) {
    quizIndex += 1;
    renderQuiz();
  } else {
    questionText.textContent = `Resultado final: ${quizScore} de ${quiz.length}`;
    answers.innerHTML = "";
    feedback.textContent = quizScore >= 8 ? "Excelente, dominas el tema." : "Puedes repasar el mapa y volver a intentarlo.";
    nextQuestion.disabled = true;
  }
});

restartQuiz.addEventListener("click", () => {
  quizIndex = 0;
  quizScore = 0;
  quizScoreEl.textContent = "0";
  nextQuestion.disabled = false;
  renderQuiz();
});
renderQuiz();

let gameIndex = 0;
let gameScore = 0;
const gamePrompt = document.querySelector("#game-prompt");
const gameHint = document.querySelector("#game-hint");
const gameStep = document.querySelector("#game-step");
const gameScoreEl = document.querySelector("#game-score");
const gameResult = document.querySelector("#game-result");
const targetButtons = document.querySelectorAll("[data-target]");

function renderGame() {
  const item = gameQuestions[gameIndex];
  gamePrompt.textContent = item.prompt;
  gameHint.textContent = item.hint;
  gameStep.textContent = `${gameIndex + 1} de ${gameQuestions.length}`;
  targetButtons.forEach((button) => button.classList.remove("good", "bad"));
  gameResult.innerHTML = `
    <p class="label">RESULTADO</p>
    <h3>Selecciona una zona</h3>
    <p>Cuando respondas, aquí verás si acertaste y una explicación corta de la glándula.</p>
    <button class="brown-btn" id="next-target" type="button">Siguiente ›</button>
  `;
  gameResult.querySelector("#next-target").addEventListener("click", nextGame);
}

function nextGame() {
  gameIndex = (gameIndex + 1) % gameQuestions.length;
  renderGame();
}

targetButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const item = gameQuestions[gameIndex];
    const correct = button.dataset.target === item.target;
    button.classList.add(correct ? "good" : "bad");
    if (correct) {
      gameScore += 10;
      gameScoreEl.textContent = gameScore;
    }
    const gland = glands[item.target];
    gameResult.innerHTML = `
      <p class="label">RESULTADO</p>
      <h3>${correct ? "✓ ¡Correcto!" : "Intenta otra vez"}</h3>
      <p>${gland.name.replace("El ", "").replace("La ", "").replace("Las ", "")}: ${gland.bullets[1][1]}</p>
      <button class="brown-btn" id="next-target" type="button">Siguiente ›</button>
    `;
    gameResult.querySelector("#next-target").addEventListener("click", nextGame);
  });
});

document.querySelector("#reset-game").addEventListener("click", () => {
  gameIndex = 0;
  gameScore = 0;
  gameScoreEl.textContent = "0";
  renderGame();
});

document.querySelector("#show-hint").addEventListener("click", () => {
  gameHint.style.background = "#fff2df";
  gameHint.style.borderRadius = "12px";
  gameHint.style.padding = "10px";
});

renderGame();