class CreateSongFollows < ActiveRecord::Migration
  def change
    create_table :song_follows do |t|
      t.integer :user_id, null: false
      t.integer :song_id, null: false

      t.timestamps null: false
    end

    add_index :song_follows, :user_id
    add_index :song_follows, :song_id

  end
end
