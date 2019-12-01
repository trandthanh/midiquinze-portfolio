class AddLinkToMembers < ActiveRecord::Migration[5.2]
  def change
    add_column :members, :link, :string
  end
end
