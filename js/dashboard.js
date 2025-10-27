function updateDashboard() {
  const transactions = getTransactions();
  const budget = getBudget();
  let income = 0,
    expense = 0;

  transactions.forEach((t) => {
    if (t.type === "Income") income += Number(t.amount);
    else expense += Number(t.amount);
  });

  document.getElementById("total-income").textContent = `$${income}`;
  document.getElementById("total-expense").textContent = `$${expense}`;
  document.getElementById("balance").textContent = `$${income - expense}`;

  const warning = document.getElementById("budget-warning");
  if (budget && expense > budget) {
    warning.textContent = "⚠️ Alert: You’ve exceeded your budget!";
    warning.style.color = "red";
  } else if (budget) {
    warning.textContent = `Budget Remaining: $${budget - expense}`;
    warning.style.color = "green";
  } else {
    warning.textContent = "";
  }

  const budgetInput = document.getElementById("budget-input");
  if (budgetInput) budgetInput.value = budget || "";
}

document.getElementById("save-budget").addEventListener("click", () => {
  const budgetValue = Number(document.getElementById("budget-input").value);
  if (budgetValue > 0) {
    saveBudget(budgetValue);
    alert("Budget saved!");
    updateDashboard();
  } else {
    alert("Enter a valid budget amount.");
  }
});

function handleRecurringTransactions() {
  const transactions = getTransactions();
  let updated = false;
  const today = new Date().toISOString().split("T")[0];

  transactions.forEach((t) => {
    if (t.recurring === "weekly" || t.recurring === "monthly") {
      const lastDate = new Date(t.date);
      const diffDays = (new Date(today) - lastDate) / (1000 * 60 * 60 * 24);

      if (
        (t.recurring === "weekly" && diffDays >= 7) ||
        (t.recurring === "monthly" && diffDays >= 30)
      ) {
        const newTransaction = { ...t, date: today };
        addTransaction(newTransaction);
        updated = true;
      }
    }
  });

  if (updated) updateDashboard();
}

handleRecurringTransactions();
updateDashboard();
