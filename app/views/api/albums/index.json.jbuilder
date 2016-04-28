json.array! @albums do |album|
  json.partial! 'album', album: album
end
