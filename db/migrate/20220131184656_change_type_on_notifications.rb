class ChangeTypeOnNotifications < ActiveRecord::Migration[6.1]
  def change
    remove_column :notifications, :type
    add_column :notifications, :notif_type, :string
  end
end
