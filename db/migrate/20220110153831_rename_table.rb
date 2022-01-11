class RenameTable < ActiveRecord::Migration[6.1]
  def change
    rename_table :image_post_joins, :ipjoins
  end
end
