 Rails.application.routes.draw do
  # resources :expenses
  namespace :api do
    namespace :v1 do
      resources :users
      resources :expenses, only: [:index, :create, :destroy]
    end
  end
end
