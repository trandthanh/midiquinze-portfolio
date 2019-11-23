class AddRoleToCollaborators < ActiveRecord::Migration[5.2]
  def change
    add_column :collaborators, :role, :string
  end
end
