class CreateAlbums < ActiveRecord::Migration
  def change
    create_table :albums do |t|
      t.string :title, null: false
      t.text :description
      t.string :image_filename
      t.integer :artist_id, null: false
      t.integer :genre_id, null: false

      t.timestamps null: false
    end

    add_index :albums, :artist_id
    add_index :albums, :genre_id

  end
end
