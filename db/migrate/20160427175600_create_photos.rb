class CreatePhotos < ActiveRecord::Migration
  def change
    create_table :photos do |t|
      t.string :photo_url, null: false
      t.integer :album_id, null: false
      t.string :title
      t.string :description

      t.timestamps null: false
    end

    add_index :photos, :album_id
  end
end
