class Api::SessionsController < ApplicationController
  def new
    @user = User.new
  end

  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )
    if @user
      log_in(@user)
      render :show
    else
      render json: "Invalid credentials", status: 422
    end
  end

  def destroy
    @user = User.find_by_id(params[:id])

    if @user
      log_out(@user)
      render :show
    else
      render json: "User not found", status: 422
    end
  end
end
