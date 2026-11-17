/* =========================================================
   1. CLIENT DETAILS — edit these
   ========================================================= */
const CONFIG = {
  whatsapp: "2348061360039",            // international format, no + or spaces
  greeting: "Hello SwiftDoc, I'd like to make enquiries about: ",
  generalMsg: "Hello SwiftDoc, I'd like to make an enquiry."
};

/* =========================================================
   2. SERVICES — edit names/descriptions here; both pages update
   ========================================================= */
const SERVICES = [
  { name:"CAC Registration", icon:"building", desc:"Register your business with the Corporate Affairs Commission.", items:[
    ["Business Name Registration","For sole proprietors and partnerships."],
    ["Private Limited Company (LTD)","Incorporate a limited liability company."],
    ["Incorporated Trustees","NGOs, churches, mosques, clubs and associations."],
    ["Company Limited by Guarantee","Non-profit companies and foundations."]
  ]},
  { name:"Annual Returns Filing", icon:"cal", desc:"Stay compliant and avoid CAC penalties.", items:[
    ["Business Name Annual Returns",""],
    ["Company Annual Returns",""],
    ["Incorporated Trustees Annual Returns",""],
    ["Outstanding / Backlog Returns","Catch up on missed years."]
  ]},
  { name:"CAC Post-Incorporation", icon:"cog", desc:"Changes and updates after your business is registered.", items:[
    ["Change of Directors / Shareholders",""],
    ["Change of Company Name",""],
    ["Change of Registered Address",""],
    ["Increase in Share Capital",""],
    ["Allotment / Transfer of Shares",""],
    ["Certified True Copies (CTC)",""],
    ["Status Report",""]
  ]},
  { name:"Sworn Affidavits", icon:"stamp", desc:"Court affidavits for personal and official use.", items:[
    ["Change of Name",""],
    ["Loss of Documents",""],
    ["Declaration of Age",""],
    ["Correction of Name / Date of Birth",""],
    ["Bachelorhood / Spinsterhood",""],
    ["Other Affidavits","Tell us what it's for."]
  ]},
  { name:"Newspaper Publication", icon:"news", desc:"Publish your notice in a national newspaper.", items:[
    ["Change of Name Publication",""],
    ["Loss of Documents Publication",""],
    ["Confirmation of Name",""],
    ["Public / Legal Notices","Including CAC Incorporated Trustees notices."]
  ]},
  { name:"NIN Services", icon:"id", desc:"National Identification Number services.", items:[
    ["NIN Enrolment","New registration."],
    ["NIN Modification","Correct name, date of birth, address or phone."],
    ["NIN Slip Printing","Standard and premium slips."],
    ["NIN Retrieval / Validation",""]
  ]},
  { name:"SCUML Registration", icon:"shield", desc:"Special Control Unit against Money Laundering certificate.", items:[
    ["SCUML Registration",""],
    ["SCUML Certificate Retrieval",""]
  ]},
  { name:"Police Reports", icon:"clip", desc:"Official police reports for lost items and documents.", items:[
    ["Loss of Documents Report",""],
    ["Loss of Items / Property Report",""],
    ["Police Extract",""]
  ]},
  { name:"Police Character Certificate", icon:"badge", desc:"Police clearance for jobs, travel and immigration.", items:[
    ["Police Character Certificate","For employment, travel and visa applications."]
  ]},
  { name:"International Passport", icon:"passport", desc:"Nigerian passport applications and renewals.", items:[
    ["Fresh Passport Application",""],
    ["Passport Renewal",""],
    ["Lost Passport Replacement",""],
    ["Passport Data Correction",""]
  ]},
  { name:"Birth Certificate", icon:"baby", desc:"NPC birth registration and attestation.", items:[
    ["Birth Certificate (Children)",""],
    ["Attestation of Birth (Adults)",""],
    ["Late Birth Registration",""]
  ]},
  { name:"Marriage Certificate", icon:"rings", desc:"Registry marriage and certificate services.", items:[
    ["Registry Marriage",""],
    ["Certified True Copy of Marriage Certificate",""],
    ["Marriage Certificate Verification",""]
  ]},
  { name:"Trademark", icon:"tm", desc:"Protect your brand name and logo.", items:[
    ["Trademark Search",""],
    ["Trademark Registration",""],
    ["Trademark Renewal",""]
  ]},
  { name:"State of Origin Certificate", icon:"pin", desc:"Certificate of state of origin / indigene letter.", items:[
    ["State of Origin Certificate",""]
  ]},
  { name:"Vehicle Papers", icon:"car", desc:"Registration and renewal of vehicle documents.", items:[
    ["New Vehicle Registration",""],
    ["Vehicle Papers Renewal",""],
    ["Change of Ownership",""]
  ]},
  { name:"Tax Identification Number (TIN)", icon:"tax", desc:"TIN for individuals and businesses.", items:[
    ["Individual TIN",""],
    ["Corporate / Business TIN",""]
  ]}
];

/* =========================================================
   3. App logic — no need to edit below
   ========================================================= */
const SPRITE = `<svg width="0" height="0" style="position:absolute" aria-hidden="true">
<symbol id="wa" viewBox="0 0 24 24"><path d="M17.5 14.4c-.3-.1-1.8-.9-2-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.4-.5c.2-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.2-.3-.3-.6-.4zM12 21.8c-1.8 0-3.5-.5-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4A9.8 9.8 0 0 1 12 2.2a9.8 9.8 0 0 1 9.8 9.8c0 5.4-4.4 9.8-9.8 9.8zm0-21.6A11.8 11.8 0 0 0 1.8 17.9L.1 24l6.3-1.6A11.8 11.8 0 1 0 12 .2z"/></symbol>
<symbol id="i-building" viewBox="0 0 24 24"><path d="M3 21h18M5 21V8l7-5 7 5v13M9 21v-5h6v5M9 10h.01M15 10h.01M12 10h.01"/></symbol>
<symbol id="i-cal" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4M9 15l2 2 4-4"/></symbol>
<symbol id="i-cog" viewBox="0 0 24 24"><path d="M4 7h9M17 7h3M4 17h3M11 17h9"/><circle cx="15" cy="7" r="2"/><circle cx="9" cy="17" r="2"/><path d="M4 12h12"/><circle cx="18" cy="12" r="2"/></symbol>
<symbol id="i-stamp" viewBox="0 0 24 24"><path d="M5 21h14M6 17h12v-2.5a2 2 0 0 0-2-2h-2.2l-.6-3.7a2.5 2.5 0 1 0-2.4 0l-.6 3.7H8a2 2 0 0 0-2 2z"/></symbol>
<symbol id="i-news" viewBox="0 0 24 24"><path d="M4 5h13v14H6a2 2 0 0 1-2-2zM17 9h3v8a2 2 0 0 1-2 2M7 9h7M7 12.5h7M7 16h4"/></symbol>
<symbol id="i-id" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="9" cy="11" r="2"/><path d="M6 16c.6-1.4 1.7-2 3-2s2.4.6 3 2M14 10h4M14 13h3"/></symbol>
<symbol id="i-shield" viewBox="0 0 24 24"><path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/><path d="m9 12 2 2 4-4"/></symbol>
<symbol id="i-clip" viewBox="0 0 24 24"><rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 4V3h6v1M9 10h6M9 14h6M9 18h3"/></symbol>
<symbol id="i-badge" viewBox="0 0 24 24"><circle cx="12" cy="9" r="6"/><path d="m9 14.5-1.5 6.5 4.5-2 4.5 2-1.5-6.5M10 9l1.5 1.5L14.5 7.5"/></symbol>
<symbol id="i-passport" viewBox="0 0 24 24"><rect x="5" y="3" width="14" height="18" rx="2"/><circle cx="12" cy="10" r="3.2"/><path d="M8.8 10h6.4M12 6.8c-1 1-1 5.4 0 6.4M12 6.8c1 1 1 5.4 0 6.4M9 17h6"/></symbol>
<symbol id="i-baby" viewBox="0 0 24 24"><path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><path d="M14 3v6h6"/><path d="M12 17.5s-3-1.8-3-3.7a1.5 1.5 0 0 1 3-.6 1.5 1.5 0 0 1 3 .6c0 1.9-3 3.7-3 3.7z"/></symbol>
<symbol id="i-rings" viewBox="0 0 24 24"><circle cx="9" cy="14" r="5"/><circle cx="15" cy="14" r="5"/><path d="m10 5 2-2 2 2-2 2z"/></symbol>
<symbol id="i-tm" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M7 9h4M9 9v6M13 15V9l2 3 2-3v6"/></symbol>
<symbol id="i-pin" viewBox="0 0 24 24"><path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/></symbol>
<symbol id="i-car" viewBox="0 0 24 24"><path d="M5 16H3v-4l2-5h14l2 5v4h-2M5 12h14"/><circle cx="7.5" cy="16.5" r="2"/><circle cx="16.5" cy="16.5" r="2"/><path d="M9.5 16.5h5"/></symbol>
<symbol id="i-tax" viewBox="0 0 24 24"><path d="M6 3h12v18l-3-2-3 2-3-2-3 2z"/><path d="m9 14 6-6"/><circle cx="9.5" cy="8.5" r="1"/><circle cx="14.5" cy="13.5" r="1"/></symbol>
</svg>`;

const SHEET = `<div class="overlay" id="overlay"></div>
<div class="sheet" id="sheet" role="dialog" aria-modal="true" aria-labelledby="shTitle">
  <div class="grab"></div>
  <div class="sh-head">
    <div class="ic" id="shIcon"></div>
    <div><h3 id="shTitle"></h3><p id="shDesc"></p></div>
    <button class="close" id="shClose" aria-label="Close"><svg class="i" viewBox="0 0 24 24"><path d="M18 6 6 18M6 6l12 12"/></svg></button>
  </div>
  <div class="sh-body" id="shBody"></div>
  <div class="sh-foot">
    <span>Need something else in this category?</span>
    <a id="shOther" href="#" target="_blank" rel="noopener">Ask us on WhatsApp →</a>
  </div>
</div>`;

const FAB = `<a class="fab js-wa" id="fab" href="#" target="_blank" rel="noopener" aria-label="Chat with SwiftDoc on WhatsApp">
  <span class="tip">Need help? Chat with us</span>
  <span class="ball"><svg viewBox="0 0 24 24"><use href="#wa"/></svg></span>
</a>`;

const $ = s => document.querySelector(s);
const waLink = msg => `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(msg)}`;
const ico = n => `<svg class="i" viewBox="0 0 24 24"><use href="#i-${n}"/></svg>`;
const waIco = `<svg viewBox="0 0 24 24"><use href="#wa"/></svg>`;
const arrow = `<svg class="i" viewBox="0 0 24 24" style="width:16px;height:16px"><path d="M5 12h14M13 6l6 6-6 6"/></svg>`;
const esc = s => s.replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const norm = s => s.toLowerCase().normalize("NFKD").replace(/[^a-z0-9 ]/g, " ");
// every typed word must match the start of a word (so "tin" finds TIN, not "prin-tin-g")
const matches = (text, q) => { const w = norm(text).split(/\s+/); return q.split(/\s+/).every(t => w.some(x => x.startsWith(t))); };
const slug = s => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
const store = {
  get(k){ try { return sessionStorage.getItem(k); } catch(e){ return null; } },
  set(k,v){ try { sessionStorage.setItem(k,v); } catch(e){} },
  del(k){ try { sessionStorage.removeItem(k); } catch(e){} }
};

document.body.insertAdjacentHTML('afterbegin', SPRITE);
document.body.insertAdjacentHTML('beforeend', FAB);
document.querySelectorAll('.js-wa').forEach(a => a.href = waLink(CONFIG.generalMsg));
const yr = $('#yr'); if (yr) yr.textContent = new Date().getFullYear();
setTimeout(() => { $('#fab').classList.add('hint'); setTimeout(() => $('#fab').classList.remove('hint'), 4000); }, 2500);

const PAGE = document.body.dataset.page;

// Mobile menu
const menuBtn = $('#menuBtn'), mnav = $('#mnav');
if (menuBtn) {
  const setMenu = open => { mnav.classList.toggle('open', open); menuBtn.setAttribute('aria-expanded', open); menuBtn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu'); };
  menuBtn.addEventListener('click', () => setMenu(!mnav.classList.contains('open')));
  mnav.addEventListener('click', e => { if (e.target.closest('a')) setMenu(false); });
}

/* ---------- Home: hero search hands off to the services page ---------- */
if (PAGE === 'home') {
  // WhatsApp bubble: show "typing…" then the message
  const reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  setTimeout(() => $('#bubble').classList.add('typed'), reduce ? 0 : 3600);
  const toServices = q => { if (q) store.set('sdq', q); location.href = 'services.html'; };
  $('#heroSearch').addEventListener('submit', e => { e.preventDefault(); toServices($('#heroQ').value.trim()); });
  document.querySelectorAll('.chips button').forEach(b => b.addEventListener('click', () => toServices(b.dataset.q)));
}

/* ---------- Services page: full grid, search, sheets ---------- */
if (PAGE === 'services') {
  document.body.insertAdjacentHTML('beforeend', SHEET);
  const grid = $('#grid');

  function render(query = "") {
    const q = norm(query).trim();
    grid.innerHTML = "";
    let shown = 0;
    SERVICES.forEach((cat, idx) => {
      const catHit = !q || matches(cat.name + " " + cat.desc, q);
      const itemHits = q ? cat.items.filter(([n, d]) => matches(n + " " + d, q)) : [];
      if (!catHit && !itemHits.length) return;
      shown++;
      const n = cat.items.length;
      const btn = document.createElement('button');
      btn.className = 'card'; btn.type = 'button';
      const matchHtml = itemHits.length
        ? `<div class="match">${itemHits.slice(0,2).map(([nm]) => `<mark>${esc(nm)}</mark>`).join(', ')}${itemHits.length>2?' …':''}</div>` : "";
      btn.innerHTML = `
        <div class="ic">${ico(cat.icon)}</div>
        <h3>${esc(cat.name)}</h3>
        ${matchHtml}
        <div class="meta"><span>${n} service${n>1?'s':''}</span><span class="arr">${arrow}</span></div>`;
      btn.addEventListener('click', () => openSheet(idx, itemHits.map(i => i[0])));
      grid.appendChild(btn);
    });
    $('#empty').style.display = shown ? 'none' : 'block';
    if (!shown) $('#emptyWa').href = waLink(`Hello SwiftDoc, I'm looking for help with: ${query}`);
  }

  const sheet = $('#sheet'), overlay = $('#overlay');
  let lastFocus = null;
  function openSheet(idx, hits = []) {
    const cat = SERVICES[idx];
    lastFocus = document.activeElement;
    $('#shIcon').innerHTML = ico(cat.icon);
    $('#shTitle').textContent = cat.name;
    $('#shDesc').textContent = cat.desc;
    $('#shBody').innerHTML = cat.items.map(([n, d]) => `
      <div class="svc${hits.includes(n) ? ' hit' : ''}">
        <div><h4>${esc(n)}</h4>${d ? `<p>${esc(d)}</p>` : ''}</div>
        <a class="enq" href="${waLink(CONFIG.greeting + cat.name + ' – ' + n)}" target="_blank" rel="noopener">${waIco} I'd like to make enquiries</a>
      </div>`).join('');
    $('#shOther').href = waLink(`${CONFIG.greeting}${cat.name} (other)`);
    sheet.classList.add('on'); overlay.classList.add('on');
    document.body.style.overflow = 'hidden';
    const body = $('#shBody'), firstHit = body.querySelector('.svc.hit');
    body.scrollTop = firstHit ? firstHit.offsetTop - body.offsetTop - 8 : 0;
    setTimeout(() => $('#shClose').focus(), 50);
  }
  function closeSheet() {
    sheet.classList.remove('on'); overlay.classList.remove('on');
    document.body.style.overflow = '';
    if (location.hash) history.replaceState(null, '', location.pathname);
    if (lastFocus) lastFocus.focus();
  }
  $('#shClose').addEventListener('click', closeSheet);
  overlay.addEventListener('click', closeSheet);
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && sheet.classList.contains('on')) closeSheet(); });
  let y0 = null;
  sheet.addEventListener('touchstart', e => { if ($('#shBody').scrollTop <= 0) y0 = e.touches[0].clientY; }, {passive:true});
  sheet.addEventListener('touchend', e => { if (y0 !== null && e.changedTouches[0].clientY - y0 > 90) closeSheet(); y0 = null; });

  // Search box
  const qBox = $('#q');
  qBox.addEventListener('input', e => render(e.target.value));
  $('#svcSearch').addEventListener('submit', e => { e.preventDefault(); render(qBox.value); grid.scrollIntoView({behavior:'smooth'}); });

  // Arriving from the home page: search query or a category link (#sworn-affidavits)
  const handoff = store.get('sdq'); store.del('sdq');
  if (handoff) { qBox.value = handoff; render(handoff); setTimeout(() => grid.scrollIntoView({behavior:'smooth'}), 150); }
  else render();
  function fromHash() {
    const h = location.hash.slice(1);
    const idx = SERVICES.findIndex(c => slug(c.name) === h);
    if (idx > -1) openSheet(idx);
  }
  fromHash();
  window.addEventListener('hashchange', fromHash);
}

/* ---------- Contact page: quick message → WhatsApp ---------- */
if (PAGE === 'contact') {
  const sel = $('#qSvc');
  sel.innerHTML += SERVICES.map(c => `<option>${esc(c.name)}</option>`).join('') + '<option>Something else</option>';
  const build = () => {
    const name = $('#qName').value.trim(), svc = sel.value, msg = $('#qMsg').value.trim();
    let t = 'Hello SwiftDoc,';
    if (name) t += ` my name is ${name}.`;
    t += svc ? ` I'd like to make enquiries about: ${svc}.` : " I'd like to make an enquiry.";
    if (msg) t += `\n\n${msg}`;
    $('#qSend').href = waLink(t);
  };
  ['input','change'].forEach(ev => $('#qform').addEventListener(ev, build));
  build();
}
