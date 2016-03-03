# == Schema Information
#
# Table name: albums
#
#  id          :integer          not null, primary key
#  title       :string           not null
#  description :text
#  artist_id   :integer          not null
#  genre_id    :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  image_url   :string
#

class Album < ActiveRecord::Base

  validates :title, :artist_id, presence: true

  belongs_to :artist
  has_many :songs

end
