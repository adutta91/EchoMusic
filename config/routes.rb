Rails.application.routes.draw do

  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    # session routes
    resource :session, only: [:new, :create, :destroy]

    # user routes
    resources :users, only: [:create, :update, :index, :show]
    get '/users/:id/followed_songs', to: 'users#followed_songs'

    # song routes
    resources :songs, only: [:create, :show, :index, :destroy]

    # song_follow routes
    resources :song_follows, only: [:create]
    patch '/song_follows', to:'song_follows#destroy'

    # artist routes
    resources :artists, only: [:create, :update, :index, :show]
    get 'artists/:id/songs', to: 'artists#songs'

  end

end
