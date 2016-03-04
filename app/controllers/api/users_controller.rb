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

class Api::UsersController < ApplicationController
  DEFAULT_IMAGE_URL = "http://res.cloudinary.com/dzyfczxnr/image/upload/v1456856776/ProfileImage.png"
  def new
    @user = User.new
  end

  def create
    @user = User.create(user_params)
    @user.image_url = DEFAULT_IMAGE_URL

    if @user.save
      log_in(@user)
      render :show
    else
      render :errors, status: 422
    end
  end

  def show
    @user = find_user
  end

  def update
    @user = find_user
    if @user.update(user_params)
      render :show
    else
      render :errors, status: 422
    end
  end

  def followed_songs
    @user = find_user
    render :show_songs
  end

  def index
    @users = User.all
    render :index
  end

  def show
    @user = find_user
    render :show
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :id, :image_url, :description)
  end

  def find_user
    User.find_by_id(params[:id])
  end

end
