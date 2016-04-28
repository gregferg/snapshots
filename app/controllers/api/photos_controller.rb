class Api::PhotosController < ApplicationController
  def index
    @photos = Photo.where(album_id: params[:album_id]) #COULD BE WRONG
    render :index
  end

  def show
    @photo = Photo.find_by_id(params[:id])
    render :show
  end

  def create
    @photo = Photo.create(photo_params)
    if @photo.save
      render :show
    else
      @errors = @photo.errors.full_messages
      render "api/shared/error", status: 401
    end
  end

  def update
    @photo = Photo.find_by_id(params[:id])
    if @photo.update(photo_params)
      render :show
    else
      @errors = @photo.errors.full_messages
      render "api/shared/error", status: 401
    end
  end

  def destroy
    @photo = Photo.find_by_id(params[:id])
    @photo.destroy
    render :show
  end

  private
  def photo_params
    params[:photo].permit(:album_id, :title, :description, :photo_url)
  end
end
