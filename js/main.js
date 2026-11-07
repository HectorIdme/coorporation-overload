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
    "nav.home": "Home", "nav.job": "The job", "nav.manual": "How to play", "nav.video": "Gameplay", "nav.chaos": "The chaos",
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
    "job.d1.text": "Clock in, sit at your PC and accept tasks from your inbox: water the carnivorous plant, unclog the singing toilet, calm down the Biting PC… Every task finished on time scores points.",
    "job.d2.bar": "Warning: suspicious activity", "job.d2.title": "Sabotage your coworkers",
    "job.d2.text": "Coffee on someone else's PC, mugs flying through the air, punches in the back. Your tasks give you the perfect excuse to walk past their desk.",
    "job.d3.bar": "A note from management", "job.d3.title": "Be employee of the month",
    "job.d3.text": "At the end of the week, whoever has the most points takes the podium with a crown and a cape. Everyone else: report to HR.",
    "man.memo": "Memo #0002-B", "man.from": "From: New hire training",
    "man.title": "Employee handbook",
    "man.lead": "Everything you need to survive your first week at Coorporation Inc. Read it all: your coworkers won't.",
    "man.1.t": "One week at the office",
    "man.1.x": "Five workdays. Every morning you get a few seconds to reach your PC and pick your tasks. Then the workday starts… and at closing time, points are handed out.",
    "man.2.t": "Tasks arrive by email",
    "man.2.x": "Accept the ones you want: water a plant, reboot a PC, unclog the bathroom. Each one has a deadline. Finish it on time and you score; miss it and you lose points.",
    "man.3.t": "Sabotage on the sly",
    "man.3.x": "Coffee on someone else's PC and… blue screen. They can't work until it's rebooted. And if someone sees you nearby, relax: you had a task right there.",
    "man.4.t": "Everything is throwable",
    "man.4.x": "Mugs, paper balls, the mop. Hold to charge the throw and release to let it fly. Empty-handed? A good punch works too.",
    "man.5.t": "Coworkers who remember",
    "man.5.x": "The office is full of coworkers with their own routines: their coffee, their PC, their plant. Mess with them and they'll remember you… and hit you back.",
    "man.6.t": "Objects with a life of their own",
    "man.6.x": "A PC with legs that bites, a toilet that sings opera, a carnivorous plant that hides a code in its antennae. Your tasks will lead you to them… or they'll find you first.",
    "man.7.t": "Nothing stays put",
    "man.7.x": "Stains move every morning and, every now and then, a gold bar shows up. Throw it in time: it leaves anyone seeing little birds.",
    "man.8.t": "Friday means podium",
    "man.8.x": "Whoever scores the most points takes the podium with a crown and a cape. And to celebrate: a free-for-all with toy weapons. Frying pan, lollipop and the odd bomb.",
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
    "chaos.r3t": "Some objects wake up when someone has their task: the PC that bites, the tenor toilet, the carnivorous plant.",
    "chaos.foot": "Press any key to keep sabotaging",
    "gal.memo": "Memo #0004", "gal.from": "Tech support", "gal.title": "Reported incidents",
    "gal.lead": "Real in-game screenshots. Tap any of them to see it full size.",
    "gal.p1": "Priority: critical", "gal.p2": "Priority: high", "gal.p3": "Priority: bites", "gal.p4": "Priority: normal",
    "gal.p5": "Priority: hungry", "gal.p6": "Priority: high", "gal.p7": "Priority: high C", "gal.p8": "Priority: info", "gal.p9": "Status: room full",
    "gal.p10": "Priority: shiny", "gal.p11": "Status: winner",
    "gal.t1": "Chaos at the office", "gal.x1": "A coffee mid-flight, a PC already smoking and the whole office around it. Just another Tuesday.",
    "gal.t2": "Short circuit", "gal.x2": "Someone spilled coffee on a coworker's PC. By accident, of course.",
    "gal.t3": "The Biting PC", "gal.x3": "It walks, it hunts, it bites. At least it leaves a band-aid.",
    "gal.t4": "Your PC, your tasks", "gal.x4": "Tasks arrive in your inbox. Accept, finish, score.",
    "gal.t5": "The carnivorous plant", "gal.x5": "Three heads, a code in its antennae and a big appetite. Feed it before it picks its own lunch.",
    "gal.t6": "Flying mug", "gal.x6": "Anything you can hold, you can throw.",
    "gal.t7": "The tenor toilet", "gal.x7": "It sings opera at the top of its lungs. Unclog it… if you dare.",
    "gal.t8": "The menu is the office", "gal.x8": "Create a room from the monitor or join with a code at the copier.",
    "gal.t9": "Room full", "gal.x9": "Gather your office online and pick a department: IT Support or Legal & HR.",
    "gal.t10": "Golden K.O.", "gal.x10": "A gold bar shows up at random. Whoever takes it to the head sees little birds.",
    "gal.t11": "Employee of the month", "gal.x11": "At the end of the week, the podium: crown and cape for first place, a party hat for third.",
    "gal.a1": "The office full of employees while someone throws a coffee and a PC smokes",
    "gal.a2": "A PC with a blue screen after a short circuit; its owner jumps out of the chair",
    "gal.a3": "A computer with legs bares its teeth at an employee falling to the floor",
    "gal.a4": "An employee at their PC with the inbox and today's task list",
    "gal.a5": "A three-headed carnivorous plant opens its mouths at a frightened employee",
    "gal.a6": "An employee throws a mug that shatters on another's head in the cafeteria",
    "gal.a7": "A toilet with a mustache and a bow tie sings surrounded by musical notes",
    "gal.a8": "The main menu: a miniature office with a copier and monitors",
    "gal.a9": "The waiting room with six players' names on their desks",
    "gal.a10": "An employee knocked out on the floor with little birds, next to a gold bar",
    "gal.a11": "Three employees on a podium with a crown, a cape and medals while others celebrate",
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
