Rails.application.routes.draw do
  resources :recipes
  resources :meals
  resources :restaurants
  devise_for :owners
  resources :condiments
  namespace :api do
    resources :ingredients
  end
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  devise_for :users,
             controllers: {
                 sessions: 'users/sessions',
                 registrations: 'users/registrations'
             }
  # Defines the root path route ("/")
  # root "articles#index"
end
