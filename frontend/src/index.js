const createExpenseForm = document.querySelector("#create-expense-form")

document.addEventListener("DOMContentLoaded", () => {
    fetchExpenses()
    createExpenseForm.addEventListener("submit", createFormHandler)
})

const expensesContainer = document.getElementById("expenses-container")

expensesContainer.addEventListener('click', (e) => {
    const id = e.target.parentElement.parentElement.dataset.id
    const action = e.target.dataset.action

    if (action === 'delete') {
        Expense.destroy(id)
    }
})

function fetchExpenses() {
    // returns promise
    fetch("http://localhost:3000/api/v1/expenses")
        // capturing response, parsing it into json
        .then(resp => resp.json())
        .then(expense => {
            expense.forEach(expense => {
                // #create new instance of expense class
                let newExpense = new Expense(expense)
                 newExpense.renderData()
            })
                // .catch(err => console.log(err))
        })
}

function createFormHandler(e) {
    e.preventDefault()
    console.log(e)
    const userId = parseInt(document.querySelector("#users").value)
    const dateInput = document.querySelector("#date").value
    const descriptionInput = document.querySelector("#description").value
    const amountInput = document.querySelector("#amount").value
    fetchExpensesPost(userId, dateInput, descriptionInput, amountInput)
}

function fetchExpensesPost(user_id, date, description, amount) {
    fetch("http://localhost:3000/api/v1/expenses", {
        method: "post",
        headers: {"Content-Type": "application/json"},
        // send back this data to API
        body: JSON.stringify({
            user_id: user_id,
            date: date,
            description: description,
            amount: amount
        })
    })
        .then(resp => resp.json())
        .then(data => {
            console.log(data)
            // let newExpense = new Expense(expense.data)

            // renderData(data.expense)
        })
}
