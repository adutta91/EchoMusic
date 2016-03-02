Rails.application.routes.draw do

  root to: 'static_pages#root'



  namespace :api, defaults: { format: :json } do
    # session routes
    resource :session, only: [:new, :create, :destroy]

    # user routes
    resources :users, only: [:new, :create, :update]
    get '/users/:id/followed_songs', to: 'users#followed_songs' 

    # song routes
    resources :songs
  end

end
