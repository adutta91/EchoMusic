# == Schema Information
#
# Table name: songs
#
#  id          :integer          not null, primary key
#  title       :string           not null
#  user_id     :integer          not null
#  album_id    :integer          not null
#  artist_id   :integer
#  artist_name :string
#  audio_url   :string
#
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Song < ActiveRecord::Base
  validates :title, :audio_url, :user_id, :album_id, presence: true

  belongs_to :user
  belongs_to :album
  belongs_to :artist

  has_many :song_follows

  has_many :following_users,
    through: :song_follows,
    source: :user

end
