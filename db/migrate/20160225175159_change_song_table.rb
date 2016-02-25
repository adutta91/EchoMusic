class ChangeSongTable < ActiveRecord::Migration
  def change
    remove_column :songs, :artist_id
    add_column :songs, :user_id, :integer, null: false
    add_column :songs, :artist_name, :string
  end
end
