Rails.application.routes.draw do

  root to: 'static_pages#root'



  namespace :api, defaults: { format: :json } do
    resource :session, only: [:new, :create, :destroy]
    resources :users, only: [:new, :create]

    resources :songs
  end

end
