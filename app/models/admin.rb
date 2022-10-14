class Admin < ApplicationRecord
    has_secure_password

    has_many :car_slots
    has_many :users, through: :car_slots


 validates :name, presence: true
 validates :email, uniqueness: true
 validates :password_digest, length: { in: 6..20 }
 validates :password_confirmation, presence: true

end
