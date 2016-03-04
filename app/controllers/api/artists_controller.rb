class Api::ArtistsController < ApplicationController

  def create
    @artist = Artist.new(artist_params)
    if @artist.save
      render :show
    else
      render :errors, status: 422
    end
  end

  def show
    @artist = find_artist
    render :show
  end

  def index
    @artists = Artist.all
    render :index
  end

  def update
    @artist = find_artist
    if @artist.update(artist_params)
      render :show
    else
      render :errors, status: 422
    end
  end

  def songs
    @artist = find_artist
    render :show_songs
  end


  private

  def artist_params
    params.require(:artist).permit(:name, :description, :id, :image_url)
  end

  def find_artist
    Artist.find_by_id(params[:id])
  end

end
