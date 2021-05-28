class Expense {
    constructor(data) {
        this.id = data.id
        this.date = data.date
        this.description = data.description
        this.amount = data.amount
        this.user = data.user
        Expense.all.push(this)
        debugger
    }
}

Expense.all = []