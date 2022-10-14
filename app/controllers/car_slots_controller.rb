class CarSlotsController < ApplicationController
    before_action :authorize

    def index
      user = User.find_by(id: session[:user_id])
      car_slot = car_slot.all
      render json: recipes, status: :created
  end

  
  def create
      user = User.find_by(id: session[:user_id])
      car_slot = Car_slot.create(car_slot_params.merge(user_id: user.id));
      

      if recipe.valid?
          render json: recipe, status: :created
      else
          render json: {errors: car_slot.errors.full_messages} , status: :unprocessable_entity
      end
  end

  private
  def authorize
      return render json: {errors: ["Not authorized"]}, status: :unauthorized unless session.include? :user_id
  end

  def car_slot_params
      params.permit(:title, :instructions, :minutes_to_complete)
  end
end
