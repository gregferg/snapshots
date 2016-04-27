if @album
  json.extract! @album, :id, :photographer_id, :title, :description, :photos
else
  json.extract! album, :id, :photographer_id, :title, :description, :photos
end
