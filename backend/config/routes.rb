 Rails.application.routes.draw do
  # resources :expenses
  namespace :api do
    namespace :v1 do
      resources :users, only: [:index]
    end
  end
end
