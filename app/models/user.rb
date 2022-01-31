class User < ApplicationRecord
    validates :first_name, :last_name, :birthday, :password_digest, presence: true
    validates :email, :session_token, presence: true, uniqueness: true
    validates :password, allow_nil: true, length: {minimum: 6}

    after_initialize :ensure_session_token
    attr_reader :password

    has_one_attached :avatar
    has_one_attached :cover
    
    has_many :aqs,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :Acquaintance

    has_many :notifications,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :Notification

    has_many :acquaintances,
    through: :aqs,
    source: :aq

    has_many :posts,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :Post

    has_one :profile_img,
    primary_key: :profile_img_id,
    foreign_key: :id,
    class_name: :Image

    def self.find_by_credentials(email, password)
        @user = User.find_by(email: email)
        if @user && @user.is_password?(password)
            return @user
        else
            return nil
        end
    end




    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def password=(password)
        self.password_digest = BCrypt::Password.create(password)
        @password = password;
    end

    def generate_session_token
        SecureRandom::urlsafe_base64
    end

    def reset_session_token!
        self.session_token = generate_session_token
        self.save!
        self.session_token
    end

    def ensure_session_token
        self.session_token ||= generate_session_token
    end



end