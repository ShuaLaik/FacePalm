class ChangeSomething < ActiveRecord::Migration[6.1]
  def change
    remove_column :ipjoins, :user_id
    add_column :ipjoins, :image_id, :integer
  end
end
