class AlbumThumbnailUrl < ActiveRecord::Migration
  def change
    add_column :albums, :thumbnail_url, :string
  end
end
