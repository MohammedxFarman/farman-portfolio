const quotes = [
  "Push yourself, because no one else will.",
  "Dream it. Wish it. Do it.",
  "Stay focused. Stay humble. Work hard.",
  "Don't limit your challenges – challenge your limits.",
  "Believe in yourself and all that you are."
];
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("randomQuote").innerText =
    `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
});
const darkBtn = document.getElementById("darkToggle");
darkBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  darkBtn.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});
const menuBtn = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});
