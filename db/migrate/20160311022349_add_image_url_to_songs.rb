class AddImageUrlToSongs < ActiveRecord::Migration
  def change

    add_column :songs, :image_url, :string

  end
end
