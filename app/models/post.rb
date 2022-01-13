class Post < ApplicationRecord
    validates :body, :user_id, presence: true

    has_one_attached :photo

    belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User

    has_one :author,
    primary_key: :id,
    foreign_key: :id,
    class_name: :User
    
    has_many :comments,
    foreign_key: :post_id,
    class_name: :Comment

    has_many :images,
    foreign_key: :post_id,
    class_name: :Image


end