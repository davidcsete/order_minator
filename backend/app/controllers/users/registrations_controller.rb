class Users::RegistrationsController < Devise::RegistrationsController
  skip_before_action :verify_authenticity_token, raise: false

  respond_to :json

  private

  def respond_with(resourse, _opts = {})
    register_success && return if resource.persisted?

    register_failed
  end

  def register_success
    render json: {
             message: "Signed up sucessfully.",
             user: current_user
           },
           status: :ok
  end

  def register_failed
    render json: {
             message: "Something went wrong."
           },
           status: :unprocessable_entity
  end
end
