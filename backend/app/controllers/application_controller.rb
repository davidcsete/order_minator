class ApplicationController < ActionController::Base
  before_action :configure_permitted_parameters, if: :devise_controller?

  protected

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up) do |user|
      user.permit(:type, :first_name, :last_name, :company_name,:email, :password)
    end
    devise_parameter_sanitizer.permit(:edit) do |user|
      user.permit(:type, :first_name, :last_name, :company_name,:email, :password)
    end
  end
end
