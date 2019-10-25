class ProjectsController < ApplicationController

  def index
    @projects = Project.all
  end
# params.require(:product).permit(:title, :description, images: [])
end
