module ApplicationHelper
  def auth_token
    token = <<-HTML
      <input type='hidden'
             name='authenticity_token'
             value='#{form_authenticity_token}'>
    HTML
    token.html_safe
  end

  def logged_in?
    !!current_user
  end

  def current_user
    @current_user ||= User.find_by_session_token(session[:session_token])
  end

end
