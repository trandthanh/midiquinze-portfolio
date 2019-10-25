class CreateProjects < ActiveRecord::Migration[5.2]
  def change
    create_table :projects do |t|
      t.string :title
      t.text :description
      t.string :time
      t.references :client, foreign_key: true
      t.references :collaborator, foreign_key: true
      t.references :job, foreign_key: true

      t.timestamps
    end
  end
end
