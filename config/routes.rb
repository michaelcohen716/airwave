Rails.application.routes.draw do

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:new, :create, :show]
    resource :session, only: [:show, :create, :destroy]
  end

  root "static_pages#root"
end
