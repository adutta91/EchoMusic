class SongFollowsController < ApplicationController

  def create

  end

  def destroy

  end

  private

  def song_follow_params
    params.require(:song_follow).permit(:user_id, :song_id)
  end

end
