Decidable::Application.routes.draw do
  devise_for :users

  root :to => "home#index"
  resources :establishments
end
