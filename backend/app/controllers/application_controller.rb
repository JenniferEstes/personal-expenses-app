class ApplicationController < ActionController::API
  def logged_in?
    !!current_user
  end
end
