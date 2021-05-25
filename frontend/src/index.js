// returns promise
fetch("http://localhost:3000/api/v1/expenses")
    // Async too, returns promise
    .then(resp => resp.json())
    .then(data => console.log(data))
    .catch(err => console.warn(err))