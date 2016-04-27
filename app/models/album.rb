class Album < ActiveRecord::Base
  validates :photographer_id, :title, presence: true

  has_many :photos
  belongs_to :user
end
