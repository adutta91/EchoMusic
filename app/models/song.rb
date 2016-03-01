# == Schema Information
#
# Table name: songs
#
#  id          :integer          not null, primary key
#  title       :string           not null
#  album_id    :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  user_id     :integer          not null
#  artist_name :string
#  audio_url   :string
#  public_id   :string
#

class Song < ActiveRecord::Base
  validates :title, :audio_url, :user_id, :album_id, presence: true

  belongs_to :user
  belongs_to :album

end
