# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string           not null
#  image_filename  :string
#  description     :text
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class UsersController < ApplicationController

  def new
    @user = User.new
  end

  def create
    @user = User.create(user_params)
    @user.save!
    log_in(@user)
    # redirect_to root_url
    # TODO: render show.json.jbuilder (remove sensitive info)
    render json: @user
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
