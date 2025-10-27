function renderTransactions() {
  const list = document.getElementById("transaction-list");
  const transactions = getTransactions();
  list.innerHTML = "";

  let totalIncome = 0,
    totalExpense = 0;

  transactions.forEach((t, index) => {
    if (t.type === "Income") totalIncome += Number(t.amount);
    else totalExpense += Number(t.amount);

    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${t.date}</td>
      <td>${t.category}</td>
      <td>${t.type}</td>
      <td class="${t.type === "Income" ? "income" : "expense"}">$${
      t.amount
    }</td>
      <td>${t.notes || "-"}</td>
      <td>
        <button onclick="removeTransaction(${index})" class="btn small-btn">Delete</button>
      </td>
    `;
    list.appendChild(row);
  });

  document.getElementById("history-income").textContent = `$${totalIncome}`;
  document.getElementById("history-expense").textContent = `$${totalExpense}`;
}

function removeTransaction(index) {
  deleteTransaction(index);
  renderTransactions();
}

renderTransactions();
