document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("transaction-form");
  const dateInput = document.getElementById("date");
  dateInput.value = new Date().toISOString().split("T")[0];

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const transaction = {
      type: document.getElementById("type").value,
      category: document.getElementById("category").value,
      amount: parseFloat(document.getElementById("amount").value),
      date: document.getElementById("date").value,
      notes: document.getElementById("notes").value.trim(),
      recurring: document.getElementById("recurring").value,
    };

    if (transaction.amount <= 0 || isNaN(transaction.amount)) {
      alert("Please enter a valid amount greater than 0");
      return;
    }

    addTransaction(transaction);
    alert("Transaction saved!");
    form.reset();
    dateInput.value = new Date().toISOString().split("T")[0];
  });
});
