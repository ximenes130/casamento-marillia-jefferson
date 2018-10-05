Rails.application.routes.draw do
  devise_for :users
  resources :guests
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :index
  root 'index#index'
end
