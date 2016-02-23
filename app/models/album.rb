# == Schema Information
#
# Table name: albums
#
#  id             :integer          not null, primary key
#  title          :string           not null
#  description    :text
#  image_filename :string
#  artist_id      :integer          not null
#  genre_id       :integer          not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#

class Album < ActiveRecord::Base


end
