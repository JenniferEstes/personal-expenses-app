class ExpensesController < ApplicationController
  validates :date, :description, :amount, presence: true
end
