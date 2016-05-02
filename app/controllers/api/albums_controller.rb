class Api::AlbumsController < ApplicationController
  def index
    user = User.includes(:albums).find_by(username: params[:username])
    puts user
    @albums = user.albums
    render :index
  end

  def show
    @album = Album.includes(:photos).find_by_id(params[:id])
    render :show
  end

  def create
    @album = Album.create(albums_params)
    if @album.save
      @photos = { photos: params[:album][:photos_to_upload] }
      @user = User.find(@album.user_id)
      render :create
    else
      @errors = @album.errors.full_messages
      render "api/shared/error", status: 401
    end
  end

  def update
    @album = Album.find_by_id(params[:id])
    if @album.update(albums_params)
      render :show
    else
      @errors = @album.errors
      render "api/shared/error", status: 401
    end
  end

  def destroy
    @album = Album.find_by_id(params[:id])
    @user = User.find(@album.user_id)
    @album.destroy
    @photos = {photos: nil}
    render :create
  end

  private
  def albums_params
    params[:album].permit(:user_id, :title, :description)
  end

end
