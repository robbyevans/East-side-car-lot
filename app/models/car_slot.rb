class CarSlot < ApplicationRecord

  validates :registration_number, presence: true
  belongs_to :admin
  belongs_to :user
end
