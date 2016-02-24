# == Schema Information
#
# Table name: songs
#
#  id          :integer          not null, primary key
#  title       :string           not null
#  description :text
#  filename    :string           not null
#  artist_id   :integer          not null
#  album_id    :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Api::SongsController < ApplicationController
  def create
  end

  def new
  end

  def show
  end

  def index
  end

  def update
  end

  def destroy
  end

  private

  def song_params
    params.require(:song).permit(
      :title, :description, :filename, :artist_id, :album_id)
  end

  def find_song
    Song.find_by_id(params[:id])
  end

end
