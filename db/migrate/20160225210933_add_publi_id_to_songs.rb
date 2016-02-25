class AddPubliIdToSongs < ActiveRecord::Migration
  def change

    add_column :songs, :public_id, :string

  end
end
