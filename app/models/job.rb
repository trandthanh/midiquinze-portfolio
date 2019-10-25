class Job < ApplicationRecord
  has_many :works
  has_many :projects, through: :works
end
