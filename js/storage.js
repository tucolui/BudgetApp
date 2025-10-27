function getTransactions() {
  return JSON.parse(localStorage.getItem("transactions")) || [];
}

function saveTransactions(transactions) {
  localStorage.setItem("transactions", JSON.stringify(transactions));
}

function addTransaction(transaction) {
  const transactions = getTransactions();
  transactions.push(transaction);
  saveTransactions(transactions);
}

function deleteTransaction(index) {
  const transactions = getTransactions();
  transactions.splice(index, 1);
  saveTransactions(transactions);
}

function getBudget() {
  return Number(localStorage.getItem("budget")) || 0;
}

function saveBudget(amount) {
  localStorage.setItem("budget", amount);
}

function getTheme() {
  return localStorage.getItem("theme") || "light";
}

function setTheme(theme) {
  document.body.classList.toggle("dark", theme === "dark");
  localStorage.setItem("theme", theme);
}
