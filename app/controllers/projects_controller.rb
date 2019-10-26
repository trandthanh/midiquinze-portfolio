class ProjectsController < ApplicationController
  skip_before_action :authenticate_user!, only: [:index]

  def index
    @projects = Project.all
  end
# params.require(:product).permit(:title, :description, images: [])
end
