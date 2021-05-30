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
            <button data-id=${this.id}>Edit</button>
            <button data-id=${this.id}>Delete</button></li><br>`
    }
}
// should this be static.all = []?
statis.all = []

