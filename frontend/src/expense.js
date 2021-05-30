const expensesContainer = document.querySelector('#expenses-container')

class Expense {
    static all = []

    constructor(data) {
        this.id = data.id
        this.date = data.date
        this.description = data.description
        this.amount = data.amount
        this.user = data.user
        Expense.all.push(this)
    }

    renderData() {
        expensesContainer.innerHTML += `<li>${this.date}</li>`
        expensesContainer.innerHTML += `<li>${this.description}</li>`
        expensesContainer.innerHTML += `<li>${this.amount}<br>
            <button id="delete-expense-${this.id}" data-id=${this.id}>Delete</button></li><br>`

        const deleteButton = document.querySelector(`#delete-expense-${this.id}`)
        deleteButton.addEventListener('click', () => {
            deleteExpense(this.id)
        })
    }


}

