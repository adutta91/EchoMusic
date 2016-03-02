class Api::SongFollowsController < ApplicationController

  def create
    @song_follow = SongFollow.new(song_follow_params)
    @song_follow.save!
    render :show
  end

  def destroy
    debugger;
  end

  private

  def song_follow_params
    params.require(:song_follow).permit(:user_id, :song_id)
  end

end
