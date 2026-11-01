/* Coorporation Overload - comportamiento de la web (sin dependencias). */
(function () {
  "use strict";

  var CFG = window.SITE_CONFIG || {};
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  // ---------------------------------------------------------------- idioma
  // El espanol esta escrito en el HTML; aqui solo va el ingles.
  var EN = {
    "skip": "Skip to content",
    "start": "Start",
    "nav.home": "Home", "nav.job": "The job", "nav.video": "Gameplay", "nav.chaos": "The chaos",
    "nav.gallery": "Screenshots", "nav.sheet": "Fact sheet", "nav.beta": "Beta on Steam",
    "hero.memo": "Internal memo #0001", "hero.to": "To: all staff", "hero.subject": "Subject: urgent",
    "hero.t1": "Do your tasks.", "hero.t2": "Sabotage your coworkers.", "hero.t3": "Be <em>employee of the month</em>.",
    "hero.watch": "Watch gameplay", "hero.beta": "Beta coming soon to Steam",
    "hero.sticker": "Up to 8 players · Online", "hero.down": "Scroll down",
    "mug.aria": "Throw coffee at the PC", "mug.tip": "Don't do it.",
    "job.memo": "Memo #0002", "job.from": "From: Human Resources",
    "job.title": "Wanted: employee of the month",
    "job.lead": "<b>Coorporation Overload</b> is an online party game for up to 8 players, set in an office where everyone wants the same job. Finish your tasks to score points… and make sure nobody else can finish theirs.",
    "job.d1.bar": "Mail: today's agenda", "job.d1.title": "Do your tasks",
    "job.d1.text": "Clock in, sit at your PC and accept tasks from your inbox: reboot the router, fetch coffee, calm down the Biting PC… Every finished task scores points.",
    "job.d2.bar": "Warning: suspicious activity", "job.d2.title": "Sabotage your coworkers",
    "job.d2.text": "Coffee on someone else's PC, mugs flying through the air, punches in the back. Your tasks give you the perfect excuse to walk past their desk.",
    "job.d3.bar": "A note from management", "job.d3.title": "Be employee of the month",
    "job.d3.text": "Whoever ends the workday with the most points gets the title (and the photo on the wall). Everyone else: report to HR.",
    "req.title": "Job requirements",
    "req.1": "Good aim with coffee mugs", "req.2": "Zero remorse",
    "req.3": "Tolerance for toilets that sing opera", "req.4": "1 to 7 coworkers willing to lose your friendship",
    "video.memo": "Memo #0003", "video.from": "Security footage",
    "video.title": "Watch a normal day at the office", "video.bar": "Media player",
    "video.c1": "Tasks on the PC", "video.c2": "Coffee on a coworker's PC", "video.c3": "Punches",
    "video.c4": "Flying mugs", "video.c5": "A PC that bites", "video.c6": "A toilet that sings opera",
    "video.c7": "Partying on company time",
    "chaos.title": "Your PC ran into a short circuit.",
    "chaos.lead": "Objects in this office have a personality. They get wet, they break, they malfunction… and some come alive. Combine them and see what happens:",
    "chaos.r1a": "Coffee", "chaos.r1b": "PC", "chaos.r1c": "Short circuit",
    "chaos.r1t": "Blue screen, smoke and sparks. Its owner flies out of the chair and nobody can use it until it's rebooted.",
    "chaos.r2a": "Mug", "chaos.r2b": "Head", "chaos.r2c": "Knockdown",
    "chaos.r2t": "Anything you can hold, you can throw. Charge the shot, aim, and say goodbye to the mug.",
    "chaos.r3a": "Task", "chaos.r3b": "Old PC", "chaos.r3c": "Biting PC",
    "chaos.r3t": "Some objects wake up when someone has their task: the PC that bites, the bottomless filing cabinet, the tenor toilet.",
    "chaos.foot": "Press any key to keep sabotaging",
    "gal.memo": "Memo #0004", "gal.from": "Tech support", "gal.title": "Reported incidents",
    "gal.lead": "Real in-game screenshots. Tap any of them to see it full size.",
    "gal.p1": "Priority: critical", "gal.p2": "Priority: high", "gal.p3": "Priority: bites", "gal.p4": "Priority: normal",
    "gal.p5": "Priority: ???", "gal.p6": "Priority: high", "gal.p7": "Priority: none", "gal.p8": "Priority: info", "gal.p9": "Status: room full",
    "gal.t1": "Chaos at the office", "gal.x1": "A punch in the back and a PC smoking in the background. Just another Tuesday.",
    "gal.t2": "Short circuit", "gal.x2": "Someone spilled coffee on a coworker's PC. By accident, of course.",
    "gal.t3": "The Biting PC", "gal.x3": "This computer bites. There's a task to calm it down.",
    "gal.t4": "Your PC, your tasks", "gal.x4": "Tasks arrive in your inbox. Accept, finish, score.",
    "gal.t5": "The bottomless filing cabinet", "gal.x5": "Three drawers, only one is right. Miss, and the papers fly.",
    "gal.t6": "Flying mug", "gal.x6": "Anything you can hold, you can throw.",
    "gal.t7": "Partying on company time", "gal.x7": "Dancing counts as an active break.",
    "gal.t8": "The menu is the office", "gal.x8": "Create a room from the monitor or join with a code at the copier.",
    "gal.t9": "Room full", "gal.x9": "Gather your office online and pick a department: IT Support or Legal & HR.",
    "gal.a1": "An employee punches another in the back while a PC smokes in the background",
    "gal.a2": "A PC showing a blue screen after a short circuit",
    "gal.a3": "An old computer with teeth scares an employee",
    "gal.a4": "The PC inbox showing today's task agenda",
    "gal.a5": "An employee in front of a filing cabinet with papers flying out",
    "gal.a6": "A mug flies toward an employee's head in the cafeteria",
    "gal.a7": "Three employees dance in the break room",
    "gal.a8": "The main menu: a miniature office with a copier and monitors",
    "gal.a9": "The waiting room with six players' desks",
    "sheet.memo": "Memo #0005", "sheet.from": "Notice board", "sheet.title": "Fact sheet",
    "sheet.badge": "Employee ID", "sheet.genre": "Genre", "sheet.genre.v": "Competitive party game",
    "sheet.players": "Players", "sheet.players.v": "Up to 8, online", "sheet.platform": "Platform",
    "sheet.platform.v": "PC (Steam)", "sheet.status": "Status", "sheet.status.v": "Beta coming soon",
    "sheet.cam": "Camera", "sheet.cam.v": "First and third person", "sheet.studio": "Studio",
    "sheet.download": "Download poster",
    "sheet.poster.alt": "Coorporation Overload poster: two employees celebrate while a PC smokes",
    "beta.memo": "Form 0006-B", "beta.from": "Access request", "beta.title": "The beta is coming soon to Steam",
    "beta.lead": "We're getting the first PC beta ready. Gather your office: you'll need coworkers to sabotage.",
    "beta.soon": "Steam page on its way", "beta.go": "Wishlist on Steam", "beta.stamp": "Coming soon",
    "foot.top": "Back to top", "foot.made": "Coorporation Overload is a game in development.",
    "crash.title": "Your browser ran into a short circuit.",
    "crash.text": "Someone threw coffee at this page. Exactly what you'd do in the game.",
    "crash.hint": "Press any key or tap the screen to restart",
    "meta.title": "Coorporation Overload · Office sabotage party game",
    "meta.desc": "Do your tasks. Sabotage your coworkers. Be employee of the month. Online party game for up to 8 players on PC. Beta coming soon to Steam.",
    "a.close": "Close", "a.prev": "Previous", "a.next": "Next", "a.play": "Play gameplay video", "a.chips": "In the video"
  };

  var ES = {}; // se rellena leyendo el HTML la primera vez
  var current = "es";

  function snapshotSpanish() {
    $$("[data-i18n]").forEach(function (el) { ES[el.dataset.i18n] = el.innerHTML; });
    $$("[data-i18n-alt]").forEach(function (el) { ES[el.dataset.i18nAlt] = el.getAttribute("alt"); });
    $$("[data-i18n-aria]").forEach(function (el) { ES[el.dataset.i18nAria] = el.getAttribute("aria-label"); });
    ES["meta.title"] = document.title;
    ES["meta.desc"] = $('meta[name="description"]').content;
    ES["beta.go"] = "Añadir a la lista de deseados en Steam";
    ES["a.close"] = "Cerrar"; ES["a.prev"] = "Anterior"; ES["a.next"] = "Siguiente";
    ES["a.play"] = "Reproducir el video de gameplay"; ES["a.chips"] = "En el video";
  }

  function t(key) { var d = current === "en" ? EN : ES; return d[key] != null ? d[key] : ES[key]; }

  function setLang(lang) {
    current = lang === "en" ? "en" : "es";
    document.documentElement.lang = current;
    $$("[data-i18n]").forEach(function (el) { var v = t(el.dataset.i18n); if (v != null) el.innerHTML = v; });
    $$("[data-i18n-alt]").forEach(function (el) { el.setAttribute("alt", t(el.dataset.i18nAlt)); });
    $$("[data-i18n-aria]").forEach(function (el) { el.setAttribute("aria-label", t(el.dataset.i18nAria)); });
    document.title = t("meta.title");
    $('meta[name="description"]').content = t("meta.desc");
    $("#viewerClose").setAttribute("aria-label", t("a.close"));
    $("#viewerPrev").setAttribute("aria-label", t("a.prev"));
    $("#viewerNext").setAttribute("aria-label", t("a.next"));
    $(".chips").setAttribute("aria-label", t("a.chips"));
    var facade = $(".player__facade"); if (facade) facade.setAttribute("aria-label", t("a.play"));
    $$(".lang button").forEach(function (b) { b.setAttribute("aria-pressed", String(b.dataset.lang === current)); });
    setupSteam();
    try { localStorage.setItem("co_lang", current); } catch (e) { /* sin almacenamiento */ }
  }

  function initialLang() {
    var q = new URLSearchParams(location.search).get("lang");
    if (q === "en" || q === "es") return q;
    try { var s = localStorage.getItem("co_lang"); if (s) return s; } catch (e) { /* nada */ }
    return (navigator.language || "es").toLowerCase().indexOf("es") === 0 ? "es" : "en";
  }

  // ---------------------------------------------------------------- menu Inicio
  function setupStartMenu() {
    var btn = $("#startBtn"), menu = $("#startMenu");
    function close() { menu.hidden = true; btn.setAttribute("aria-expanded", "false"); }
    btn.addEventListener("click", function (e) {
      e.stopPropagation();
      var open = menu.hidden;
      menu.hidden = !open;
      btn.setAttribute("aria-expanded", String(open));
      if (open) { var first = $("a", menu); if (first) first.focus(); }
    });
    menu.addEventListener("click", function (e) { if (e.target.closest("a")) close(); });
    document.addEventListener("click", function (e) { if (!menu.hidden && !menu.contains(e.target)) close(); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape" && !menu.hidden) { close(); btn.focus(); } });
  }

  // ---------------------------------------------------------------- reloj de oficina
  function setupClock() {
    var el = $("#clock");
    function tick() {
      var d = new Date();
      el.textContent = d.getHours() + ":" + String(d.getMinutes()).padStart(2, "0");
    }
    tick(); setInterval(tick, 15000);
  }

  // ---------------------------------------------------------------- video
  function youtubeId(url) {
    if (!url) return "";
    var m = String(url).match(/(?:youtu\.be\/|v=|\/embed\/|\/shorts\/|\/live\/)([A-Za-z0-9_-]{11})/);
    return m ? m[1] : (/^[A-Za-z0-9_-]{11}$/.test(url) ? url : "");
  }

  function setupVideo() {
    var box = $("#player"), v = CFG.gameplay || {};
    var id = youtubeId(v.youtube);
    if (id) {
      // Fachada ligera: solo carga YouTube al pulsar
      var b = document.createElement("button");
      b.type = "button";
      b.className = "player__facade";
      b.setAttribute("aria-label", t("a.play"));
      b.style.backgroundImage = "url('https://i.ytimg.com/vi/" + id + "/maxresdefault.jpg'), url('" + (v.poster || "") + "')";
      b.addEventListener("click", function () {
        var f = document.createElement("iframe");
        f.src = "https://www.youtube-nocookie.com/embed/" + id + "?autoplay=1&rel=0";
        f.title = "Coorporation Overload - gameplay";
        f.allow = "autoplay; encrypted-media; picture-in-picture; fullscreen";
        f.allowFullscreen = true;
        box.replaceChildren(f);
      });
      box.replaceChildren(b);
    } else if (v.file) {
      var video = document.createElement("video");
      video.controls = true;
      video.preload = "metadata";
      video.playsInline = true;
      if (v.poster) video.poster = v.poster;
      video.src = v.file;
      box.replaceChildren(video);
    }
  }

  // ---------------------------------------------------------------- Steam
  function setupSteam() {
    var a = $("#steamBtn"), label = $("#steamLabel");
    if (CFG.steamUrl) {
      a.href = CFG.steamUrl;
      a.target = "_blank";
      a.rel = "noopener";
      a.removeAttribute("aria-disabled");
      label.innerHTML = t("beta.go");
    }
  }

  // ---------------------------------------------------------------- visor de capturas
  function setupViewer() {
    var dlg = $("#viewer");
    var links = $$("#tickets a");
    if (!dlg || typeof dlg.showModal !== "function") return; // sin <dialog>: los enlaces abren la imagen
    var i = 0;
    function show(n) {
      i = (n + links.length) % links.length;
      var a = links[i], img = $("img", a);
      $("#viewerImg").src = a.getAttribute("href");
      $("#viewerImg").alt = img.alt;
      $("#viewerTitle").textContent = $(".ticket__head b", a).textContent + " · " + $(".ticket__title", a).textContent;
      $("#viewerCaption").textContent = $(".ticket__text", a).textContent;
    }
    links.forEach(function (a, n) {
      a.addEventListener("click", function (e) { e.preventDefault(); show(n); dlg.showModal(); });
    });
    $("#viewerClose").addEventListener("click", function () { dlg.close(); });
    $("#viewerPrev").addEventListener("click", function () { show(i - 1); });
    $("#viewerNext").addEventListener("click", function () { show(i + 1); });
    dlg.addEventListener("click", function (e) { if (e.target === dlg) dlg.close(); });
    dlg.addEventListener("keydown", function (e) {
      if (e.key === "ArrowLeft") show(i - 1);
      if (e.key === "ArrowRight") show(i + 1);
    });
    // Deslizar en movil
    var x0 = null;
    dlg.addEventListener("touchstart", function (e) { x0 = e.touches[0].clientX; }, { passive: true });
    dlg.addEventListener("touchend", function (e) {
      if (x0 == null) return;
      var dx = e.changedTouches[0].clientX - x0; x0 = null;
      if (Math.abs(dx) > 50) show(i + (dx < 0 ? 1 : -1));
    });
  }

  // ---------------------------------------------------------------- huevo de pascua: la taza
  function setupMug() {
    var mug = $("#mug"), crash = $("#crash");
    var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    function restore() {
      crash.hidden = true;
      mug.classList.remove("is-thrown");
      document.removeEventListener("keydown", restore);
      mug.focus();
    }
    mug.addEventListener("click", function () {
      mug.classList.add("is-thrown");
      setTimeout(function () {
        document.body.classList.add("is-crashing");
        crash.hidden = false;
        setTimeout(function () {
          document.body.classList.remove("is-crashing");
          document.addEventListener("keydown", restore);
        }, 400);
      }, reduced ? 0 : 520);
    });
    crash.addEventListener("click", function () { if (!document.body.classList.contains("is-crashing")) restore(); });
  }

  // ---------------------------------------------------------------- arranque
  snapshotSpanish();
  setupStartMenu();
  setupClock();
  setupVideo();
  setupViewer();
  setupMug();
  $$(".lang button").forEach(function (b) { b.addEventListener("click", function () { setLang(b.dataset.lang); }); });
  setLang(initialLang());
})();
