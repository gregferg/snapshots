json.array! @photos do |photo|
  json.partial! 'show', photo: photo
end
