document.addEventListener("DOMContentLoaded", () => {
  const mobileCss = document.createElement("link");
  mobileCss.rel = "stylesheet";
  mobileCss.href = "mobile.css?v=1";
  document.head.appendChild(mobileCss);

  const header = document.querySelector(".site-header");
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");
  window.addEventListener("scroll", () => header?.classList.toggle("scrolled", window.scrollY > 20), { passive: true });
  menuToggle?.addEventListener("click", () => { const open = navLinks?.classList.toggle("open"); menuToggle.setAttribute("aria-expanded", String(!!open)); });
  navLinks?.querySelectorAll("a").forEach(link => link.addEventListener("click", () => { navLinks.classList.remove("open"); menuToggle?.setAttribute("aria-expanded", "false"); }));
  const sections = document.querySelectorAll("section[id]");
  const links = document.querySelectorAll('.nav-links a[href^="#"]');
  const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) links.forEach(link => link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`)); }), { rootMargin: "-35% 0px -55%" });
  sections.forEach(section => observer.observe(section));
  const filters = document.querySelectorAll(".filter");
  const cards = document.querySelectorAll(".project-card");
  filters.forEach(filter => filter.addEventListener("click", () => { filters.forEach(button => button.classList.remove("active")); filter.classList.add("active"); const value = filter.dataset.filter; cards.forEach(card => card.style.display = value === "all" || card.dataset.category === value ? "" : "none"); }));
  const revealObserver = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add("visible"); revealObserver.unobserve(entry.target); } }), { threshold: 0.12 });
  document.querySelectorAll(".reveal").forEach(element => revealObserver.observe(element));
  const backToTop = document.querySelector(".back-to-top");
  if (backToTop) backToTop.addEventListener("click", event => { event.preventDefault(); document.getElementById("home")?.scrollIntoView({ behavior: "smooth", block: "start" }); history.replaceState(null, "", "#home"); });
  const glow = document.querySelector(".cursor-glow");
  window.addEventListener("pointermove", event => { if (glow && window.matchMedia("(hover: hover)").matches) { glow.style.left = `${event.clientX}px`; glow.style.top = `${event.clientY}px`; } }, { passive: true });
});
