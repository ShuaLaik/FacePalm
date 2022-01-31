class Acquaintance < ApplicationRecord
    validates :user_id, :aq_id, presence: true

    belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User

    has_many :aq,
    primary_key: :aq_id,
    foreign_key: :id,
    class_name: :User
end