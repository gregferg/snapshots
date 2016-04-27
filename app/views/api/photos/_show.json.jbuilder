if @photo
  json.extract! @photo, :id, :album_id, :photo_url, :title, :description
else
  json.extract! photo, :id, :album_id, :photo_url, :title, :description
end
