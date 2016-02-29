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
    @song = Song.create(song_params)
    if @song.save!
      render json: @song
    else
      render json: @song.errors.full_messages, status: 422
    end
  end

  def new
  end

  def show
    @song = find_song
    if @song
      render json: @song
    else
      render json: @song.errors.full_messages, status: 422
    end
  end

  def index
    if (params["submitted"] == "false")
      @songs = Song.where.not("user_id = ?", current_user.id)
    else
      @songs = Song.where("user_id = ?", current_user.id)
    end
  end

  def update
  end

  def destroy
    @song = find_song
    if @song
      @song.destroy
    end
  end

  private

  def song_params
    params.require(:song).permit(
      :title, :audio_url, :user_id,
      :album_id, :artist_name, :public_id)
  end

  def find_song
    Song.find_by_id(params[:id])
  end

end
