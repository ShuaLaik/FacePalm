class Post < ApplicationRecord
    validates :body, :user_id, presence: true

    belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User

    has_one :author,
    primary_key: :id,
    foreign_key: :id,
    class_name: :User
    

end