class Project < ApplicationRecord
  belongs_to :client
  belongs_to :collaborator
  belongs_to :job
end
