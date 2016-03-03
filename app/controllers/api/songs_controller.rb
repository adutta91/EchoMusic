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
    @song = Song.new(song_params)

    if (song_params['artist_id'] == '0' && song_params['artist_name'] != "")
      artist = Artist.create(name: song_params['artist_name'])
      @song.artist_id = artist.id
    end

    if @song.save!
      render json: @song
    else
      render :errors, errors: @song.errors.full_messages
    end
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
    user = current_user
    if (params["explore"] == "true")
      all_songs = Song.where.not("user_id = ?", user.id)
      @songs = all_songs.map do |song|
        following_user_ids = song.following_users.map do |user|
          user.id
        end
        song if !following_user_ids.include?(user.id)
      end
      @songs = @songs.compact
    else
      @songs = Song.where("user_id = ?", user.id)
    end
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
      :album_id, :artist_name, :artist_id)
  end

  def find_song
    Song.find_by_id(params[:id])
  end

end
