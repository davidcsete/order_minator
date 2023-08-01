class MembersController < ApplicationController
  before_action :authenticate_user!

  def show
    # byebug
    user = get_user_from_token
    render json: { message: "If you see this, you're in!", user: user }
  end

  def verify_id
    user = get_user_from_token
    render json: user.id == params[:id].to_i
  end

  private

  def get_user_from_token
    jwt_payload =
      JWT.decode(
        request.headers["Authorization"].split(" ")[1],
        ENV["DEVISE_JWT_SECRET_KEY"]
      ).first
    user_id = jwt_payload["sub"]
    user = User.find(user_id.to_s)
  end
end
