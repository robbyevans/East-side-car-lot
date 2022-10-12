class CarSlotSerializer < ActiveModel::Serializer
  attributes :id, :admin_id, :user_id
end
