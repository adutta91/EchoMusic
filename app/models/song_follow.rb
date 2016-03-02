class SongFollow < ActiveRecord::Base

  validates :user_id, :song_id, presence: true

  belongs_to :user
  belongs_to :song

  def self.find_specific_follow(user_id, song_id)
    user = User.find_by_id(user_id)
    song_follows = user.followed_songs

    song_follows.each do |song_follow|
      return song_follow if song_follow.id == song_id
    end
    nil
  end

end
