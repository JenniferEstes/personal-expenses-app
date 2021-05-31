class Expense {
    static all = []

    constructor(data) {
        this.id = data.id
        this.date = data.date
        this.description = data.description
        this.amount = data.amount
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
        fetch(`http://localhost:3000/api/v1/expenses/${id}`, {
            method: 'DELETE'
        })
            .then(res => {
                if (res.status !== 200) {
                    console.log('Failed to delete Expense ' + id)
                    return
                }
                const ul = document.querySelector(`ul[data-id="${id}"]`)
                ul.remove()
            })
    }
}
