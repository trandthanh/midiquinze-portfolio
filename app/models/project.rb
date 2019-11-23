class Project < ApplicationRecord
  belongs_to :client
  has_many :works
  has_many :jobs, through: :works
  has_many :collaborations
  has_many :collaborators, through: :collaborations

  has_one_attached :cover
  has_one_attached :logo_black
  has_one_attached :logo_white
  has_one_attached :thumbnail
  has_many_attached :photos

  validates :cover, presence: true
  validates :logo_black, presence: true
  validates :logo_white, presence: true
  validates :thumbnail, presence: true
  validates :photos, presence: true
end
