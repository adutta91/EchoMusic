# == Schema Information
#
# Table name: song_follows
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  song_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class SongFollow < ActiveRecord::Base

  validates :user_id, :song_id, presence: true

  belongs_to :user
  belongs_to :song

  def self.find_specific_follow(user_id, song_id)
    SongFollow.find_by(user_id: user_id, song_id: song_id)
  end

end
