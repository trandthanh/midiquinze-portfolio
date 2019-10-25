class CreateWorks < ActiveRecord::Migration[5.2]
  def change
    create_table :works do |t|
      t.references :project, foreign_key: true
      t.references :job, foreign_key: true

      t.timestamps
    end
  end
end
