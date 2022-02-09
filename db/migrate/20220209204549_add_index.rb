class AddIndex < ActiveRecord::Migration[6.1]
  def change
    add_index :notifications, :user_id
    add_index :notifications, :notifier_id
    add_index :acquaintances, :aq_id
  end
end
