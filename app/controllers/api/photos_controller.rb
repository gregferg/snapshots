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
    @photos = []
    photos = params[:photos]
    album_id = params[:album_id].to_i
    photos.each do |photo|
      photo_data = photo[1]
      photo_url = photo_data["url"]
      thumbnail_url = photo_data["thumbnail_url"]
      title = photo_data["title"]
      description = photo_data["description"]

      @photo = Photo.create(
        photo_url: photo_url,
        thumbnail_url: thumbnail_url,
        title: title,
        description: description,
        album_id: album_id
      )
      @photos.push(@photo)
    end

    @photo.album.adjust_thumbnail_url

    render :index
    # if @photo.save
    #   render :show
    # else
    #   @errors = @photo.errors.full_messages
    #   render "api/shared/error", status: 401
    # end
  end

  def update
    @photo = Photo.find_by_id(params[:id])
    if @photo.update(title: params[:title], description: params[:description])
      render :show
    else
      @errors = @photo.errors.full_messages
      render "api/shared/error", status: 401
    end
  end

  def destroy
    @photo = Photo.find_by_id(params[:id])
    album = @photo.album
    @photo.destroy
    album.adjust_thumbnail_url
    render :show
  end

  private
  def photo_params
    params[:photo].permit(:album_id, :title, :description, :photo_url, :thumbnail_url)
  end

  def photos_params
    params[:photos].permit(:album_id, :title, :description, :photo_url, :thumbnail_url)
  end
end
