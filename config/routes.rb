Rails.application.routes.draw do
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  devise_for :users

  get 'pages/contact',  as: :contact
  get 'pages/about', as: :about

  resources :projects, only: [:index]

  root to: 'pages#home'
end
