class SessionsController < ApplicationController

  def new
    if logged_in?
    end
  end

  def destroy
    session.clear
  end

end