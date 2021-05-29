class Expense {
    constructor(data) {
        this.id = data.id
        this.date = data.date
        this.description = data.description
        this.amount = data.amount
        this.user = data.user
        Expense.all.push(this)
    }

    renderData() {
        return
        expensesContainer.innerHTML += `<li>${this.date}</li>`
        expensesContainer.innerHTML += `<li>${this.description}</li>`
        expensesContainer.innerHTML += `<li>${this.amount}<br><button data-id=${this.id}>Edit</button><br><br></li>`
    }
}
    Expense.all = []