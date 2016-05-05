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

  def update
    @user = User.find(params[:user][:id])

    @user.update(about_me_title: params[:user][:title], about_me_body: params[:user][:body])
    render "api/users/show"
  end

  private
  def user_params
    params[:user].permit(:username, :password)
  end
end
