function initTheme() {
  const savedTheme = getTheme();
  setTheme(savedTheme);

  const toggleBtn = document.getElementById("theme-toggle");
  if (toggleBtn) {
    toggleBtn.textContent =
      savedTheme === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode";

    toggleBtn.addEventListener("click", () => {
      const newTheme = getTheme() === "dark" ? "light" : "dark";
      setTheme(newTheme);
      toggleBtn.textContent =
        newTheme === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode";
    });
  }
}

initTheme();
