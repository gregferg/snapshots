class Album < ActiveRecord::Base
  validates :user_id, :title, presence: true

  has_many :photos
  belongs_to :user
end
