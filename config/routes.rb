Rails.application.routes.draw do
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  devise_for :users

  get 'pages/contact',  as: :contact
  get 'pages/about', as: :about

  get 'pages/test', as: :test

  post 'pages/change_color', as: :change_color

  resources :projects, only: [:index]

  root to: 'pages#home'
end
