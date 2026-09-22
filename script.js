const compliments = [
  "Tu es le genre de personne qui rend une journée pourrie légèrement moins pourrie rien qu'en existant.",
  "Officiellement classée : plus drôle que tu ne le penses, et tu le penses déjà beaucoup.",
  "Tu as un radar à bêtises hyper développé. C'est un compliment, promis.",
  "Ton rire est un service public. Quelqu'un devrait te payer pour ça.",
  "Tu es la preuve vivante qu'on peut être un peu chaotique ET fiable en même temps.",
  "Si la gentillesse était un sport, tu serais en équipe nationale.",
  "Tu gères la vie comme un GPS sans réseau : en improvisant, mais tu arrives quand même à destination.",
  "Tu es exactement le genre de personne pour qui on a inventé le mot increvable."
];

const absurdQuotes = [
  "Une licorne sage a dit un jour : Si ça va mal, mange une frite et recommence.",
  "Confucius n'a jamais dit ça, mais il l'aurait pensé très fort : le mardi n'a aucune autorité sur toi.",
  "Citation profonde trouvée dans un biscuit imaginaire : tu vaux mieux que ton pire scroll de réseaux sociaux.",
  "Proverbe inventé à l'instant même : petit nuage deviendra étoile, à condition de cliquer dessus.",
  "Un sage anonyme (moi, maintenant) a dit : respire, bois de l'eau, tu n'es pas une plante mais presque."
];

const missions = [
  "Mission du jour : envoie un mème à quelqu'un sans prévenir, juste pour le fun.",
  "Mission du jour : chante une chanson à voix haute, surtout si personne ne t'écoute.",
  "Mission du jour : bois un grand verre d'eau. Oui, maintenant. Oui, toi.",
  "Mission du jour : fais un compliment random à quelqu'un aujourd'hui.",
  "Mission du jour : accorde-toi dix minutes de rien du tout, officiellement autorisées par ce site.",
  "Mission du jour : souris à ton reflet pendant trois secondes. C'est bizarre. Fais-le quand même."
];

const wheelReasons = [
  "Tu es drôle sans faire exprès, ce qui est le meilleur genre de drôle.",
  "Tu es adorable, y compris quand tu essaies très fort de ne pas l'être.",
  "Tu as survécu à des trucs que même un GPS n'aurait pas supportés.",
  "Tu es officiellement dans le top 3 des personnes que j'apprécie le plus sur cette planète.",
  "Tu as un talent unique pour transformer une catastrophe en anecdote géniale.",
  "Tu es plus forte que tu ne le crois, et un peu têtue avec ça. C'est un compliment.",
  "Tu fais partie des rares personnes avec qui le silence n'est jamais gênant.",
  "Tu es la nièce et meilleure amie la plus improbable, et la plus géniale à la fois."
];

const cloudWords = ["Respire", "Ça va aller", "T'es forte", "Courage", "On y va", "Fière de toi", "Doucement", "C'est ok"];

const boostGifs = [
  { url: "https://media.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif", emoji: "🎉" },
  { url: "https://media.giphy.com/media/3o7abKhOpu0NwenH3O/giphy.gif", emoji: "💃" },
  { url: "https://media.giphy.com/media/26u4b45b8KlgAB9Xa/giphy.gif", emoji: "🕺" }
];

const surpriseGif = { url: "https://media.giphy.com/media/xT9IgG50Fb7Mi0prBC/giphy.gif", emoji: "😂" };

function gifNode(gifObj) {
  const wrap = document.createElement("div");
  const img = document.createElement("img");
  img.src = gifObj.url;
  img.alt = "gif rigolo";
  img.loading = "lazy";
  img.onerror = function () {
    wrap.innerHTML = "";
    const span = document.createElement("span");
    span.className = "fallback-emoji";
    span.textContent = gifObj.emoji;
    wrap.appendChild(span);
  };
  wrap.appendChild(img);
  return wrap;
}

function pick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function launchConfetti(count) {
  const layer = document.getElementById("confettiLayer");
  const colors = ["#FF6FA0", "#FFC93C", "#4FC3F7", "#5FD3A4", "#7C6CF2"];
  const n = count || 60;
  for (let i = 0; i < n; i++) {
    const piece = document.createElement("span");
    const size = 6 + Math.random() * 6;
    piece.style.position = "absolute";
    piece.style.left = Math.random() * 100 + "vw";
    piece.style.top = "-20px";
    piece.style.width = size + "px";
    piece.style.height = size * 0.6 + "px";
    piece.style.background = colors[Math.floor(Math.random() * colors.length)];
    piece.style.opacity = "0.9";
    piece.style.borderRadius = "2px";
    piece.style.transform = "rotate(" + Math.random() * 360 + "deg)";
    const duration = 2.2 + Math.random() * 1.6;
    piece.style.transition = "transform " + duration + "s ease-in, top " + duration + "s ease-in, opacity " + duration + "s ease-in";
    layer.appendChild(piece);
    requestAnimationFrame(() => {
      piece.style.top = "110vh";
      piece.style.transform = "rotate(" + (Math.random() * 720 - 360) + "deg)";
      piece.style.opacity = "0";
    });
    setTimeout(() => piece.remove(), duration * 1000 + 200);
  }
}

function computeAge(birthYear, birthMonthIndex, birthDay) {
  const birth = new Date(birthYear, birthMonthIndex, birthDay);
  const now = new Date();
  let age = now.getFullYear() - birth.getFullYear();
  const hadBirthdayThisYear = now.getMonth() > birthMonthIndex || (now.getMonth() === birthMonthIndex && now.getDate() >= birthDay);
  if (!hadBirthdayThisYear) age -= 1;
  return age;
}

function buildSprinkles(container) {
  container.innerHTML = "";
  const colors = ["#FF6FA0", "#FFC93C", "#4FC3F7", "#5FD3A4", "#7C6CF2"];
  for (let i = 0; i < 16; i++) {
    const s = document.createElement("span");
    s.className = "cake-sprinkle";
    s.style.background = colors[i % colors.length];
    s.style.left = (28 + Math.random() * 160) + "px";
    s.style.top = (108 + Math.random() * 18) + "px";
    s.style.transform = "translateY(-14px) rotate(" + Math.floor(Math.random() * 180) + "deg)";
    container.appendChild(s);
    const delay = 2100 + i * 45;
    setTimeout(() => {
      s.style.opacity = "1";
      s.style.transform = "translateY(0) rotate(" + Math.floor(Math.random() * 40 - 20) + "deg)";
    }, delay);
  }
}

function spawnSparkles(container, count) {
  const colors = ["#FF6FA0", "#FFC93C", "#7C6CF2", "#5FD3A4", "#4FC3F7"];
  for (let i = 0; i < count; i++) {
    const s = document.createElement("span");
    s.className = "sparkle";
    const angle = Math.random() * Math.PI * 2;
    const dist = 36 + Math.random() * 60;
    s.style.left = "50%";
    s.style.top = "42%";
    s.style.background = colors[Math.floor(Math.random() * colors.length)];
    s.style.setProperty("--mx", Math.cos(angle) * dist + "px");
    s.style.setProperty("--my", Math.sin(angle) * dist + "px");
    s.style.animationDelay = (Math.random() * 0.25) + "s";
    container.appendChild(s);
    setTimeout(() => s.remove(), 1500);
  }
}

let cakePlayed = false;

function playCakeAnimation() {
  if (cakePlayed) return;
  cakePlayed = true;

  const scene = document.getElementById("cakeScene");
  const caption = document.getElementById("cakeCaption");
  caption.textContent = "";
  buildSprinkles(document.getElementById("cakeSprinkles"));
  requestAnimationFrame(() => scene.classList.add("playing"));

  setTimeout(() => {
    scene.classList.add("celebrating");
    spawnSparkles(scene, 14);
  }, 2700);

  setTimeout(() => {
    const age = computeAge(2005, 8, 22);
    caption.textContent = "Joyeux anniversaire Mickaëla — " + age + " ans aujourd'hui 🎂";
    launchConfetti(80);
    spawnSparkles(scene, 20);
  }, 3300);
}

const dots = document.querySelectorAll(".dot");
const views = document.querySelectorAll(".view");

function goToView(viewId) {
  const el = document.getElementById(viewId);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

document.querySelectorAll("[data-view]").forEach((el) => {
  el.addEventListener("click", () => goToView(el.dataset.view));
});

const dotByView = {};
dots.forEach((d) => { dotByView[d.dataset.view] = d; });

const spyObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    dots.forEach((d) => {
      d.classList.remove("active");
      d.setAttribute("aria-current", "false");
    });
    const dot = dotByView[entry.target.id];
    if (dot) {
      dot.classList.add("active");
      dot.setAttribute("aria-current", "step");
    }
  });
}, { rootMargin: "-45% 0px -45% 0px", threshold: 0 });

views.forEach((v) => spyObserver.observe(v));

const cakeObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) playCakeAnimation();
  });
}, { threshold: 0.35 });

cakeObserver.observe(document.getElementById("view-birthday"));

window.addEventListener("load", () => window.scrollTo({ top: 0, left: 0 }));

const boostBtn = document.getElementById("boostBtn");
const boostResult = document.getElementById("boostResult");

boostBtn.addEventListener("click", () => {
  const kinds = ["compliment", "quote", "mission", "gif"];
  const kind = pick(kinds);
  boostResult.innerHTML = "";
  boostResult.classList.remove("show");

  let text = "";
  if (kind === "compliment") text = pick(compliments);
  if (kind === "quote") text = pick(absurdQuotes);
  if (kind === "mission") text = pick(missions);

  if (text) {
    boostResult.textContent = text;
  } else {
    const label = document.createElement("p");
    label.textContent = "Un gif random, sans raison particulière :";
    label.style.margin = "0 0 0.3rem";
    boostResult.appendChild(label);
    boostResult.appendChild(gifNode(pick(boostGifs)));
  }

  void boostResult.offsetWidth;
  boostResult.classList.add("show");
  launchConfetti(50);
});

const btnYes = document.getElementById("btnYes");
const btnNo = document.getElementById("btnNo");
const checkInAnswer = document.getElementById("checkInAnswer");
const checkInButtons = document.getElementById("checkIn").querySelector(".check-in-buttons");

btnYes.addEventListener("click", () => {
  checkInAnswer.textContent = "Parfait. On garde ce cap-là. 🙌";
});

function dodgeNo() {
  const rect = checkInButtons.getBoundingClientRect();
  const maxX = Math.max(0, rect.width - 90);
  const x = Math.random() * maxX;
  btnNo.style.position = "absolute";
  btnNo.style.left = x + "px";
  btnNo.style.top = (Math.random() * 10) + "px";
}

btnNo.addEventListener("mouseenter", dodgeNo);
btnNo.addEventListener("touchstart", (e) => { e.preventDefault(); dodgeNo(); });
btnNo.addEventListener("click", () => {
  checkInAnswer.textContent = "Non ? Non n'existe pas ici, désolé.";
});

const wheel = document.getElementById("wheel");
const spinBtn = document.getElementById("spinBtn");
const wheelResult = document.getElementById("wheelResult");
let wheelRotation = 0;

spinBtn.addEventListener("click", () => {
  spinBtn.disabled = true;
  wheelResult.textContent = "";
  wheelRotation += 1440 + Math.floor(Math.random() * 360);
  wheel.style.transform = "rotate(" + wheelRotation + "deg)";
  setTimeout(() => {
    wheelResult.textContent = pick(wheelReasons);
    spinBtn.disabled = false;
    launchConfetti(30);
  }, 3300);
});

const gameArea = document.getElementById("gameArea");
const gameStart = document.getElementById("gameStart");
const gameScoreEl = document.getElementById("gameScore");
const gameTimerEl = document.getElementById("gameTimer");
const gameResult = document.getElementById("gameResult");
let gameScore = 0;
let gameSpawnInterval = null;
let gameCountdown = null;

function spawnCloud() {
  const cloud = document.createElement("button");
  cloud.className = "cloud";
  cloud.type = "button";
  cloud.textContent = "☁️";
  cloud.setAttribute("aria-label", "nuage");
  const areaWidth = gameArea.clientWidth;
  const x = Math.random() * Math.max(0, areaWidth - 50);
  cloud.style.left = x + "px";
  const duration = 3.5 + Math.random() * 2.5;
  cloud.style.animationDuration = duration + "s";
  gameArea.appendChild(cloud);

  const removeTimeout = setTimeout(() => cloud.remove(), duration * 1000 + 50);

  cloud.addEventListener("click", () => {
    if (cloud.classList.contains("popped")) return;
    cloud.classList.add("popped");
    clearTimeout(removeTimeout);
    const cx = cloud.offsetLeft + 20;
    const cy = cloud.offsetTop + 20;
    cloud.textContent = "⭐";
    cloud.style.transform = "scale(1.3)";
    gameScore += 1;
    gameScoreEl.textContent = gameScore;

    const word = document.createElement("span");
    word.className = "star-word";
    word.textContent = pick(cloudWords);
    word.style.left = cx + "px";
    word.style.top = cy + "px";
    gameArea.appendChild(word);

    setTimeout(() => { cloud.remove(); }, 500);
    setTimeout(() => { word.remove(); }, 1200);
  });
}

gameStart.addEventListener("click", () => {
  gameArea.innerHTML = "";
  gameScore = 0;
  gameScoreEl.textContent = "0";
  gameResult.textContent = "";
  gameStart.disabled = true;

  let timeLeft = 20;
  gameTimerEl.textContent = timeLeft + "s";
  gameSpawnInterval = setInterval(spawnCloud, 700);
  gameCountdown = setInterval(() => {
    timeLeft -= 1;
    gameTimerEl.textContent = timeLeft + "s";
    if (timeLeft <= 0) {
      clearInterval(gameSpawnInterval);
      clearInterval(gameCountdown);
      gameArea.querySelectorAll(".cloud").forEach((c) => c.remove());
      gameStart.disabled = false;
      gameResult.textContent = "Score : " + gameScore + " nuages détruits. Moral : probablement remonté.";
    }
  }, 1000);
});

const hugBtn = document.getElementById("hugImage");
const hugCount = document.getElementById("hugCount");
const hugMessage = document.getElementById("hugMessage");
const hugMessages = [
  "Câlin livré avec succès.",
  "Un câlin de plus, aucune limite ici.",
  "Câlin virtuel niveau expert reçu.",
  "Ce câlin était gratuit. Le prochain aussi.",
  "Livraison de câlin effectuée sans encombre."
];
let hugTotal = 0;

hugBtn.addEventListener("click", () => {
  hugTotal += 1;
  hugCount.textContent = hugTotal + (hugTotal > 1 ? " câlins distribués" : " câlin distribué");
  hugMessage.textContent = pick(hugMessages);
});

const emergencyBtn = document.getElementById("emergencyBtn");
const emergencyPanel = document.getElementById("emergencyPanel");

emergencyBtn.addEventListener("click", () => {
  const willShow = emergencyPanel.hidden;
  emergencyPanel.hidden = !willShow;
  if (willShow) emergencyPanel.scrollIntoView({ behavior: "smooth", block: "center" });
});

const breathingLabel = document.getElementById("breathingLabel");
function runBreathingCycle() {
  breathingLabel.textContent = "Inspire";
  setTimeout(() => { breathingLabel.textContent = "Bloque"; }, 4000);
  setTimeout(() => { breathingLabel.textContent = "Expire"; }, 8000);
}
runBreathingCycle();
setInterval(runBreathingCycle, 14000);

const songBtn = document.getElementById("songBtn");
const bffSong = document.getElementById("bffSong");
let songPlaying = false;
bffSong.addEventListener("ended", () => {
  songBtn.textContent = "▶ Écouter";
  songPlaying = false;
});

songBtn.addEventListener("click", () => {
  if (songPlaying) {
    bffSong.pause();
    songBtn.textContent = "▶ Écouter";
    songPlaying = false;
    return;
  }
  bffSong.play().catch(() => {});
  songBtn.textContent = "⏸ Pause";
  songPlaying = true;
});

const envelope = document.getElementById("envelope");
const letter = document.getElementById("letter");

function openEnvelope() {
  const isOpen = envelope.classList.toggle("open");
  envelope.setAttribute("aria-expanded", isOpen ? "true" : "false");
  letter.hidden = !isOpen;
  if (isOpen) launchConfetti(25);
}

envelope.addEventListener("click", openEnvelope);
envelope.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    openEnvelope();
  }
});

const noClickBtn = document.getElementById("noClickBtn");
const noPressBtn = document.getElementById("noPressBtn");
const easterGif = document.getElementById("easterGif");

noClickBtn.addEventListener("click", () => {
  noClickBtn.textContent = "T'as cliqué. Fidèle à toi-même.";
});

noPressBtn.addEventListener("click", () => {
  easterGif.hidden = false;
  easterGif.innerHTML = "";
  easterGif.appendChild(gifNode(surpriseGif));
});

const secretOverlay = document.getElementById("secretOverlay");
const secretMessage = document.getElementById("secretMessage");
document.getElementById("secretClose").addEventListener("click", () => { secretOverlay.hidden = true; });

let typedBuffer = "";
function normalize(str) {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

window.addEventListener("keydown", (e) => {
  if (e.key.length !== 1) return;
  typedBuffer = (typedBuffer + e.key).slice(-20);
  const buf = normalize(typedBuffer);
  if (buf.includes("mickaela")) {
    launchConfetti(90);
    typedBuffer = "";
  }
  if (buf.includes("teamqg")) {
    secretMessage.textContent = "Message secret : tu as trouvé le code. Ça ne change rien au fait que je suis fier ou fière de toi tous les jours, code ou pas code.";
    secretOverlay.hidden = false;
    typedBuffer = "";
  }
});
