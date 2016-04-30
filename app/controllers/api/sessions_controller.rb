class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])

    if @user
      login(@user)
      render "api/users/show"
    else
      @errors = ['Either Username or Password is Incorrect']
      render "api/shared/error", status: 401
    end
  end

  def show
    if current_user
      @user = current_user
      render "api/users/show"
    else
      @errors = nil
      render "api/shared/error"
    end
  end

  def destroy
    logout
    render json: {message: "Logged out"}
  end
end
