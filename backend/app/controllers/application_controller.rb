class ApplicationController < ActionController::Base
  # before_action :configure_permitted_parameters, :set_csrf_header, if: :devise_controller?

  # protected

  # def configure_permitted_parameters
  #   devise_parameter_sanitizer.permit(
  #     :sign_up,
  #     keys: %i[type first_name last_name company_name]
  #   )
  # end

  # def set_csrf_header
  #   response.set_header('X-CSRF-Token', form_authenticity_token)
  # end
end
