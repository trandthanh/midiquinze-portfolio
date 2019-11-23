class CreateCollaborations < ActiveRecord::Migration[5.2]
  def change
    create_table :collaborations do |t|
      t.references :project, foreign_key: true
      t.references :collaborator, foreign_key: true

      t.timestamps
    end
  end
end
