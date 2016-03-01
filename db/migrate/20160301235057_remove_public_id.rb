class RemovePublicId < ActiveRecord::Migration
  def change
    remove_column :songs, :public_id
  end
end
