class SongFollow < ActiveRecord::Base

  validates :user_id, :song_id, presence: true

  belongs_to :user
  belongs_to :song

  def self.find_specific_follow(user_id, song_id)
    SongFollow.find_by(user_id: user_id, song_id: song_id)
  end

end
