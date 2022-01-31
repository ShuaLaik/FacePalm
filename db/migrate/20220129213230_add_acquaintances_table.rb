class AddAcquaintancesTable < ActiveRecord::Migration[6.1]
  def change
    create_table :acquaintances do |t|
      t.integer "user_id", null: false
      t.integer "aq_id", null: false
    end
    add_index :acquaintances, :user_id
  end
end
