// Loader suave
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  const content = document.getElementById("content");
  loader.classList.add("fade-out");
  setTimeout(() => {
    loader.style.display = "none";
    content.classList.remove("d-none");
  }, 800);
});

// Desplazamiento suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", e => {
    e.preventDefault();
    document.querySelector(anchor.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});
