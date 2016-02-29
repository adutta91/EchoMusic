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
      flash.now[:errors] = ["Invalid credentials"]
      redirect_to root_url
    end
  end

  def destroy
    @user = User.find_by_id(params[:id])
    log_out(@user)
    render :new
  end
end
