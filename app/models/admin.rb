class Admin < ApplicationRecord
    has_many :car_slots
    has_many :users, through: :car_slots
end
