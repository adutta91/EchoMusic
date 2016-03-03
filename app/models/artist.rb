# == Schema Information
#
# Table name: artists
#
#  id          :integer          not null, primary key
#  name        :string           not null
#  description :text
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  image_url   :string
#

class Artist < ActiveRecord::Base

  validates :name, presence: true

  has_many :songs
  has_many :albums

end
