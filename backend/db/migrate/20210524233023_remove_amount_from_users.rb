class RemoveAmountFromUsers < ActiveRecord::Migration[6.1]
  def change
    remove_column :users, :amount, :decimal
  end
end
