class ChangeUserTable < ActiveRecord::Migration
  def change

    remove_column :users, :image_filename
    add_column :users, :image_url, :string

  end
end
