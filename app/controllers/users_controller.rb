class UsersController < ApplicationController

  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)

    if @user.save
      log_in(@user)
      redirect_to user_url(@user)
    else
      render :new
    end
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
