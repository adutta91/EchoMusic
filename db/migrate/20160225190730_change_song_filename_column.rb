class ChangeSongFilenameColumn < ActiveRecord::Migration
  def change
    remove_column :songs, :filename
    add_column :songs, :audio_url, :string
  end
end
