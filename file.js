// Sorry for the mess of code its so useless haha
// it was minified and deminified like 5x
// woopsie for me i guess T-T

(() => {
 let e = document.querySelector("iframe");
 if ((e || (((e = document.createElement("iframe")).style.display = "none"), document.body.append(e)), "function call() { [native code] }" == window.fetch.call.toString())) {
  const e = window.fetch.call;
  window.fetch.call = function () {
   if (!arguments[1].includes("s.blooket.com/rc")) return e.apply(this, arguments);
  };
 }
 const t = 1732772258234;
 let a = -1;
 const o = async () => {
  const e = document.createElement("div"),
   o =
    (Object.assign(e.style, { top: window.innerHeight / 2 - 250 + "px", left: innerWidth / 2 - 400 + "px" }),
    { "--highlight": "#00A2FF", "--highlight2": "#4F4789", "--background": "#0A0A13", "--background2": "#151529", "--textColor": "#FFFFFF", "--textColor2": "#564CA2", "--toggleOff": "#E32424", "--toggleOn": "#24E324" });
  let n = "JGUI.goober";
  const r = {
    data: null,
    setItem(e, t) {
     return e.split(".").reduce((e, a, o, n) => (++o == n.length && (e[a] = t), a in e ? e[a] : (e[a] = {})), this.data), localStorage.setItem(n, JSON.stringify(this.data)), t;
    },
    deleteItem(e) {
     return e.split(".").reduce((e, t, a, o) => (++a == o.length && delete e[t], e[t]), this.data), localStorage.setItem(n, JSON.stringify(this.data)), this.data;
    },
    setData(e) {
     (this.data = e), localStorage.setItem(n, JSON.stringify(this.data));
    },
   },
   s = { ctrl: !0, shift: !1, alt: !1, key: "e" },
   i = { ctrl: !0, shift: !1, alt: !1, key: "x" };
  for (const t in o) e.style.setProperty(t, o[t]);
  try {
   r.data = JSON.parse(localStorage.getItem(n) || "{}");
  } catch {
   localStorage.setItem(n, "{}"), (r.data = {});
  } finally {
   for (const t in r.data.theme || {}) e.style.setProperty("--" + t, r.data.theme[t]);
   (r.data.hideKey ??= s), (r.data.closeKey ??= i);
  }
  var l = document.createElement("style");
  const c = {},
   d = {};
  (l.innerHTML =
   "@import url('https://fonts.googleapis.com/css?family=Inconsolata');\n@import url('https://fonts.googleapis.com/css?family=Inconsolata');" +
   '.bigTextContainer,.version{align-items:center;user-select:none}.cheatsList>div,.settingsPage>div{padding:5px 10px}.gamemode,.gui,.leaderboardList,.sidebar{box-sizing:border-box}.controls>div,.credit,.pathText,.runCheat,.sidebarPath,.version{user-select:none}.noScroll::-webkit-scrollbar{display:none}.noScroll{-ms-overflow-style:none;scrollbar-width:none}.gui{position:fixed;z-index:100;background:var(--background);height:400px;width:650px;color:#fff;box-shadow:2px 2px 2px #000a;padding-left:50px;font-size:16px}.controls,.credit,.gamemodesList,.guiContent,.guiTopBar,.sidebar,.sidebarShadow,.version{position:absolute}.sidebarShadow{inset:0;background:#000;opacity:0%;pointer-events:none;transition:.2s;z-index:9}.controls>div,.guiContent,.sidebar,select[data-type] option{background:var(--background2)}.sidebarShadow:has(~ .sidebar:hover){opacity:40%}.credit{bottom:0;left:0;right:0;height:0;transition:.1s;overflow:hidden;text-align:center}.sidebar{top:0;left:0;height:100%;width:50px;transition:.2s 0.1s;z-index:10;overflow-x:hidden;padding-bottom:30px}.sidebar:hover{width:200px;transition-delay:0s}.sidebar:hover>.credit{height:25px;transition:.4s 0.2s}.guiContent{inset:20px;left:70px;top:40px;z-index:1;padding-top:32px}.guiTopBar{z-index:1;top:0;left:50px;right:0;height:25px}.version{top:0;left:0;margin-inline:10px;color:#888;font-size:.9em;letter-spacing:.5px;height:100%;display:flex}.controls{top:0;right:0;display:grid;grid-template-columns:1fr 1fr 1fr;height:25px;width:122px;gap:1px;border:1px solid var(--background);z-index:2}.controls>div{display:grid;place-items:center;font-weight:100}.closeControl{transition:.1s}.closeControl:hover{background:red}.creditsPage,.gamemodesPage,.searchPage{position:absolute;inset:0;top:32px}.gamemodesList{display:grid;gap:0 30px;padding-inline:30px;margin-top:0;padding-top:15px;margin-bottom:0;grid-template-columns:1fr 1fr;overflow-y:scroll;inset:0}.leaderboardPage,.logsPage{inset:10px;position:absolute}.pathText{position:absolute;top:40px;left:70px;right:20px;z-index:3;padding:7px 10px;height:22px}.clearLogsButton,.refreshControl{z-index:5;place-items:center;cursor:pointer}.leaderboardPage{top:42px}.leaderboardList{list-style:none;margin:0;padding:20px 40px 10px;height:100%;overflow:scroll;font-size:1.5em}.logsPage{top:37px;background:#000d;border-radius:2.5px}.logMessages{list-style:none;margin:10px;padding:0;display:flex;flex-direction:column-reverse;overflow-y:scroll;word-wrap:break-word;position:absolute;inset:0}.clearLogsButton{position:absolute;top:5px;right:5px;width:25px;height:25px;display:grid;scale:-1 1 1;transition:.2s}.searchbarHolder{display:flex;outline:2px solid var(--highlight);margin:10px 20px;height:30px;font-size:2em}.searchbarInput{outline:0;border:none;background:0 0;color:#fff;flex:1;font-size:.5em;font-family:Nunito;padding-inline:5px}.gamemode,.settingsPage>div{border-radius:2.5px;background:var(--background)}.searchbarButton{color:#fff;font-size:.6em;aspect-ratio:1/1;height:30px;display:grid;place-items:center;cursor:pointer}.bigText,.bigTextContainer{height:50px;width:200px;font-family:Titan One}.searchResults{position:absolute;inset:0;top:45px;padding-inline:20px;overflow-y:scroll}.favoritesPage,.settingsPage{inset:0;top:32px;overflow-y:scroll;position:absolute}.noResult{margin:20px 10px;font-size:.85em}.clearLogsButton:hover,.licenseMessage{font-size:1.25em}.favoritesPage{padding-block:10px;padding-inline:20px}.licenseMessage{font-weight:900;padding-inline:20px;margin-top:10px}.copyrightTag{font-size:.7em;font-weight:200;position:absolute;bottom:0;left:0;padding:5px 8px}.codingCredits,.creditLinks,.uploadDates{list-style:none;padding-inline:20px;margin-block:16px}.settingsPage{padding:10px;display:flex;flex-direction:column;gap:10px}.sidebarPaths{display:flex;flex-direction:column;width:200px}.bigTextContainer{display:flex;font-size:2em;margin-block:10px;transition:font-size .2s .1s,margin-block .2s .1s}.bigText{display:flex;align-items:center;justify-content:center}.refreshControl{position:absolute;top:45px;right:25px;width:25px;height:25px;display:grid}.gamemode{width:100%;height:200px;margin-bottom:30px;cursor:pointer;display:flex;justify-content:center;align-items:center;padding-top:10px;position:relative;overflow:hidden;padding-bottom:35px;transition:.4s}.contentPage,.gamemode>div{position:absolute;bottom:0}.gamemode:hover{box-shadow:0 0 10px var(--highlight);transition:.2s}.gamemode>img{width:85%;max-width:100%;max-height:100%}.gamemode>div{left:0;right:0;height:25px;background:var(--highlight);display:flex;justify-content:center;align-items:center;box-shadow:0 -5px 5px #0004;font-weight:800;font-size:1.1em;transition:.25s}.contentPage{inset-inline:0;top:35px}.cheatsList{display:flex;flex-direction:column;height:100%;overflow-y:scroll;padding-inline:10px}.cheatToggle,.cheatToggle>.toggleTrigger,.runCheat{height:35px;border-radius:2.5px}.cheatsList>div{display:grid;margin-bottom:10px;position:relative;background:var(--background);border-radius:2.5px}.cheatInfo,.cheatInputs,.cheatName,.cheatTop,.logMessage>span,.runCheat,.sidebarPath,.sidebarPath>i{display:flex}.cheatInfo{flex-direction:column;flex:1}.cheatName{font-size:1.5em;font-weight:700}.cheatDescription{font-size:.8em;margin-right:25px}.runCheat{--buttonColor:var(--highlight);width:20%;background:var(--buttonColor);margin-block:auto;cursor:pointer;align-items:center;justify-content:center;font-weight:800;transition:.5s;color:#fff!important}.runCheat:hover{box-shadow:0 0 10px 0 var(--buttonColor);transition:.3s}.runCheat:active{box-shadow:0 0 0 0 var(--buttonColor);transition:50ms}.cheatInputs{margin:5px 0 5px 5px;flex-direction:column;gap:5px}.searchResult,.standing{margin-bottom:10px;transition:.2s}.creditsPage>ul>li>strong,.logMessage img,.standingBlook{margin-right:5px}.cheatInputs>div{display:flex;flex-direction:row;font-size:.8rem;color:var(--highlight);font-weight:700;align-items:center}.cheatInputs>div>span{flex:1}.cheatToggle{width:20%;background:var(--highlight2);margin-block:auto;cursor:pointer;position:relative}.cheatToggle>.toggleTrigger{width:45px;position:absolute;top:0;left:0;background:var(--highlight);pointer-events:none;transition:left .2s,box-shadow .5s;z-index:1}.cheatToggle:hover>.toggleTrigger{box-shadow:0 0 10px 0 var(--highlight);transition:left .2s,box-shadow .2s}.toggleTrigger.active{left:calc(100% - 45px)}.toggleColor{position:absolute;inset:10px 20px;background:rgb(from var(--toggleOff) r g b / 25%);border-radius:2.5px;transition:.2s}.toggleTrigger.active+.toggleColor{background:rgb(from var(--toggleOn) r g b / 25%)}input[data-type],select[data-type]{width:20%;height:25px;outline:0;border:2px solid var(--highlight);box-sizing:border-box;background:0 0;color:#fff;font-size:.9em;padding-left:5px;font-family:Nunito;border-radius:2px;font-weight:800}.logo,.sidebarPath>i{width:50px;height:50px}select[data-type]{-webkit-appearance:none;-moz-appearance:none;text-indent:1px;text-overflow:\'\'}input::placeholder{color:rgb(from var(--textColor) r g b / 50%)}input[data-type]::-webkit-inner-spin-button,input[data-type]::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}input[data-type][type=number]{-moz-appearance:textfield}select[data-type] option{border-radius:0}select[data-type]::-ms-expand{display:none}.sidebarPath{align-items:center;cursor:pointer;transition:.2s 0.1s}.searchResult:hover,.sidebarPath:hover{color:var(--highlight);text-shadow:0 0 5px var(--highlight)}.sidebarPath>i{justify-content:center;align-items:center;font-size:1.5em}.sidebarPath>span{padding-left:5px}.sidebar:hover .sidebarPath{padding-left:20px;transition-delay:0s}.logo{left:0;transition:left .2s .1s;display:grid;place-items:center;min-width:50px;position:absolute}.sidebar:hover .logo{left:28px;transition:left .2s}.bigText{margin-top:-150px;transition:margin-top .1s}.sidebar:hover .bigText{margin-top:0;transition:margin-top .4s 0.1s}.sidebar:hover .bigTextContainer{font-size:2.5em;margin-block:20px;transition:font-size .2s,margin-block .2s}.creditsPage>ul>li>span{color:var(--textColor2);font-weight:800}.creditsPage>ul>li i{margin-inline:2px;line-height:1}.creditsPage a{color:var(--highlight);text-decoration:none}.creditsPage a:hover,.pathPage:hover{text-decoration:underline}.warning{color:var(--highlight2);font-size:.85em}.searchResult{cursor:pointer}.searchResultName{font-weight:800}.searchResultDescription{font-size:.8em}.searchResultSeparator{font-size:1.5em;font-weight:800;margin-block:10px;cursor:pointer;transition:.2s;border-bottom:2px solid #fff;padding-inline:5px;filter:drop-shadow(0px 0px 0px var(--highlight))}.searchResultSeparator:hover{color:var(--highlight);border-bottom:2px solid var(--highlight);filter:drop-shadow(0px 0px 2.5px var(--highlight))}.toggleCheat{--buttonColor:var(--toggleOff)}.toggleCheat.active{--buttonColor:var(--toggleOn)}.logMessage img{height:1em;align-self:center}.standing{display:flex;font-weight:800;align-items:center;position:relative;padding:5px 10px 5px 50px;border-radius:2.5px;background:var(--highlight2)}.standing:before{content:attr(data-place) ".";margin-right:10px}.standing::after{content:attr(data-value);flex:1;text-align:right;font-weight:100}.standing:hover{background:var(--standingColor);box-shadow:0 0 7.5px var(--standingColor)}.standingBlook{height:1.25em;align-self:center;position:absolute;left:10px}.favoriteButton,.favoriteButton>i{transition:.2s;display:grid;place-items:center;width:32px;height:32px}.favoriteButton{font-size:.8em;padding-left:5px;cursor:pointer}.favoriteButton:hover{color:#ff0}.favoriteButton>i{position:absolute;scale:0;transform-origin:50% 55%}.favoriteButton>i.filled{scale:1}.pathPage{cursor:pointer;color:var(--highlight)}[data-favorited=false],[data-favorites="0"]{display:none}\n        [data-mode][data-name][data-description] {}'
    .replace(/\.([^0-9][\w-]+)/gm, (e, t) => "." + (c[t] ??= ke(10)))
    .replace(/data-(\w+)/gm, (e, t) => "data-" + (d[t] ??= ke(10)))),
   (e.className = c.gui),
   e.append(l);
  var p = (((l = (((l = document.createElement("div")).className = c.sidebarShadow), e.appendChild(l), document.createElement("div"))).className = c.credit), (l.innerText = "Created by JulianTerB"), document.createElement("div"));
  (p.className = c.sidebar), p.append(l);
  const m = document.createElement("div");
  m.className = c.guiContent;
  var u = (((l = document.createElement("div")).className = c.guiTopBar), document.createElement("span"));
  (u.className = c.version), (u.innerText = "super cool hacker gui from julian"), l.append(u);
  const h = document.createElement("div");
  (h.className = c.controls), ((u = document.createElement("div")).style.cursor = "grab"), (u.innerHTML = '<i class="fas fa-arrows-alt-h" style="line-height: 1"></i>');
  const g = document.createElement("div");
  let f = !(g.innerHTML = '<i class="fas fa-compress" style="line-height: 1"></i>');
  g.onclick = () => {
   if (f != (f = !0)) {
    const t = g.minimized;
    t
     ? ((g.innerHTML = '<i class="fas fa-compress" style="line-height: 1"></i>'),
       e.animate(
        [
         { width: "122px", height: "27px", left: e.style.left },
         { width: "800px", height: "500px", left: parseInt(e.style.left) + (t ? -678 : 678) + "px" },
        ],
        { duration: 200, easing: "ease" }
       ),
       (e.style.width = "800px"),
       (e.style.height = "500px"))
     : ((g.innerHTML = '<i class="fas fa-expand" style="line-height: 1"></i>'),
       e.animate(
        [
         { width: "800px", height: "500px", left: e.style.left },
         { width: "122px", height: "27px", left: parseInt(e.style.left) + (t ? -678 : 678) + "px" },
        ],
        { duration: 200, easing: "ease" }
       ),
       (e.style.width = "122px"),
       (e.style.height = "27px")),
     setTimeout(
      () => {
       for (var a of [...e.children]) a != h && (t ? (a.style.display = a.style._display) : ((a.style._display = a.style.display), (a.style.display = "none")));
       f = !1;
      },
      t ? 200 : 0
     ),
     (e.style.left = parseInt(e.style.left) + (t ? -678 : 678) + "px"),
     (g.minimized = !t);
   }
  };
  var y,
   b,
   v,
   w,
   k,
   x,
   S =
    (((S = document.createElement("div")).className = c.closeControl),
    (S.innerHTML = '<i class="fas fa-times" style="line-height: 1"></i>'),
    (S.onclick = () => e.remove()),
    h.append(u, g, S),
    (b = e),
    (x = k = w = v = 0),
    ((y = u).onpointerdown = function (e = window.event) {
     (y.style.cursor = "grabbing"),
      (k = e.clientX),
      (x = e.clientY),
      (document.onpointerup = function () {
       (y.style.cursor = "grab"), (document.onpointerup = null), (document.onpointermove = null);
      }),
      (document.onpointermove = function (e = window.event) {
       (v = k - e.clientX), (w = x - e.clientY), (k = e.clientX), (x = e.clientY), (b.style.top = b.offsetTop - w + "px"), (b.style.left = b.offsetLeft - v + "px");
      });
    }),
    document.createElement("div")),
   C = ((S.className = c.gamemodesPage), document.createElement("div"));
  C.className = c.noScroll + " " + c.gamemodesList;
  const T = [["Gamemodes", S]],
   A = document.createElement("div");
  (A.className = c.pathText),
   (T.createPage = function (e, t, a) {
    var o = document.createElement("span");
    return (o.innerText = e), a || (o.className = c.pathPage), (o.onclick = () => this.goto(t)), o;
   }),
   (T.updatePath = function () {
    (A.innerHTML = ""), A.append(this.createPage(this[0][0], 0, 1 == this.length));
    for (let e = 1; e < this.length; e++) A.append(" > "), A.append(this.createPage(this[e][0], e, this.length - 1 == e));
    (m.innerHTML = ""), m.append(this[this.length - 1][1]), this[this.length - 1][1]?.onPath?.();
   }),
   (T.push = function (e, t) {
    return Array.prototype.push.call(this, [e, t]), this.updatePath(), this.length;
   }),
   (T.goto = function (e) {
    for (; this.length - 1 > e; ) this.pop();
    this.updatePath();
   }),
   (T.sidebar = function (e, t) {
    for (; 0 < this.length; ) this.pop();
    return this.push(e, t);
   }),
   ((u = document.createElement("div")).className = c.leaderboardPage);
  const E = document.createElement("ul");
  (E.className = c.noScroll + " " + c.leaderboardList), u.append(E);
  var F = document.createElement("div");
  F.className = c.logsPage;
  const P = document.createElement("ul"),
   M = ((P.className = c.noScroll + " " + c.logMessages), document.createElement("div"));
  let O;
  (M.className = c.clearLogsButton), (M.innerHTML = '<i class="fas fa-ban" style="line-height: 1"></i>'), F.append(P, M);
  const D = {
    connection: null,
    standings: [],
    data: {},
    gamemodeData: {
     gold: { sort: "g" },
     hack: { sort: "cr" },
     fish: { sort: "w" },
     pirate: { sort: "d" },
     defense2: { sort: "d" },
     brawl: {
      sort: "xp",
      upgrades: {
       egg: "Rapid Eggs",
       nut: "Crazy Acorns",
       slime: "Bouncing Slime",
       jesterBall: "Juggling Spheres",
       horseshoe: "Revolving Horseshoes",
       shell: "Rebounding Shell",
       pizza: "Boomerang Pizza",
       banana: "Curving Banana",
       arrow: "Speeding Arrows",
       peacock: "Peacock Feathers",
       bone: "Whirling Bones",
       bee: "Buzzing Bees",
       bubble: "Booming Bubbles",
       card: "Slicing Cards",
       laser: "Rapid-fire Lasers",
       darkEnergy: "Dark Energy",
       syrup: "Sticky Syrup",
       birdFeather: "Flying Feathers",
      },
     },
     dino: { sort: "f" },
     royale: { sort: "e" },
     defense: { sort: "d" },
     cafe: { sort: "ca" },
     factory: { sort: "ca", glitches: { lb: "Lunch Break", as: "Ad Spam", e37: "Error 37", nt: "Night Time", lo: "#LOL", j: "Jokester", sm: "Slow Mo", dp: "Dance Party", v: "Vortex", r: "Reverse", f: "Flip", m: "Micro" } },
     racing: { sort: "pr" },
     rush: { sort: "bs" },
     classic: { sort: "p" },
     tower: {},
     kingdom: {},
     toy: { sort: "t", sabotages: { c: "Oh Canada", b: "Blizzard", f: "Fog Spell", d: "Dark & Dusk", w: "Howling Wind", g: "Gift Time!", t: "TREES", s: "Snow Plow", fr: "Use The Force" } },
    },
    exponents: ["⁰", "¹", "²", "³", "⁴", "⁵", "⁶", "⁷", "⁸", "⁹"],
    formatNumber(e) {
     var [t, a] = (e = parseFloat(e))
      .toLocaleString(void 0, { notation: "engineering" })
      .toLowerCase()
      .split("e");
     return a < 15
      ? t + ["", "k", "M", "B", "T"][a / 3]
      : (([t, a] = e
         .toLocaleString(void 0, { notation: "scientific" })
         .toLowerCase()
         .split("e")),
        t + " × 10" + a.split("").reduce((e, t) => e + D.exponents[t], ""));
    },
    leaderboardCache: {},
    createStandingElement(e) {
     var t = document.createElement("li"),
      a = ((t.className = c.standing), (t.innerText = e), document.createElement("img"));
     return (a.className = c.standingBlook), t.prepend(a), (D.leaderboardCache[e] = t);
    },
    setLeaderboard(e) {
     0 < e.length && (O.style.display = "flex"), (E.innerHTML = "");
     let t = 1;
     var a;
     for (let r = 0; r < e.length; r++) {
      var o = e[r],
       n = D.leaderboardCache[o.name] || D.createStandingElement(o.name);
      (n.firstChild.src = (a = D.blookData[D.data[o.name]?.b || "Black"]).url),
       n.style.setProperty("--standingColor", a.color),
       (n.dataset[d.value] = D.formatNumber(o.value)),
       e[r - 1]?.value != e[r].value && (t = r + 1),
       (n.dataset[d.place] = t),
       E.append(n);
     }
    },
    blookData: null,
    fetchBlooks: () =>
     D.blookData ??
     new Promise((e) => {
      var t = document.createElement("iframe"),
       a = ((t.style.display = "none"), document.createElement("script")),
       o = ((a.type = "module"), (a.src = document.querySelector("script[src*='ac.blooket.com']").src + "?" + Date.now()), document.createElement("div"));
      o.id = "app";
      let n,
       r = {};
      document.body.appendChild(t),
       (t.contentWindow.Object.prototype.hasOwnProperty.call = function (a, o) {
        return (
         a[o]?.rarity && a in r == 0 && Object.assign(r, a),
         (n ??= setTimeout(() => {
          document.body.removeChild(t), e((D.blookData = r));
         })),
         Object.prototype.hasOwnProperty.call(a, o)
        );
       }),
       t.contentDocument.body.appendChild(o),
       t.contentDocument.body.appendChild(a);
     }),
    async connect() {
     try {
      var e = Ae();
      if (!e?.props?.liveGameController?._liveGameCode) return !1;
      if (((D.connection = await e.props.liveGameController.getDatabaseRef("c")), !D.connection)) return !1;
      await D.fetchBlooks();
      const t = D.getGamemode();
      return (
       D.connection.on("value", (e) => {
        var a, o, n, r, s, i, l, c, d, p, m, u, h, g, f;
        let y;
        if ((e = e.val() || {}) && (y = D.diffObjects(D.data, e))) {
         (D.data = e),
          D.gamemodeData[t].sort &&
           ((D.standings = Object.entries(e)
            .map(([e, a]) => ({ name: e, blook: a.b, value: a[D.gamemodeData[t].sort] || 0 }))
            .sort((e, t) => t.value - e.value)),
           D.setLeaderboard(D.standings));
         try {
          let e;
          switch (t) {
           case "brawl":
            for (const t in y) (e = y[t]).up && 2 == (a = e.up.split(":")).length && a[0] in D.gamemodeData.brawl.upgrades && D.addAlert(t, `upgraded ${D.gamemodeData.brawl.upgrades[a[0]]} to level ` + a[1]);
            break;
           case "gold":
            for (const t in y)
             (e = y[t]).tat &&
              (([o, n] = e.tat.split(":")),
              "swap" == n
               ? D.addAlert(t, `just swapped ${document.querySelector("[src*='assets/candy']") ? "candy" : "gold"} with ` + o)
               : D.addAlert(t, `just took ${D.formatNumber(parseInt(n))} ${document.querySelector("[src*='assets/candy']") ? "candy" : "gold"} from ` + o));
            break;
           case "toy":
            for (const t in y)
             (e = y[t]).s
              ? D.addAlert(t, `sabotaged with "${D.gamemodeData.toy.sabotages[e.s]}"`)
              : e.tat && (([r, s] = e.tat.split(":")), "swap" == s ? D.addAlert(t, "just swapped toys with " + r) : D.addAlert(t, `just took ${D.formatNumber(parseInt(s))} toy${1 == s ? "" : "s"} from ` + r));
            break;
           case "hack":
            for (const t in y) (e = y[t]).tat && (([i, l] = e.tat.split(":")), D.addAlert(t, `just took ${D.formatNumber(parseInt(l))} crypto from ` + i));
            break;
           case "pirate":
            for (const t in y) (e = y[t]).tat && (([c, d] = e.tat.split(":")), D.addAlert(t, `just took ${D.formatNumber(parseInt(d))} doubloons from ` + c));
            break;
           case "defense2":
            for (const t in y) (e = y[t]).r && D.addAlert(t, `just completed Round ${e.r}!`);
            break;
           case "fishing":
            for (const t in y) "Frenzy" == (e = y[t]).f ? D.addAlert(t, "just started a frenzy") : e.s && D.addAlert(t, `just sent a ${e.f} distraction`);
            break;
           case "dino":
            for (const t in y) (e = y[t]).tat && (([p, m] = e.tat.split(":")), "true" == m ? D.addAlert(t, `just caught ${p} CHEATING!`) : D.addAlert(t, "investigated " + p));
            break;
           case "cafe":
            for (const t in y) (e = y[t]).up && (([u, h] = e.up.split(":")), h) && D.addAlert(t, `upgraded ${u} to level ` + h);
            break;
           case "factory":
            for (const t in y)
             (e = y[t]).g ? D.addAlert(t, `activated the ${D.gamemodeData.factory.glitches[e.g]} glitch!`) : e.s ? (([g, f] = e.s.split("-")), D.addAlert(t, `has a ${g} ${f} synergy!`)) : e.t && D.addAlert(t, "now has 10 Blooks!");
          }
         } catch (e) {
          console.error(e), D.addLog("Error adding an alert", "red");
         }
        }
       }),
       !0
      );
     } catch (e) {
      return console.warn(e), !1;
     }
    },
    diffObjects(e, t) {
     var a,
      o = {};
     for (const n in e) n in t && ("object" == typeof e[n] && "object" == typeof t[n] ? (a = D.diffObjects(e[n], t[n])) && 0 !== Object.keys(a).length && (o[n] = a) : JSON.stringify(e[n]) !== JSON.stringify(t[n]) && (o[n] = t[n]));
     for (const n in t) n in e || (o[n] = t[n]);
     return 0 == Object.keys(o).length ? null : o;
    },
    getGamemode() {
     var e = Ae().props?.client?.type;
     if ("string" == typeof e) return e.toLowerCase();
     switch (window.location.pathname) {
      case "/play/gold":
      case "/play/gold/final":
      case "/gold/play/landing":
       return "gold";
      case "/play/hack":
      case "/play/hack/final":
      case "/hack/play/landing":
       return "hack";
      case "/play/fishing":
      case "/play/fishing/final":
      case "/fish/play/landing":
       return "fish";
      case "/play/pirate":
      case "/play/pirate/final":
      case "/pirate/play/landing":
       return "pirate";
      case "/play/defense2/load":
      case "/play/defense2":
      case "/play/defense2/final":
      case "/defense2/play/landing":
       return "defense2";
      case "/play/brawl/start":
      case "/play/brawl/settings":
      case "/play/brawl":
      case "/play/brawl/final":
      case "/brawl/play/landing":
       return "brawl";
      case "/play/dino":
      case "/play/dino/final":
      case "/dino/play/landing":
       return "dino";
      case "/play/battle-royale/match/preview":
      case "/play/battle-royale/question":
      case "/play/battle-royale/answer/sent":
      case "/play/battle-royale/answer/result":
      case "/play/battle-royale/match/result":
      case "/play/battle-royale/final":
      case "/royale/play/landing":
       return "royale";
      case "/defense/load":
      case "/defense":
      case "/defense/final":
      case "/defense/play/landing":
       return "defense";
      case "/cafe/load":
      case "/cafe":
      case "/cafe/shop":
      case "/cafe/final":
      case "/cafe/play/landing":
       return "cafe";
      case "/play/factory":
      case "/play/factory/settings":
      case "/play/factory/start":
      case "/play/factory/final":
      case "/factory/play/landing":
       return "factory";
      case "/play/racing":
      case "/play/racing/final":
      case "/racing/play/landing":
       return "racing";
      case "/play/rush":
      case "/play/rush/final":
      case "/rush/play/landing":
       return "rush";
      case "/play/classic/get-ready":
      case "/play/classic/question":
      case "/play/classic/answer/sent":
      case "/play/classic/answer/result":
      case "/play/classic/standings":
      case "/play/classic/final":
      case "/classic/play/landing":
       return "classic";
      case "/tower/load":
      case "/tower/start":
      case "/tower/map":
      case "/tower/battle":
      case "/tower/rest":
      case "/tower/risk":
      case "/tower/shop":
      case "/tower/victory":
      case "/tower/final":
      case "/tower/play/landing":
       return "tower";
      case "/kingdom/start":
      case "/kingdom":
      case "/kingdom/final":
      case "/kingdom/play/landing":
       return "kingdom";
      case "/play/toy":
      case "/play/toy/final":
      case "/toy/play/landing":
       return "toy";
     }
     return "";
    },
    sanitizer: document.createElement("div"),
    sanitizeText: (e) => ((D.sanitizer.textContent = e), D.sanitizer.innerHTML),
    addAlert(e, t) {
     var a = document.createElement("li"),
      o = ((a.className = c.logMessage), document.createElement("span"));
     D.lastLog.setTime(Date.now()),
      (o.innerHTML = `<strong>${D.sanitizeText(e)}</strong> ${D.sanitizeText(t)}<span style="opacity: 50%; flex: 1; text-align: right;">${re(D.lastLog)}</span>`),
      (t = D.blookData?.[D.data[e].b]) && (((e = document.createElement("img")).src = t.url), o.prepend(e)),
      a.append(o),
      P.prepend(a);
    },
    lastLog: new Date(),
    addLog(e, t) {
     var a = document.createElement("li"),
      o = ((a.className = c.logMessage), document.createElement("span"));
     t && (o.style.color = t),
      (o.style.display = "flex"),
      D.lastLog.setTime(Date.now()),
      (o.innerHTML = "[LOG] " + D.sanitizeText(e) + `<span style="opacity: 50%; flex: 1; text-align: right;">${re(D.lastLog)}</span>`),
      a.append(o),
      P.prepend(a);
    },
    interval: null,
   },
   z =
    ("dashboard.blooket.com" != window.location.host && "blooket.com" != window.location.host && (D.interval = setInterval(() => D.connect().then((e) => e && clearInterval(D.interval)), 5e3)),
    {
     global: {
      img:
       "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F2.bp.blogspot.com%2F-D6vMaYzlqRo%2FVypPwmWJxLI%2FAAAAAAABm1w%2FuMKt1pdd4jENGnCmM0OPdT-L0vdtsDoFQCLcB%2Fs1600%2Ffunny-cat-gifs-205-02.gif&f=1&nofb=1&ipt=f3774752bd2b8f94935c11004c7182c6bc87a9fa8e6a3d45f0c4d955ace163eb&ipo=images",
      name: "Global",
      cheats: [
       {
        name: "Auto Answer",
        description: "Toggles auto answer on",
        type: "toggle",
        enabled: !(M.onclick = () => {
         M.animate([{ rotate: "0deg" }, { rotate: "360deg" }], { duration: 750, easing: "ease" }), (P.innerHTML = ""), D.addLog("Cleared Logs");
        }),
        data: null,
        run: function () {
         this.enabled
          ? ((this.enabled = !1), clearInterval(this.data), (this.data = null))
          : ((this.enabled = !0),
            (this.data = setInterval(() => {
             var e = Ae(),
              t = e.state.question || e.props.client.question;
             if ("typing" != e.state.question.qType)
              if ("feedback" == e.state.stage || e.state.feedback) document.querySelector("[class*='feedback'], [id*='feedback']").firstChild.click();
              else {
               let e;
               for (e = 0; e < t.answers.length; e++) {
                let a = !1;
                for (let o = 0; o < t.correctAnswers.length; o++)
                 if (t.answers[e] == t.correctAnswers[o]) {
                  a = !0;
                  break;
                 }
                if (a) break;
               }
               document.querySelectorAll("[class*='answerContainer']")[e].click();
              }
             else Object.values(document.querySelector("[class*='typingAnswerWrapper']"))[1].children._owner.stateNode.sendAnswer(t.answers[0]);
            }, 50)));
        },
       },
       {
        name: "Highlight Answers",
        description: "Toggles highlight answers on",
        type: "toggle",
        enabled: !1,
        data: null,
        run: function () {
         this.enabled
          ? ((this.enabled = !1), clearInterval(this.data), (this.data = null))
          : ((this.enabled = !0),
            (this.data = setInterval(() => {
             var e = Ae(),
              t = e.state.question || e.props.client.question;
             let a = 0;
             for (; a < t.answers.length; ) {
              let e = !1;
              for (let o = 0; o < t.correctAnswers.length; o++)
               if (t.answers[a] == t.correctAnswers[o]) {
                e = !0;
                break;
               }
              a++, (document.querySelector("[class*='answersHolder'] :nth-child(" + a + ") > div").style.backgroundColor = e ? "rgb(0, 207, 119)" : "rgb(189, 15, 38)");
             }
            }, 50)));
        },
       },
       {
        name: "Subtle Highlight Answers",
        description: "Toggles subtle highlight answers on",
        type: "toggle",
        enabled: !1,
        data: null,
        run: function () {
         this.enabled
          ? ((this.enabled = !1), clearInterval(this.data), (this.data = null))
          : ((this.enabled = !0),
            (this.data = setInterval(() => {
             var e = Ae(),
              t = e.state.question || e.props.client.question;
             let a = 0;
             for (; a < t.answers.length; ) {
              let e = 0,
               o = !1;
              for (; e < t.correctAnswers.length; ) {
               if (t.answers[a] == t.correctAnswers[e]) {
                o = !0;
                break;
               }
               e++;
              }
              a++, o && (document.querySelector("[class*='answersHolder'] :nth-child(" + a + ") > div").style.boxShadow = "unset");
             }
            }, 50)));
        },
       },
       {
        name: "Percent Auto Answer",
        description: "Answers questions correctly or incorrectly depending on the goal grade given (Disable and re-enable to update goal)",
        inputs: [{ name: "Target Grade", type: "number" }],
        type: "toggle",
        enabled: !1,
        data: null,
        run: function (e) {
         if (this.enabled) (this.enabled = !1), clearInterval(this.data), (this.data = null);
         else {
          this.enabled = !0;
          const t = Ae();
          this.data = setInterval(
           (e) => {
            try {
             var a = t.state.question || t.props.client.question;
             if ("feedback" == t.state.stage || t.state.feedback) return document.querySelector('[class*="feedback"], [id*="feedback"]')?.firstChild?.click?.();
             if (document.querySelector("[class*='answerContainer']") || document.querySelector("[class*='typingAnswerWrapper']")) {
              let i = 0,
               l = 0;
              for (var o in t.corrects) i += t.corrects[o];
              for (var n in t.incorrects) l += t.incorrects[n];
              var r = 0 == (l += i) || Math.abs(i / (l + 1) - e) >= Math.abs((i + 1) / (l + 1) - e);
              if ("typing" != t.state.question.qType) {
               var s = document.querySelectorAll("[class*='answerContainer']");
               for (let e = 0; e < s.length; e++) if (r == a.correctAnswers.includes(a.answers[e])) return s[e]?.click?.();
               s[0].click();
              } else Object.values(document.querySelector("[class*='typingAnswerWrapper']"))[1].children._owner.stateNode.sendAnswer(r ? a.answers[0] : Math.random().toString(36).substring(2));
             }
            } catch {}
           },
           100,
           (e ?? 100) / 100
          );
         }
        },
       },
       {
        name: "Auto Answer",
        description: "Click the correct answer for you",
        run: function () {
         var e = Ae(),
          t = e.state.question || e.props.client.question;
         if ("typing" != e.state.question.qType)
          if ("feedback" == e.state.stage || e.state.feedback) document.querySelector("[class*='feedback'], [id*='feedback']").firstChild.click();
          else {
           let e;
           for (e = 0; e < t.answers.length; e++) {
            let a = !1;
            for (let o = 0; o < t.correctAnswers.length; o++)
             if (t.answers[e] == t.correctAnswers[o]) {
              a = !0;
              break;
             }
            if (a) break;
           }
           document.querySelectorAll("[class*='answerContainer']")[e].click();
          }
         else Object.values(document.querySelector("[class*='typingAnswerWrapper']"))[1].children._owner.stateNode.sendAnswer(t.answers[0]);
        },
       },
       {
        name: "Highlight Answers",
        description: "Colors answers to be red or green highlighting the correct ones",
        run: function () {
         var e = Ae(),
          t = e.state.question || e.props.client.question;
         let a = 0;
         for (; a < t.answers.length; ) {
          let e = !1;
          for (let o = 0; o < t.correctAnswers.length; o++)
           if (t.answers[a] == t.correctAnswers[o]) {
            e = !0;
            break;
           }
          a++, (document.querySelector("[class*='answersHolder'] :nth-child(" + a + ") > div").style.backgroundColor = e ? "rgb(0, 207, 119)" : "rgb(189, 15, 38)");
         }
        },
       },
       {
        name: "Spam Buy Blooks",
        description: "Opens a box an amount of times",
        inputs: [
         {
          name: "Box",
          type: "options",
          options: () =>
           Array.from(document.querySelectorAll("[class*='packsWrapper'] > div")).reduce((e, t) => (t.querySelector("[class*='blookContainer'] > img") || e.push(t.querySelector("[class*='packImgContainer'] > img").alt), e), []),
         },
         { name: "Amount", type: "number" },
         {
          name: "Show Unlocks",
          type: "options",
          options: [
           { name: "Show Unlocks", value: !0 },
           { name: "Don't Show Unlocks", value: !1 },
          ],
         },
        ],
        run: async function (e, t, a) {
         if (window.location.pathname.startsWith("/market")) {
          var o = Ae(),
           n = Array.prototype.reduce.call(
            document.querySelectorAll("[class*='packsWrapper'] > div"),
            (e, t) => (t.querySelector("[class*='blookContainer'] > img") || (e[t.querySelector("[class*='packImgContainer'] > img").alt] = parseInt(t.querySelector("[class*='packBottom']").textContent)), e),
            {}
           )[
            (e = e
             .split(" ")
             .map((e) => e.charAt(0).toUpperCase() + e.slice(1).toLowerCase())
             .join(" "))
           ];
          if (!n) return alert("I couldn't find that box!");
          if ((n = Math.floor(o.state.tokens / n)) <= 0) return alert("You do not have enough tokens!");
          var r = Math.min(n, t || 0),
           s = {};
          n = Date.now();
          for (let t = 0; t < r; t++) {
           await o.buyPack(!0, e), (s[o.state.unlockedBlook] ||= 0), s[o.state.unlockedBlook]++, o.startOpening(), clearTimeout(o.openTimeout);
           var i = o.state.purchasedBlookRarity;
           if ((o.setState({ canOpen: !0, currentPack: "", opening: a, doneOpening: a, openPack: a }), clearTimeout(o.canOpenTimeout), "Chroma" == i)) break;
          }
          await new Promise((e) => setTimeout(e)),
           alert(
            `(${Date.now() - n}ms) Results:\n` +
             Object.entries(s)
              .map(([e, t]) => `    ${e} ` + t)
              .join("\n")
           );
         } else alert("This can only be ran in the Market page.");
        },
       },
       {
        name: "Host Any Gamemode",
        description: "Change the selected gamemode on the host settings page",
        inputs: [{ name: "Gamemode", type: "options", options: ["Racing", "Classic", "Factory", "Cafe", "Defense2", "Defense", "Royale", "Gold", "Candy", "Brawl", "Hack", "Pirate", "Fish", "Dino", "Toy", "Rush"] }],
        run: function (e) {
         if ("/host/settings" != location.pathname) return alert("Run this script on the host settings page");
         Ae().setState({ settings: { type: e } });
        },
       },
       {
        name: "Change Blook Ingame",
        description: "Changes your blook",
        inputs: [{ name: "Blook (case sensitive)", type: "string" }],
        run: function (e) {
         var t = Ae().props;
         t.liveGameController.setVal({ path: `c/${t.client.name}/b`, val: (t.client.blook = e) });
        },
       },
       {
        name: "Get Daily Rewards",
        description: "Gets max daily tokens and xp",
        run: async function () {
         var e, t, a;
         window.location.href.includes("play.blooket.com")
          ? ((e = [
             "60101da869e8c70013913b59",
             "625db660c6842334835cb4c6",
             "60268f8861bd520016eae038",
             "611e6c804abdf900668699e3",
             "60ba5ff6077eb600221b7145",
             "642467af9b704783215c1f1b",
             "605bd360e35779001bf57c5e",
             "6234cc7add097ff1c9cff3bd",
             "600b1491d42a140004d5215a",
             "5db75fa3f1fa190017b61c0c",
             "5fac96fe2ca0da00042b018f",
             "600b14d8d42a140004d52165",
             "5f88953cdb209e00046522c7",
             "600b153ad42a140004d52172",
             "5fe260e72a505b00040e2a11",
             "5fe3d085a529560004cd3076",
             "5f5fc017aee59500041a1456",
             "608b0a5863c4f2001eed43f4",
             "5fad491512c8620004918ace",
             "5fc91a9b4ea2e200046bd49a",
             "5c5d06a7deebc70017245da7",
             "5ff767051b68750004a6fd21",
             "5fdcacc85d465a0004b021b9",
             "5fb7eea20bd44300045ba495",
            ][Math.floor(24 * Math.random())]),
            (t = (e, t) => Math.floor(Math.random() * (t - e + 1)) + e),
            (a = (
             await fetch("https://play.blooket.com/api/playersessions/solo", { body: JSON.stringify({ gameMode: "Factory", questionSetId: e }), method: "POST", credentials: "include" })
              .then((e) => e.json())
              ["catch"](() => alert("There was an error creating a solo game."))
            ).t),
            await fetch("https://play.blooket.com/api/playersessions/landings", { body: JSON.stringify({ t: a }), method: "POST", credentials: "include" })["catch"](() => alert("There was an error when landing.")),
            await fetch("https://play.blooket.com/api/playersessions/questions?t=" + a, { credentials: "include" }),
            await fetch("https://play.blooket.com/api/gamequestionsets?gameId=" + e, { credentials: "include" }),
            await fetch("https://play.blooket.com/api/users/factorystats", {
             body: JSON.stringify({ t: a, place: 1, cash: t(1e7, 1e8), playersDefeated: 0, correctAnswers: t(500, 2e3), upgrades: t(250, 750), blookUsed: "Chick", nameUsed: "You", mode: "Time-Solo" }),
             method: "PUT",
             credentials: "include",
            })["catch"](() => alert("There was an error when spoofing stats.")),
            await fetch("https://play.blooket.com/api/users/add-rewards", { body: JSON.stringify({ t: a, addedTokens: 500, addedXp: 300 }), method: "PUT", credentials: "include" })
             .then((e) => e.json())
             .then(({ dailyReward: e }) => alert(`Added max tokens and xp, and got ${e} daily wheel tokens!`))
             ["catch"](() => alert("There was an error when adding rewards.")))
          : (alert("This cheat only works on play.blooket.com, opening a new tab."), window.open("https://play.blooket.com/"));
        },
       },
       {
        name: "Use Any Blook",
        description: "Allows you to play as any blook",
        data: null,
        getBlooks(e, t) {
         if (!this.data?.Black) {
          e = e ? "keys" : "entries";
          const a = Object[e],
           o = this;
          (Object[e] = function (t) {
           return (t.Chick ? ((o.data = t), (Object[e] = a)) : a).call(this, t);
          }),
           t.render();
         }
        },
        run: function () {
         const e = Ae();
         var t = window.location.pathname.startsWith("/play/lobby");
         return (!t && window.location.pathname.startsWith("/blooks")) || t
          ? (this.getBlooks(t, e),
            t
             ? e.setState({ unlocks: Object.keys(this.data) })
             : void e.setState({ blookData: Object.keys(this.data).reduce((t, a) => ((t[a] = e.state.blookData[a] || 1), t), {}), allSets: Object.values(this.data).reduce((e, t) => (t.set && e.includes(t.set) ? e : e.concat(t.set)), []) }))
          : alert("This only works in lobbies or the dashboard blooks page.");
        },
       },
       {
        name: "Every Answer Correct",
        description: "Sets every answer to be correct",
        run: function () {
         var e = Ae();
         for (let t = 0; t < e.freeQuestions.length; t++)
          (e.freeQuestions[t].correctAnswers = e.freeQuestions[t].answers), (e.questions[t].correctAnswers = e.questions[t].answers), (e.props.client.questions[t].correctAnswers = e.questions[t].answers);
         try {
          e.forceUpdate();
         } catch {}
        },
       },
       {
        name: "Subtle Highlight Answers",
        description: "Removes the shadow from correct answers",
        run: function () {
         var e = Ae(),
          t = e.state.question || e.props.client.question;
         let a = 0;
         for (; a < t.answers.length; ) {
          let e = 0,
           o = !1;
          for (; e < t.correctAnswers.length; ) {
           if (t.answers[a] == t.correctAnswers[e]) {
            o = !0;
            break;
           }
           e++;
          }
          a++, o && (document.querySelector("[class*='answersHolder'] :nth-child(" + a + ") > div").style.boxShadow = "unset");
         }
        },
       },
       {
        name: "Remove Random Name",
        description: "Allows you to put a custom name",
        run: function () {
         Ae().setState({ isRandom: !1, client: { name: "" } }), document.querySelector('[class*="nameInput"]')?.focus?.();
        },
       },
       {
        name: "Sell Duplicate Blooks",
        description: "Sell all duplicate blooks leaving you with 1 each",
        run: async function () {
         if (window.location.pathname.startsWith("/blooks")) {
          if (confirm("Are you sure you want to sell your dupes? (Legendaries and rarer will not be sold)")) {
           var e = Ae();
           let t = Date.now(),
            a = "";
           for (const o in e.state.blookData)
            if (1 < e.state.blookData[o]) {
             if ((e.setState({ blook: o, numToSell: e.state.blookData[o] - 1 }), !["Uncommon", "Rare", "Epic"].includes(document.querySelector("[class*='highlightedRarity']").innerText.trim()))) continue;
             (a += `    ${o} ${e.state.blookData[o] - 1}\n`), await e.sellBlook({ preventDefault: () => {} }, !0);
            }
           alert(`(${Date.now() - t}ms) Results:\n` + a.trim());
          }
         } else alert("This can only be ran in the Blooks page.");
        },
       },
      ],
     },
     gold: {
      img:
       9 == new Date().getMonth()
        ? "https://media.blooket.com/image/upload/v1663212881/Media/logos/Candy_Quest_Logo.png"
        : "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.tenor.com%2F84dqghp2PI4AAAAM%2Fcat-funny.gif&f=1&nofb=1&ipt=ad4bf84189c8d17136bdf0f421f365b73923fbe80c8aa9e6fdbcd7e3e19f545e&ipo=images",
      name: "Gold Quest",
      cheats: [
       {
        name: "Always Triple",
        description: "Always get triple gold",
        type: "toggle",
        enabled: !1,
        data: { type: "multiply", val: 3, text: "Triple Gold!", blook: "Unicorn" },
        run: function () {
         let e = Ae();
         (e._choosePrize ||= e.choosePrize),
          this.enabled
           ? ((this.enabled = !1), e._choosePrize && (e.choosePrize = e._choosePrize))
           : ((this.enabled = !0),
             (e.choosePrize = (t) => {
              (e.state.choices[t] = this.data), e._choosePrize(t);
             }));
        },
       },
       {
        name: "Auto Choose",
        description: "Automatically picks the option that would give you the most gold",
        type: "toggle",
        enabled: !1,
        data: null,
        run: function () {
         this.enabled
          ? ((this.enabled = !1), clearInterval(this.data), (this.data = null))
          : ((this.enabled = !0),
            (this.data = setInterval(async () => {
             let e = Ae();
             "prize" == e.state.stage &&
              e.props.liveGameController.getDatabaseVal("c", (t) => {
               try {
                if (null != t) {
                 t = Object.entries(t);
                 let o = 0,
                  n = 0,
                  r = -1;
                 for (let a = 0; a < t.length; a++) t[a][0] != e.props.client.name && t[a][1] > o && (o = t[a][1]);
                 for (let t = 0; t < e.state.choices.length; t++) {
                  var a = e.state.choices[t];
                  let s = e.state.gold;
                  "gold" == a.type
                   ? (s = e.state.gold + a.val || e.state.gold)
                   : "multiply" == a.type || "divide" == a.type
                   ? (s = Math.round(e.state.gold * a.val) || e.state.gold)
                   : "swap" == a.type
                   ? (s = o || e.state.gold)
                   : "take" == a.type && (s = e.state.gold + o * a.val || e.state.gold),
                   (s || 0) <= n || ((n = s), (r = t + 1));
                 }
                 document.querySelector("div[class*='choice" + r + "']")?.click();
                }
               } catch {}
              });
            }, 50)));
        },
       },
       {
        name: "Chest ESP",
        description: "Shows what each chest will give you",
        type: "toggle",
        enabled: !1,
        data: null,
        run: function () {
         this.enabled
          ? ((this.enabled = !1), clearInterval(this.data), (this.data = null))
          : ((this.enabled = !0),
            (this.data = setInterval(() => {
             Ae().state.choices.forEach(({ text: e }, t) => {
              var a;
              (t = document.querySelector(`div[class*='choice${t + 1}']`)) &&
               !t.querySelector("div") &&
               (((a = document.createElement("div")).style.color = "white"),
               (a.style.fontFamily = "Arial"),
               (a.style.fontSize = "2em"),
               (a.style.display = "flex"),
               (a.style.justifyContent = "center"),
               (a.style.transform = "translateY(200px)"),
               (a.innerText = e),
               t.append(a));
             });
            }, 50)));
        },
       },
       {
        name: "Remove Bad Choices",
        description: "Removes the chance of getting Lose 25%, Lose 50%, and Nothing",
        run: function () {
         let e = Array.prototype[Symbol.iterator];
         (Array.prototype[Symbol.iterator] = function* () {
          if ("gold" == this[0]?.type) {
           (Array.prototype[Symbol.iterator] = e), console.log(this);
           for (let e = 0; e < this.length; e++) ("divide" != this[e].type && "nothing" != this[e].type) || this.splice(e--, 1);
          }
          yield* e.apply(this);
         }),
          Ae().constructor.prototype.answerNext.call({ nextReady: !0, here: !0, state: { correct: !0 }, setState() {} });
        },
       },
       {
        name: "Reset Players Gold",
        description: "Sets a player's gold to 0",
        inputs: [
         {
          name: "Player",
          type: "options",
          options: () => {
           let e = Ae();
           return e.props.liveGameController._liveApp ? new Promise((t) => e.props.liveGameController.getDatabaseVal("c", (e) => e && t(Object.keys(e)))) : [];
          },
         },
        ],
        run: function (e) {
         var t = Ae();
         t.props.liveGameController.setVal({ path: "c/" + t.props.client.name + "/tat", val: e + ":swap:0" });
        },
       },
       {
        name: "Set Gold",
        description: "Sets amount of gold",
        inputs: [{ name: "Gold", type: "number" }],
        run: function (e) {
         var t = Ae();
         t.setState({ gold: e, gold2: e }), t.props.liveGameController.setVal({ path: "c/" + t.props.client.name + "/g", val: e });
        },
       },
       {
        name: "Set Player's Gold",
        description: "Sets another player's gold",
        inputs: [
         {
          name: "Player",
          type: "options",
          options: () => {
           let e = Ae();
           return e.props.liveGameController._liveApp ? new Promise((t) => e.props.liveGameController.getDatabaseVal("c", (e) => e && t(Object.keys(e)))) : [];
          },
         },
         { name: "Gold", type: "number" },
        ],
        run: function (e, t) {
         var a = Ae();
         a.props.liveGameController.setVal({ path: "c/" + a.props.client.name + "/tat", val: e + ":swap:" + t });
        },
       },
       {
        name: "Swap Gold",
        description: "Swaps gold with someone",
        inputs: [
         {
          name: "Player",
          type: "options",
          options: () => {
           let e = Ae();
           return e.props.liveGameController._liveApp ? new Promise((t) => e.props.liveGameController.getDatabaseVal("c", (e) => e && t(Object.keys(e)))) : [];
          },
         },
        ],
        run: function (e) {
         let t = Ae();
         t.props.liveGameController.getDatabaseVal("c", (a) => {
          a && null != a[e] && ((a = a[e].g || 0), t.props.liveGameController.setVal({ path: "c/" + t.props.client.name, val: { b: t.props.client.blook, tat: e + ":swap:" + (t.state.gold || 0), g: a } }), t.setState({ gold: a, gold2: a }));
         });
        },
       },
      ],
     },
     hack: {
      img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fc.tenor.com%2FSoBzDkrJuNUAAAAM%2Fcat-hack.gif&f=1&nofb=1&ipt=7a6e808e01c920994689153e2963df98015d5551ceb5fcfd9b4c124cace29b78&ipo=images",
      name: "Crypto Hack",
      cheats: [
       {
        name: "Choice ESP",
        description: "Shows what each choice will give you",
        type: "toggle",
        enabled: !1,
        data: null,
        run: function () {
         this.enabled
          ? ((this.enabled = !1), clearInterval(this.data), (this.data = null))
          : ((this.enabled = !0),
            (this.data = setInterval(() => {
             var e,
              t = document.querySelector("[class*=feedbackContainer]");
             t.children.length <= 4 &&
              (((e = document.createElement("div")).style.color = "white"),
              (e.style.fontFamily = "Inconsolata,Helvetica,monospace,sans-serif"),
              (e.style.fontSize = "2em"),
              (e.style.display = "flex"),
              (e.style.justifyContent = "center"),
              (e.style.marginTop = "675px"),
              (e.innerText = Ae().state.choices[0].text),
              t.append(e));
            }, 50)));
        },
       },
       {
        name: "Password ESP",
        description: "Highlights the correct password",
        type: "toggle",
        enabled: !1,
        data: null,
        run: function () {
         this.enabled
          ? ((this.enabled = !1), clearInterval(this.data), (this.data = null))
          : ((this.enabled = !0),
            (this.data = setInterval(() => {
             var e = Ae().state;
             if ("hack" == e.stage)
              for (const t of document.querySelector("div[class*=buttonContainer]").children)
               t.innerText != e.correctPassword && ((t.style.outlineColor = "rgba(255, 64, 64, 0.8)"), (t.style.backgroundColor = "rgba(255, 64, 64, 0.8)"), (t.style.textShadow = "0 0 1px #f33"));
            }, 50)));
        },
       },
       {
        name: "Always Triple",
        description: "Always get triple crypto",
        type: "toggle",
        enabled: !1,
        data: null,
        run: function () {
         this.enabled
          ? ((this.enabled = !1), clearInterval(this.data), (this.data = null))
          : ((this.enabled = !0), (this.data = setInterval((e) => Ae().setState(e), 25, { choices: [{ type: "mult", val: 3, rate: 0.075, blook: "Brainy Bot", text: "Triple Crypto" }] })));
        },
       },
       {
        name: "Auto Guess",
        description: "Automatically guess the correct password",
        type: "toggle",
        enabled: !1,
        data: null,
        run: function () {
         this.enabled
          ? ((this.enabled = !1), clearInterval(this.data), (this.data = null))
          : ((this.enabled = !0),
            (this.data = setInterval(() => {
             var e = Ae().state;
             if ("hack" == e.stage) for (const t of document.querySelector("div[class*=buttonContainer]").children) t.innerText == e.correctPassword && t.click();
            }, 50)));
        },
       },
       {
        name: "Remove Hack",
        description: "Removes an attacking hack",
        run: function () {
         Ae().setState({ hack: "" });
        },
       },
       {
        name: "Set Crypto",
        description: "Sets crypto",
        inputs: [{ name: "Amount", type: "number" }],
        run: function (e) {
         var t = Ae();
         t.setState({ crypto: e, crypto2: e }), t.props.liveGameController.setVal({ path: `c/${t.props.client.name}/cr`, val: e });
        },
       },
       {
        name: "Set Password",
        description: "Sets hacking password",
        inputs: [{ name: "Custom Password", type: "string" }],
        run: function (e) {
         var t = Ae();
         t.setState({ password: e }), t.props.liveGameController.setVal({ path: `c/${t.props.client.name}/p`, val: e });
        },
       },
       {
        name: "Steal Player's Crypto",
        description: "Steals all of someone's crypto",
        inputs: [
         {
          name: "Player",
          type: "options",
          options: () => {
           let e = Ae();
           return e.props.liveGameController._liveApp ? new Promise((t) => e.props.liveGameController.getDatabaseVal("c", (e) => e && t(Object.keys(e)))) : [];
          },
         },
        ],
        run: function (e) {
         let t = Ae();
         t.props.liveGameController.getDatabaseVal("c", (a) => {
          let o;
          a &&
           (o = Object.entries(a).find((t) => t[0].toLowerCase() == e.toLowerCase())) &&
           ((a = o[1].cr),
           t.setState({ crypto: t.state.crypto + a, crypto2: t.state.crypto + a }),
           t.props.liveGameController.setVal({ path: "c/" + t.props.client.name, val: { b: t.props.client.blook, p: t.state.password, cr: t.state.crypto + a, tat: o[0] + ":" + a } }));
         });
        },
       },
      ],
     },
     fish: {
      img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.giphy.com%2Fmedia%2F5aUCqcCBqHlao%2Fgiphy.gif&f=1&nofb=1&ipt=c7fc4dcaa4c89b835201af026583bdccfe4f2673d7494e24caa5e713b89402ea&ipo=images",
      name: "Fishing Frenzy",
      cheats: [
       {
        name: "Remove Distractions",
        description: "Removes distractions",
        type: "toggle",
        enabled: !1,
        data: null,
        run: function () {
         this.enabled
          ? ((this.enabled = !1), clearInterval(this.data), (this.data = null))
          : ((this.enabled = !0),
            (this.data = setInterval(() => {
             Ae().setState({ party: "" });
            }, 50)));
        },
       },
       {
        name: "Frenzy",
        description: "Sets everyone to frenzy mode",
        run: function () {
         var e = Ae();
         e.props.liveGameController.setVal({ path: "c/" + e.props.client.name, val: { b: e.props.client.blook, w: e.state.weight, f: "Frenzy", s: !0 } });
        },
       },
       {
        name: "Send Distraction",
        description: "Sends a distraction to everyone",
        inputs: [{ name: "Distraction", type: "options", options: ["Crab", "Jellyfish", "Frog", "Pufferfish", "Octopus", "Narwhal", "Megalodon", "Blobfish", "Baby Shark"] }],
        run: function (e) {
         var t = Ae();
         (t.safe = !0), t.props.liveGameController.setVal({ path: "c/" + t.props.client.name, val: { b: t.props.client.blook, w: t.state.weight, f: e, s: !0 } });
        },
       },
       {
        name: "Set Lure",
        description: "Sets fishing lure (range 1 - 5)",
        inputs: [{ name: "Lure (1 - 5)", type: "number", min: 1, max: 5 }],
        run: function (e) {
         Ae().setState({ lure: Math.max(Math.min(e - 1, 4), 0) });
        },
       },
       {
        name: "Set Weight",
        description: "Sets weight",
        inputs: [{ name: "Weight", type: "number" }],
        run: function (e) {
         var t = Ae();
         t.setState({ weight: e, weight2: e }),
          t.props.liveGameController.setVal({
           path: "c/" + t.props.client.name,
           val: { b: t.props.client.blook, w: e, f: ["Crab", "Jellyfish", "Frog", "Pufferfish", "Octopus", "Narwhal", "Megalodon", "Blobfish", "Baby Shark"][Math.floor(9 * Math.random())] },
          });
        },
       },
      ],
     },
     pirate: {
      img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.giphy.com%2Fmedia%2Fq7v5WDc0UPZ6M%2Fgiphy.gif&f=1&nofb=1&ipt=f02fa46927a24fa3620e2d4432dbfd7513182ae58594f9af3962b7d91aeaaa0b&ipo=images",
      name: "Pirate's Voyage",
      cheats: [
       {
        name: "Heist ESP",
        description: "Shows you what's under each chest during a heist",
        type: "toggle",
        enabled: !1,
        data: null,
        imgs: null,
        run: function () {
         this.enabled
          ? ((this.enabled = !1), clearInterval(this.data), (this.data = null))
          : ((this.enabled = !0),
            (this.data = setInterval(() => {
             if ("heist" == Ae().state.stage) {
              null == this.imgs && (this.imgs = Array.prototype.map.call(Array.prototype.slice.call(document.querySelector("[class*=prizesList]").children, 1, 4), (e) => e.querySelector("img").src));
              const e = Object.values(document.querySelector("[class*=modal]"))[0]["return"].memoizedState.memoizedState;
              for (const a of document.querySelectorAll("[class*=boxContent] > div")) a.remove();
              const t = Object.values(document.querySelector("[class*=modal]"))[0]["return"].memoizedState.next.next.memoizedState;
              Array.prototype.forEach.call(document.querySelector("[class*=chestsWrapper]").children, (a, o) => {
               const n = a.firstChild.firstChild;
               if (t.includes(o)) return (n.style.opacity = "");
               n.style.opacity = "0.5";
               let r = document.createElement("div");
               (r.innerHTML = "<img src='" + this.imgs[2 - e[o]] + "' style='max-width: 75%; max-height: 75%'></img>"),
                (r.className = "chestESP"),
                (r.style.position = "absolute"),
                (r.style.inset = "0"),
                (r.style.display = "grid"),
                (r.style.placeItems = "center"),
                (r.style.pointerEvents = "none"),
                (a.onclick = () => {
                 r.remove(), (n.style.opacity = "");
                }),
                a.firstChild.prepend(r);
              });
             }
            }, 50)));
        },
       },
       {
        name: "Max Levels",
        description: "Maxes out all islands and your boat",
        run: function () {
         var e = Ae();
         e.setState({ islandLevels: new Array(e.state.islandLevels.length).fill(5) }, e.updateBoatLevel);
        },
       },
       {
        name: "Set Doubloons",
        description: "Sets Doubloons",
        inputs: [{ name: "Amount", type: "number" }],
        run: function (e) {
         var t = Ae();
         t.setState({ doubloons: e }), t.props.liveGameController.setVal({ path: `c/${t.props.client.name}/d`, val: e });
        },
       },
       {
        name: "Start Heist",
        description: "Starts a heist on someone",
        inputs: [
         {
          name: "Player",
          type: "options",
          options: () => {
           let e = Ae();
           return e.props.liveGameController._liveApp ? new Promise((t) => e.props.liveGameController.getDatabaseVal("c", (e) => e && t(Object.keys(e)))) : [];
          },
         },
        ],
        run: function (e) {
         let t = Ae();
         t.props.liveGameController.getDatabaseVal("c", function (a) {
          a?.[e] && t.setState({ stage: "heist", heistInfo: { name: e, blook: a[e].b }, prizeAmount: Math.max(1e3, a[e].d || 0) });
         });
        },
       },
       {
        name: "Swap Doubloons",
        description: "Swaps Doubloons with someone",
        inputs: [
         {
          name: "Player",
          type: "options",
          options: () => {
           let e = Ae();
           return e.props.liveGameController._liveApp ? new Promise((t) => e.props.liveGameController.getDatabaseVal("c", (e) => e && t(Object.keys(e)))) : [];
          },
         },
        ],
        run: async function (e) {
         let t = Ae();
         t.props.liveGameController.getDatabaseVal("c", function (a) {
          a?.[e] && (t.props.liveGameController.setVal({ path: "c/" + t.props.client.name, val: { b: t.props.client.blook, d: a[e].d, tat: e + ":" + (a[e].d - t.state.doubloons) } }), t.setState({ doubloons: a[e].d }));
         });
        },
       },
       {
        name: "Take Doubloons",
        description: "Takes Doubloons from someone",
        inputs: [
         {
          name: "Player",
          type: "options",
          options: () => {
           let e = Ae();
           return e.props.liveGameController._liveApp ? new Promise((t) => e.props.liveGameController.getDatabaseVal("c", (e) => e && t(Object.keys(e)))) : [];
          },
         },
        ],
        run: async function (e) {
         let t = Ae();
         t.props.liveGameController.getDatabaseVal("c", function (a) {
          a?.[e] && (t.props.liveGameController.setVal({ path: "c/" + t.props.client.name, val: { b: t.props.client.blook, d: t.state.doubloons + a[e].d, tat: e + ":" + a[e].d } }), t.setState({ doubloons: t.state.doubloons + a[e].d }));
         });
        },
       },
      ],
     },
     defense2: {
      img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.tenor.com%2FmP6EcFXGjigAAAAd%2Fcat-woah.gif&f=1&nofb=1&ipt=f0bc0e45dff03b9c6a7e50410a038ca6898d4f65160f6dd892b29c7d446ba7a6&ipo=images",
      name: "Tower Defense 2",
      cheats: [
       {
        name: "Max Tower Stats",
        description: "Makes all placed towers overpowered",
        run: function () {
         Ae().state.towers.forEach((e) => {
          if (((e.stats.dmg = 1e6), (e.stats.fireRate = 50), (e.stats.ghostDetect = !0), (e.stats.maxTargets = 1e6), (e.stats.numProjectiles &&= 100), (e.stats.range = 100), e.stats.auraBuffs))
           for (const t in e.stats.auraBuffs) e.stats.auraBuffs[t] *= 100;
         });
        },
       },
       {
        name: "Kill Enemies",
        description: "Kills all the enemies",
        run: function () {
         var e = Ae();
         (e.game.current.config.sceneConfig.enemyQueue.length = 0), e.game.current.config.sceneConfig.physics.world.bodies.entries.forEach((e) => e?.gameObject?.receiveDamage?.(e.gameObject.hp, 1));
        },
       },
       {
        name: "Set Coins",
        description: "Sets coins",
        inputs: [{ name: "Coins", type: "number" }],
        run: function (e) {
         Ae().setState({ coins: e });
        },
       },
       {
        name: "Set Health",
        description: "Sets the amount of health you have",
        inputs: [{ name: "Health", type: "number" }],
        run: function (e) {
         Ae().setState({ health: e });
        },
       },
       {
        name: "Set Round",
        description: "Sets the current round",
        inputs: [{ name: "Round", type: "number" }],
        run: function (e) {
         Ae().setState({ round: e });
        },
       },
      ],
     },
     brawl: {
      img:
       "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs.yimg.com%2Fny%2Fapi%2Fres%2F1.2%2FMCnEIzpvUQ13qjTWqQVghw--%2FYXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTk2MA--%2Fhttps%3A%2F%2Fs.yimg.com%2Fos%2Fcreatr-uploaded-images%2F2023-06%2Fdfe6ff10-19ca-11ee-8d5b-8f954b8ec342&f=1&nofb=1&ipt=20405bbdee8299bf913689f13ed6e99bd0327fd897c9538379631ac0fc37d5b0&ipo=images",
      name: "Monster Brawl",
      cheats: [
       {
        name: "Double Enemy XP",
        description: "Doubles enemy XP drop value",
        run: function () {
         var e = Ae().game.current.config.sceneConfig.physics.world.colliders._active.filter((e) => e.callbackContext?.toString?.()?.includes?.("dmgCd"));
         for (let a = 0; a < e.length; a++) {
          var t = e[a].object2;
          let o = t.classType.prototype.start;
          (t.classType.prototype.start = function () {
           o.apply(this, arguments), (this.val *= 2);
          }),
           t.children.entries.forEach((e) => (e.val *= 2));
         }
        },
       },
       {
        name: "Half Enemy Speed",
        description: "Makes enemies move 2x slower",
        run: function () {
         var e = Ae().game.current.config.sceneConfig.physics.world.colliders._active.filter((e) => e.callbackContext?.toString?.()?.includes?.("dmgCd"));
         for (let a = 0; a < e.length; a++) {
          var t = e[a].object2;
          let o = t.classType.prototype.start;
          (t.classType.prototype.start = function () {
           o.apply(this, arguments), (this.speed *= 0.5);
          }),
           t.children.entries.forEach((e) => (e.speed *= 0.5));
         }
        },
       },
       {
        name: "Instant Kill",
        description: "Sets all enemies health to 1",
        run: function () {
         var e = Ae().game.current.config.sceneConfig.physics.world.colliders._active.filter((e) => e.callbackContext?.toString?.()?.includes?.("dmgCd"));
         for (let a = 0; a < e.length; a++) {
          var t = e[a].object2;
          let o = t.classType.prototype.start;
          (t.classType.prototype.start = function () {
           o.apply(this, arguments), (this.hp = 1);
          }),
           t.children.entries.forEach((e) => (e.hp = 1));
         }
        },
       },
       {
        name: "Invincibility",
        description: "Makes you invincible",
        run: function () {
         for (const e of Ae().game.current.config.sceneConfig.physics.world.colliders._active.filter((e) => e.callbackContext?.toString().includes("invulnerableTime") || e.callbackContext?.toString().includes("dmgCd")))
          e.collideCallback = () => {};
        },
       },
       {
        name: "Kill Enemies",
        description: "Kills all current enemies",
        run: function () {
         Ae().game.current.config.sceneConfig.physics.world.bodies.entries.forEach((e) => e?.gameObject?.receiveDamage?.(e.gameObject.hp, 1));
        },
       },
       {
        name: "Magnet",
        description: "Pulls all xp towards you",
        run: function () {
         Ae()
          .game.current.config.sceneConfig.physics.world.colliders._active.find((e) => e.collideCallback?.toString().includes("magnetTime"))
          .collideCallback({ active: !0 }, { active: !0, setActive() {}, setVisible() {} });
        },
       },
       {
        name: "Max Current Abilities",
        description: "Maxes out all your current abilities",
        run: function () {
         const e = Ae();
         for (var [t, a] of Object.entries(e.state.abilities)) for (let o = 0; o < 10 - a; o++) e.game.current.config.sceneConfig.game.events.emit("level up", t, e.state.abilities[t]++);
         e.setState({ level: (e.game.current.config.sceneConfig.level = [1, 3, 5, 10, 15, 25, 35].sort((t, a) => Math.abs(t - e.state.level) - Math.abs(a - e.state.level))[0] - 1) });
        },
       },
       {
        name: "Next Level",
        description: "Skips to the next level",
        run: function () {
         var e = Ae(),
          { object1: t, object2: a } = e.game.current.config.sceneConfig.physics.world.colliders._active.find((e) => e.collideCallback?.toString().includes('emit("xp'));
         a.get().spawn(t.x, t.y, (1 === (a = e.state.level) ? 1 : a < 5 ? 5 : a < 10 ? 10 : a < 20 ? 20 : a < 30 ? 30 : a < 40 ? 40 : a < 50 ? 50 : 100) - e.xp);
        },
       },
       {
        name: "Remove Obstacles",
        description: "Removes all rocks and obstacles",
        run: function () {
         Ae().game.current.config.sceneConfig.physics.world.bodies.entries.forEach((e) => {
          try {
           e.gameObject.frame.texture.key.includes("obstacle") && e.gameObject.destroy();
          } catch {}
         });
        },
       },
       {
        name: "Reset Health",
        description: "Resets health and gives invincibility for 3 seconds",
        run: function () {
         Ae().game.current.events._events.respawn.fn();
        },
       },
      ],
     },
     dino: {
      img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.tenor.com%2F0xR4dGCj_lwAAAAd%2Fcat-walking.gif&f=1&nofb=1&ipt=a78f5cb302c574152363d11188682c9ec0bf9cb2757bd734000bf3542bfd28d3&ipo=images",
      name: "Deceptive Dinos",
      cheats: [
       {
        name: "Auto Choose",
        description: "Automatically choose the best fossil when excavating",
        type: "toggle",
        enabled: !1,
        data: null,
        rand(e, t) {
         for (var a = []; a.length < t; ) {
          var o = Math.random();
          let t = 0,
           n = null;
          for (let a = 0; a < e.length; a++)
           if ((t += e[a].rate) >= o) {
            n = e[a];
            break;
           }
          n && !a.includes(n) && a.push(n);
         }
         return a;
        },
        run: function () {
         this.enabled
          ? ((this.enabled = !1), clearInterval(this.data), (this.data = null))
          : ((this.enabled = !0),
            (this.data = setInterval(() => {
             try {
              var e = Ae();
              if ("excavate" === e.state.stage) {
               e.state.choices.length ||
                (e.state.choices = this.rand(
                 [
                  { type: "fossil", val: 10, rate: 0.1, blook: "Amber" },
                  { type: "fossil", val: 25, rate: 0.1, blook: "Dino Egg" },
                  { type: "fossil", val: 50, rate: 0.175, blook: "Dino Fossil" },
                  { type: "fossil", val: 75, rate: 0.175, blook: "Stegosaurus" },
                  { type: "fossil", val: 100, rate: 0.15, blook: "Velociraptor" },
                  { type: "fossil", val: 125, rate: 0.125, blook: "Brontosaurus" },
                  { type: "fossil", val: 250, rate: 0.075, blook: "Triceratops" },
                  { type: "fossil", val: 500, rate: 0.025, blook: "Tyrannosaurus Rex" },
                  { type: "mult", val: 1.5, rate: 0.05 },
                  { type: "mult", val: 2, rate: 0.025 },
                 ],
                 3
                ));
               let n = 0,
                r = -1;
               for (let s = 0; s < e.state.choices.length; s++) {
                var { type: t, val: a } = e.state.choices[s],
                 o = ("fossil" == t ? e.state.fossils + a * e.state.fossilMult : e.state.fossils * a) || 0;
                (o <= n && "mult" != t) || ((n = o), (r = s + 1));
               }
               document.querySelector('div[class*=rockRow] > div[role="button"]:nth-child(' + r + ")").click();
              }
             } catch {}
            }, 50)));
        },
       },
       {
        name: "Rock ESP",
        description: "Shows what is under the rocks",
        type: "toggle",
        enabled: !1,
        data: null,
        run: (() => {
         const e = ["⁰", "¹", "²", "³", "⁴", "⁵", "⁶", "⁷", "⁸", "⁹"],
          t = (t) => {
           let a = "";
           for (; 0 < t; ) (a = e[t % 10] + a), (t = ~~(t / 10));
           return a;
          };
         return function () {
          this.enabled
           ? ((this.enabled = !1), clearInterval(this.data), (this.data = null))
           : ((this.enabled = !0),
             (this.data = setInterval(() => {
              let e = Ae();
              const a = document.querySelector('[class*="rockButton"]').parentElement.children;
              Array.prototype.every.call(a, (e) => e.querySelector("div")) ||
               e.setState(
                {
                 choices: (function (e, t) {
                  for (var a = []; a.length < 3; ) {
                   var o = Math.random();
                   let t,
                    n = 0;
                   for (let a = 0; a < e.length; a++)
                    if ((n += e[a].rate) >= o) {
                     t = e[a];
                     break;
                    }
                   t && !a.includes(t) && a.push(t);
                  }
                  return a;
                 })([
                  { type: "fossil", val: 10, rate: 0.1, blook: "Amber" },
                  { type: "fossil", val: 25, rate: 0.1, blook: "Dino Egg" },
                  { type: "fossil", val: 50, rate: 0.175, blook: "Dino Fossil" },
                  { type: "fossil", val: 75, rate: 0.175, blook: "Stegosaurus" },
                  { type: "fossil", val: 100, rate: 0.15, blook: "Velociraptor" },
                  { type: "fossil", val: 125, rate: 0.125, blook: "Brontosaurus" },
                  { type: "fossil", val: 250, rate: 0.075, blook: "Triceratops" },
                  { type: "fossil", val: 500, rate: 0.025, blook: "Tyrannosaurus Rex" },
                  { type: "mult", val: 1.5, rate: 0.05 },
                  { type: "mult", val: 2, rate: 0.025 },
                 ]),
                },
                () => {
                 Array.prototype.forEach.call(a, (a, o) => {
                  o = e.state.choices[o];
                  var n = (a.querySelector("div") && a.querySelector("div").remove(), document.createElement("div"));
                  (n.style.color = "white"),
                   (n.style.fontFamily = "Arial"),
                   (n.style.fontSize = "1em"),
                   (n.style.display = "flex"),
                   (n.style.justifyContent = "center"),
                   (n.style.transform = "translateY(25px)"),
                   (n.innerText =
                    "fossil" === o.type
                     ? `+${
                        99999999 < Math.round(o.val * e.state.fossilMult)
                         ? (function (e) {
                            let a = e.toString();
                            if (1e3 <= e) {
                             var o = ["", "K", "M", "B", "T"],
                              n = Math.floor(Math.floor((Math.log(e) / Math.log(10)).toPrecision(14)) / 3);
                             if (n < o.length) {
                              let t = "";
                              for (let a = 3; 1 <= a && !((t = parseFloat((0 != n ? e / Math.pow(1e3, n) : e).toPrecision(a)).toString()).replace(/[^a-zA-Z 0-9]+/g, "").length <= 3); a--);
                              Number(t) % 1 != 0 && (t = Number(t).toFixed(1)), (a = t + o[n]);
                             } else {
                              let o = e,
                               n = 0;
                              for (; 100 <= o; ) (o = Math.floor(o / 10)), (n += 1);
                              a = o / 10 + " × 10" + t(n + 1);
                             }
                            }
                            return a;
                           })(Math.round(o.val * e.state.fossilMult))
                         : Math.round(o.val * e.state.fossilMult)
                       } Fossils`
                     : `x${o.val} Fossils Per Excavation`),
                   a.append(n);
                 });
                }
               );
             }, 50)));
         };
        })(),
       },
       {
        name: "Set Fossils",
        description: "Sets the amount of fossils you have",
        inputs: [{ name: "Fossils", type: "number" }],
        run: function (e) {
         var t = Ae();
         t.setState({ fossils: e }), t.props.liveGameController.setVal({ path: `c/${t.props.client.name}/f`, val: e });
        },
       },
       {
        name: "Set Multiplier",
        description: "Sets fossil multiplier",
        inputs: [{ name: "Multiplier", type: "number" }],
        run: function (e) {
         Ae().setState({ fossilMult: e });
        },
       },
       {
        name: "Stop Cheating",
        description: "Undoes cheating so that you can't be caught",
        run: function () {
         var e = Ae();
         e.setState({ isCheating: !1 }), e.props.liveGameController.setVal({ path: `c/${e.props.client.name}/ic`, val: !1 });
        },
       },
      ],
     },
     royale: {
      img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F736x%2Fc3%2F02%2F33%2Fc30233cf687171eab421ad1aae968ae7.jpg&f=1&nofb=1&ipt=e5aa9898e91aa2f03b439744c75dd67cafa132e9807f67163ce996608cb9de60&ipo=images",
      name: "Battle Royale",
      cheats: [
       {
        name: "Auto Answer (Toggle)",
        description: "Toggles auto answer on",
        type: "toggle",
        enabled: !1,
        data: null,
        run: function () {
         this.enabled
          ? ((this.enabled = !1), clearInterval(this.data), (this.data = null))
          : ((this.enabled = !0),
            (this.data = setInterval(() => {
             var e = Ae();
             e?.onAnswer?.(!0, e.props.client.question.correctAnswers[0]);
            }, 50)));
        },
       },
       {
        name: "Auto Answer",
        description: "Chooses the correct answer for you",
        run: function () {
         var e = Ae();
         e?.onAnswer?.(!0, e.props.client.question.correctAnswers[0]);
        },
       },
      ],
     },
     defense: {
      img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.tenor.com%2FexRZ3es-yb8AAAAd%2Fmaxwell-maxwell-cat.gif&f=1&nofb=1&ipt=edee07da839ea87f36079d99669c56dd03b7030016bc584ad665461d8f87229e&ipo=images",
      name: "Tower Defense",
      cheats: [
       {
        name: "Earthquake",
        description: "Shuffles around towers",
        run: function () {
         let e = Ae(),
          t =
           (e.setState(
            { eventName: "Earthquake", event: { short: "e", color: "#805500", icon: "fas fa-mountain", desc: "All of your towers get mixed up", rate: 0.02 }, buyTowerName: "", buyTower: {} },
            () => (e.eventTimeout = setTimeout(() => e.setState({ event: {}, eventName: "" }), 6e3))
           ),
           e.tiles.forEach((e) => e.forEach((t, a) => 3 == t && (e[a] = 0))),
           []);
         for (let a = 0; a < e.tiles.length; a++) for (let o = 0; o < e.tiles[a].length; o++) 0 == e.tiles[a][o] && t.push({ x: o, y: a });
         t.sort(() => Math.random() - Math.random()),
          e.towers.forEach((a) => {
           var { x: o, y: n } = t.pop();
           a.move(o, n, e.tileSize), (e.tiles[n][o] = 3);
          });
        },
       },
       {
        name: "Max Tower Stats",
        description: "Makes all placed towers overpowered",
        run: function () {
         Ae().towers.forEach((e) => {
          (e.range = 100), (e.fullCd = e.cd = 0), (e.damage = 1e6);
         });
        },
       },
       {
        name: "Remove Ducks",
        description: "Removes ducks",
        run: function () {
         let { ducks: e, tiles: t } = Ae();
         e.forEach((e) => (t[e.y][e.x] = 0)), (e.length = 0);
        },
       },
       {
        name: "Remove Enemies",
        description: "Removes all the enemies",
        run: function () {
         var e = Ae();
         e.enemies = e.futureEnemies = [];
        },
       },
       {
        name: "Remove Obstacles",
        description: "Lets you place towers anywhere",
        run: function () {
         var e = Ae();
         e.tiles = e.tiles.map((e) => e.fill(0));
        },
       },
       {
        name: "Set Damage",
        description: "Sets damage",
        inputs: [{ name: "Damage", type: "number" }],
        run: function (e) {
         Ae().dmg = e;
        },
       },
       {
        name: "Set Round",
        description: "Sets the current round",
        inputs: [{ name: "Round", type: "number" }],
        run: function (e) {
         Ae().setState({ round: e });
        },
       },
       {
        name: "Set Tokens",
        description: "Sets the amount of tokens you have",
        inputs: [{ name: "Tokens", type: "number" }],
        run: function (e) {
         Ae().setState({ tokens: e });
        },
       },
      ],
     },
     cafe: {
      img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.giphy.com%2Fmedia%2FDmznSzqbnVmKY%2Fgiphy.gif&f=1&nofb=1&ipt=6a093fa28f38c1f36ec83d6cae54d53b052e469d9863a92b478943e30e1db8f7&ipo=images",
      name: "Café",
      cheats: [
       {
        name: "Max Items",
        description: "Maxes out items in the shop (Only usable in the shop)",
        run: function () {
         var e;
         "/cafe/shop" !== window.location.pathname ? alert("This can only be run in the shop") : (e = Ae()).setState({ items: Object.keys(e.state.items).reduce((e, t) => ((e[t] = 5), e), {}) });
        },
       },
       {
        name: "Remove Customers",
        description: "Skips the current customers (Not usable in the shop)",
        run: function () {
         const e = Ae();
         e.state.customers.forEach((t, a) => window.setTimeout(() => t.blook && e.removeCustomer(a, !0), 250 * a));
        },
       },
       {
        name: "Reset Abilities",
        description: "Resets used abilities in shop (Only usable in the shop)",
        run: function () {
         var e;
         "/cafe/shop" !== window.location.pathname ? alert("This can only be run in the shop") : (e = Ae()).setState({ abilities: Object.keys(e.state.abilities).reduce((e, t) => ((e[t] = 5), e), {}) });
        },
       },
       {
        name: "Set Cash",
        description: "Sets cafe cash",
        inputs: [{ name: "Amount", type: "number" }],
        run: function (e) {
         var t = Ae();
         t.setState({ cafeCash: e }), t.props.liveGameController.setVal({ path: `c/${t.props.client.name}/ca`, val: e });
        },
       },
       {
        name: "Stock Food",
        description: "Stocks all food to 99 (Not usable in the shop)",
        run: function () {
         var e;
         "/cafe" !== window.location.pathname ? alert("This can't be run in the shop") : (e = Ae()).setState({ foods: e.state.foods.map((e) => ({ ...e, stock: 99, level: 5 })) });
        },
       },
      ],
     },
     factory: {
      img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.tenor.com%2Fon3XvGpnKDsAAAAd%2Fcat-cats.gif&f=1&nofb=1&ipt=695cacc0abc904d0c81e3e73c149615aec00cbca601bbb7fe44f63e35b359ece&ipo=images",
      name: "Factory",
      cheats: [
       {
        name: "Choose Blook",
        description: "Gives you a blook",
        inputs: [
         {
          name: "Blook",
          type: "options",
          options: [
           { name: "Chick", color: "#ffcd05", class: "🌽", rarity: "Common", cash: [3, 7, 65, 400, 2500], time: [1, 1, 1, 1, 1], price: [300, 3e3, 3e4, 2e5] },
           { name: "Chicken", color: "#ed1c24", class: "🌽", rarity: "Common", cash: [10, 40, 200, 1400, 1e4], time: [5, 4, 3, 2, 1], price: [570, 4e3, 5e4, 8e5] },
           { name: "Cow", color: "#58595b", class: "🌽", rarity: "Common", cash: [25, 75, 1500, 25e3, 25e4], time: [15, 10, 10, 10, 5], price: [500, 9500, 16e4, 4e6] },
           { name: "Duck", color: "#4ab96d", class: "🌽", rarity: "Common", cash: [4, 24, 200, 3e3, 4e4], time: [3, 3, 3, 3, 3], price: [450, 4200, 7e4, 11e5] },
           { name: "Goat", color: "#c59a74", class: "🌽", rarity: "Common", cash: [5, 28, 200, 1300, 12e3], time: [3, 3, 2, 2, 2], price: [500, 6400, 45e3, 5e5] },
           { name: "Horse", color: "#995b3c", class: "🌽", rarity: "Common", cash: [5, 20, 270, 1800, 15e3], time: [2, 2, 2, 2, 2], price: [550, 8200, 65e3, 6e5] },
           { name: "Pig", color: "#f6a9cb", class: "🌽", rarity: "Common", cash: [20, 50, 1300, 8e3, 8e4], time: [7, 7, 7, 7, 5], price: [400, 11e3, 8e4, 13e5] },
           { name: "Sheep", color: "#414042", class: "🌽", rarity: "Common", cash: [6, 25, 250, 1500, 11e3], time: [3, 3, 3, 2, 2], price: [500, 5e3, 5e4, 43e4] },
           { name: "Cat", color: "#f49849", class: "🐾", rarity: "Common", cash: [5, 18, 170, 1700, 13e3], time: [2, 2, 2, 2, 2], price: [480, 5500, 6e4, 5e5] },
           { name: "Dog", color: "#995b3c", class: "🐾", rarity: "Common", cash: [7, 25, 220, 1900, 9e3], time: [3, 3, 2, 2, 1], price: [460, 6600, 7e4, 73e4] },
           { name: "Goldfish", color: "#f18221", class: "🐾", rarity: "Common", cash: [5, 40, 350, 3500, 35e3], time: [3, 3, 3, 3, 3], price: [750, 7200, 84e3, 95e4] },
           { name: "Rabbit", color: "#e7bf9a", class: "🐾", rarity: "Common", cash: [3, 18, 185, 800, 7e3], time: [2, 2, 2, 1, 1], price: [500, 5800, 56e3, 55e4] },
           { name: "Hamster", color: "#ce9176", class: "🐾", rarity: "Common", cash: [10, 45, 450, 4500, 45e3], time: [4, 4, 4, 4, 4], price: [650, 6500, 8e4, 93e4] },
           { name: "Turtle", color: "#619a3c", class: "🐾", rarity: "Common", cash: [23, 120, 1400, 15e3, 17e4], time: [10, 10, 10, 10, 10], price: [700, 8500, 11e4, 13e5] },
           { name: "Puppy", color: "#414042", class: "🐾", rarity: "Common", cash: [4, 10, 75, 500, 3e3], time: [1, 1, 1, 1, 1], price: [450, 4e3, 35e3, 25e4] },
           { name: "Kitten", color: "#58595b", class: "🐾", rarity: "Common", cash: [4, 8, 60, 400, 2e3], time: [1, 1, 1, 1, 1], price: [350, 3500, 26e3, 17e4] },
           { name: "Bear", color: "#995b3c", class: "🌲", rarity: "Common", cash: [12, 70, 550, 4500, 1e5], time: [7, 7, 6, 5, 5], price: [550, 5500, 63e3, 16e5] },
           { name: "Moose", color: "#995b3c", class: "🌲", rarity: "Common", cash: [8, 45, 400, 3500, 26e3], time: [5, 5, 4, 4, 3], price: [520, 6500, 58e3, 7e5] },
           { name: "Fox", color: "#f49849", class: "🌲", rarity: "Common", cash: [7, 15, 80, 550, 3e3], time: [2, 2, 1, 1, 1], price: [400, 4e3, 36e3, 24e4] },
           { name: "Raccoon", color: "#6d6e71", class: "🌲", rarity: "Common", cash: [5, 14, 185, 1900, 19e3], time: [2, 2, 2, 2, 2], price: [400, 5e3, 71e3, 8e5] },
           { name: "Squirrel", color: "#d25927", class: "🌲", rarity: "Common", cash: [3, 10, 65, 470, 2600], time: [1, 1, 1, 1, 1], price: [420, 3600, 32e3, 21e4] },
           { name: "Owl", color: "#594a42", class: "🌲", rarity: "Common", cash: [4, 17, 155, 1500, 15e3], time: [2, 2, 2, 2, 2], price: [500, 4800, 55e3, 58e4] },
           { name: "Hedgehog", color: "#3f312b", class: "🌲", rarity: "Common", cash: [11, 37, 340, 2200, 3e4], time: [5, 4, 3, 2, 2], price: [540, 7e3, 77e3, 12e5] },
           { name: "Seal", color: "#7ca1d5", class: "❄️", rarity: "Common", cash: [6, 17, 150, 1200, 13e3], time: [2, 2, 2, 2, 2], price: [480, 4500, 43e3, 52e4] },
           { name: "Arctic Fox", color: "#7ca1d5", class: "❄️", rarity: "Common", cash: [5, 18, 180, 850, 8500], time: [2, 2, 2, 1, 1], price: [520, 550, 61e3, 68e4] },
           { name: "Snowy Owl", color: "#feda3f", class: "❄️", rarity: "Common", cash: [5, 20, 190, 1900, 16e3], time: [3, 3, 2, 2, 2], price: [370, 5300, 76e3, 62e4] },
           { name: "Arctic Hare", color: "#7ca1d5", class: "❄️", rarity: "Common", cash: [6, 19, 85, 900, 7e3], time: [2, 2, 1, 1, 1], price: [540, 5200, 66e3, 55e4] },
           { name: "Penguin", color: "#fb8640", class: "❄️", rarity: "Common", cash: [4, 21, 310, 3200, 33e3], time: [3, 3, 3, 3, 3], price: [400, 6500, 76e3, 87e4] },
           { name: "Baby Penguin", color: "#414042", class: "❄️", rarity: "Common", cash: [3, 8, 70, 450, 2700], time: [1, 1, 1, 1, 1], price: [420, 3300, 33e3, 23e4] },
           { name: "Polar Bear", color: "#7ca1d5", class: "❄️", rarity: "Common", cash: [12, 75, 700, 6500, 85e3], time: [8, 7, 6, 5, 5], price: [630, 7e3, 91e3, 14e5] },
           { name: "Walrus", color: "#7d4f33", class: "❄️", rarity: "Common", cash: [11, 46, 420, 3700, 51e3], time: [5, 5, 4, 4, 4], price: [550, 6200, 68e3, 1e6] },
           { name: "Tiger", color: "#f18221", class: "🌴", rarity: "Common", cash: [6, 20, 100, 975, 7500], time: [3, 3, 1, 1, 1], price: [390, 6e3, 7e4, 61e4] },
           { name: "Jaguar", color: "#fbb040", class: "🌴", rarity: "Common", cash: [8, 28, 230, 1600, 17e3], time: [3, 3, 2, 2, 2], price: [390, 6e3, 7e4, 61e4] },
           { name: "Toucan", color: "#ffca34", class: "🌴", rarity: "Common", cash: [9, 20, 175, 625, 3800], time: [2, 2, 2, 1, 1], price: [520, 4800, 42e3, 3e5] },
           { name: "Cockatoo", color: "#7ca1d5", class: "🌴", rarity: "Common", cash: [6, 35, 160, 1700, 18e3], time: [4, 4, 2, 2, 2], price: [500, 5e3, 63e3, 7e5] },
           { name: "Macaw", color: "#00aeef", class: "🌴", rarity: "Common", cash: [3, 8, 85, 850, 8500], time: [1, 1, 1, 1, 1], price: [480, 5400, 62e3, 63e4] },
           { name: "Parrot", color: "#ed1c24", class: "🌴", rarity: "Common", cash: [3, 9, 90, 900, 9e3], time: [1, 1, 1, 1, 1], price: [540, 5700, 65e3, 69e4] },
           { name: "Panther", color: "#2f2c38", class: "🌴", rarity: "Common", cash: [12, 28, 215, 2100, 21e3], time: [5, 3, 2, 2, 2], price: [530, 6500, 76e3, 87e4] },
           { name: "Anaconda", color: "#8a9143", class: "🌴", rarity: "Common", cash: [3, 15, 85, 1500, 7600], time: [1, 2, 1, 2, 1], price: [410, 5100, 58e3, 59e4] },
           { name: "Orangutan", color: "#bc6234", class: "🌴", rarity: "Common", cash: [13, 52, 570, 4300, 7e4], time: [5, 5, 5, 4, 4], price: [600, 7e3, 8e4, 14e5] },
           { name: "Capuchin", color: "#e0b0a6", class: "🌴", rarity: "Common", cash: [4, 14, 160, 780, 8200], time: [2, 2, 2, 1, 1], price: [390, 4700, 57e3, 68e4] },
           { name: "Elf", color: "#a7d054", class: "⚔️", rarity: "Uncommon", cash: [5e3, 15e3, 15e4, 15e5, 1e7], time: [1, 1, 1, 1, 1], price: [8e5, 9e6, 11e7, 8e8] },
           { name: "Witch", color: "#4ab96d", class: "⚔️", rarity: "Uncommon", cash: [18e3, 6e4, 4e4, 4e6, 35e6], time: [3, 3, 2, 2, 2], price: [11e5, 12e6, 15e7, 14e8] },
           { name: "Wizard", color: "#5a459c", class: "⚔️", rarity: "Uncommon", cash: [19500, 65e3, 44e4, 46e5, 4e6], time: [3, 3, 2, 2, 2], price: [13e5, 135e5, 16e7, 16e8] },
           { name: "Fairy", color: "#df6d9c", class: "⚔️", rarity: "Uncommon", cash: [18500, 6e4, 62e4, 44e5, 38e6], time: [3, 3, 3, 2, 2], price: [12e5, 125e5, 15e6, 15e8] },
           { name: "Slime Monster", color: "#2fa04a", class: "⚔️", rarity: "Uncommon", cash: [35e3, 14e4, 1e6, 11e6, 11e7], time: [5, 5, 4, 4, 4], price: [16e5, 15e6, 2e8, 23e8] },
           { name: "Jester", color: "#be1e2d", class: "⚔️", rarity: "Rare", cash: [25e3, 1e5, 68e4, 65e5, 32e6], time: [3, 3, 2, 2, 1], price: [2e6, 21e6, 23e7, 26e8] },
           { name: "Dragon", color: "#2fa04a", class: "⚔️", rarity: "Rare", cash: [36e3, 15e4, 15e5, 15e6, 15e7], time: [4, 4, 4, 4, 4], price: [23e5, 24e6, 27e7, 3e9] },
           { name: "Unicorn", color: "#f6afce", class: "⚔️", rarity: "Epic", cash: [24e3, 15e4, 14e5, 7e6, 75e6], time: [2, 2, 2, 1, 1], price: [45e5, 45e6, 55e7, 65e8] },
           { name: "Queen", color: "#9e1f63", class: "⚔️", rarity: "Rare", cash: [24e3, 95e3, 95e4, 97e5, 95e6], time: [3, 3, 3, 3, 3], price: [19e5, 2e7, 23e7, 25e8] },
           { name: "King", color: "#ee2640", class: "⚔️", rarity: "Legendary", cash: [75e3, 4e5, 6e6, 9e7, 125e7], time: [5, 5, 5, 5, 5], price: [6e6, 95e6, 16e8, 25e9] },
           { name: "Two of Spades", color: "#414042", class: "🏰", rarity: "Uncommon", cash: [4500, 14e3, 14e4, 14e5, 9e6], time: [1, 1, 1, 1, 1], price: [77e4, 83e5, 98e6, 71e7] },
           { name: "Eat Me", color: "#d58c55", class: "🏰", rarity: "Uncommon", cash: [13e3, 45e3, 45e4, 45e5, 5e7], time: [2, 2, 2, 2, 2], price: [13e5, 14e6, 16e7, 2e9] },
           { name: "Drink Me", color: "#dd7399", class: "🏰", rarity: "Uncommon", cash: [12e3, 4e4, 4e5, 4e6, 45e6], time: [2, 2, 2, 2, 2], price: [12e5, 12e6, 14e7, 18e8] },
           { name: "Alice", color: "#4cc9f5", class: "🏰", rarity: "Uncommon", cash: [13e3, 42e3, 21e4, 21e5, 23e6], time: [2, 2, 1, 1, 1], price: [12e5, 13e6, 15e7, 19e8] },
           { name: "Queen of Hearts", color: "#d62027", class: "🏰", rarity: "Uncommon", cash: [23e3, 87e3, 62e4, 75e5, 9e7], time: [4, 4, 3, 3, 3], price: [13e5, 13e6, 18e7, 24e8] },
           { name: "Dormouse", color: "#89d6f8", class: "🏰", rarity: "Rare", cash: [17e3, 68e3, 7e5, 35e5, 35e6], time: [2, 2, 1, 1, 1], price: [2e6, 22e6, 25e7, 28e8] },
           { name: "White Rabbit", color: "#ffcd05", class: "🏰", rarity: "Rare", cash: [26e3, 105e3, 11e6, 77e5, 72e6], time: [3, 3, 3, 2, 2], price: [2e6, 23e6, 28e7, 29e8] },
           { name: "Cheshire Cat", color: "#dd7399", class: "🏰", rarity: "Rare", cash: [32e3, 1e5, 9e5, 9e6, 6e7], time: [4, 3, 3, 3, 2], price: [18e5, 19e6, 22e7, 24e8] },
           { name: "Caterpillar", color: "#00c0f3", class: "🏰", rarity: "Epic", cash: [1e4, 7e4, 65e4, 75e5, 85e6], time: [1, 1, 1, 1, 1], price: [42e5, 42e6, 54e7, 69e8] },
           { name: "Mad Hatter", color: "#914f93", class: "🏰", rarity: "Epic", cash: [38e3, 25e4, 15e5, 14e6, 8e7], time: [3, 3, 2, 2, 1], price: [48e5, 48e6, 52e7, 66e8] },
           { name: "King of Hearts", color: "#c62127", class: "🏰", rarity: "Legendary", cash: [8e4, 42e4, 68e5, 1e8, 15e8], time: [5, 5, 5, 5, 5], price: [7e6, 11e7, 18e8, 3e10] },
           { name: "Earth", color: "#416eb5", class: "🚀", rarity: "Uncommon", cash: [15e3, 45e3, 6e5, 65e5, 65e6], time: [3, 3, 3, 3, 3], price: [1e6, 11e6, 15e7, 17e8] },
           { name: "Meteor", color: "#c68c3c", class: "🚀", rarity: "Uncommon", cash: [23e3, 65e3, 7e5, 45e5, 2e7], time: [5, 4, 3, 2, 1], price: [95e4, 13e6, 16e7, 16e8] },
           { name: "Stars", color: "#19184d", class: "🚀", rarity: "Uncommon", cash: [1e4, 4e4, 2e5, 2e6, 18e6], time: [2, 2, 1, 1, 1], price: [14e5, 14e6, 15e7, 15e8] },
           { name: "Alien", color: "#8dc63f", class: "🚀", rarity: "Uncommon", cash: [3e4, 1e5, 1e6, 11e6, 85e6], time: [4, 4, 4, 4, 4], price: [15e5, 17e6, 19e7, 17e8] },
           { name: "Planet", color: "#9dc6ea", class: "🚀", rarity: "Rare", cash: [25e3, 1e5, 9e5, 9e6, 9e7], time: [3, 3, 3, 3, 3], price: [2e6, 21e6, 21e7, 24e8] },
           { name: "UFO", color: "#a15095", class: "🚀", rarity: "Rare", cash: [17e3, 7e4, 7e5, 7e6, 7e7], time: [2, 2, 2, 2, 2], price: [21e5, 23e6, 25e7, 28e8] },
           { name: "Spaceship", color: "#ffcb29", class: "🚀", rarity: "Epic", cash: [6e4, 32e4, 21e5, 15e6, 85e6], time: [5, 4, 3, 2, 1], price: [48e5, 46e6, 54e7, 68e8] },
           { name: "Astronaut", color: "#9bd4ee", class: "🚀", rarity: "Legendary", cash: [45e3, 26e4, 25e5, 38e6, 55e7], time: [3, 3, 2, 2, 2], price: [65e5, 1e8, 17e8, 27e9] },
           { name: "Lil Bot", color: "#3e564a", class: "🤖", rarity: "Uncommon", cash: [4e3, 12e3, 18e4, 19e5, 25e6], time: [1, 1, 1, 1, 1], price: [73e4, 12e6, 13e7, 19e8] },
           { name: "Lovely Bot", color: "#f179af", class: "🤖", rarity: "Uncommon", cash: [16e3, 65e3, 65e4, 48e5, 42e6], time: [3, 3, 3, 2, 2], price: [13e5, 14e6, 17e7, 16e8] },
           { name: "Angry Bot", color: "#f1613a", class: "🤖", rarity: "Uncommon", cash: [22e3, 85e3, 8e5, 62e5, 65e6], time: [4, 4, 4, 3, 3], price: [12e5, 13e6, 15e7, 17e8] },
           { name: "Happy Bot", color: "#51ba6b", class: "🤖", rarity: "Uncommon", cash: [11e3, 45e3, 5e5, 25e5, 3e7], time: [2, 2, 2, 1, 1], price: [14e5, 15e6, 18e7, 24e8] },
           { name: "Watson", color: "#d69b5a", class: "🤖", rarity: "Rare", cash: [24e3, 1e5, 1e6, 1e7, 1e8], time: [3, 3, 3, 3, 3], price: [2e6, 22e6, 24e7, 26e8] },
           { name: "Buddy Bot", color: "#9dc6ea", class: "🤖", rarity: "Rare", cash: [22e3, 95e3, 65e4, 65e5, 65e6], time: [3, 3, 2, 2, 2], price: [19e5, 21e6, 23e7, 25e8] },
           { name: "Brainy Bot", color: "#9ecf7a", class: "🤖", rarity: "Epic", cash: [5e4, 25e4, 21e5, 21e6, 17e7], time: [4, 3, 3, 3, 2], price: [5e6, 46e6, 5e8, 67e8] },
           { name: "Mega Bot", color: "#d71f27", class: "🤖", rarity: "Legendary", cash: [8e4, 43e4, 42e5, 62e6, 1e9], time: [5, 5, 3, 3, 3], price: [7e6, 12e7, 19e8, 35e9] },
          ].map((e) => ({ name: e.name, value: JSON.stringify(e) })),
         },
        ],
        run: function (e) {
         var t = Ae();
         10 <= t.state.blooks.length && alert("Choose a blook to replace"), (t.waiting = !1), t.chooseBlook(JSON.parse(e));
        },
       },
       {
        name: "Free Upgrades",
        description: "Sets upgrade prices to 0 for all current blooks",
        run: function () {
         const e = [0, 0, 0, 0];
         var t = Ae();
         t.setState({ blooks: t.state.blooks.map((t) => ((t.price = e), t)) });
        },
       },
       {
        name: "Max Blooks",
        description: "Maxes out all your blooks' levels",
        run: function () {
         Ae().state.blooks.forEach((e) => (e.level = 4));
        },
       },
       {
        name: "Remove Glitches",
        description: "Removes all enemy glitches",
        run: function () {
         var e = Ae();
         e.setState({ bits: 0, ads: [], hazards: [], color: "", lol: !1, joke: !1, slow: !1, dance: !1, glitch: "", glitcherName: "", glitcherBlook: "" }),
          clearTimeout(e.adTimeout),
          clearInterval(e.hazardInterval),
          clearTimeout(e.nightTimeout),
          clearTimeout(e.glitchTimeout),
          clearTimeout(e.lolTimeout),
          clearTimeout(e.jokeTimeout),
          clearTimeout(e.slowTimeout),
          clearTimeout(e.danceTimeout),
          clearTimeout(e.nameTimeout);
        },
       },
       {
        name: "Send Glitch",
        description: "Sends a glitch to everyone else playing",
        inputs: [
         {
          name: "Glitch",
          type: "options",
          options: Object.entries({ lb: "Lunch Break", as: "Ad Spam", e37: "Error 37", nt: "Night Time", lo: "#LOL", j: "Jokester", sm: "Slow Mo", dp: "Dance Party", v: "Vortex", r: "Reverse", f: "Flip", m: "Micro" }).map(([e, t]) => ({
           name: t,
           value: e,
          })),
         },
        ],
        run: function (e) {
         var t = Ae();
         (t.safe = !0), t.props.liveGameController.setVal({ path: `c/${t.props.client.name}/tat`, val: e });
        },
       },
       {
        name: "Set All MegaBot",
        description: "Sets all your blooks to maxed out Mega Bots",
        run: function () {
         Ae().setState({
          blooks: Array.from({ length: 10 }, () => ({
           name: "Mega Bot",
           color: "#d71f27",
           class: "🤖",
           rarity: "Legendary",
           cash: [8e4, 43e4, 42e5, 62e6, 1e9],
           time: [5, 5, 3, 3, 3],
           price: [7e6, 12e7, 19e8, 35e9],
           active: !1,
           level: 4,
           bonus: 5.5,
          })),
         });
        },
       },
       {
        name: "Set Cash",
        description: "Sets amount of cash you have",
        inputs: [{ name: "Cash", type: "number" }],
        run: function (e) {
         Ae().setState({ cash: e });
        },
       },
      ],
     },
     racing: {
      img:
       "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.etsystatic.com%2F41895899%2Fr%2Fil%2F74f0c4%2F4763636531%2Fil_1080xN.4763636531_irhj.jpg&f=1&nofb=1&ipt=368ad743959d2437ef56a7473753f28c1b0d234ed123a7b9ce8f012a81741c2b&ipo=images",
      name: "Racing",
      cheats: [
       {
        name: "Instant Win",
        description: "Instantly Wins the race",
        run: function () {
         var e = Ae();
         e.setState({ progress: e.state.goalAmount }), e.props.liveGameController.setVal({ path: "c/" + e.props.client.name + "/pr", val: e.state.goalAmount });
        },
       },
       {
        name: "Set Questions",
        description: "Sets the number of questions left",
        inputs: [{ name: "Questions", type: "number" }],
        run: function (e) {
         var t = Ae();
         (e = t.props.client.amount - e), t.setState({ progress: e }), t.props.liveGameController.setVal({ path: "c/" + t.props.client.name + "/pr", val: e });
        },
       },
      ],
     },
     rush: {
      img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia1.giphy.com%2Fmedia%2FZ8MYSDbE8VFqo%2Fgiphy.gif&f=1&nofb=1&ipt=401d9748a2de70ca8abec5b1f700a978ddd14bcf223fbc5b252c992d4b17fa6d&ipo=images",
      name: "Blook Rush",
      cheats: [
       {
        name: "Set Blooks",
        description: "Sets amount of blooks you or your team has",
        inputs: [{ name: "Blooks", type: "number" }],
        run: function (e) {
         var t = Ae();
         t.setState({ numBlooks: e }), t.props.liveGameController.setVal({ path: (t.isTeam ? "a/" : "c/") + t.props.client.name + "/bs", val: e });
        },
       },
       {
        name: "Set Defense",
        description: "Sets amount of defense you or your team has (Max 4)",
        inputs: [{ name: "Defense (max 4)", type: "number", max: 4 }],
        run: function (e) {
         e = Math.min(e, 4);
         var t = Ae();
         t.setState({ numDefense: e }), t.props.liveGameController.setVal({ path: (t.isTeam ? "a/" : "c/") + t.props.client.name + "/d", val: e });
        },
       },
      ],
     },
     tower: {
      img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.tenor.com%2FHnVHBcj3oIoAAAAC%2Fcat-falling.gif&f=1&nofb=1&ipt=b111c584b8e6733bd5f45b299cdf54648865eb4839934299f2a91a8be1b43667&ipo=images",
      name: "Tower of Doom",
      cheats: [
       {
        name: "Fill Deck",
        description: "Fills your deck with every maxed out card and artifact (Only works on towers page)",
        run: function () {
         if ("/tower/map" == window.location.pathname) {
          var e = Ae();
          (e.props.tower.artifacts = "Medical Kit|Fury Relic|Survival Guide|Steel Socks|Piggy Bank|Lucky Feather|Coupon|Cheese|Tasty Egg|Training Weights|Mighty Shield|Toxic Waste|Lifeline Totem|Cursed Hourglass|Band-Aid|Elder Coins|Captain's Anchor|Chess Pieces|Pink Hippo|Anorak's Wizard Cap|Dave's Doggo|Anubis' Obelisk|Farm Tractor|Magic Seedling|Just A Bone|Cozy Igloo|King's Crown|Sacred Scroll".split(
           "|"
          )),
           (e.props.tower.cards = "Chick,🌽|Chicken,🌽|Cow,🌽|Goat,🌽|Horse,🌽|Pig,🌽|Sheep,🌽|Duck,🌽|Dog,🌽|Cat,🐾|Rabbit,🐾|Goldfish,🐾|Hamster,🐾|Turtle,🐾|Kitten,🐾|Puppy,🐾|Bear,🌲|Moose,🌲|Fox,🌲|Raccoon,🌲|Squirrel,🌲|Owl,🌲|Hedgehog,🌲|Baby Penguin,❄️|Penguin,❄️|Arctic Fox,❄️|Snowy Owl,❄️|Polar Bear,❄️|Arctic Hare,❄️|Seal,❄️|Walrus,❄️|Tiger,🌴|Panther,🌴|Cockatoo,🌴|Orangutan,🌴|Anaconda,🌴|Macaw,🌴|Jaguar,🌴|Capuchin,🌴|Toucan,🌴|Parrot,🌴|Elf,⚔️|Witch,⚔️|Wizard,⚔️|Fairy,⚔️|Slime Monster,⚔️|Jester,⚔️|Dragon,⚔️|Unicorn,⚔️|Queen,⚔️|King,⚔️|Snow Globe,☃️|Holiday Gift,☃️|Hot Chocolate,☃️|Gingerbread Man,☃️|Gingerbread House,☃️|Holiday Wreath,☃️|Snowman,☃️|Santa Claus,☃️|Two of Spades,🏰|Eat Me,🏰|Drink Me,🏰|Alice,🏰|Queen of Hearts,🏰|Dormouse,🏰|White Rabbit,🏰|Cheshire Cat,🏰|Caterpillar,🏰|Mad Hatter,🏰|King of Hearts,🏰"
            .split("|")
            .map((e) => {
             var [e, t] = e.split(",");
             return { strength: 20, charisma: 20, wisdom: 20, class: t, blook: e };
            }));
          try {
           e.props.addTowerNode();
          } catch {}
          e.setState({ showDeck: !1 });
         } else alert("You need to be on the map to run this cheat!");
        },
       },
       {
        name: "Max Cards",
        description: "Maxes out all the cards in your deck",
        run: function () {
         if ("/tower/map" == window.location.pathname) {
          var e = Ae();
          e.props.tower.cards.forEach((e) => {
           (e.strength = 20), (e.charisma = 20), (e.wisdom = 20);
          });
          try {
           e.forceUpdate();
          } catch {}
         } else alert("You need to be on the map to run this cheat!");
        },
       },
       {
        name: "Max Health",
        description: "Fills the player's health",
        run: function () {
         "/tower/battle" == window.location.pathname ? Ae().setState({ myHealth: 100, myLife: 100 }) : alert("You need to be in battle to run this cheat!");
        },
       },
       {
        name: "Max Card Stats",
        description: "Maxes out player's current card (Only works on attribute select page)",
        run: function () {
         var e = Ae();
         "select" !== e.state.phase ? alert("You must be on the attribute selection page!") : e.setState({ myCard: { ...e.state.myCard, strength: 20, charisma: 20, wisdom: 20 } });
        },
       },
       {
        name: "Min Enemy Stats",
        description: "Makes the enemy card stats all 0 (Only works on attribute select page)",
        run: function () {
         var e = Ae();
         "select" !== e.state.phase ? alert("You must be on the attribute selection page!") : e.setState({ enemyCard: { ...e.state.enemyCard, strength: 0, charisma: 0, wisdom: 0 } });
        },
       },
       {
        name: "Set Coins",
        description: "Try's to set amount of tower coins you have",
        inputs: [{ name: "Coins", type: "number" }],
        run: function (e) {
         if ("/tower/battle" == window.location.pathname)
          try {
           Ae().props.setTowerCoins(e);
          } catch {}
         else alert("You need to be in battle to run this cheat!");
        },
       },
      ],
     },
     kingdom: {
      img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.giphy.com%2Fmedia%2FeDQjYjLbDGkE%2Fgiphy.gif&f=1&nofb=1&ipt=c8f1a56d115038b5b575ed12c32f7d5353e2eca92e77bfbf474c18aa749385f5&ipo=images",
      name: "Crazy Kingdom",
      cheats: [
       {
        name: "Choice ESP",
        description: "Shows you what will happen if you say Yes or No",
        type: "toggle",
        enabled: !1,
        data: null,
        run: function () {
         this.enabled
          ? ((this.enabled = !1), clearInterval(this.data), Array.prototype.forEach.call(document.querySelectorAll(".choiceESP"), (e) => e.remove()), (this.data = null))
          : ((this.enabled = !0),
            (this.data = setInterval(
             (e) => {
              let t = Ae(),
               a = Array.prototype.reduce.call(document.querySelectorAll("[class*=statContainer]"), (t, a, o) => ((t[e[o]] = a), t), {});
              "choice" == t.state.phase &&
               (Array.prototype.forEach.call(document.querySelectorAll(".choiceESP"), (e) => e.remove()),
               Object.keys(t.state.guest.yes || {}).forEach((e) => {
                var o;
                null != a[e] &&
                 (((o = document.createElement("div")).className = "choiceESP"), (o.style = "font-size: 24px; color: rgb(75, 194, 46); font-weight: bolder;"), (o.innerText = String(t.state.guest.yes[e])), a[e].appendChild(o));
               }),
               Object.keys(t.state.guest.no || {}).forEach((e) => {
                var o;
                null != a[e] && (((o = document.createElement("div")).className = "choiceESP"), (o.style = "font-size: 24px; color: darkred; font-weight: bolder;"), (o.innerText = String(t.state.guest.no[e])), a[e].appendChild(o));
               }),
               Array.prototype.forEach.call(document.querySelectorAll("[class*=guestButton][role=button]"), (e) => (e.onclick = () => Array.prototype.forEach.call(document.querySelectorAll(".choiceESP"), (e) => e.remove()))));
             },
             50,
             ["materials", "people", "happiness", "gold"]
            )));
        },
       },
       {
        name: "Disable Tax Toucan",
        description: "Tax evasion",
        run: function () {
         Ae().taxCounter = Number.MAX_VALUE;
        },
       },
       {
        name: "Max Stats",
        description: "Sets all resources to the max",
        run: function () {
         Ae().setState({ materials: 100, people: 100, happiness: 100, gold: 100 });
        },
       },
       {
        name: "Set Guests",
        description: "Sets the amount of guests you've seen",
        inputs: [{ name: "Guests", type: "number" }],
        run: function (e) {
         Ae().setState({ guestScore: e });
        },
       },
       {
        name: "Skip Guest",
        description: "Skips the current guest",
        run: function () {
         Ae().nextGuest();
        },
       },
      ],
     },
     toy: {
      img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.giphy.com%2Fmedia%2FYxrC9XUB0ghi0%2Fgiphy.gif&f=1&nofb=1&ipt=f57453d9dc7ec8e6f28eebbc41d177c58d27c7c555a476657ef0f67140ec32cc&ipo=images",
      name: "Santa's Workshop",
      cheats: [
       {
        name: "Remove Distractions",
        description: "Removes all enemy distractions",
        run: function () {
         Ae().setState({ fog: !1, dusk: !1, wind: !1, plow: !1, blizzard: !1, force: !1, canada: !1, trees: [!1, !1, !1, !1, !1, !1, !1, !1, !1, !1] });
        },
       },
       {
        name: "Send Distraction",
        description: "Sends a distraction to everyone else playing",
        inputs: [
         {
          name: "Distraction",
          type: "options",
          options: Object.entries({ c: "Oh Canada", b: "Blizzard", f: "Fog Spell", d: "Dark & Dusk", w: "Howling Wind", g: "Gift Time!", t: "TREES", s: "Snow Plow", fr: "Use The Force" }).map(([e, t]) => ({ name: t, value: e })),
         },
        ],
        run: function (e) {
         var t = Ae();
         (t.safe = !0), t.props.liveGameController.setVal({ path: `c/${t.props.client.name}/tat`, val: e });
        },
       },
       {
        name: "Set Toys",
        description: "Sets amount of toys",
        inputs: [{ name: "Toys", type: "number" }],
        run: function (e) {
         var t = Ae();
         t.setState({ toys: e }), t.props.liveGameController.setVal({ path: "c/" + t.props.client.name + "/t", val: e });
        },
       },
       {
        name: "Set Toys Per Question",
        description: "Sets amount of toys per question",
        inputs: [{ name: "Toys Per Question", type: "number" }],
        run: function (e) {
         Ae().setState({ toysPerQ: e });
        },
       },
       {
        name: "Swap Toys",
        description: "Swaps toys with someone",
        inputs: [
         {
          name: "Player",
          type: "options",
          options: () => {
           let e = Ae();
           return e.props.liveGameController._liveApp ? new Promise((t) => e.props.liveGameController.getDatabaseVal("c", (e) => e && t(Object.keys(e)))) : [];
          },
         },
        ],
        run: function (e) {
         let t = Ae();
         t.props.liveGameController.getDatabaseVal("c", (a) => {
          a && null != a[e] && (t.props.liveGameController.setVal({ path: "c/" + t.props.client.name + "/tat", val: e + ":swap:" + t.state.toys }), t.setState({ toys: a[e].t }));
         });
        },
       },
      ],
     },
     flappy: {
      img:
       "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.wikia.nocookie.net%2Fnyancat%2Fimages%2F1%2F15%2FCherryBlossomNyan.gif%2Frevision%2Flatest%3Fcb%3D20230201011648&f=1&nofb=1&ipt=0a58d988681e98b1d06f8bb90eb97f8357e2e32e51e43b3dbf684e1ddf30bce1&ipo=images",
      name: "Flappy Blook",
      cheats: [
       {
        name: "Toggle Ghost",
        description: "Lets you go through the pipes",
        type: "toggle",
        enabled: !1,
        run: function () {
         this.enabled = !this.enabled;
         for (const e of Object.values(document.querySelector("#phaser-bouncy"))[0]["return"].updateQueue.lastEffect.deps[0].current.config.sceneConfig.physics.world.bodies.entries)
          if (e.gameObject.frame.texture.key.startsWith("blook")) {
           (e.checkCollision.none = this.enabled), e.gameObject.setAlpha(this.enabled ? 0.5 : 1);
           break;
          }
        },
       },
       {
        name: "Set Score",
        description: "Sets flappy blook score",
        inputs: [{ name: "Score", type: "number" }],
        run: function (e) {
         Object.values(document.querySelector("#phaser-bouncy"))[0]["return"].updateQueue.lastEffect.deps[1](e || 0);
        },
       },
      ],
     },
    });
  var N = document.createElement("div");
  N.className = c.searchPage;
  const L = document.createElement("form"),
   B = ((L.className = c.searchbarHolder), document.createElement("input"));
  (B.placeholder = "Search Cheats"),
   (B.className = c.searchbarInput),
   ((te = document.createElement("div")).onclick = () => (B.value = "")),
   (te.innerHTML = '<i class="fas fa-times" style="line-height: 1;"></i>'),
   (te.className = c.searchbarButton),
   L.append(B, te);
  const I = document.createElement("div"),
   G = ((I.className = c.noScroll + " " + c.searchResults), document.createElement("div"));
  (G.className = c.noResult), N.append(L, I);
  let q,
   R = {};
  (N.onPath = L.onsubmit = (e) => {
   clearTimeout(q), e?.preventDefault?.();
   var t = B.value.toLowerCase();
   let a = !1;
   for (const o of I.children)
    o != G &&
     (o.dataset[d.mode]?.includes?.(t) || o.dataset[d.name].includes(t) || o.dataset[d.description]?.includes?.(t)
      ? ((a = !0), (o.style.display = "block"), o.dataset[d.mode] && (R[o.dataset[d.mode]].style.display = "block"))
      : (o.style.display = "none"));
   a ? (G.style.display = "none") : ((G.innerText = `No results found for "${t}"`), (G.style.display = "block"));
  }),
   (B.oninput = (e) => {
    clearTimeout(q), (q = setTimeout(L.onsubmit, 1e3));
   });
  const j = document.createElement("div"),
   H = ((j.className = c.noScroll + " " + c.favoritesPage), document.createElement("span"));
  (H.innerText = "You have no favorites."),
   j.append(H),
   (j.onPath = () => {
    H.style.display = null == j.querySelector("[data-" + d.favorited + "='true']") ? "block" : "none";
   }),
   (C.innerHTML = ""),
   (I.innerHTML = ""),
   I.append(G);
  for (const t in z) {
   var V = document.createElement("div"),
    U = ((V.className = c.gamemode), document.createElement("img")),
    $ = ((U.src = z[t].img), document.createElement("div"));
   (U.alt = $.innerText = z[t].name), V.append(U, $);
   const e = document.createElement("div");
   e.className = c.contentPage;
   var W = document.createElement("div");
   W.className = c.cheatsList + " " + c.noScroll;
   const a = [],
    o = ((e.onPath = () => a.forEach((e) => e())), document.createElement("div")),
    n = ((o.onclick = () => T.push(z[t].name, e)), (o.className = c.searchResultSeparator), (o.dataset[d.name] = (o.innerText = z[t].name).toLowerCase()), (R[z[t].name.toLowerCase()] = o), I.append(o), o.cloneNode(!0));
   (n.dataset[d.favorites] = 0), (n.onclick = o.onclick), j.append(n);
   for (const s of z[t].cheats) {
    const o = `${t}.${s.name.toLowerCase()}.` + ("toggle" == s.type ? "toggle" : "execute"),
     i = document.createElement("div");
    var J = document.createElement("div");
    (_ = ((J.className = c.searchResult), document.createElement("div"))).className = c.searchResultInfo;
    const l = document.createElement("div");
    (l.className = c.searchResultName), (J.dataset[d.name] = (l.innerText = s.name + ("toggle" != s.type || s.name.includes("toggle") ? "" : " (Toggle)")).toLowerCase()), (J.dataset[d.mode] = z[t].name.toLowerCase());
    var _,
     K =
      (((K = document.createElement("div")).className = c.searchResultDescription),
      (J.dataset[d.description] = (K.innerText = s.description).toLowerCase()),
      _.append(l, K),
      (J.onclick = () => {
       T.push(l.innerText, e),
        i.scrollIntoView(),
        i.animate(
         [
          { color: "var(--textColor)", textShadow: "0 0 0px var(--highlight)" },
          { color: "var(--highlight)", textShadow: "0 0 5px var(--highlight)", offset: 0.25 },
          { color: "var(--textColor)", textShadow: "0 0 0px var(--highlight)" },
         ],
         1500
        );
      }),
      J.append(_),
      I.append(J),
      document.createElement("div")),
     Y = (((_ = ((K.className = c.cheatTop), document.createElement("div"))).className = c.cheatInfo), document.createElement("span")),
     Q = ((Y.innerText = s.name), (Y.className = c.cheatName), document.createElement("i"));
    Q.className = "far fa-star " + c.favoriteButton;
    const p = document.createElement("i");
    (p.className = "fas fa-star"), Q.append(p);
    let m = J.cloneNode(!0);
    (m.dataset[d.favorited] = !1),
     (m.onclick = J.onclick),
     j.append(m),
     (Q.onclick = () => {
      var e = o in r.data.favorites;
      p.classList.toggle(c.filled, !e),
       e ? (delete r.data.favorites[o], (m.dataset[d.favorited] = !1), n.dataset[d.favorites]--) : ((r.data.favorites[o] = 1), (m.dataset[d.favorited] = !0), n.dataset[d.favorites]++),
       j.onPath(),
       r.setData(r.data);
     }),
     o in (r.data.favorites ??= {}) && (p.classList.toggle(c.filled, !0), (m.dataset[d.favorited] = !0), n.dataset[d.favorites]++),
     Y.append(Q),
     ((J = document.createElement("span")).innerText = s.description),
     (J.className = c.cheatDescription),
     _.append(Y, J),
     i.append(K);
    const u = [];
    if (Array.isArray(s.inputs)) {
     var X = document.createElement("div");
     X.className = c.cheatInputs;
     for (const e of s.inputs) {
      var Z = document.createElement("div"),
       ee = document.createElement("span");
      if (((ee.innerText = e.name), Z.append(ee), X.append(Z), "options" == e.type)) {
       ((ee = document.createElement("select")).dataset[d.type] = "options"), Z.append(ee), u.push(ee);
       let t = ee;
       (ee = () => {
        let a = e.options;
        const o = document.createElement("select");
        if (((o.dataset[d.type] = "options"), (u[u.indexOf(t)] = o), t.replaceWith(o), (t = o), "function" == typeof a))
         try {
          a = a();
         } catch {
          a = [];
         }
        if (a instanceof Promise) {
         var n = document.createElement("option");
         (n.value = '""'),
          (n.innerHTML = "Loading Options..."),
          t.append(n),
          a.then((a) => {
           if (0 < a?.length) {
            t.innerHTML = "";
            for (const e of a) {
             var o = document.createElement("option");
             (o.value = JSON.stringify(e?.value ?? e)), (o.innerHTML = e?.name || e), t.append(o);
            }
           } else (a = document.createElement("input")), (u[u.indexOf(t)] = a), t.replaceWith(a), (a.dataset[d.type] = "string"), (a.placeholder = e.name), (t = a);
          });
        } else if (0 < a?.length)
         for (const e of a) {
          var r = document.createElement("option");
          (r.value = JSON.stringify(e?.value ?? e)), (r.innerHTML = e?.name || e), t.append(r);
         }
        else {
         const a = document.createElement("input");
         (u[u.indexOf(t)] = a), t.replaceWith(a), (a.dataset[d.type] = "string"), (a.placeholder = e.name), (t = a);
        }
       }),
        ee(),
        a.push(ee);
      } else
       ((ee = document.createElement("input")).dataset[d.type] = e.type),
        "number" == e.type && ((ee.type = "number"), (ee.min = e.min), (ee.max = e.max), (ee.value = e.value || (e.min ?? 0))),
        (ee.placeholder = e.name),
        Z.append(ee),
        u.push(ee);
     }
     i.append(X);
    }
    K.append(_);
    const h = document.createElement("div");
    (h.className = c.runCheat),
     "toggle" == s.type ? ((h.innerText = "Toggle On"), h.classList.add(c.toggleCheat)) : (h.innerText = "Execute"),
     (h.onclick = () => {
      s.run.apply(
       s,
       u.map((e) => ("number" == e.dataset[d.type] ? parseFloat("0" + e.value) : "options" == e.dataset[d.type] ? JSON.parse(e.value) : e.value))
      ),
       "toggle" == s.type &&
        ((h.innerText = "Toggle " + (s.enabled ? "Off" : "On")), h.classList.toggle(c.active, s.enabled), D.addLog(`Toggled "${s.name}" ` + (s.enabled ? "on" : "off"), s.enabled ? "var(--toggleOn)" : "var(--toggleOff)")),
       D.addLog(`Ran "${s.name}"`, "var(--highlight)");
     }),
     K.append(h),
     W.append(i);
   }
   e.append(W), (V.onclick = () => T.push(z[t].name, e)), C.append(V);
  }
  S.append(C);
  var te,
   ae =
    (((be = (((te = document.createElement("div")).className = c.creditsPage), document.createElement("div"))).className = c.licenseMessage),
    (be.innerHTML =
     '<i class="fas fa-file-alt" style="line-height: 1;aspect-ratio: 1 / 1;height: 20px;display: inline-grid;place-items: center;"></i> This script is licensed under <a style="color: var(--highlight);" target="_blank" href="https://www.gnu.org/licenses/agpl-3.0.en.html">AGPL-3.0</a>, read more <a style="color: var(--highlight);" target="_blank" href="https://github.com/JulianTerB">here</a>.<br>'),
    document.createElement("span")),
   oe = ((ae.className = c.copyrightTag), (ae.innerText = `Copyright © ${new Date().getFullYear()} JulianTerB`), document.createElement("ul")),
   ne = ((oe.className = c.codingCredits), oe.append("boiiiiii julian is so tufff"), document.createElement("ul"));
  function re(e) {
   return (e.getHours() % 12 == 0 ? 12 : e.getHours() % 12) + `:${e.getMinutes().toString().padStart(2, "0")} ` + (12 <= e.getHours() ? "PM" : "AM");
  }
  function se(e) {
   var t;
   return (
    `${["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][e.getMonth()]} ${e.getDate()}${
     ((t = e.getDate()), t % 10 == 1 && t % 100 != 11 ? "st" : t % 10 == 2 && t % 100 != 12 ? "nd" : t % 10 == 3 && t % 100 != 13 ? "rd" : "th")
    }, ${e.getFullYear()} - ` + re(e)
   );
  }
  (ne.className = c.creditLinks), ne.append(de("GitHub", '<a target="_blank" href="https://github.com/JulianTerB">The sigma guy himself </a>'));
  var ie = document.createElement("ul");
  ie.className = c.uploadDates;
  try {
   var le = new Date(t),
    ce = new Date(a);
   ie.append(de("Current GUI Upload Date", se(le))),
    -1 != a && ie.append(de("Latest GUI Upload Date", se(ce))),
    le < ce && (((ye = document.createElement("span")).className = c.warning), (ye.innerText = "You are using an outdated version of sigma blooket hacker, check out the GitHub / GitLab for a newer version."), ie.append(ye));
  } catch {
   ((le = document.createElement("span")).className = c.warning), (le.innerText = "Unable to check update information."), ie.append(le);
  }
  function de(e, t) {
   var a = document.createElement("li"),
    o = document.createElement("strong");
   return ((e = ((o.innerText = e + ":"), document.createElement("span"))).innerHTML = t), a.append(o, e), a;
  }
  te.append(be, oe, ne, ie, ae);
  const pe = document.createElement("div"),
   me = ((pe.className = c.noScroll + " " + c.settingsPage), document.createElement("div")),
   ue = ((me.onclick = () => T.push("Settings", pe)), (me.className = c.searchResultSeparator), (me.innerText = "Settings"), (me.dataset[d.name] = "settings"), (R.settings = me), I.append(me), []);
  function he(e, t, a, o) {
   const n = document.createElement("div");
   var r,
    s,
    i =
     (((r =
      (((i = (((l = (((s = document.createElement("div")).className = c.searchResult), document.createElement("div"))).className = c.searchResultInfo), document.createElement("div"))).className = c.searchResultName),
      (s.dataset[d.name] = (i.innerText = e).toLowerCase()),
      (s.dataset[d.mode] = "settings"),
      document.createElement("div"))).className = c.searchResultDescription),
     (s.dataset[d.description] = (r.innerText = t).toLowerCase()),
     l.append(i, r),
     (s.onclick = () => {
      T.push(e, pe),
       n.scrollIntoView(),
       n.animate(
        [
         { color: "var(--textColor)", textShadow: "0 0 0px var(--highlight)" },
         { color: "var(--highlight)", textShadow: "0 0 5px var(--highlight)", offset: 0.25 },
         { color: "var(--textColor)", textShadow: "0 0 0px var(--highlight)" },
        ],
        1500
       );
     }),
     s.append(l),
     I.append(s),
     document.createElement("div")),
    l =
     (((t =
      (((s = (((l = (((r = ((i.className = c.cheatTop), document.createElement("div"))).className = c.cheatInfo), document.createElement("span"))).innerText = e), (l.className = c.cheatName), document.createElement("span"))).innerText = t),
      (s.className = c.cheatDescription),
      r.append(l, s),
      n.append(i),
      document.createElement("div"))).className = c.cheatInputs),
     document.createElement("div"));
   ((s = document.createElement("span")).innerText = a.name), l.append(s), t.append(l);
   let p = document.createElement("input");
   if (((p.dataset[d.type] = a.type), "keybind" == a.type)) {
    let e = !(p.readOnly = !0);
    (p.data = a.data),
     (p.onclick = async () => {
      e || ((p.value = "Waiting for input..."), (e = !0), (p.data = await a.listen((e) => (p.value = e + "..."))), (e = !1), (p.value = p.value.slice(0, -3)));
     }),
     (ue[ue.length] = () => (p.value = a.value()))();
   } else if ("options" == a.type) {
    (p = document.createElement("select")).dataset[d.type] = "options";
    const e = document.createElement("option");
    (e.value = "{}"), (e.innerHTML = "Select a Theme"), (ue[ue.length] = () => (e.selected = !0))(), p.append(e);
    for (const t of a.options) {
     var m = document.createElement("option");
     (m.value = JSON.stringify(t?.value ?? t)), (m.innerHTML = t?.name || t), p.append(m);
    }
   } else "number" == a.type && ((p.type = "number"), (p.min = a.min), (p.max = a.max)), (ue[ue.length] = () => (p.value = a.value()))(), (p.placeholder = a.name);
   l.append(p),
    n.append(t),
    i.append(r),
    ((s = document.createElement("div")).className = c.runCheat),
    (s.innerText = "Update"),
    (s.onclick = () => o("number" == p.dataset[d.type] ? parseFloat("0" + p.value) : "options" == p.dataset[d.type] ? JSON.parse(p.value) : p.data ?? p.value)),
    i.append(s),
    pe.append(n);
  }
  (pe.onPath = () => ue.forEach((e) => e())),
   he("Hide Keybind", "Shortcut to hide to GUI", { type: "keybind", name: "Shortcut", data: s, value: () => Ce(r.data.hideKey), listen: (e) => Se((t) => e(Ce(t))) }, (e) => {
    r.setItem("hideKey", e);
   }),
   he("Close Keybind", "Shortcut to disable all toggles and close GUI", { type: "keybind", name: "Shortcut", data: i, value: () => Ce(r.data.closeKey), listen: (e) => Se((t) => e(Ce(t))) }, (e) => {
    r.setItem("closeKey", e);
   }),
   he(
    "Theme",
    "sigma theme for the menu",
    {
     type: "options",
     name: "Preset",
     options: [
      {
       name: "Default",
       value: {
        highlight: o["--highlight"],
        highlight2: o["--highlight2"],
        background: o["--background"],
        background2: o["--background2"],
        textColor: o["--textColor"],
        textColor2: o["--textColor2"],
        toggleOff: o["--toggleOff"],
        toggleOn: o["--toggleOn"],
       },
      },
      { name: "Crypto Hack", value: { highlight: "rgb(88 175 88)", toggleOn: "#0b601b", background: "radial-gradient(#11581e,#041607)", background2: "#1a1a1a", toggleOff: "#A02626", highlight2: "#49d149", textColor2: "#49d149" } },
      {
       name: "kitty cats",
       value: {
        highlight: "#af8942",
        toggleOn: "#2fb62f",
        background: "radial-gradient(rgba(31, 31, 31, 0), rgba(31, 31, 31, 0.4)), url(), #333131",
        background2: "radial-gradient(rgba(61,61,61,.6),rgba(31,31,31,.5)),radial-gradient(#333131 1.5px,#333131 0) center / 24px 24px",
        toggleOff: "#666161",
        highlight2: "rgb(0 0 0 / 25%)",
        textColor2: "#FFFFFF",
       },
      },
      {
       name: "Blook Rush",
       value: { highlight: "#888", toggleOn: "#47A547", background: "repeating-linear-gradient(45deg,white,white 8%,#e6e6e6 0,#e6e6e6 16%)", background2: "#36c", toggleOff: "#A02626", highlight2: "rgb(0 0 0 / 25%)", textColor2: "#FFFFFF" },
      },
      { name: "Factory", value: { highlight: "#1563bf", toggleOn: "rgb(75, 194, 46)", background: "#3a3a3a", background2: "#2d313d", toggleOff: "#9a49aa", highlight2: "rgb(0 0 0 / 25%)", textColor2: "#a5aabe" } },
      {
       name: "Cafe",
       value: {
        highlight: "#0bc2cf",
        toggleOn: "#47A547",
        background: "linear-gradient(90deg,rgba(200,0,0,.5) 50%,transparent 0) center / 50px 50px,linear-gradient(rgba(200,0,0,0.5) 50%,transparent 0) white center / 50px 50px",
        background2: "rgb(64, 64, 64)",
        toggleOff: "#A02626",
        highlight2: "rgb(0 0 0 / 25%)",
        textColor2: "#ac7339",
        textColor: "#FFFFFF",
       },
      },
      {
       name: "Tower of Doom",
       value: { highlight: "#9a49aa", toggleOn: "#4bc22e", background: "rgb(41 41 41)", background2: "#404040", toggleOff: "rgb(151, 15, 5)", highlight2: "rgb(0 0 0 / 25%)", textColor2: "#9a49aa", textColor: "#FFFFFF" },
      },
      { name: "Monster Brawl", value: { highlight: "#2966a6", toggleOn: "#47A547", background: "rgb(45, 51, 67)", background2: "#374154", toggleOff: "#A02626", highlight2: "#264d99", textColor2: "#264d99", textColor: "#FFFFFF" } },
      {
       name: "Tower Defense 2",
       value: {
        highlight: "#40b1d8",
        toggleOn: "#47A547",
        background: "url(https://media.blooket.com/image/upload/v1676164454/Media/defense/backgroundTd1-02.svg) center / cover",
        background2: "#293c82",
        toggleOff: "#A02626",
        highlight2: "rgb(0 0 0 / 25%)",
        textColor2: "#a33c22",
        textColor: "#FFFFFF",
       },
      },
     ],
    },
    (t) => {
     r.setItem("theme", { ...r.data.theme, ...t });
     for (const a in t) e.style.setProperty("--" + a, t[a]);
     T.updatePath();
    }
   ),
   he("Highlight 1", "Hover color, sub-text color, button color, and input outlines", { type: "string", name: "CSS Value", value: () => e.style.getPropertyValue("--highlight") }, (t) =>
    e.style.setProperty("--highlight", r.setItem("theme.highlight", t || o["--highlight"]))
   ),
   he("Highlight 2", "Credits page's warning message color", { type: "string", name: "CSS Value", value: () => e.style.getPropertyValue("--highlight2") }, (t) =>
    e.style.setProperty("--highlight2", r.setItem("theme.highlight2", t || o["--highlight2"]))
   ),
   he("Background", "Main GUI background color", { type: "string", name: "CSS Value", value: () => e.style.getPropertyValue("--background") }, (t) =>
    e.style.setProperty("--background", r.setItem("theme.background", t || o["--background"]))
   ),
   he("Background 2", "Secondary GUI background color", { type: "string", name: "CSS Value", value: () => e.style.getPropertyValue("--background2") }, (t) =>
    e.style.setProperty("--background2", r.setItem("theme.background2", t || o["--background2"]))
   ),
   he("Text Color", "Main text color", { type: "string", name: "CSS Value", value: () => e.style.getPropertyValue("--textColor") }, (t) => e.style.setProperty("--textColor", r.setItem("theme.textColor", t || o["--textColor"]))),
   he("Text Color 2", "Credit page's contributor color", { type: "string", name: "CSS Value", value: () => e.style.getPropertyValue("--textColor2") }, (t) =>
    e.style.setProperty("--textColor2", r.setItem("theme.textColor2", t || o["--textColor2"]))
   ),
   he("Toggle (On)", "Enabled toggle button color", { type: "string", name: "CSS Value", value: () => e.style.getPropertyValue("--toggleOn") }, (t) => e.style.setProperty("--toggleOn", r.setItem("theme.toggleOn", t || o["--toggleOn"]))),
   he("Toggle (Off)", "Disabled toggle button color", { type: "string", name: "CSS Value", value: () => e.style.getPropertyValue("--toggleOff") }, (t) =>
    e.style.setProperty("--toggleOff", r.setItem("theme.toggleOff", t || o["--toggleOff"]))
   );
  const ge = document.createElement("div");
  function fe(e, t, a) {
   var o = document.createElement("div"),
    n = ((o.className = c.sidebarPath), document.createElement("i"));
   return ((t = ((n.className = t), document.createElement("span"))).innerText = e), o.append(n, t), (o.onclick = () => T.sidebar(e, a)), ge.append(o), o;
  }
  (ge.className = c.sidebarPaths),
   fe("zoek", "fas fa-search", N),
   fe("modes", "fas fa-gamepad", S),
   fe("favs", "fas fa-star", j),
   ((O = fe("Leaderboard", "fas fa-trophy", u)).style.display = "none"),
   fe("nerdy dingen", "fas fa-terminal", F),
   fe("settings", "fas fa-cog", pe),
   fe("credits over julian", "fas fa-code", te),
   p.append(ge);
  var ye = (((ce = document.createElement("div")).className = c.bigTextContainer), document.createElement("span")),
   be = (((le = ((ye.style.opacity = "0"), document.createElement("span"))).className = c.bigText), document.createElement("span")),
   ve = document.createElement("img");
  (ve.src = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.giphy.com%2Fmedia%2FmqqLKqGELdjzO%2Fgiphy.gif&f=1&nofb=1&ipt=c317b3cd44e14307a5d54c4eb801671082b03885933a7f75518a692027b94109&ipo=images"),
   (ve.alt = "Cat GIF"),
   (ve.style.width = "50px"),
   (ve.style.height = "auto"),
   (be.className = c.logo),
   be.appendChild(ve),
   ce.append(be, ye, le),
   p.prepend(ce);
  const we = document.createElement("div");
  if (
   ((we.innerHTML = '<i class="fas fa-sync" style="line-height: 1"></i>'),
   (we.className = c.refreshControl),
   (we.onclick = () => {
    we.animate([{ rotate: "0deg" }, { rotate: "360deg" }], { duration: 1e3, easing: "ease" }), T.updatePath();
   }),
   e.append(h, l, p, m, A, we),
   T.updatePath(),
   document.body.appendChild(e),
   D.addLog("Opened sigma blooket hacker"),
   "function call() { [native code] }" == window.fetch.call.toString())
  ) {
   const e = window.fetch.call;
   (window.fetch.call = function () {
    if (!arguments[1].includes("s.blooket.com/rc")) return e.apply(this, arguments);
    D.addLog("Blocked Suspension API!", "red");
   }),
    D.addLog("Enabled Anti-Suspend");
  }
  function ke(e) {
   return Array.from({ length: e }, () => String.fromCharCode(Math.floor(25 * Math.random()) + 97)).reduce((e) => e + String.fromCharCode(Math.floor(25 * Math.random()) + 97), "");
  }
  0 == e.querySelector("i").clientHeight && (((oe = document.createElement("link")).rel = "stylesheet"), (oe.href = "https://ka-f.fontawesome.com/releases/v6.5.1/css/pro.min.css"), e.prepend(oe));
  const xe = ["shift", "control", "alt", "meta"];
  function Se(e, t = window) {
   return new Promise((a) => {
    const o = new Set();
    let n, r, s, i;
    const l = (t) => {
      t.preventDefault(), o.add(t.code), (n ||= t.shiftKey), (r ||= t.ctrlKey), (s ||= t.altKey), xe.includes(t.key.toLowerCase()) || (i = t.key.toLowerCase()), e?.({ shift: n, ctrl: r, alt: s, key: i });
     },
     c = (e) => {
      o["delete"](e.code), 0 < o.size || (t.removeEventListener("keydown", l), t.removeEventListener("keyup", c), a({ shift: n, ctrl: r, alt: s, key: i }));
     };
    t.addEventListener("keydown", l), t.addEventListener("keyup", c);
   });
  }
  function Ce({ shift: e, ctrl: t, alt: a, key: o }) {
   return [t && "Ctrl", e && "Shift", a && "Alt", o && o.toUpperCase()].filter(Boolean).join(" + ");
  }
  function Te(e, t) {
   return e.ctrl == t.ctrlKey && e.shift == t.shiftKey && e.alt == t.altKey && t.key.toLowerCase() == e.key;
  }
  function Ae() {
   return Object.values(
    (function e(t = document.querySelector("body>div")) {
     return Object.values(t)[1]?.children?.[0]?._owner.stateNode ? t : e(t.querySelector(":scope>div"));
    })()
   )[1].children[0]._owner.stateNode;
  }
  window.addEventListener("keydown", function Ee(t) {
   if (Te(r.data.hideKey ?? s, t)) return t.preventDefault(), (e.style.display = "block" === e.style.display ? "none" : "block");
   if (Te(r.data.closeKey ?? i, t)) {
    t.preventDefault(), e.remove(), clearInterval(D.interval);
    for (const e in z) for (const t of z[e].cheats) t.enabled && t.run();
    window.removeEventListener("keydown", Ee);
   }
  });
 };
 let n = new Image();
 (n.src = "hoezo probeert bro mijn dingen aan te passen vies kut dont do dizzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz?" + Date.now()),
  (n.crossOrigin = "Anonymous"),
  (n.onload = function () {
   var r = document.createElement("canvas").getContext("2d");
   r.drawImage(n, 0, 0, this.width, this.height);
   let s,
    i = r.getImageData(0, 0, this.width, this.height).data,
    l = "",
    c = 0;
   for (; c < i.length; ) {
    var d = String.fromCharCode(i[(c % 4 == 3 && c++, c++)] + 256 * i[(c % 4 == 3 && c++, c++)]);
    if (((l += d), "/" == d && "*" == s)) break;
    s = d;
   }
   let p,
    m = t,
    u = "There was an error checking for script updates. Run cheat anyway?";
   try {
    [p, m, u] = l.match(/LastUpdated: (.+?); ErrorMessage: "((.|\n)+?)"/);
   } catch (r) {}
   ((a = parseInt(m)) <= t || e.contentWindow.confirm(u)) && o();
  }),
  (n.onerror = n.onabort = () => {
   (n.onerror = n.onabort = null), o(), document.querySelector("iframe");
  });
})();
