class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: [:home, :about, :contact, :change_color]
  before_action :set_color, only: [:home, :about, :contact, :change_color]

  def home
    loading_session

    @projects = Project.all
  end

  def about

  end

  def contact

  end

  def change_color
    if session[:color] == "black"
      session[:color] = "white"
      @colors = "background-color-black color-white"
      redirect_to request.referrer
    else
      session[:color] = "black"
      @colors = "background-color-white color-black"
      redirect_to request.referrer
    end
  end

  private

  def set_color
    if session[:color].nil?
      session[:color] = "black"
      @colors = "background-color-black color-white"
    elsif session[:color] == "white"
      session[:color] = "white"
      @colors = "background-color-white color-black"
    else
      @colors = "background-color-black color-white"
    end
  end

  def loading_session
    if session.key?(:visited_before)
      session[:clear_time] = Time.parse(session[:time]) + 5 * 60
      reset_session if session[:clear_time] <= Time.now
    else
      session[:visited_before] = true
      session[:time] = Time.now
    end
  end
end
