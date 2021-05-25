 Rails.application.routes.draw do
  # resources :expenses
  namespace :api do
    namespace :v1 do
      resources :users, only: [:read]
      resources :expenses, only: [:index]
    end
  end
end
