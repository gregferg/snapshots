json.array! @albums do |album|
  json.partial! 'show', album: album
end
