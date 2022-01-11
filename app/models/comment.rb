class Comment < ApplicationRecord
    validates :body, :user_id, :post_id, presence: true
    
    belongs_to :post,
    foreign_key: :post_id,
    class_name: :Post

    has_many :child_comments,
    primary_key: :id,
    foreign_key: :parent_comment,
    class_name: :Comment

    has_one :author,
    primary_key: :user_id,
    foreign_key: :id,
    class_name: :User


end