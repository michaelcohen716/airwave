Rails.application.routes.draw do

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:new, :create, :show]
    resources :episodes, only: [:show, :index]
    resources :series, only: [:show, :index]
    resources :comments, only: [:new, :create, :show, :destroy]
    resources :watchlist_adds
    resource :session, only: [:show, :create, :destroy]
  end

  root "static_pages#root"
end
