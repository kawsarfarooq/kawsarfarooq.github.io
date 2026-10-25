const root = document.documentElement;
const toggle = document.getElementById('theme-toggle');
const systemTheme = window.matchMedia('(prefers-color-scheme: dark)');
let savedTheme;
try { savedTheme = localStorage.getItem('theme'); } catch { /* Storage can be unavailable. */ }
function applyTheme(theme) {
 root.dataset.theme = theme;
 root.style.colorScheme = theme;
 toggle.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`);
 toggle.setAttribute('aria-pressed', String(theme === 'dark'));
}
applyTheme(['light', 'dark'].includes(savedTheme) ? savedTheme : systemTheme.matches ? 'dark' : 'light');
toggle.addEventListener('click', () => {
 savedTheme = root.dataset.theme === 'dark' ? 'light' : 'dark';
 applyTheme(savedTheme);
 try { localStorage.setItem('theme', savedTheme); } catch { /* Keep the session selection. */ }
});
systemTheme.addEventListener('change', event => {
 if (!['light', 'dark'].includes(savedTheme)) applyTheme(event.matches ? 'dark' : 'light');
});
const nav = document.getElementById('nav'), menu = document.getElementById('menu-toggle');
menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false');}));
document.addEventListener('keydown', event => {
 if (event.key === 'Escape' && nav.classList.contains('open')) {
  nav.classList.remove('open'); menu.setAttribute('aria-expanded', 'false'); menu.focus();
 }
});
document.getElementById('year').textContent=new Date().getFullYear();
const safe = s => String(s ?? '').replace(/[&<>"']/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
const safeUrl = value => {
 try { const url = new URL(value); return url.protocol === 'https:' ? safe(url.href) : ''; } catch { return ''; }
};
let allProjects=[], active='All';
function drawProjects(){ const q=document.getElementById('project-search').value.trim().toLowerCase(); const items=allProjects.filter(p=>(active==='All'||active===p.category)&&[p.title,p.category,p.description,p.stack].join(' ').toLowerCase().includes(q)); document.getElementById('project-count').textContent = `${items.length} project${items.length === 1 ? '' : 's'}`; document.getElementById('project-grid').innerHTML=items.length?items.map(p=>`<article class="project-card"><div class="project-top"><span class="tag">${safe(p.category)}</span><span class="project-year">${safe(p.year)}</span></div><h3>${safe(p.title)}</h3><p>${safe(p.description)}</p><div class="project-stack">${safe(p.stack)}</div>${safeUrl(p.url)?`<a class="project-link" href="${safeUrl(p.url)}" target="_blank" rel="noopener noreferrer">[Code]</a>`:''}</article>`).join(''):'<p>No projects match that filter.</p>'; }
function drawFilters(){ const categories=['All',...new Set(allProjects.map(p=>p.category))]; document.getElementById('project-filters').innerHTML=categories.map(c=>`<button type="button" class="filter ${c===active?'active':''}" data-category="${safe(c)}" aria-pressed="${c===active}">${safe(c)}</button>`).join(''); document.querySelectorAll('.filter').forEach(b=>b.addEventListener('click',()=>{active=b.dataset.category;document.querySelectorAll('.filter').forEach(button=>{const selected=button.dataset.category===active;button.classList.toggle('active',selected);button.setAttribute('aria-pressed',String(selected));});drawProjects();})); }
fetch('assets/content.json').then(r=>{if(!r.ok)throw Error('Could not load content');return r.json()}).then(data=>{
 for (const key of ['publications', 'projects', 'awards', 'news']) {
  if (!Array.isArray(data[key]) || data[key].some(item => !item || typeof item !== 'object')) throw Error('Invalid content');
 }
 document.getElementById('publication-list').innerHTML=data.publications.map(p=>`<article class="paper"><span class="paper-year">${safe(p.year)}</span><div><h3><a href="${safeUrl(p.doi)}" target="_blank" rel="noopener noreferrer">${safe(p.title)}</a></h3><p>${safe(p.authors)}</p><p><em>${safe(p.venue)}</em></p><a href="${safeUrl(p.doi)}" target="_blank" rel="noopener noreferrer">[Paper / DOI]</a></div></article>`).join('');
 allProjects=data.projects;drawFilters();drawProjects();document.getElementById('project-search').addEventListener('input',drawProjects);
 for(const key of ['awards','news']) document.getElementById(key+'-list').innerHTML=data[key].map(t=>`<div class="timeline-item"><div class="date">${safe(t.year)}</div><div class="description">${safe(t.title)}</div></div>`).join('');
 }).catch(() => {
 for (const id of ['publication-list', 'project-grid', 'awards-list', 'news-list']) {
  const container = document.getElementById(id);
  container.setAttribute('role', 'status');
  container.textContent = 'This content is temporarily unavailable. Please reload the page or contact me by email.';
 }
 document.getElementById('project-search').disabled = true;
 document.getElementById('project-filters').replaceChildren();
 document.getElementById('project-count').textContent = '';
});
