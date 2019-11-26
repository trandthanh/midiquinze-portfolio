class Project < ApplicationRecord
  after_destroy :purge_photos

  belongs_to :client
  has_many :works
  has_many :jobs, through: :works
  has_many :collaborations
  has_many :collaborators, through: :collaborations

  has_one_attached :cover
  has_one_attached :logo_black
  has_one_attached :logo_white
  has_one_attached :thumbnail
  has_one_attached :mobile_cover
  has_many_attached :photos
  has_many_attached :mobile_pictures

  private

  def purge_photos
    self.photos.each do |photo|
      photo.purge
    end
  end
end
