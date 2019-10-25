Rails.application.routes.draw do
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  devise_for :users

  get 'pages/contact'
  get 'pages/about'

  resources :projects, only: [:index]

  root to: 'pages#home'
end
