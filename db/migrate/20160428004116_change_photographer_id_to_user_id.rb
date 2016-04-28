class ChangePhotographerIdToUserId < ActiveRecord::Migration
  def change
    rename_column :albums, :photographer_id, :user_id
  end
end
