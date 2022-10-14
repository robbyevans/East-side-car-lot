Rails.application.routes.draw do

  get '/register', to: 'users#new'
  post "/login", to: "sessions#create"
  get "/me", to: "users#show"
  delete "/logout", to: "sessions#destroy"
  post "/signin", to: "sessions#create"

  # update "/user", to: "users#update"
  # post "/loginn", to: "users#login"



  resources :car_slots
  # resources :users, only: [:show, :index, :create, :]
  resources :admins, only: [:show, :update, :delete, :create]

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  
end
