class User < ApplicationRecord
  has_many :expenses, dependent: :destroy
end
