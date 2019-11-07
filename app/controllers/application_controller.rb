class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  before_action :authenticate_user!, :set_session_color


  def set_session_color
    helpers.set_session_color
  end

end
