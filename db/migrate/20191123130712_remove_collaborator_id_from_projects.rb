class RemoveCollaboratorIdFromProjects < ActiveRecord::Migration[5.2]
  def change
    remove_reference :projects, :collaborator, index: true, foreign_key: true
  end
end
