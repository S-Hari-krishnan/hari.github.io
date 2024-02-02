// Sample JavaScript for handling expenses

let expenses = [];

function addExpense() {
    const username = document.getElementById('username').value;
    const amount = parseFloat(document.getElementById('amount').value);
    const category = document.getElementById('category').value;
    const description = document.getElementById('description').value;

    if (isNaN(amount) || amount <= 0) {
        alert('Please enter a valid amount.');
        return;
    }

    const expense = {
        username,
        amount,
        category,
        description,
        date: new Date().toLocaleDateString()
    };

    expenses.push(expense);
    updateExpensesList();
    resetForm();
}

function updateExpensesList() {
    const expensesList = document.getElementById('expensesList');
    expensesList.innerHTML = '';

    expenses.forEach(expense => {
        const listItem = document.createElement('div');
        listItem.className = 'expense-item';
        listItem.innerHTML = `
            <p><strong>${expense.username}</strong></p>
            <p>Amount: $${expense.amount.toFixed(2)}</p>
            <p>Category: ${expense.category}</p>
            <p>Description: ${expense.description}</p>
            <p>Date: ${expense.date}</p>
            <hr>
        `;
        expensesList.appendChild(listItem);
    });
}

function resetForm() {
    document.getElementById('username').value = '';
    document.getElementById('amount').value = '';
    document.getElementById('category').value = '';
    document.getElementById('description').value = '';
}

// You can further enhance this script by adding features like data persistence, charts, or additional user interactions.
