class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  include ApplicationHelper

  def redirect_unless_logged_in
    redirect_to new_session_url unless current_user
  end

  def log_in(user)
    session[:session_token] = user.reset_session_token!
  end

  def log_out(user)
    user.reset_session_token!
    @current_user = nil
    session[:session_token] = nil
  end

  def current_user
    @current_user ||= User.find_by_session_token(session[:session_token])
  end

end
