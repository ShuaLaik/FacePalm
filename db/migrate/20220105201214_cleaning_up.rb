class CleaningUp < ActiveRecord::Migration[6.1]
  def change
    remove_column :users, :cover_photo_id
    add_column :users, :cover_img_id, :integer
    add_column :users, :gender, :string
  end
end
