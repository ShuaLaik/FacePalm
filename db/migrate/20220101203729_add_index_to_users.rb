class AddIndexToUsers < ActiveRecord::Migration[6.1]
  def change
   add_index :users, :email
   add_index :users, :first_name
   add_index :users, :last_name
   add_index :users, :session_token
  end
end
