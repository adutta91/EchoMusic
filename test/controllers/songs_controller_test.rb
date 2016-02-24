# == Schema Information
#
# Table name: songs
#
#  id          :integer          not null, primary key
#  title       :string           not null
#  description :text
#  filename    :string           not null
#  artist_id   :integer          not null
#  album_id    :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

require 'test_helper'

class SongsControllerTest < ActionController::TestCase
  # test "the truth" do
  #   assert true
  # end
end
