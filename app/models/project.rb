class Project < ApplicationRecord
  belongs_to :client
  belongs_to :collaborator, optional: true
  has_many :works
  has_many :jobs, through: :works

  has_one_attached :cover
  has_many_attached :photos

  validates :cover, presence: true
  validates :photos, presence: true
end
