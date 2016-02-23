class UsersController < ApplicationController

  def new
    @user = User.new
    render json: @user
  end

  def create
    @user = User.new(user_params)
    @user.save
    render json: @user
  end

  def show
    @user = find_user
    render json: @user
  end


  private

  def user_params
    params.require(:user).permit(:username, :password)
  end

  def find_user
    User.find_by_id(params[:id])
  end

end
