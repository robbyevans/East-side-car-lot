class AdminSerializer < ActiveModel::Serializer
  attributes :id :username, :password_digest, :email, :car_number
end
