class AdminsController < ApplicationController
    skip_before_action :authorized,only: :create
    def index
        render json: Admin.all, status: :ok
    end
    def create
        # byebug
        user = User.new(user_params)
        if user.valid? && params[:password]
          user.save!
          session[:user_id] = user.id
          render json: user, status: :created
        else
          render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
  
        
            render json: {error: {login: "invalid name or password"}},status: :unauthorized
        end
    end        
end
