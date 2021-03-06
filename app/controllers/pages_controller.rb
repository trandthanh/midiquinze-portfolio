class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: [:home, :about, :contact, :change_color, :test]
  before_action :set_color_variables, only: [:home, :about, :contact, :change_color, :test]

  def home

    unless params[:from] == "thumbs"
      session.delete(:visited_before)
    end

    @projects = Project.order("title ASC").select { |project| project.cover.attached? }
    @mobile_projects = Project.select { |project| project.mobile_cover.attached? }
  end


  def about
    @members = Member.all
    @clients = Client.all.order('name ASC')
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

  def test
    @projects = Project.all

  end

  private


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
