Rails.application.routes.draw do
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  devise_for :users, only: :sessions
  resources :guests
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :index
  root 'index#index'
end
