Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root to: "static_pages#root"

  namespace :api, defaults: {format: :json} do 
    resources :users, only: [:create, :show, :update]
    resources :posts, only: [:create, :destroy, :update, :show, :index]
    resource :session, only: [:create, :destroy]
    resources :comments, only: [:create, :update, :destroy, :show, :index]
    resources :acquaintances, only: [:create, :destroy, :index]
    resources :notifications, only: [:create, :show, :destroy, :index]
  end
end
