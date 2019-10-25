class Project < ApplicationRecord
  belongs_to :client
  belongs_to :collaborator
  belongs_to :job

  has_one_attached :cover
  has_many_attached :photos
end
