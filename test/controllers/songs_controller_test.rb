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
#

require 'test_helper'

class SongsControllerTest < ActionController::TestCase
  # test "the truth" do
  #   assert true
  # end
end
