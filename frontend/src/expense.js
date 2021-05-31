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
        expensesContainer.innerHTML += `
            <div class="card mx-1 mb-2 col-4 h-auto" data-id="${this.id}">
                <div class="card-body">
                    <h2 class="card-title h5">${this.description}</h2>
                    <h3 class="card-subtitle h6">${this.date}</h3>
                    <p class="card-text">${this.amount}</p>
                    <button class="btn btn-outline-danger btn-sm" data-action="delete">Delete</button>
                </div>
            </div> 
                                          `
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
                const card = document.querySelector(`div[data-id="${id}"]`)
                card.remove()
            })
    }
}
