Rails.application.routes.draw do
  resources :users
  resources :cards
  resources :boards
  resources :lists 
end
