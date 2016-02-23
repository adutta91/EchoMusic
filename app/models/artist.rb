# == Schema Information
#
# Table name: artists
#
#  id             :integer          not null, primary key
#  name           :string           not null
#  image_filename :string           not null
#  description    :text
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#

class Artist < ActiveRecord::Base
end
