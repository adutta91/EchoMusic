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

require 'test_helper'

class SongFollowTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
