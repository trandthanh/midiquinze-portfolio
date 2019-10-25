class RemoveJobReferenceFromProjects < ActiveRecord::Migration[5.2]
  def change
    remove_reference :projects, :job, index: true, foreign_key: true
  end
end
