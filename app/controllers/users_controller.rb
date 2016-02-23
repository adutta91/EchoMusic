class UsersController < ApplicationController

  def new
    @user = User.new
  end

  def create
    @user = User.create(user_params)
    @user.save!
    log_out
    log_in(@user)
    debugger;
    redirect_to root_url
  end

  def show
    @user = find_user
  end


  private

  def user_params
    params.require(:user).permit(:username, :password)
  end

  def find_user
    User.find_by_id(params[:id])
  end

end
