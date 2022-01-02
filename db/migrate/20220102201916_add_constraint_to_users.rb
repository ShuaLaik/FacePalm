class AddConstraintToUsers < ActiveRecord::Migration[6.1]
  def change
    remove_column :users, :email
    remove_column :users, :session_token
    add_column :users, :email, :string, {unique: true, null: false}
    add_column :users, :session_token, :string, {unique: true, null: false}
  end
end
