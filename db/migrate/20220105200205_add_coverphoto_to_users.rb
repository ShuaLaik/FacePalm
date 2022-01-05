class AddCoverphotoToUsers < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :cover_photo_id, :integer
  end
end
