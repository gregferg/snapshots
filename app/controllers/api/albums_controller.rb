class Api::AlbumsController < ApplicationController
  def index
    @albums = Album.where(photographer_id: params[:photographer_id]) #COULD BE WRONG
    render :index
  end

  def show
    @album = Album.includes(:photos).find_by_id(params[:id])
    render partial: 'api/albums/show'
  end

  def create
    @album = Album.create(albums_params)
    if @album.save
      render :show
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
    @album = Album.find_by_id(params[:album_id])
    @album.destroy
    render :show
  end

  private
  def albums_params
    params[:album].permit(:photographer_id, :title, :description)
  end

end
