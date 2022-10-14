
class User < ApplicationRecord
    has_secure_password
    
    has_one :car_slot
    has_one :admin, through: :car_slot

    
    validates :name, presence: true
    validates :email, uniqueness: true
    #validates :password_digest, length: { in: 4..15 }
    #validates :password_confirmation, presence: true
end
