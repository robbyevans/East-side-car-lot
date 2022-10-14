class SessionsController < ApplicationController
    def index
        session[:session_hello] ||= "World"
        cookies[:cookies_hello] ||= "World"
        render json: { session: session, cookies: cookies.to_hash }
      end

      def create
        user = User.find_by(name: params[:name]);
        if user&.authenticate(params[:password])
            session[:user_id] = user.id
            render json: user, status: :created
        else
            render json: { errors: ["Invalid name or password"] }, status: :unauthorized
        end
      end

      
      def destroy
        user = User.find_by(id: session[:user_id])
        if user
           session.delete :user_id
        head :no_content
        else
           render json: {errors: ["Not authorized"]}, status: :unauthorized
        end
    end
end