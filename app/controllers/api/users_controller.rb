class Api::UsersController < ApplicationController
  def index
    @user = User.find_by(username: params[:username])

    render "api/users/show"
  end
  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      render "api/users/show"
    else
      @errors = @user.errors.full_messages
      render "api/shared/error", status: 422
    end
  end

  private
  def user_params
    params[:user].permit(:username, :password)
  end
end
