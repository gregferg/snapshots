class Photo < ActiveRecord::Base
  validates :album_id, :photo_url, presence: true

  belongs_to :album
  has_one :users,
    source: :user,
    through: :album
end
