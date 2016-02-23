class CreateArtists < ActiveRecord::Migration
  def change
    create_table :artists do |t|
      t.string :name, null: false
      t.string :image_filename, null: false
      t.text :description

      t.timestamps null: false
    end

    add_index :artists, :name

  end
end
