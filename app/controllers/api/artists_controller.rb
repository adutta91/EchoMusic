class Api::ArtistsController < ApplicationController

  def create
    @artist = Artist.new(artist_params)
    @artist.save!
    render :show
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
    @artist.update(artist_params)
    render :show
  end

  private

  def artist_params
    params.require(:artist).permit(:name, :description, :id, :image_url)
  end

  def find_artist
    Artist.find_by_id(params[:id])
  end

end
