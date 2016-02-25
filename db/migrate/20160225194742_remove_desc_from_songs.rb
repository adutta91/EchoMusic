class RemoveDescFromSongs < ActiveRecord::Migration
  def change

    remove_column :songs, :description

  end
end
