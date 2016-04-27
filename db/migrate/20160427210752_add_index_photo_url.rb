class AddIndexPhotoUrl < ActiveRecord::Migration
  def change
    add_index :photos, :photo_url
  end
end
