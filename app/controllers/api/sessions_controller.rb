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
    else
      # TODO flash[:errors]
    end
    # render json: @user
    render :show
  end

  def destroy
    @user = User.find_by_id(params[:id])
    log_out
  end
end
