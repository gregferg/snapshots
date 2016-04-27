class CreateAlbums < ActiveRecord::Migration
  def change
    create_table :albums do |t|
      t.integer :photographer_id, null: false
      t.string :title, null: false
      t.string :description


      t.timestamps null: false
    end

    add_index :albums, :photographer_id
    add_index :albums, :title
  end
end
