# == Schema Information
#
# Table name: genres
#
#  id         :integer          not null, primary key
#  type       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Genre < ActiveRecord::Base
end
