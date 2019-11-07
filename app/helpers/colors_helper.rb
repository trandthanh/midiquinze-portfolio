module ColorsHelper

  def set_session_color
    if current_page?(root_path) && session[:color].nil?
      session[:color] = "black"
    elsif session[:color] == "black"
      session[:color] = "black"
    else
      session[:color] = "white"
    end
  end
end
