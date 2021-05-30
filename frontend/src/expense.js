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
        expensesContainer.innerHTML += `<ul data-id=${this.id}>
                                            <li>${this.date}</li>
                                            <li>${this.description}</li>
                                            <li>
                                                ${this.amount}
                                                <br>
                                                <button data-action="delete">Delete</button>
                                            </li>
                                            <br>
                                        </ul>`
    }

    static destroy(id) {
        const ul = document.querySelector(`ul[data-id="${id}"]`)
        ul.remove()
    }
}
