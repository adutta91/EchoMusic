class ChangeArtistTable < ActiveRecord::Migration
  def change

    remove_column :artists, :image_filename
    add_column :artists, :image_url, :string

  end
end
