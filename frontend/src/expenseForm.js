class ExpenseForm {
    constructor() {
        this.user_id = parseInt(document.querySelector('#users').value)
        this.date = document.querySelector('#date').value
        this.description = document.querySelector('#description').value
        this.amount = document.querySelector('#amount').value
    }

    static createFormHandler(e) {
        e.preventDefault()
        const formData = new ExpenseForm()
        fetchExpensesPost(formData)
    }
}
