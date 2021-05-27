class UsersController < ApplicationController
  before_action :find_user, only: [:show, :create]

  # # GET /users/1
  # # def show
  # #   find_user
  # #   render json: @user
  # # end

  # POST /users
  def create
    @user = User.new(user_params)
    find_user
    if @user.save
      render json: @user, status: :created, location: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  private
    def find_user
      @user = User.find_by_id(params[:id])
    end

    def user_params
      params.require(:user).permit(:email, :password_digest)
    end

end
