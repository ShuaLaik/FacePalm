class DeleteIpjoins < ActiveRecord::Migration[6.1]
  def change
    drop_table :ipjoins
    add_column :images, :post_id, :integer
  end
end
