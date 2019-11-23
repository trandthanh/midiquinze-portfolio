Rails.application.routes.draw do
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  devise_for :users

  get 'pages/about', as: :about

  post 'pages/change_color', as: :change_color

  resources :projects, only: [:index]

  root to: 'pages#home'
end
