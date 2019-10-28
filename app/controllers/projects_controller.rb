class ProjectsController < ApplicationController
  skip_before_action :authenticate_user!, only: [:index]
  before_action :set_color, only: [:index]

  def index
    @projects = Project.all
  end
# params.require(:product).permit(:title, :description, images: [])

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
    elsif session[:color] == "black"
      @colors = "background-color-black color-white"
    else
      @colors = "background-color-white color-black"
    end
  end
end
