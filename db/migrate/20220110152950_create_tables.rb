class CreateTables < ActiveRecord::Migration[6.1]
  def change
    create_table :images do |t|
      t.string "link", null: false, unique: true
      t.timestamps
    end
    create_table :image_post_joins do |t|
      t.integer :post_id, null: false
      t.integer :user_id, null: false
      t.string "link", null: false, unique: true
      t.timestamps
    end
    create_table :comments do |t|
      t.text "body", null: false
      t.integer :post_id, null: false
      t.integer :user_id, null: false
      t.integer :parent_comment
      t.timestamps
    end
    add_index :comments, :post_id
    add_index :comments, :user_id
  end
end
