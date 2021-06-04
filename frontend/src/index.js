const createExpenseForm = document.querySelector("#create-expense-form")
const userSelect = document.getElementById('users')


document.addEventListener('DOMContentLoaded', () => {
    fetchExpenses()
    userSelect.addEventListener('change', User.userSelectHandler)
    createExpenseForm.addEventListener('submit', ExpenseForm.createFormHandler)
})

const expensesContainer = document.getElementById('expenses-container')

expensesContainer.addEventListener('click', (e) => {
    const id = e.target.parentElement.parentElement.dataset.id
    const action = e.target.dataset.action
    if (action === 'delete') {
        Expense.destroy(id)
    }
})

function fetchExpenses() {
    // returns promise
    fetch('http://localhost:3000/api/v1/expenses')
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

function fetchExpensesPost(form) {
    fetch('http://localhost:3000/api/v1/expenses', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        // send back this data to API
        body: JSON.stringify(form)
    })
        .then(resp => resp.json())
        .then(data => {
            const newExpense = new Expense(data.expense)
            newExpense.renderData()
            createExpenseForm.reset()
        })
}
