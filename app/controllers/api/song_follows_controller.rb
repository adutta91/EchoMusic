class Api::SongFollowsController < ApplicationController

  def create
    user_id = Integer(song_follow_params["user_id"])
    song_id = Integer(song_follow_params["song_id"])

    @song_follow = SongFollow.find_specific_follow(user_id, song_id)

    unless @song_follow
      @song_follow = SongFollow.new(song_follow_params)
    end
    @song_follow.save!
    render :show
  end

  def destroy
    user_id = Integer(song_follow_params["user_id"])
    song_id = Integer(song_follow_params["song_id"])

    @song_follow = SongFollow.find_specific_follow(user_id, song_id)
    @song_follow.delete
    render :show
  end

  private

  def song_follow_params
    params.require(:song_follow).permit(:user_id, :song_id)
  end

end
