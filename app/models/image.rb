class Image < ApplicationRecord

    belongs_to :post,
    foreign_key: :post_id,
    class_name: :Post

end