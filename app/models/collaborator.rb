class Collaborator < ApplicationRecord
  before_create :copyright

  has_many :collaborations
  has_many :projects, through: :collaborations

  def copyright
    if self.role == "Photographer"
      self.name = "©#{name}"
    end
  end

end
