class ChangeAlbumTable < ActiveRecord::Migration
  def change

    remove_column :albums, :image_filename
    add_column :albums, :image_url, :string

  end
end
