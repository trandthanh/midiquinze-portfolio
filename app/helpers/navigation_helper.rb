module NavigationHelper
  def if_current_page_navbar
    if current_page?(projects_path)
      render partial: "shared/navbar/desktop/desktop_navbar_projects", locals: { opposite_color: @opposite_color }
    elsif current_page?(about_path) && params[:from].nil?
      render partial: "shared/navbar/desktop/desktop_navbar_about", locals: { opposite_color: @opposite_color }
    elsif current_page?(about_path) && params[:from] == "contact"
      render partial: "shared/navbar/desktop/desktop_navbar_contact", locals: { opposite_color: @opposite_color }
    else
      render partial: "shared/navbar/desktop/desktop_navbar_root", locals: { opposite_color: @opposite_color }
    end
  end
end
