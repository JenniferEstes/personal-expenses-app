document.addEventListener("DOMContentLoaded", () =>  {
    fetchExpenses()
    const createExpenseForm = document.querySelector("#create-expense-form")
    createExpenseForm.addEventListener("submit", (e) => createFormHandler(e))
})

function fetchExpenses() {
    const expensesContainer = document.getElementById("expenses-container")
    // returns promise
    fetch("http://localhost:3000/api/v1/expenses")
        // capturing response, parsing it into json
        .then(resp => resp.json())
        .then(data => {
            data.forEach(expense => {
                expensesContainer.innerHTML += `<li>${expense.date}</li>`
                expensesContainer.innerHTML += `<li>${expense.description}</li>`
                expensesContainer.innerHTML += `<li>${expense.amount}<br><button data-id=${expense.id}>Edit</button><br><br></li>`
            })
        })
    // .catch(err => console.warn(err))
}

function createFormHandler(e) {
    e.preventDefault()
    console.log(e)
    const userId = parseInt(document.querySelector("#users").value)
    const dateInput = document.querySelector("#date").value
    const descriptionInput = document.querySelector("textarea").value
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
            data.forEach(expense => {
                expensesContainer.innerHTML += `<li>${expense.date}</li>`
                expensesContainer.innerHTML += `<li>${expense.description}</li>`
                expensesContainer.innerHTML += `<li>${expense.amount}<br><button data-id=${expense.id}>Edit</button><br><br></li>`
            })
        })
}
