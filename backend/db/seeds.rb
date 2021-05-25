user_is_jenny = User.create(email: "jenndestes@gmail.com")
user_is_william = User.create(email: "billywilly@gmail.com")
user_is_penelope = User.create(email: "cutedoggo@gmail.com")

user_is_jenny.expenses.build(
  date: "10/10/2020",
  description: "birthday party",
  amount: 200
)

user_is_william.expenses.build(
  date: "4/20/2021",
  description: "pineapple juice",
  amount: 7,
  )

user_is_penelope.expenses.build(
  date: "06/01/2020",
  description: "dog treats",
  amount: 10,
  )

user_is_jenny.save
user_is_william.save
user_is_penelope.save
