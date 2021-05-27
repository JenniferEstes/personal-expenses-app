document.addEventListener("DOMContentLoaded", () =>  {
    fetchExpenses()
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

// Sign up function
// Sign in function