document.addEventListener("DOMContentLoaded", () =>  {
    fetchExpenses()
})

function fetchExpenses() {
    const expensesContainer = document.getElementById("expenses-container")
    // returns promise
    fetch("http://localhost:3000/api/v1/expenses")
        // Async too, returns promise
        .then(resp => resp.json())
        .then(data => {
            data.forEach(expense => {
                expensesContainer.innerHTML += `<li>${expense.date}</li>`
                expensesContainer.innerHTML += `<li>${expense.description}</li>`
                expensesContainer.innerHTML += `<li>${expense.amount}</li>`
            })
        })
    // .catch(err => console.warn(err))
}