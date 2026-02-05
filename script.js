// Footer year
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Mobile nav toggle
const btn = document.getElementById("navToggle");
const links = document.getElementById("navLinks");

if (btn && links) {
  btn.addEventListener("click", () => {
    const isOpen = links.classList.toggle("open");
    btn.setAttribute("aria-expanded", String(isOpen));
  });

  // Close menu when a link is clicked (mobile)
  links.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => {
      links.classList.remove("open");
      btn.setAttribute("aria-expanded", "false");
    });
  });
}

// Contact form -> opens mail client with prefilled details (works on GitHub Pages)
const form = document.getElementById("contactForm");
const hint = document.getElementById("formHint");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("cName").value.trim();
    const email = document.getElementById("cEmail").value.trim();
    const msg = document.getElementById("cMsg").value.trim();

    if (!name || !email || !msg) {
      if (hint) hint.textContent = "Fill out name, email, and message.";
      return;
    }

    const to = "nashwanislam@gmail.com";
    const subject = encodeURIComponent(`Portfolio message from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${msg}\n`
    );

    // Opens default mail client (or Gmail if user has it configured)
    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;

    if (hint) hint.textContent = "Opening your email app…";
    form.reset();
  });
}