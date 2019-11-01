class Project < ApplicationRecord
  belongs_to :client
  belongs_to :collaborator, optional: true
  has_many :works
  has_many :jobs, through: :works

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
