class AddAvatartoUsers < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :avatar, :string
    add_column :users, :cover, :string
    remove_column :users, :profile_img_id
    remove_column :users, :cover_img_id
  end
end
