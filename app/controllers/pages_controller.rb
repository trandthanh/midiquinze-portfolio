class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: [:home, :about, :contact]

  def home
    loading_session
  end

  def about

  end

  def contact

  end

  private

  def loading_session
    if session.key?(:visited_before)
      session[:clear_time] = Time.parse(session[:time]) + 5 * 60
      reset_session if session[:clear_time] == Time.now
    else
      session[:visited_before] = true
      session[:time] = Time.now
    end
  end
end
