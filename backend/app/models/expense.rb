class Expense < ApplicationRecord
  belongs_to :user
  validates :date, :amount, :description, presence: true
end
