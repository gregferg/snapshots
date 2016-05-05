class Album < ActiveRecord::Base
  validates :user_id, :title, presence: true

  has_many :photos,  dependent: :destroy
  belongs_to :user

  def adjust_thumbnail_url
    if self.photos[0]
      self.thumbnail_url = self.photos[0].photo_url
    else
      self.thumbnail_url = nil
    end

    self.save
  end
end
