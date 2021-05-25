user_is_jenny = User.create(email: "jenndestes@gmail.com")
user_is_william = User.create(email: "billywilly@gmail.com")
user_is_penelope = User.create(email: "cutedoggo@gmail.com")

user_is_jenny.expenses.build(
  date: "2021-10-10",
  description: "birthday party",
  amount: 200
)

user_is_jenny.expenses.build(
  date: "2021-06-01",
  description: "sunglasses",
  amount: 50
)

user_is_william.expenses.build(
  date: "2021-04-20",
  description: "pineapple juice",
  amount: 7,
  )

user_is_william.expenses.build(
  date: "2021-04-20",
  description: "bubble gum",
  amount: 2,
  )

user_is_penelope.expenses.build(
  date: "2020-06-01",
  description: "dog treats",
  amount: 10,
  )

user_is_penelope.expenses.build(
  date: "2020-06-01",
  description: "doggie baggies",
  amount: 8,
  )

user_is_jenny.save
user_is_william.save
user_is_penelope.save
