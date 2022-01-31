class Notification < ApplicationRecord
    validates :user_id, :notifier_id, :notif_type, presence: true

    belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User

    has_one :notifier,
    primary_key: :id,
    foreign_key: :notifier_id,
    class_name: :User
end