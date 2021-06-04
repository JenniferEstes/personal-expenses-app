class User {
    static all = []

    static userSelectHandler(e) {
        const expenses = Expense.getExpensesForUser(parseInt(e.target.value))
        expensesContainer.innerHTML = ""
        expenses.forEach(expense => expense.renderData())
    }
}