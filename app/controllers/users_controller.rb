class UsersController < ApplicationController
    # before_action :authorize, only: [:auto_login]

    def index
        users = User.all
        render json: users
    end



    def create
        # byebug
        user = User.create(user_params)
        if user.valid? && params[:password] == params[:password_confirmation]
          user.save!
          session[:user_id] = user.id
          render json: user, status: :created
        else
          render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def show
        user = User.find_by(id: session[:user_id])
        if user
            render json: user, status: :created
        else
            render json: { error: "Not authorized" }, status: :unauthorized
        end
    end

    # def login
        # byebug
        # user = User.find_by(email: user_params[:email])

        # if user&.authenticate(user_params[:password])
        #     session[:user_id] = user.id
        #     render json: user, status: :login

        # else 
        #     render json: { error: 'Invalid name/Password or User Type. Please try again.' }
        # end
    # end




    private

    def user_params
        params.permit(:name, :email, :password, :password_confirmation)
    end

end



