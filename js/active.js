export default document.addEventListener("click", function() {
  const aLinks = document.querySelectorAll("a");

  const currentUrl = window.location.href;

  aLinks.forEach(links => {
    links.classList.remove("active");
    if (links.href === currentUrl) {
      links.classList.add("active");
    }
  });
});