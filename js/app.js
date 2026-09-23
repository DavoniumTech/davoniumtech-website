const EMAIL = "davoniumtechnologies@gmail.com";
const PHONE = "+2347072604426";
const current = location.pathname.split("/").pop() || "index.html";

document.querySelector("#site-header").innerHTML = `
<header class="site-header">
  <div class="container nav">
    <a class="brand" href="index.html" aria-label="Davonium Technologies home">
      <img src="assets/icons/icon-192.png" alt="Davonium D icon">
      <span>DAVONIUM<br>TECHNOLOGIES</span>
    </a>
    <button class="menu-toggle" aria-label="Toggle navigation" aria-expanded="false">Menu</button>
    <nav class="nav-links" aria-label="Main navigation">
      <a href="index.html">Home</a><a href="about.html">About</a><a href="products.html">Products</a><a href="services.html">Services</a><a href="portfolio.html">Our Work</a><a href="contact.html">Contact</a>
    </nav>
  </div>
</header>`;

const toggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
toggle.addEventListener("click", () => {
  const opened = navLinks.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(opened));
});
document.querySelectorAll(".nav-links a").forEach(link => {
  if (link.getAttribute("href") === current) link.classList.add("active");
});

document.querySelector("#site-footer").innerHTML = `
<footer class="site-footer">
  <div class="container">
    <div class="footer-top">
      <div><a class="brand" href="index.html"><img src="assets/icons/icon-192.png" alt="Davonium D icon"><span>DAVONIUM TECHNOLOGIES</span></a><p class="footer-copy">Innovate. Build. Empower. Digital products, websites, mobile applications, and future AI solutions.</p></div>
      <div class="footer-links"><a href="about.html">About</a><a href="products.html">Products</a><a href="services.html">Services</a><a href="portfolio.html">Our Work</a><a href="contact.html">Contact</a></div>
    </div>
    <div class="footer-bottom"><span>© ${new Date().getFullYear()} Davonium Technologies. All rights reserved.</span><span>Innovate · Build · Empower</span></div>
  </div>
</footer>`;

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("sw.js").catch(err => console.warn("PWA service worker:", err));
  });
}
