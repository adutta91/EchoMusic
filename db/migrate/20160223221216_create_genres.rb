class CreateGenres < ActiveRecord::Migration
  def change
    create_table :genres do |t|
      t.string :type, null: false

      t.timestamps null: false
    end
  end
end
