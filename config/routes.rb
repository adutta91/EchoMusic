Rails.application.routes.draw do

  root to: 'static_pages#root'



  namespace :api, defaults: { format: :json } do
    # session routes
    resource :session, only: [:new, :create, :destroy]

    # user routes
    resources :users, only: [:new, :create, :update, :index, :show]
    get '/users/:id/followed_songs', to: 'users#followed_songs'

    # song routes
    resources :songs

    # song_follow routes
    resources :song_follows, only: [:create, :destroy]
  end

end
