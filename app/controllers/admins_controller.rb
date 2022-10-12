class AdminsController < ApplicationController
    skip_before_action :authorized,only: :create
    def index
        render json: Admin.all, status: :ok
    end
    def create
        admin = Admin.find_by(name: params[:name])
        if admin&.authenticate(params[:password])
            session[:admin_id] = admin.id
        render json: admin, status: :created
        else
            render json: {error: {login: "invalid username or password"}},status: :unauthorized
        end
    end
    
        
end
