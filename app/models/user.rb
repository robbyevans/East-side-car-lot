class User < ApplicationRecord
    has_one :car_slot
    has_one :admin, through: :car_slot
end
