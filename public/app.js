const connection = new BareMux.BareMuxConnection("/baremux/worker.js");

async function init() {
  await connection.setTransport("/epoxy/index.mjs", [{ wisp: "ws://" + location.host + "/wisp/" }]);
  if ('serviceWorker' in navigator) {
    await navigator.serviceWorker.register('/sw.js', { scope: '/' });
    console.log('✅ SW registered');
  }
}
init().catch(console.error);

/* ── Subtitles ─────────────────────────────────── */
const subtitles = [
  "cosmic brownie","you didn't see anything","not your school's wifi's problem",
  "loading stardust... please wait","where no tab has gone before",
  "incognito mode called, it's jealous","technically it's astronomy homework",
  "browsing at the speed of light (almost)","your IT admin is crying right now",
  "404: rules not found","void-certified since the big bang","yes, this counts as studying",
  "one small click for you, one giant leap past the firewall",
  "cats, memes, and classified info","we are so back","running on vibes and violet light",
  "the universe said go off","no logs, only stars","certified orbit enjoyer",
  "shh... the nebula is listening","bro really said 'educational purposes'",
  "the wifi password was 'trustissues'","nasa doesn't want you here",
  "powered by the audacity of a thousand suns","your search history is safe. probably.",
  "blocking the blockers since the dawn of time","this is fine. everything is fine.",
  "speed of light, price of free","gravity can't hold these requests down",
  "terms of service? never heard of her","somewhere, a network admin just sneezed",
  "deployed from a black hole's basement","the stars aligned. so did the packets.",
  "low orbit, high hopes","if you're reading this, you're already in",
  "fueled by curiosity and questionable decisions","void warranty. enter universe.",
  "houston, we have a proxy","one giant leap for browserkind",
  "the firewall has been diplomatically ignored","you found the secret. there is no secret.",
  "certified galaxy brain move","light years ahead of your school's IT team",
  "the cosmos demands you watch that video","packet sent. packet delivered. nobody saw anything.",
  "just a little guy browsing the infinite void","entropy increases. so does your tab count.",
  "dark matter, darker search history","supernova-grade browsing experience","it's not illegal in space",
];
document.getElementById("subtitle").textContent = subtitles[Math.floor(Math.random() * subtitles.length)];

/* ── Stars ─────────────────────────────────────── */
(function () {
  const canvas = document.getElementById("stars");
  const ctx = canvas.getContext("2d");
  let W, H, stars = [];
  function resize() { W = canvas.width = window.innerWidth; H = canvas.height = window.innerHeight; }
  function initStars(n = 160) {
    stars = Array.from({ length: n }, () => ({ x: Math.random()*W, y: Math.random()*H, r: Math.random()*1.2+0.2, a: Math.random(), speed: Math.random()*0.004+0.001, phase: Math.random()*Math.PI*2 }));
  }
  function draw(t) {
    ctx.clearRect(0,0,W,H);
    for (const s of stars) {
      const alpha = s.a * (0.5 + 0.5 * Math.sin(t * s.speed * 60 + s.phase));
      ctx.beginPath(); ctx.arc(s.x, s.y, s.r, 0, Math.PI*2);
      ctx.fillStyle = `rgba(200,190,255,${alpha})`; ctx.fill();
    }
    requestAnimationFrame(draw);
  }
  window.addEventListener("resize", () => { resize(); initStars(); });
  resize(); initStars(); requestAnimationFrame(draw);
})();

const ADMINS = ["LifeguardYT"];
const OWNER = "LifeguardYT";

/* ── Emoji List ────────────────────────────────── */
const EMOJI_LIST = [
  "😀","😁","😂","🤣","😃","😄","😅","😆","😇","😉","😊","🙂","🙃","😋","😌","😍","🥰","😘","😗","😙","😚","🤪","😜","😝","😛","🤑","🤗","🤭","🤫","🤔","🤐","🤨","😐","😑","😶","😏","😒","🙄","😬","🤥","😔","😪","🤤","😴","😷","🤒","🤕","🤢","🤮","🤧","🥵","🥶","🥴","😵","🤯","🤠","🥳","😎","🤓","🧐","😕","😟","🙁","☹️","😮","😯","😲","😳","🥺","😦","😧","😨","😰","😥","😢","😭","😱","😖","😣","😞","😓","😩","😫","🥱","😤","😡","😠","🤬","😈","👿","💀","☠️","💩","🤡","👹","👺","👻","👽","👾","🤖","😺","😸","😹","😻","😼","😽","🙀","😿","😾","👋","🤚","🖐","✋","🖖","👌","🤌","🤏","✌️","🤞","🤟","🤘","🤙","👈","👉","👆","🖕","👇","☝️","👍","👎","✊","👊","🤛","🤜","👏","🙌","👐","🤲","🤝","🙏","✍️","💅","🤳","💪","🦾","🦵","🦶","👂","🦻","👃","🧠","🦷","🦴","👀","👁","👅","👄","❤️","🧡","💛","💚","💙","💜","🖤","🤍","🤎","💔","❣️","💕","💞","💓","💗","💖","💘","💝","💟","☮️","✝️","☯️","🔥","💫","⭐","🌟","✨","⚡","🌈","🌊","🎉","🎊","🎈","🎁","🏆","🥇","🎮","🎯","🎲","🃏","🀄","🎭","🎨","🖼","🎬","🎤","🎧","🎵","🎶","🎸","🎹","🎺","🎻","🥁","🎷","👑","💎","🔑","🗝","🔒","🔓","🔔","🔕","📱","💻","🖥","🖨","⌨️","🖱","💾","💿","📀","📷","📸","📹","🎥","📞","☎️","📟","📠","📺","📻","🧭","⏱","⌚","💡","🔦","🕯","💰","💵","💴","💶","💷","💸","💳","🏠","🏡","🏢","🚀","✈️","🚁","🚂","🚗","🚕","🚙","🛻","🚲","🛴","🛹","🌍","🌎","🌏","🌐","🗺","🧭"
];

/* ── Sidebar / Navigation ──────────────────────── */
const sidebar = document.getElementById("sidebar");
const backdrop = document.getElementById("sidebarBackdrop");
window.navToggle = document.getElementById("navToggle");
const sidebarClose = document.getElementById("sidebarClose");

function openSidebar() { sidebar.classList.add("open"); backdrop.classList.add("visible"); }
function closeSidebar() { sidebar.classList.remove("open"); backdrop.classList.remove("visible"); }

navToggle.addEventListener("click", openSidebar);
sidebarClose.addEventListener("click", closeSidebar);
backdrop.addEventListener("click", closeSidebar);

document.querySelectorAll(".nav-item").forEach(item => {
  item.addEventListener("click", () => {
    const page = item.dataset.page;
    closeSidebar();
    if (page === "home") closeAllPages();
    else openPage(page);
  });
});

window.openPage = function(name) {
  document.querySelectorAll(".page-overlay").forEach(p => p.classList.remove("open"));
  document.querySelectorAll(".nav-item").forEach(i => i.classList.toggle("active", i.dataset.page === name));
  const overlay = document.getElementById("page-" + name);
  if (!overlay) return;
  if (!overlay.dataset.loaded) {
    loadPage(name, overlay);
    overlay.dataset.loaded = "1";
  }
  overlay.classList.add("open");
  navToggle.style.display = "none";
};

window.closeAllPages = function() {
  document.querySelectorAll(".page-overlay").forEach(p => p.classList.remove("open"));
  document.querySelectorAll(".nav-item").forEach(i => i.classList.toggle("active", i.dataset.page === "home"));
  navToggle.style.display = "";
};

/* ── Page Loaders ──────────────────────────────── */
function loadPage(name, el) {
  if (name === "settings") renderSettings(el);
  if (name === "account") renderAccount(el);
  if (name === "chat") renderChat(el);
}

function pageShell(title, content) {
  return `
    <div class="page-header">
      <button class="page-back" onclick="closeAllPages()">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15 18 9 12 15 6"/></svg>
        back
      </button>
      <span class="page-title">${title}</span>
    </div>
    <div class="page-content">${content}</div>
  `;
}

/* ── Settings Page ─────────────────────────────── */
function renderSettings(el) {
  el.innerHTML = pageShell("settings", `
    <div class="settings-section">
      <div class="settings-section-title">Appearance</div>
      <div class="settings-card">
        <div class="settings-row">
          <div><div class="settings-row-label">Tab cloaking</div><div class="settings-row-desc">Disguise this tab as something else</div></div>
          <select class="settings-select" id="tabCloakSelect" onchange="applyTabCloak(this.value)">
            <option value="none">None</option>
            <option value="google">Google</option>
            <option value="docs">Google Docs</option>
            <option value="classroom">Google Classroom</option>
            <option value="drive">Google Drive</option>
            <option value="outlook">Outlook</option>
          </select>
        </div>
        <div class="settings-row">
          <div><div class="settings-row-label">Custom tab title</div><div class="settings-row-desc">Set a custom name for this tab</div></div>
          <input class="settings-input" id="customTabTitle" placeholder="cosmic" maxlength="40" oninput="applyCustomTitle(this.value)" />
        </div>
      </div>
    </div>
    <div class="settings-section">
      <div class="settings-section-title">Proxy</div>
      <div class="settings-card">
        <div class="settings-row">
          <div><div class="settings-row-label">Search engine</div><div class="settings-row-desc">Used when typing a search query</div></div>
          <select class="settings-select" id="searchEngineSelect" onchange="saveSearchEngine(this.value)">
            <option value="brave">Brave Search</option>
            <option value="google">Google</option>
            <option value="duckduckgo">DuckDuckGo</option>
            <option value="bing">Bing</option>
          </select>
        </div>
      </div>
    </div>
    <div class="settings-section">
      <div class="settings-section-title">Account</div>
      <div class="settings-card">
        <div class="settings-row">
          <div><div class="settings-row-label">Signed in as</div><div class="settings-row-desc" id="settingsAccountEmail">not signed in</div></div>
          <button class="settings-btn" onclick="openPage('account')">manage</button>
        </div>
      </div>
    </div>
    <div class="settings-section">
      <div class="settings-section-title">Data</div>
      <div class="settings-card">
        <div class="settings-row">
          <div><div class="settings-row-label">Clear site data</div><div class="settings-row-desc">Clears cookies and cached data</div></div>
          <button class="settings-btn danger" onclick="clearSiteData()">clear</button>
        </div>
      </div>
    </div>
  `);
  const saved = localStorage.getItem("cosmicSearchEngine") || "brave";
  el.querySelector("#searchEngineSelect").value = saved;
  const user = auth.currentUser;
  if (user) el.querySelector("#settingsAccountEmail").textContent = user.email;
}

const cloakFavicons = { google:"https://www.google.com/favicon.ico", docs:"https://ssl.gstatic.com/docs/documents/images/kix-favicon7.ico", classroom:"https://ssl.gstatic.com/classroom/favicon.png", drive:"https://ssl.gstatic.com/docs/doclist/images/drive_2022q3_32dp.png", outlook:"https://res.cdn.office.net/assets/mail/pwa/v1/mhat/favicon.ico" };
const cloakTitles = { none:"cosmic", google:"Google", docs:"Document - Google Docs", classroom:"Google Classroom", drive:"My Drive - Google Drive", outlook:"Inbox - Outlook" };

function applyTabCloak(val) {
  document.title = cloakTitles[val] || "cosmic";
  let link = document.querySelector("link[rel~='icon']");
  if (!link) { link = document.createElement("link"); link.rel = "icon"; document.head.appendChild(link); }
  link.href = val === "none" ? "/favicon.ico" : cloakFavicons[val];
  localStorage.setItem("cosmicTabCloak", val);
}
function applyCustomTitle(val) { if (val.trim()) document.title = val.trim(); }
function saveSearchEngine(val) { localStorage.setItem("cosmicSearchEngine", val); }
function clearSiteData() { if (confirm("Clear all site data?")) { localStorage.clear(); location.reload(); } }
(function applySavedCloak() { const c = localStorage.getItem("cosmicTabCloak"); if (c && c !== "none") applyTabCloak(c); })();

/* ── Account Page ──────────────────────────────── */
function renderAccount(el) {
  const user = auth.currentUser;
  if (user) renderProfile(el, user);
  else renderAuth(el);
}

function renderAuth(el) {
  el.innerHTML = pageShell("account", `
    <div class="auth-wrap">
      <div class="auth-card">
        <div class="auth-title">welcome back</div>
        <div class="auth-subtitle">sign in or create an account to access chat and more</div>
        <div class="auth-tabs">
          <button class="auth-tab active" id="tabSignin" onclick="switchAuthTab('signin')">sign in</button>
          <button class="auth-tab" id="tabSignup" onclick="switchAuthTab('signup')">sign up</button>
        </div>
        <div id="authSignin">
          <div class="auth-field"><label class="auth-label">email</label><input class="auth-input" id="siEmail" type="email" placeholder="you@example.com" /></div>
          <div class="auth-field"><label class="auth-label">password</label><input class="auth-input" id="siPassword" type="password" placeholder="••••••••" /></div>
          <button class="auth-submit" onclick="doSignIn()">sign in</button>
          <div class="auth-error" id="siError"></div>
        </div>
        <div id="authSignup" style="display:none">
          <div class="auth-field"><label class="auth-label">username</label><input class="auth-input" id="suUsername" type="text" placeholder="cosmicuser" maxlength="20" /></div>
          <div class="auth-field"><label class="auth-label">email</label><input class="auth-input" id="suEmail" type="email" placeholder="you@example.com" /></div>
          <div class="auth-field"><label class="auth-label">password</label><input class="auth-input" id="suPassword" type="password" placeholder="min 6 characters" /></div>
          <button class="auth-submit" onclick="doSignUp()">create account</button>
          <div class="auth-error" id="suError"></div>
        </div>
      </div>
    </div>
  `);
}

function switchAuthTab(tab) {
  document.getElementById("tabSignin").classList.toggle("active", tab === "signin");
  document.getElementById("tabSignup").classList.toggle("active", tab === "signup");
  document.getElementById("authSignin").style.display = tab === "signin" ? "" : "none";
  document.getElementById("authSignup").style.display = tab === "signup" ? "" : "none";
}

async function doSignIn() {
  const email = document.getElementById("siEmail").value.trim();
  const pass = document.getElementById("siPassword").value;
  const err = document.getElementById("siError");
  err.textContent = "";
  try {
    await auth.signInWithEmailAndPassword(email, pass);
  } catch(e) {
    err.textContent = e.message;
  }
}

async function doSignUp() {
  const username = document.getElementById("suUsername").value.trim();
  const email = document.getElementById("suEmail").value.trim();
  const pass = document.getElementById("suPassword").value;
  const err = document.getElementById("suError");
  err.textContent = "";
  if (!username) { err.textContent = "Username is required."; return; }
  if (!/^[a-zA-Z0-9_]{3,20}$/.test(username)) { err.textContent = "Username: 3-20 chars, letters/numbers/underscore only."; return; }
  try {
    const cred = await auth.createUserWithEmailAndPassword(email, pass);
    await cred.user.updateProfile({ displayName: username });
    await db.collection("users").doc(cred.user.uid).set({
      username, email, bio: "", photoURL: "",
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    });
  } catch(e) {
    err.textContent = e.message;
  }
}

function renderProfile(el, user) {
  const initial = (user.displayName || user.email || "?")[0].toUpperCase();
  el.innerHTML = pageShell("account", `
    <div class="auth-wrap">
      <div class="profile-card">
        <div class="profile-top">
          <div class="profile-avatar-large" id="profileAvatarLarge">
            ${user.photoURL ? `<img src="${user.photoURL}" />` : initial}
          </div>
          <div>
            <div class="profile-name" id="profileDisplayName">${user.displayName || "user"}</div>
            <div class="profile-email">${user.email}</div>
            <input type="file" id="profilePicFile" accept="image/*" style="display:none" onchange="previewProfilePic(this)" />
            <button class="profile-pic-btn" style="margin-top:8px" onclick="document.getElementById('profilePicFile').click()">upload picture</button>
          </div>
        </div>
        <div class="profile-field"><label class="profile-label">username</label><input class="profile-input" id="profileUsername" value="${user.displayName || ""}" placeholder="your username" maxlength="20" /></div>
        <div class="profile-field"><label class="profile-label">bio <span style="color:var(--muted);font-size:0.68rem">(optional)</span></label><input class="profile-input" id="profileBio" placeholder="tell the cosmos about yourself..." maxlength="120" /></div>
        <div class="profile-actions">
          <button class="profile-save" onclick="saveProfile()">save changes</button>
          <button class="profile-signout" onclick="doSignOut()">sign out</button>
        </div>
        <div class="auth-error" id="profileError"></div>
      </div>
    </div>
  `);
  db.collection("users").doc(user.uid).get().then(doc => {
    if (doc.exists) {
      const data = doc.data();
      if (data.bio) document.getElementById("profileBio").value = data.bio;
      if (data.username) document.getElementById("profileUsername").value = data.username;
    }
  });
}

let pendingPhotoBase64 = null;

function previewProfilePic(input) {
  if (!input.files || !input.files[0]) return;
  const file = input.files[0];
  if (file.size > 2 * 1024 * 1024) { alert("Image must be under 2MB."); return; }
  const reader = new FileReader();
  reader.onload = e => {
    pendingPhotoBase64 = e.target.result;
    const avatar = document.getElementById("profileAvatarLarge");
    avatar.innerHTML = `<img src="${pendingPhotoBase64}" />`;
  };
  reader.readAsDataURL(file);
}

async function saveProfile() {
  const user = auth.currentUser;
  if (!user) return;
  const username = document.getElementById("profileUsername").value.trim() || user.displayName || "";
  const bio = document.getElementById("profileBio").value.trim();
  const err = document.getElementById("profileError");
  err.textContent = "";
  err.style.color = "";
  try {
    const updateData = { username, bio, email: user.email };
    if (pendingPhotoBase64) updateData.photoURL = pendingPhotoBase64;
    await user.updateProfile({ displayName: username });
    await db.collection("users").doc(user.uid).set(updateData, { merge: true });
    pendingPhotoBase64 = null;
    document.getElementById("profileDisplayName").textContent = username;
    const avatarEl = document.getElementById("profileAvatarLarge");
    if (updateData.photoURL && avatarEl) {
      avatarEl.innerHTML = `<img src="${updateData.photoURL}" />`;
    }
    err.style.color = "var(--accent2)";
    err.textContent = "saved!";
    updateSidebarUser(auth.currentUser);
    setTimeout(() => { err.textContent = ""; err.style.color = ""; }, 2000);
  } catch(e) {
    if (e.code === "auth/network-request-failed") {
      err.style.color = "var(--accent2)";
      err.textContent = "saved! (profile pic stored locally)";
      setTimeout(() => { err.textContent = ""; err.style.color = ""; }, 2000);
    } else {
      err.textContent = e.message;
    }
  }
}

async function doSignOut() {
  await auth.signOut();
}

auth.onAuthStateChanged(user => {
  updateSidebarUser(user);
  const accountOverlay = document.getElementById("page-account");
  if (accountOverlay.dataset.loaded) {
    accountOverlay.dataset.loaded = "";
    if (accountOverlay.classList.contains("open")) {
      loadPage("account", accountOverlay);
      accountOverlay.dataset.loaded = "1";
    }
  }
  const chatOverlay = document.getElementById("page-chat");
  if (chatOverlay.dataset.loaded) {
    chatOverlay.dataset.loaded = "";
    if (chatOverlay.classList.contains("open")) {
      loadPage("chat", chatOverlay);
      chatOverlay.dataset.loaded = "1";
    }
  }
});

function updateSidebarUser(user) {
  const area = document.getElementById("sidebarUserArea");
  if (user) {
    const initial = (user.displayName || user.email || "?")[0].toUpperCase();
    db.collection("users").doc(user.uid).get().then(doc => {
      const photoURL = doc.exists ? doc.data().photoURL || "" : "";
      area.innerHTML = `
        <div class="sidebar-user-info">
          <div class="sidebar-avatar">${photoURL ? `<img src="${photoURL}" />` : initial}</div>
          <div>
            <div class="sidebar-username">${user.displayName || "user"}</div>
            <div class="sidebar-useremail">${user.email}</div>
          </div>
        </div>
      `;
    });
  } else {
    area.innerHTML = `<div class="sidebar-user-guest"><span>not signed in</span><button class="btn-pill" onclick="openPage('account')">sign in</button></div>`;
  }
}

/* ── Chat ──────────────────────────────────────── */
const rooms = ["general","random","gaming","memes","help"];
let privateRooms = [];
let currentRoom = "general";
let chatUnsub = null;

function isAdmin() {
  const user = auth.currentUser;
  if (!user) return false;
  return ADMINS.includes((user.displayName || "").trim());
}

function isOwner() {
  const user = auth.currentUser;
  if (!user) return false;
  return (user.displayName || "").trim() === OWNER;
}

function escapeHtml(str) {
  if (!str) return "";
  return str.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");
}

function renderChat(el) {
  const user = auth.currentUser;
  el.innerHTML = `
    <div class="page-header">
      <button class="page-back" onclick="closeAllPages()">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15 18 9 12 15 6"/></svg>
        back
      </button>
      <span class="page-title">global chat</span>
    </div>
    <div class="chat-layout">
      <div class="chat-rooms">
        <div class="chat-rooms-title">public</div>
        ${rooms.map(r => `<button class="chat-room-btn ${r===currentRoom?"active":""}" onclick="switchRoom('${r}', this)">${r}</button>`).join("")}
        ${user ? `
          <div class="chat-rooms-title" style="margin-top:16px">private</div>
          <div id="privateRoomList"></div>
          <button class="chat-room-btn" style="color:var(--accent2);margin-top:4px" onclick="createPrivateRoom()">+ new room</button>
        ` : ""}
      </div>
      <div class="chat-main">
        ${user ? `
          <div class="chat-messages" id="chatMessages"></div>
          <div class="emoji-picker" id="emojiPicker"></div>
          <div class="chat-input-area">
            <button class="chat-icon-btn" onclick="toggleEmojiPicker()" title="Emoji">😊</button>
            <button class="chat-icon-btn" onclick="document.getElementById('chatImageInput').click()" title="Image">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
            </button>
            <input type="file" id="chatImageInput" accept="image/*" style="display:none" onchange="sendImageMessage(this)" />
            <input class="chat-input" id="chatInput" placeholder="message #${currentRoom}..." maxlength="500" onkeydown="if(event.key==='Enter'&&!event.shiftKey)sendMessage()" />
            <button class="chat-send" onclick="sendMessage()">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
            </button>
          </div>
        ` : `
          <div class="chat-signin-prompt">
            <span>sign in to join the conversation</span>
            <button onclick="openPage('account')">sign in</button>
          </div>
        `}
      </div>
    </div>
  `;
  if (user) {
    listenRoom(currentRoom);
    buildEmojiPicker();
    loadPrivateRooms();
  }
}

function switchRoom(room, btn) {
  currentRoom = room;
  document.querySelectorAll(".chat-room-btn").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
  const inp = document.getElementById("chatInput");
  if (inp) inp.placeholder = `message #${room}...`;
  listenRoom(room);
}

function listenRoom(room) {
  if (chatUnsub) chatUnsub();
  const msgs = document.getElementById("chatMessages");
  if (!msgs) return;
  msgs.innerHTML = "";
  chatUnsub = db.collection("chat").doc(room).collection("messages")
    .orderBy("createdAt").limitToLast(80)
    .onSnapshot(snap => {
      snap.docChanges().forEach(change => {
        if (change.type === "added") appendChatMsg(msgs, change.doc.data(), change.doc.id);
      });
      msgs.scrollTop = msgs.scrollHeight;
    });
}

async function appendChatMsg(container, data, docId) {
  const user = auth.currentUser;
  const initial = (data.username || "?")[0].toUpperCase();
  const time = data.createdAt?.toDate ? data.createdAt.toDate().toLocaleTimeString([], {hour:"2-digit",minute:"2-digit"}) : "";

  let photoURL = data.photoURL || "";
  if (!photoURL && data.uid) {
    try {
      const userDoc = await db.collection("users").doc(data.uid).get();
      if (userDoc.exists) photoURL = userDoc.data().photoURL || "";
    } catch(e) {}
  }

  const currentUserIsAdmin = isAdmin();
  const isOwnMessage = user && user.uid === data.uid;

  const uname = data.username || "";
const adminBadge = uname === OWNER
  ? `<span style="font-size:0.6rem;background:linear-gradient(135deg,#f59e0b,#ef4444);color:#fff;padding:1px 6px;border-radius:99px;margin-left:4px">owner</span>`
  : ADMINS.includes(uname)
  ? `<span style="font-size:0.6rem;background:linear-gradient(135deg,var(--accent),#7c3aed);color:#fff;padding:1px 6px;border-radius:99px;margin-left:4px">admin</span>`
  : "";

  let controls = "";
  if (isOwnMessage) {
    controls = `<div class="chat-admin-controls"><button class="chat-admin-btn" onclick="deleteMsg('${currentRoom}','${docId}')">🗑 delete</button></div>`;
  } else if (currentUserIsAdmin) {
    controls = `
      <div class="chat-admin-controls">
        <button class="chat-admin-btn" onclick="deleteMsg('${currentRoom}','${docId}')">🗑 delete</button>
        <button class="chat-admin-btn" onclick="showTimeoutMenu('${data.uid}','${escapeHtml(data.username || "")}')">⏱ timeout</button>
        <button class="chat-admin-btn danger" onclick="banUser('${data.uid}','${escapeHtml(data.username || "")}')">🔨 ban</button>
      </div>`;
  }

  const msgContent = data.imageData
    ? `<img src="${data.imageData}" class="chat-img" onclick="window.open('${data.imageData}')" />`
    : escapeHtml(data.text || "");

  const div = document.createElement("div");
  div.className = "chat-message";
  div.dataset.docId = docId;
  div.dataset.uid = data.uid || "";
  div.innerHTML = `
    <div class="chat-avatar">${photoURL ? `<img src="${photoURL}" />` : initial}</div>
    <div class="chat-msg-body" style="flex:1">
      <div class="chat-msg-meta">
        <span class="chat-msg-name">${escapeHtml(data.username || "anon")}${adminBadge}</span>
        <span class="chat-msg-time">${time}</span>
      </div>
      <div class="chat-msg-text">${msgContent}</div>
      ${controls}
    </div>
  `;
  container.appendChild(div);
}

async function sendMessage() {
  const user = auth.currentUser;
  if (!user) return;
  const inp = document.getElementById("chatInput");
  const text = inp.value.trim();
  if (!text) return;

  const modDoc = await db.collection("moderation").doc(user.uid).get();
  if (modDoc.exists) {
    const mod = modDoc.data();
    if (mod.banned) { alert("You are banned from chat."); return; }
    if (mod.timeoutUntil && mod.timeoutUntil.toDate() > new Date()) {
      const remaining = Math.ceil((mod.timeoutUntil.toDate() - new Date()) / 60000);
      alert(`You are timed out for ${remaining} more minute(s).`); return;
    }
  }

  inp.value = "";
  const isPrivate = privateRooms.some(r => r.id === currentRoom);
  const ref = isPrivate
    ? db.collection("privateRooms").doc(currentRoom).collection("messages")
    : db.collection("chat").doc(currentRoom).collection("messages");

  await ref.add({
    text, uid: user.uid,
    username: user.displayName || "anon",
    photoURL: "",
    createdAt: firebase.firestore.FieldValue.serverTimestamp()
  });
}

async function sendImageMessage(input) {
  const user = auth.currentUser;
  if (!user || !input.files || !input.files[0]) return;
  const file = input.files[0];
  if (file.size > 2 * 1024 * 1024) { alert("Image must be under 2MB."); return; }

  const modDoc = await db.collection("moderation").doc(user.uid).get();
  if (modDoc.exists) {
    const mod = modDoc.data();
    if (mod.banned) { alert("You are banned from chat."); return; }
    if (mod.timeoutUntil && mod.timeoutUntil.toDate() > new Date()) {
      const remaining = Math.ceil((mod.timeoutUntil.toDate() - new Date()) / 60000);
      alert(`You are timed out for ${remaining} more minute(s).`); return;
    }
  }

  const reader = new FileReader();
  reader.onload = async e => {
    const isPrivate = privateRooms.some(r => r.id === currentRoom);
    const ref = isPrivate
      ? db.collection("privateRooms").doc(currentRoom).collection("messages")
      : db.collection("chat").doc(currentRoom).collection("messages");
    await ref.add({
      text: "", imageData: e.target.result,
      uid: user.uid, username: user.displayName || "anon",
      photoURL: "", createdAt: firebase.firestore.FieldValue.serverTimestamp()
    });
  };
  reader.readAsDataURL(file);
  input.value = "";
}

function buildEmojiPicker() {
  const picker = document.getElementById("emojiPicker");
  if (!picker) return;
  picker.innerHTML = EMOJI_LIST.map(e =>
    `<button class="emoji-btn" onclick="insertEmoji('${e}')">${e}</button>`
  ).join("");
}

function toggleEmojiPicker() {
  const picker = document.getElementById("emojiPicker");
  if (!picker) return;
  picker.classList.toggle("open");
}

function insertEmoji(emoji) {
  const inp = document.getElementById("chatInput");
  if (!inp) return;
  const pos = inp.selectionStart;
  inp.value = inp.value.slice(0, pos) + emoji + inp.value.slice(pos);
  inp.focus();
  inp.selectionStart = inp.selectionEnd = pos + emoji.length;
}

window.deleteMsg = async function(room, docId) {
  const isPrivate = privateRooms.some(r => r.id === room);
  const ref = isPrivate
    ? db.collection("privateRooms").doc(room).collection("messages").doc(docId)
    : db.collection("chat").doc(room).collection("messages").doc(docId);
  await ref.delete();
  const el = document.querySelector(`.chat-message[data-doc-id="${docId}"]`);
  if (el) { el.style.animation = "fadeOut 0.3s ease forwards"; setTimeout(() => el.remove(), 300); }
};

window.showTimeoutMenu = function(uid, username) {
  if (!isAdmin()) return;
  const duration = prompt(`Timeout ${username} for how many minutes?`, "5");
  if (!duration || isNaN(duration)) return;
  const mins = parseInt(duration);
  if (mins <= 0) return;
  const until = new Date(Date.now() + mins * 60000);
  db.collection("moderation").doc(uid).set({
    timeoutUntil: firebase.firestore.Timestamp.fromDate(until), username
  }, { merge: true }).then(() => alert(`${username} timed out for ${mins} minute(s).`));
};

window.banUser = async function(uid, username) {
  if (!isAdmin()) return;
  if (!confirm(`Ban ${username} permanently?`)) return;
  await db.collection("moderation").doc(uid).set({ banned: true, username }, { merge: true });
  alert(`${username} has been banned.`);
};

async function loadPrivateRooms() {
  const user = auth.currentUser;
  if (!user) return;
  const list = document.getElementById("privateRoomList");
  if (!list) return;
  db.collection("privateRooms")
    .where("members", "array-contains", user.uid)
    .onSnapshot(snap => {
      privateRooms = snap.docs.map(d => ({ id: d.id, ...d.data() }));
      list.innerHTML = privateRooms.map(r =>
        `<button class="chat-room-btn ${currentRoom===r.id?"active":""}" onclick="switchPrivateRoom('${r.id}','${escapeHtml(r.name)}',this)">${escapeHtml(r.name)}</button>`
      ).join("");
    });
}

function createPrivateRoom() {
  const user = auth.currentUser;
  if (!user) return;
  document.getElementById("modalRoomName").value = "";
  document.getElementById("modalRoomPassword").value = "";
  document.getElementById("modalRoomInvite").value = "";
  document.getElementById("modalRoomError").textContent = "";
  document.getElementById("modalBackdrop").classList.add("open");
  document.getElementById("createRoomModal").classList.add("open");
  setTimeout(() => document.getElementById("modalRoomName").focus(), 300);
}

function closeModal() {
  document.getElementById("modalBackdrop").classList.remove("open");
  document.getElementById("createRoomModal").classList.remove("open");
}

async function submitCreateRoom() {
  const user = auth.currentUser;
  if (!user) return;
  const name = document.getElementById("modalRoomName").value.trim();
  const password = document.getElementById("modalRoomPassword").value.trim();
  const inviteEmail = document.getElementById("modalRoomInvite").value.trim();
  const err = document.getElementById("modalRoomError");
  err.textContent = "";

  if (!name) { err.textContent = "Room name is required."; return; }

  const members = [user.uid];
  if (inviteEmail) {
    const userSnap = await db.collection("users").where("email", "==", inviteEmail).get();
    if (!userSnap.empty) members.push(userSnap.docs[0].id);
    else { err.textContent = "Invited user not found."; return; }
  }

  try {
    const ref = await db.collection("privateRooms").add({
      name, members,
      password: password || null,
      createdBy: user.uid,
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    });
    closeModal();
    switchPrivateRoom(ref.id, name, null);
  } catch(e) {
    err.textContent = e.message;
  }
}

async function switchPrivateRoom(id, name, btn) {
  const roomDoc = await db.collection("privateRooms").doc(id).get();
  if (roomDoc.exists && roomDoc.data().password) {
    const entered = window.prompt(`🔒 "${name}" is password protected. Enter password:`);
    if (entered !== roomDoc.data().password) {
      alert("Incorrect password."); return;
    }
  }
  currentRoom = id;
  document.querySelectorAll(".chat-room-btn").forEach(b => b.classList.remove("active"));
  if (btn) btn.classList.add("active");
  const inp = document.getElementById("chatInput");
  if (inp) inp.placeholder = `message ${name}...`;
  listenPrivateRoom(id);
}

function listenPrivateRoom(roomId) {
  if (chatUnsub) chatUnsub();
  const msgs = document.getElementById("chatMessages");
  if (!msgs) return;
  msgs.innerHTML = "";
  chatUnsub = db.collection("privateRooms").doc(roomId).collection("messages")
    .orderBy("createdAt").limitToLast(80)
    .onSnapshot(snap => {
      snap.docChanges().forEach(change => {
        if (change.type === "added") appendChatMsg(msgs, change.doc.data(), change.doc.id);
      });
      msgs.scrollTop = msgs.scrollHeight;
    });
}

/* ── Proxy ─────────────────────────────────────── */
const searchInput = document.getElementById("searchInput");
const goBtn       = document.getElementById("goBtn");
const frameWrap   = document.getElementById("frameWrap");
const frameClose  = document.getElementById("frameClose");
const proxyFrame  = document.getElementById("proxyFrame");
const frameUrl    = document.getElementById("frameUrl");

const searchEngines = {
  brave: "https://search.brave.com/search?q=",
  google: "https://www.google.com/search?q=",
  duckduckgo: "https://duckduckgo.com/?q=",
  bing: "https://www.bing.com/search?q="
};

function navigate() {
  let raw = searchInput.value.trim();
  if (!raw) return;
  let url;
  if (/^https?:\/\//i.test(raw)) url = raw;
  else if (/^[\w-]+(\.[a-z]{2,})(\/.*)?$/i.test(raw)) url = "https://" + raw;
  else {
    const engine = localStorage.getItem("cosmicSearchEngine") || "brave";
    url = searchEngines[engine] + encodeURIComponent(raw);
  }
  frameUrl.textContent = url;
  proxyFrame.src = __uv$config.prefix + __uv$config.encodeUrl(url);
  frameWrap.classList.add("open");
}

goBtn.addEventListener("click", navigate);
searchInput.addEventListener("keydown", e => { if (e.key === "Enter") navigate(); });
frameClose.addEventListener("click", () => {
  frameWrap.classList.remove("open");
  setTimeout(() => { proxyFrame.src = ""; }, 450);
});
