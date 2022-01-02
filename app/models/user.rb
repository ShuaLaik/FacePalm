class User < ApplicationRecord
    validates :first_name, :last_name, :birthday, :profile_img_id, :password_digest, presence: true
    validates :email, :session_token, presence: true, uniqueness: true
    validates :password, allow_nil: true, length: {minimum: 6}

    after_initialize :ensure_session_token
    attr_reader :password

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