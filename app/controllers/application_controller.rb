class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  before_action :authenticate_user!, :set_session_color


  def set_session_color
    helpers.set_session_color
  end

  def set_color_variables
    if session[:color].nil?
      session[:color] = "black"
      @colors = "background-color-black color-white"
      @color = "black"
      @background_color = "background-color-black"
      @opposite_color = "white"
    elsif session[:color] == "white"
      session[:color] = "white"
      @colors = "background-color-white color-black"
      @color = "white"
      @background_color = "background-color-white"
      @opposite_color = "black"
    else
      session[:color] = "black"
      @colors = "background-color-black color-white"
      @color = "black"
      @background_color = "background-color-black"
      @opposite_color = "white"
    end
  end

end
